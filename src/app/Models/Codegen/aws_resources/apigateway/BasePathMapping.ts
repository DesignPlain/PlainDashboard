import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BasePathMappingArgs {
  // Name of a specific deployment stage to expose at the given path. If omitted, callers may select any stage by including its name as a path element after the base path.
  stageName?: string;

  // Path segment that must be prepended to the path when accessing the API via this mapping. If omitted, the API is exposed at the root of the given domain.
  basePath?: string;

  // Already-registered domain name to connect the API to.
  domainName?: string;

  // ID of the API to connect.
  restApi?: string;
}
export class BasePathMapping extends Resource {
  // Name of a specific deployment stage to expose at the given path. If omitted, callers may select any stage by including its name as a path element after the base path.
  public stageName?: string;

  // Path segment that must be prepended to the path when accessing the API via this mapping. If omitted, the API is exposed at the root of the given domain.
  public basePath?: string;

  // Already-registered domain name to connect the API to.
  public domainName?: string;

  // ID of the API to connect.
  public restApi?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "stageName",
        "Name of a specific deployment stage to expose at the given path. If omitted, callers may select any stage by including its name as a path element after the base path.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "basePath",
        "Path segment that must be prepended to the path when accessing the API via this mapping. If omitted, the API is exposed at the root of the given domain.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Already-registered domain name to connect the API to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the API to connect.",
        [],
        true,
        false,
      ),
    ];
  }
}
