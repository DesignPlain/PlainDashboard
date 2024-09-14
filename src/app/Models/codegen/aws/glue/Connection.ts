import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_ConnectionPhysicalConnectionRequirements,
  glue_ConnectionPhysicalConnectionRequirements_GetTypes,
} from "../types/glue_ConnectionPhysicalConnectionRequirements";

export interface ConnectionArgs {
  /*
Map of key-value pairs used as parameters for this connection. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/glue/latest/dg/connection-properties.html).

--Note:-- Some connection types require the `SparkProperties` property with a JSON document that contains the actual connection properties. For specific examples, refer to Example Usage.
*/
  connectionProperties?: Map<string, string>;

  // Type of the connection. Valid values: `AZURECOSMOS`, `AZURESQL`, `BIGQUERY`, `CUSTOM`, `JDBC`, `KAFKA`, `MARKETPLACE`, `MONGODB`, `NETWORK`, `OPENSEARCH`, `SNOWFLAKE`. Defaults to `JDBC`.
  connectionType?: string;

  // Description of the connection.
  description?: string;

  // List of criteria that can be used in selecting this connection.
  matchCriterias?: Array<string>;

  /*
Name of the connection.

The following arguments are optional:
*/
  name?: string;

  // Map of physical connection requirements, such as VPC and SecurityGroup. See `physical_connection_requirements` Block for details.
  physicalConnectionRequirements?: glue_ConnectionPhysicalConnectionRequirements;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.
  catalogId?: string;
}
export class Connection extends DS_Resource {
  // Description of the connection.
  public description?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Glue Connection.
  public arn?: string;

  // ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.
  public catalogId?: string;

  /*
Map of key-value pairs used as parameters for this connection. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/glue/latest/dg/connection-properties.html).

--Note:-- Some connection types require the `SparkProperties` property with a JSON document that contains the actual connection properties. For specific examples, refer to Example Usage.
*/
  public connectionProperties?: Map<string, string>;

  // Map of physical connection requirements, such as VPC and SecurityGroup. See `physical_connection_requirements` Block for details.
  public physicalConnectionRequirements?: glue_ConnectionPhysicalConnectionRequirements;

  // Type of the connection. Valid values: `AZURECOSMOS`, `AZURESQL`, `BIGQUERY`, `CUSTOM`, `JDBC`, `KAFKA`, `MARKETPLACE`, `MONGODB`, `NETWORK`, `OPENSEARCH`, `SNOWFLAKE`. Defaults to `JDBC`.
  public connectionType?: string;

  // List of criteria that can be used in selecting this connection.
  public matchCriterias?: Array<string>;

  /*
Name of the connection.

The following arguments are optional:
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "matchCriterias",
        "List of criteria that can be used in selecting this connection.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the connection.\n\nThe following arguments are optional:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "physicalConnectionRequirements",
        "Map of physical connection requirements, such as VPC and SecurityGroup. See `physical_connection_requirements` Block for details.",
        () => glue_ConnectionPhysicalConnectionRequirements_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "connectionProperties",
        "Map of key-value pairs used as parameters for this connection. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/glue/latest/dg/connection-properties.html).\n\n**Note:** Some connection types require the `SparkProperties` property with a JSON document that contains the actual connection properties. For specific examples, refer to Example Usage.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionType",
        "Type of the connection. Valid values: `AZURECOSMOS`, `AZURESQL`, `BIGQUERY`, `CUSTOM`, `JDBC`, `KAFKA`, `MARKETPLACE`, `MONGODB`, `NETWORK`, `OPENSEARCH`, `SNOWFLAKE`. Defaults to `JDBC`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the connection.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
