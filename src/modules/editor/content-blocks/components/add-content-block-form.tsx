import { useRef } from "react";
import { useEditor } from "../../editor";
import { TContentBlockVariety } from "../types";
import { Input } from "../../../components.core";

export function AddContentBlockForm(props: { prefixPathIds: string[] }) {
  const { addContentBlock } = useEditor();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    addContentBlock({
      initContentBlock: {
        variety: TContentBlockVariety.Paragraph,
        content: inputRef.current.value,
      },
      prefixPathIds: props.prefixPathIds,
    });

    inputRef.current.value = "";
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input required type="text" ref={inputRef} />
      </form>
    </>
  );
}
