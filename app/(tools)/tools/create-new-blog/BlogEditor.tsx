"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import {
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCopy,
  FaItalic,
} from "react-icons/fa6";
import "@/style/blog.css";
import {
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdOutlineFormatAlignCenter,
} from "react-icons/md";
import { handleCopy } from "@/utils/functions/UniversalFunctions";

const BlogEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),

      Image,

      Placeholder.configure({
        placeholder: ({ editor, node }) => {
          const firstNode = editor.state.doc.content.firstChild;

          const isFirstNode = node === firstNode;
          const isEmpty =
            node.type.name === "paragraph" && node.content.size === 0;

          return isFirstNode && isEmpty
            ? "Start writing your blog..."
            : "";
        },
        showOnlyWhenEditable: true,
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: "",

    onCreate: ({ editor }) => {
      editor.commands.setTextAlign("left");
    },
  });

  if (!editor) return null;

  const buttonClass = `
    flex h-9 w-9 items-center justify-center
    rounded-lg border border-neutral-10
    bg-background-surface text-text-secondary
    transition-all duration-200
    hover:border-brand hover:bg-neutral-5 hover:text-brand
  `;

  return (
    <div className="blog-page w-full overflow-hidden rounded-2xl border border-neutral-10 bg-background-secondary p-4 sm:p-6 px-10">
      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass}
          title="Bold"
        >
          <FaBold />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass}
          title="Italic"
        >
          <FaItalic />
        </button>

        <select
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor
                .chain()
                .focus()
                .toggleHeading({
                  level: value as 1 | 2 | 3 | 4 | 5 | 6,
                })
                .run();
            }
          }}
          className="
            h-9 rounded-lg border border-neutral-10
            bg-background-surface px-3
            text-sm text-text-main
            outline-none transition
            focus:border-brand
          "
        >
          <option value="0">Paragraph</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
          <option value="5">H5</option>
          <option value="6">H6</option>
        </select>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className={buttonClass}
          title="Numbered List"
        >
          <MdFormatListNumbered />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className={buttonClass}
          title="Bullet List"
        >
          <MdFormatListBulleted />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
          className={buttonClass}
          title="Align Left"
        >
          <FaAlignLeft />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
          className={buttonClass}
          title="Align Center"
        >
          <MdOutlineFormatAlignCenter />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
          className={buttonClass}
          title="Align Right"
        >
          <FaAlignRight />
        </button>

        <button
          type="button"
          onClick={() => handleCopy(editor.getHTML())}
          className={buttonClass}
          title="Copy HTML"
        >
          <FaCopy />
        </button>
      </div>

      {/* Editor */}
      <div className="overflow-hidden rounded-xl border border-neutral-10 bg-background-surface">
        <EditorContent
          editor={editor}
          className="
            min-h-[180px]
            p-4
            text-left text-text-main
            outline-none
            break-words
            overflow-x-hidden
          "
        />
      </div>

      {/* Preview */}
      <div className="mt-5">
        <h2 className="mb-2 text-sm font-semibold text-text-main">
          Preview
        </h2>

        <div
          className="
            blog-page
            max-h-64
            overflow-y-auto overflow-x-hidden
            rounded-xl
            border border-neutral-10
            bg-background-surface
            p-4
            text-text-main
            break-words
          "
          dangerouslySetInnerHTML={{
            __html: editor.getHTML(),
          }}
        />
      </div>

      {/* HTML Preview */}
      <div className="mt-5">
        <h2 className="mb-2 text-sm font-semibold text-text-main">
          HTML
        </h2>

        <div className="overflow-hidden rounded-xl border border-neutral-10 bg-background-surface p-4">
          <pre
            className="
              max-w-full
              overflow-x-auto
              whitespace-pre-wrap
              break-words
              text-left
              text-xs
              leading-6
              text-text-secondary
            "
          >
            {editor.getHTML()}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;