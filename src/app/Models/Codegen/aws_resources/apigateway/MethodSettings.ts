import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigateway_MethodSettingsSettings,
  apigateway_MethodSettingsSettings_GetTypes,
} from "../types/apigateway_MethodSettingsSettings";

export interface MethodSettingsArgs {
  // ID of the REST API
  restApi?: string;

  // Settings block, see below.
  settings?: apigateway_MethodSettingsSettings;

  // Name of the stage
  stageName?: string;

  // Method path defined as `{resource_path}/{http_method}` for an individual method override, or `-/-` for overriding all methods in the stage. Ensure to trim any leading forward slashes in the path (e.g., `trimprefix(aws_api_gateway_resource.example.path, "/")`).
  methodPath?: string;
}
export class MethodSettings extends Resource {
  // Method path defined as `{resource_path}/{http_method}` for an individual method override, or `-/-` for overriding all methods in the stage. Ensure to trim any leading forward slashes in the path (e.g., `trimprefix(aws_api_gateway_resource.example.path, "/")`).
  public methodPath?: string;

  // ID of the REST API
  public restApi?: string;

  // Settings block, see below.
  public settings?: apigateway_MethodSettingsSettings;

  // Name of the stage
  public stageName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "methodPath",
        'Method path defined as `{resource_path}/{http_method}` for an individual method override, or `*/*` for overriding all methods in the stage. Ensure to trim any leading forward slashes in the path (e.g., `trimprefix(aws_api_gateway_resource.example.path, "/")`).',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the REST API",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "settings",
        "Settings block, see below.",
        apigateway_MethodSettingsSettings_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stageName",
        "Name of the stage",
        [],
        true,
        true,
      ),
    ];
  }
}
