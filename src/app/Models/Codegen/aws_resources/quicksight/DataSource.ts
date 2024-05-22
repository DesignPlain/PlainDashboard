import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DataSourceParameters,
  quicksight_DataSourceParameters_GetTypes,
} from "../types/quicksight_DataSourceParameters";
import {
  quicksight_DataSourceVpcConnectionProperties,
  quicksight_DataSourceVpcConnectionProperties_GetTypes,
} from "../types/quicksight_DataSourceVpcConnectionProperties";
import {
  quicksight_DataSourceCredentials,
  quicksight_DataSourceCredentials_GetTypes,
} from "../types/quicksight_DataSourceCredentials";
import {
  quicksight_DataSourcePermission,
  quicksight_DataSourcePermission_GetTypes,
} from "../types/quicksight_DataSourcePermission";
import {
  quicksight_DataSourceSslProperties,
  quicksight_DataSourceSslProperties_GetTypes,
} from "../types/quicksight_DataSourceSslProperties";

export interface DataSourceArgs {
  // Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source. See VPC Connection Properties below for more details.
  vpcConnectionProperties?: quicksight_DataSourceVpcConnectionProperties;

  // The credentials Amazon QuickSight uses to connect to your underlying source. Currently, only credentials based on user name and password are supported. See Credentials below for more details.
  credentials?: quicksight_DataSourceCredentials;

  // An identifier for the data source.
  dataSourceId?: string;

  // A name for the data source, maximum of 128 characters.
  name?: string;

  // A set of resource permissions on the data source. Maximum of 64 items. See Permission below for more details.
  permissions?: Array<quicksight_DataSourcePermission>;

  // Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source. See SSL Properties below for more details.
  sslProperties?: quicksight_DataSourceSslProperties;

  /*
The type of the data source. See the [AWS Documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSource.html#QS-CreateDataSource-request-Type) for the complete list of valid values.

The following arguments are optional:
*/
  type?: string;

  // The ID for the AWS account that the data source is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  awsAccountId?: string;

  // The parameters used to connect to this data source (exactly one).
  parameters?: quicksight_DataSourceParameters;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DataSource extends Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
The type of the data source. See the [AWS Documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSource.html#QS-CreateDataSource-request-Type) for the complete list of valid values.

The following arguments are optional:
*/
  public type?: string;

  // Amazon Resource Name (ARN) of the data source
  public arn?: string;

  // The credentials Amazon QuickSight uses to connect to your underlying source. Currently, only credentials based on user name and password are supported. See Credentials below for more details.
  public credentials?: quicksight_DataSourceCredentials;

  // A name for the data source, maximum of 128 characters.
  public name?: string;

  // The parameters used to connect to this data source (exactly one).
  public parameters?: quicksight_DataSourceParameters;

  // A set of resource permissions on the data source. Maximum of 64 items. See Permission below for more details.
  public permissions?: Array<quicksight_DataSourcePermission>;

  // Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source. See SSL Properties below for more details.
  public sslProperties?: quicksight_DataSourceSslProperties;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source. See VPC Connection Properties below for more details.
  public vpcConnectionProperties?: quicksight_DataSourceVpcConnectionProperties;

  // The ID for the AWS account that the data source is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  public awsAccountId?: string;

  // An identifier for the data source.
  public dataSourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "vpcConnectionProperties",
        "Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source. See VPC Connection Properties below for more details.",
        quicksight_DataSourceVpcConnectionProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "A set of resource permissions on the data source. Maximum of 64 items. See Permission below for more details.",
        quicksight_DataSourcePermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sslProperties",
        "Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source. See SSL Properties below for more details.",
        quicksight_DataSourceSslProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "parameters",
        "The parameters used to connect to this data source (exactly one).",
        quicksight_DataSourceParameters_GetTypes(),
        true,
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
        InputType.Object,
        "credentials",
        "The credentials Amazon QuickSight uses to connect to your underlying source. Currently, only credentials based on user name and password are supported. See Credentials below for more details.",
        quicksight_DataSourceCredentials_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataSourceId",
        "An identifier for the data source.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the data source, maximum of 128 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of the data source. See the [AWS Documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSource.html#QS-CreateDataSource-request-Type) for the complete list of valid values.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "The ID for the AWS account that the data source is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
        [],
        false,
        true,
      ),
    ];
  }
}
