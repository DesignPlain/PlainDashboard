import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RuleGroupNamespaceArgs {
  // The name of the rule group namespace
  name?: string;

  // ID of the prometheus workspace the rule group namespace should be linked to
  workspaceId?: string;

  // the rule group namespace data that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html).
  data?: string;
}
export class RuleGroupNamespace extends Resource {
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
        "name",
        "The name of the rule group namespace",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "ID of the prometheus workspace the rule group namespace should be linked to",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "data",
        "the rule group namespace data that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html).",
        [],
        true,
        false,
      ),
    ];
  }
}
