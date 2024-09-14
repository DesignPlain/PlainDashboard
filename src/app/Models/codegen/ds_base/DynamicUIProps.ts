import { InputType } from "./InputType";

export class DynamicUIProps {
  constructor(
    public type: InputType,
    public val: string,
    public description: string,
    public members: () => DynamicUIProps[] = () => [],
    public isRequired: boolean = false,
    public willReplaceOnChanges: boolean = false,
  ) {}
}
