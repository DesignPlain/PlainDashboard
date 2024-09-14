import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowMetadataCatalogConfig,
  appflow_FlowMetadataCatalogConfig_GetTypes,
} from "../types/appflow_FlowMetadataCatalogConfig";
import {
  appflow_FlowSourceFlowConfig,
  appflow_FlowSourceFlowConfig_GetTypes,
} from "../types/appflow_FlowSourceFlowConfig";
import {
  appflow_FlowTask,
  appflow_FlowTask_GetTypes,
} from "../types/appflow_FlowTask";
import {
  appflow_FlowTriggerConfig,
  appflow_FlowTriggerConfig_GetTypes,
} from "../types/appflow_FlowTriggerConfig";
import {
  appflow_FlowDestinationFlowConfig,
  appflow_FlowDestinationFlowConfig_GetTypes,
} from "../types/appflow_FlowDestinationFlowConfig";

export interface FlowArgs {
  // A Catalog that determines the configuration that Amazon AppFlow uses when it catalogs the data that’s transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.
  metadataCatalogConfig?: appflow_FlowMetadataCatalogConfig;

  // The Source Flow Config that controls how Amazon AppFlow retrieves data from the source connector.
  sourceFlowConfig?: appflow_FlowSourceFlowConfig;

  // A Task that Amazon AppFlow performs while transferring the data in the flow run.
  tasks?: Array<appflow_FlowTask>;

  // A Trigger that determine how and when the flow runs.
  triggerConfig?: appflow_FlowTriggerConfig;

  // A Destination Flow Config that controls how Amazon AppFlow places data in the destination connector.
  destinationFlowConfigs?: Array<appflow_FlowDestinationFlowConfig>;

  // ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
  kmsArn?: string;

  // Name of the flow.
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description of the flow you want to create.
  description?: string;
}
export class Flow extends DS_Resource {
  // Description of the flow you want to create.
  public description?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A Trigger that determine how and when the flow runs.
  public triggerConfig?: appflow_FlowTriggerConfig;

  // ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
  public kmsArn?: string;

  // A Catalog that determines the configuration that Amazon AppFlow uses when it catalogs the data that’s transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.
  public metadataCatalogConfig?: appflow_FlowMetadataCatalogConfig;

  // Name of the flow.
  public name?: string;

  // The Source Flow Config that controls how Amazon AppFlow retrieves data from the source connector.
  public sourceFlowConfig?: appflow_FlowSourceFlowConfig;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Flow's ARN.
  public arn?: string;

  // A Destination Flow Config that controls how Amazon AppFlow places data in the destination connector.
  public destinationFlowConfigs?: Array<appflow_FlowDestinationFlowConfig>;

  // The current status of the flow.
  public flowStatus?: string;

  // A Task that Amazon AppFlow performs while transferring the data in the flow run.
  public tasks?: Array<appflow_FlowTask>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "metadataCatalogConfig",
        "A Catalog that determines the configuration that Amazon AppFlow uses when it catalogs the data that’s transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
        () => appflow_FlowMetadataCatalogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tasks",
        "A Task that Amazon AppFlow performs while transferring the data in the flow run.",
        () => appflow_FlowTask_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "triggerConfig",
        "A Trigger that determine how and when the flow runs.",
        () => appflow_FlowTriggerConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinationFlowConfigs",
        "A Destination Flow Config that controls how Amazon AppFlow places data in the destination connector.",
        () => appflow_FlowDestinationFlowConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceFlowConfig",
        "The Source Flow Config that controls how Amazon AppFlow retrieves data from the source connector.",
        () => appflow_FlowSourceFlowConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsArn",
        "ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the flow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the flow you want to create.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
