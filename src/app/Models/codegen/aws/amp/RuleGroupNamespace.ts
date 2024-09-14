import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RuleGroupNamespaceArgs {
  // the rule group namespace data that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html).
  data?: string;

  // The name of the rule group namespace
  name?: string;

  // ID of the prometheus workspace the rule group namespace should be linked to
  workspaceId?: string;
}
export class RuleGroupNamespace extends DS_Resource {
  // the rule group namespace data that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html).
  public data?: string;

  // The name of the rule group namespace
  public name?: string;

  // ID of the prometheus workspace the rule group namespace should be linked to
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "data",
        "the rule group namespace data that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule group namespace",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "ID of the prometheus workspace the rule group namespace should be linked to",
        () => [],
        true,
        true,
      ),
    ];
  }
}
