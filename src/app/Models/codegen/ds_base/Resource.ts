import { DynamicUIProps } from "./DynamicUIProps";

export abstract class DS_Resource {}

export class ResourceProperty {
  constructor(
    public Description: string,
    public UIProps: DynamicUIProps[],
  ) {}
}
