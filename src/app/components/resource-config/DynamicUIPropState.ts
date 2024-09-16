import { InputType } from 'src/app/Models/codegen/ds_base/InputType';

export class DynamicUIPropState {
  constructor(
    public type: InputType,
    public val: any,
    public description: string,
    public members: Map<string, DynamicUIPropState> = new Map(),
    public isRequired: boolean = false,
    public willReplaceOnChanges: boolean = false,
  ) {}
}
