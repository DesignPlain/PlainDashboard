import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_DataSetRowLevelPermissionTagConfiguration,
  quicksight_DataSetRowLevelPermissionTagConfiguration_GetTypes,
} from '../types/quicksight_DataSetRowLevelPermissionTagConfiguration';
import {
  quicksight_DataSetDataSetUsageConfiguration,
  quicksight_DataSetDataSetUsageConfiguration_GetTypes,
} from '../types/quicksight_DataSetDataSetUsageConfiguration';
import {
  quicksight_DataSetColumnLevelPermissionRule,
  quicksight_DataSetColumnLevelPermissionRule_GetTypes,
} from '../types/quicksight_DataSetColumnLevelPermissionRule';
import {
  quicksight_DataSetRowLevelPermissionDataSet,
  quicksight_DataSetRowLevelPermissionDataSet_GetTypes,
} from '../types/quicksight_DataSetRowLevelPermissionDataSet';
import {
  quicksight_DataSetColumnGroup,
  quicksight_DataSetColumnGroup_GetTypes,
} from '../types/quicksight_DataSetColumnGroup';
import {
  quicksight_DataSetOutputColumn,
  quicksight_DataSetOutputColumn_GetTypes,
} from '../types/quicksight_DataSetOutputColumn';
import {
  quicksight_DataSetLogicalTableMap,
  quicksight_DataSetLogicalTableMap_GetTypes,
} from '../types/quicksight_DataSetLogicalTableMap';
import {
  quicksight_DataSetFieldFolder,
  quicksight_DataSetFieldFolder_GetTypes,
} from '../types/quicksight_DataSetFieldFolder';
import {
  quicksight_DataSetPermission,
  quicksight_DataSetPermission_GetTypes,
} from '../types/quicksight_DataSetPermission';
import {
  quicksight_DataSetPhysicalTableMap,
  quicksight_DataSetPhysicalTableMap_GetTypes,
} from '../types/quicksight_DataSetPhysicalTableMap';
import {
  quicksight_DataSetRefreshProperties,
  quicksight_DataSetRefreshProperties_GetTypes,
} from '../types/quicksight_DataSetRefreshProperties';

export interface DataSetArgs {
  // AWS account ID.
  awsAccountId?: string;

  // Configures the combination and transformation of the data from the physical tables. Maximum of 1 entry. See logical_table_map.
  logicalTableMaps?: Array<quicksight_DataSetLogicalTableMap>;

  // Display name for the dataset.
  name?: string;

  // The refresh properties for the data set. --NOTE--: Only valid when `import_mode` is set to `SPICE`. See refresh_properties.
  refreshProperties?: quicksight_DataSetRefreshProperties;

  // The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only. See row_level_permission_tag_configuration.
  rowLevelPermissionTagConfiguration?: quicksight_DataSetRowLevelPermissionTagConfiguration;

  // The usage configuration to apply to child datasets that reference this dataset as a source. See data_set_usage_configuration.
  dataSetUsageConfiguration?: quicksight_DataSetDataSetUsageConfiguration;

  // A set of 1 or more definitions of a [ColumnLevelPermissionRule](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html). See column_level_permission_rules.
  columnLevelPermissionRules?: Array<quicksight_DataSetColumnLevelPermissionRule>;

  // Identifier for the data set.
  dataSetId?: string;

  // The folder that contains fields and nested subfolders for your dataset. See field_folders.
  fieldFolders?: Array<quicksight_DataSetFieldFolder>;

  // Indicates whether you want to import the data into SPICE. Valid values are `SPICE` and `DIRECT_QUERY`.
  importMode?: string;

  // A set of resource permissions on the data source. Maximum of 64 items. See permissions.
  permissions?: Array<quicksight_DataSetPermission>;

  // The row-level security configuration for the data that you want to create. See row_level_permission_data_set.
  rowLevelPermissionDataSet?: quicksight_DataSetRowLevelPermissionDataSet;

  // Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported. See column_groups.
  columnGroups?: Array<quicksight_DataSetColumnGroup>;

  /*
Declares the physical tables that are available in the underlying data sources. See physical_table_map.

The following arguments are optional:
*/
  physicalTableMaps?: Array<quicksight_DataSetPhysicalTableMap>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DataSet extends DS_Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Identifier for the data set.
  public dataSetId?: string;

