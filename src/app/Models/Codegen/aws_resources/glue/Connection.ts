import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_ConnectionPhysicalConnectionRequirements,
  glue_ConnectionPhysicalConnectionRequirements_GetTypes,
} from "../types/glue_ConnectionPhysicalConnectionRequirements";

export interface ConnectionArgs {
  // A list of criteria that can be used in selecting this connection.
  matchCriterias?: Array<string>;

  // The name of the connection.
  name?: string;

  // A map of physical connection requirements, such as VPC and SecurityGroup. Defined below.
  physicalConnectionRequirements?: glue_ConnectionPhysicalConnectionRequirements;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.
  catalogId?: string;

  // A map of key-value pairs used as parameters for this connection.
  connectionProperties?: Map<string, string>;

  // The type of the connection. Supported are: `CUSTOM`, `JDBC`, `KAFKA`, `MARKETPLACE`, `MONGODB`, and `NETWORK`. Defaults to `JDBC`.
  connectionType?: string;

  // Description of the connection.
  description?: string;
}
export class Connection extends Resource {
  // The ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.
  public catalogId?: string;

  // A map of key-value pairs used as parameters for this connection.
  public connectionProperties?: Map<string, string>;

  // Description of the connection.
  public description?: string;

  // A map of physical connection requirements, such as VPC and SecurityGroup. Defined below.
  public physicalConnectionRequirements?: glue_ConnectionPhysicalConnectionRequirements;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Glue Connection.
  public arn?: string;

  // The type of the connection. Supported are: `CUSTOM`, `JDBC`, `KAFKA`, `MARKETPLACE`, `MONGODB`, and `NETWORK`. Defaults to `JDBC`.
  public connectionType?: string;

  // A list of criteria that can be used in selecting this connection.
  public matchCriterias?: Array<string>;

  // The name of the connection.
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "connectionType",
        "The type of the connection. Supported are: `CUSTOM`, `JDBC`, `KAFKA`, `MARKETPLACE`, `MONGODB`, and `NETWORK`. Defaults to `JDBC`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the connection.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "matchCriterias",
        "A list of criteria that can be used in selecting this connection.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the connection.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "physicalConnectionRequirements",
        "A map of physical connection requirements, such as VPC and SecurityGroup. Defined below.",
        glue_ConnectionPhysicalConnectionRequirements_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "The ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "connectionProperties",
        "A map of key-value pairs used as parameters for this connection.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
