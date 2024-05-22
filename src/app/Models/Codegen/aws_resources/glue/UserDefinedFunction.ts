import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_UserDefinedFunctionResourceUri,
  glue_UserDefinedFunctionResourceUri_GetTypes,
} from "../types/glue_UserDefinedFunctionResourceUri";

export interface UserDefinedFunctionArgs {
  // The configuration block for Resource URIs. See resource uris below for more details.
  resourceUris?: Array<glue_UserDefinedFunctionResourceUri>;

  // ID of the Glue Catalog to create the function in. If omitted, this defaults to the AWS Account ID.
  catalogId?: string;

  // The Java class that contains the function code.
  className?: string;

  // The name of the Database to create the Function.
  databaseName?: string;

  // The name of the function.
  name?: string;

  // The owner of the function.
  ownerName?: string;

  // The owner type. can be one of `USER`, `ROLE`, and `GROUP`.
  ownerType?: string;
}
export class UserDefinedFunction extends Resource {
  // ID of the Glue Catalog to create the function in. If omitted, this defaults to the AWS Account ID.
  public catalogId?: string;

  // The Java class that contains the function code.
  public className?: string;

  // The time at which the function was created.
  public createTime?: string;

  // The configuration block for Resource URIs. See resource uris below for more details.
  public resourceUris?: Array<glue_UserDefinedFunctionResourceUri>;

  // The ARN of the Glue User Defined Function.
  public arn?: string;

  // The name of the Database to create the Function.
  public databaseName?: string;

  // The name of the function.
  public name?: string;

  // The owner of the function.
  public ownerName?: string;

  // The owner type. can be one of `USER`, `ROLE`, and `GROUP`.
  public ownerType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "className",
        "The Java class that contains the function code.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "The name of the Database to create the Function.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the function.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerName",
        "The owner of the function.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerType",
        "The owner type. can be one of `USER`, `ROLE`, and `GROUP`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "resourceUris",
        "The configuration block for Resource URIs. See resource uris below for more details.",
        glue_UserDefinedFunctionResourceUri_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "ID of the Glue Catalog to create the function in. If omitted, this defaults to the AWS Account ID.",
        [],
        false,
        true,
      ),
    ];
  }
}