  //
  public outputColumns?: Array<quicksight_DataSetOutputColumn>;

  // The row-level security configuration for the data that you want to create. See row_level_permission_data_set.
  public rowLevelPermissionDataSet?: quicksight_DataSetRowLevelPermissionDataSet;

  // The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only. See row_level_permission_tag_configuration.
  public rowLevelPermissionTagConfiguration?: quicksight_DataSetRowLevelPermissionTagConfiguration;

  // The folder that contains fields and nested subfolders for your dataset. See field_folders.
  public fieldFolders?: Array<quicksight_DataSetFieldFolder>;

  // Indicates whether you want to import the data into SPICE. Valid values are `SPICE` and `DIRECT_QUERY`.
  public importMode?: string;

  // Configures the combination and transformation of the data from the physical tables. Maximum of 1 entry. See logical_table_map.
  public logicalTableMaps?: Array<quicksight_DataSetLogicalTableMap>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // AWS account ID.
  public awsAccountId?: string;

  // The usage configuration to apply to child datasets that reference this dataset as a source. See data_set_usage_configuration.
  public dataSetUsageConfiguration?: quicksight_DataSetDataSetUsageConfiguration;

  // A set of resource permissions on the data source. Maximum of 64 items. See permissions.
  public permissions?: Array<quicksight_DataSetPermission>;

  // The refresh properties for the data set. --NOTE--: Only valid when `import_mode` is set to `SPICE`. See refresh_properties.
  public refreshProperties?: quicksight_DataSetRefreshProperties;

  /*
Declares the physical tables that are available in the underlying data sources. See physical_table_map.

The following arguments are optional:
*/
  public physicalTableMaps?: Array<quicksight_DataSetPhysicalTableMap>;

  // Amazon Resource Name (ARN) of the data set.
  public arn?: string;

  // Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported. See column_groups.
  public columnGroups?: Array<quicksight_DataSetColumnGroup>;

  // A set of 1 or more definitions of a [ColumnLevelPermissionRule](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html). See column_level_permission_rules.
  public columnLevelPermissionRules?: Array<quicksight_DataSetColumnLevelPermissionRule>;

  // Display name for the dataset.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'awsAccountId',
        'AWS account ID.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Display name for the dataset.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'columnGroups',
        'Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported. See column_groups.',
        () => quicksight_DataSetColumnGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'physicalTableMaps',
        'Declares the physical tables that are available in the underlying data sources. See physical_table_map.\n\nThe following arguments are optional:',
        () => quicksight_DataSetPhysicalTableMap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'logicalTableMaps',
        'Configures the combination and transformation of the data from the physical tables. Maximum of 1 entry. See logical_table_map.',
        () => quicksight_DataSetLogicalTableMap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'refreshProperties',
        'The refresh properties for the data set. **NOTE**: Only valid when `import_mode` is set to `SPICE`. See refresh_properties.',
        () => quicksight_DataSetRefreshProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'columnLevelPermissionRules',
        'A set of 1 or more definitions of a [ColumnLevelPermissionRule](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html). See column_level_permission_rules.',
        () => quicksight_DataSetColumnLevelPermissionRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'fieldFolders',
        'The folder that contains fields and nested subfolders for your dataset. See field_folders.',
        () => quicksight_DataSetFieldFolder_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'rowLevelPermissionDataSet',
        'The row-level security configuration for the data that you want to create. See row_level_permission_data_set.',
        () => quicksight_DataSetRowLevelPermissionDataSet_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'rowLevelPermissionTagConfiguration',
        'The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only. See row_level_permission_tag_configuration.',
        () => quicksight_DataSetRowLevelPermissionTagConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dataSetUsageConfiguration',
        'The usage configuration to apply to child datasets that reference this dataset as a source. See data_set_usage_configuration.',
        () => quicksight_DataSetDataSetUsageConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSetId',
        'Identifier for the data set.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'importMode',
        'Indicates whether you want to import the data into SPICE. Valid values are `SPICE` and `DIRECT_QUERY`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'permissions',
        'A set of resource permissions on the data source. Maximum of 64 items. See permissions.',
        () => quicksight_DataSetPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
