import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AiEndpointIamPolicyArgs {
  //
  endpoint?: string;

  //
  location?: string;

  //
  policyData?: string;

  //
  project?: string;
}
export class AiEndpointIamPolicy extends Resource {
  //
  public endpoint?: string;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public policyData?: string;

  //
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "endpoint", "", [], true, true),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
