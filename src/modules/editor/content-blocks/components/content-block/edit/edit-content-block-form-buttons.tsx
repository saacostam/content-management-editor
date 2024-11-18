import { Button } from "../../../../../components.core";
import { CheckIcon } from "../../../../../icons.core";

export function EditContentBlockFormButtons() {
  return (
    <div className="flex justify-center py-4">
      <Button className="w-48 relative" variant="accent" type="submit">
        <CheckIcon className="size-6 absolute left-1" />
        <span>Save</span>
      </Button>
    </div>
  );
}
