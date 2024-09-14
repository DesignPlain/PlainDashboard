import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WebAclAssociationArgs {
  // ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage.
  resourceArn?: string;

  // The ID of the WAF Regional WebACL to create an association.
  webAclId?: string;
}
export class WebAclAssociation extends DS_Resource {
  // ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage.
  public resourceArn?: string;

  // The ID of the WAF Regional WebACL to create an association.
  public webAclId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "webAclId",
        "The ID of the WAF Regional WebACL to create an association.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
