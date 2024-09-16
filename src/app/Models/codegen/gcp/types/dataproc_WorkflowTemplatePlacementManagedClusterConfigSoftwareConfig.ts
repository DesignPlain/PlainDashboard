import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig {
  /*
The properties to set on daemon config files.

Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings:

- capacity-scheduler: `capacity-scheduler.xml`
- core: `core-site.xml`
- distcp: `distcp-default.xml`
- hdfs: `hdfs-site.xml`
- hive: `hive-site.xml`
- mapred: `mapred-site.xml`
- pig: `pig.properties`
- spark: `spark-defaults.conf`
- yarn: `yarn-site.xml`


For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
*/
  properties?: Map<string, string>;

  // The version of software inside the cluster. It must be one of the supported [Dataproc Versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the ["preview" version](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
  imageVersion?: string;

  // The set of components to activate on the cluster.
  optionalComponents?: Array<string>;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'properties',
      'The properties to set on daemon config files.\n\nProperty keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings:\n\n* capacity-scheduler: `capacity-scheduler.xml`\n* core: `core-site.xml`\n* distcp: `distcp-default.xml`\n* hdfs: `hdfs-site.xml`\n* hive: `hive-site.xml`\n* mapred: `mapred-site.xml`\n* pig: `pig.properties`\n* spark: `spark-defaults.conf`\n* yarn: `yarn-site.xml`\n\n\nFor more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties).',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'imageVersion',
      'The version of software inside the cluster. It must be one of the supported [Dataproc Versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the ["preview" version](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'optionalComponents',
      'The set of components to activate on the cluster.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
