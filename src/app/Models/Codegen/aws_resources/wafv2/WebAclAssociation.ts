import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WebAclAssociationArgs {
  // The Amazon Resource Name (ARN) of the resource to associate with the web ACL. This must be an ARN of an Application Load Balancer, an Amazon API Gateway stage (REST only, HTTP is unsupported), an Amazon Cognito User Pool, an Amazon AppSync GraphQL API, an Amazon App Runner service, or an Amazon Verified Access instance.
  resourceArn?: string;

  // The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.
  webAclArn?: string;
}
export class WebAclAssociation extends Resource {
  // The Amazon Resource Name (ARN) of the resource to associate with the web ACL. This must be an ARN of an Application Load Balancer, an Amazon API Gateway stage (REST only, HTTP is unsupported), an Amazon Cognito User Pool, an Amazon AppSync GraphQL API, an Amazon App Runner service, or an Amazon Verified Access instance.
  public resourceArn?: string;

  // The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.
  public webAclArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "The Amazon Resource Name (ARN) of the resource to associate with the web ACL. This must be an ARN of an Application Load Balancer, an Amazon API Gateway stage (REST only, HTTP is unsupported), an Amazon Cognito User Pool, an Amazon AppSync GraphQL API, an Amazon App Runner service, or an Amazon Verified Access instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "webAclArn",
        "The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.",
        [],
        true,
        true,
      ),
    ];
  }
}
