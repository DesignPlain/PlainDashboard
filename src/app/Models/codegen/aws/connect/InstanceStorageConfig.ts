import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_InstanceStorageConfigStorageConfig,
  connect_InstanceStorageConfigStorageConfig_GetTypes,
} from '../types/connect_InstanceStorageConfigStorageConfig';

export interface InstanceStorageConfigArgs {
  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // A valid resource type. Valid Values: `AGENT_EVENTS` | `ATTACHMENTS` | `CALL_RECORDINGS` | `CHAT_TRANSCRIPTS` | `CONTACT_EVALUATIONS` | `CONTACT_TRACE_RECORDS` | `MEDIA_STREAMS` | `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS` | `SCHEDULED_REPORTS` | `SCREEN_RECORDINGS`.
  resourceType?: string;

  // Specifies the storage configuration options for the Connect Instance. Documented below.
  storageConfig?: connect_InstanceStorageConfigStorageConfig;
}
export class InstanceStorageConfig extends DS_Resource {
  // A valid resource type. Valid Values: `AGENT_EVENTS` | `ATTACHMENTS` | `CALL_RECORDINGS` | `CHAT_TRANSCRIPTS` | `CONTACT_EVALUATIONS` | `CONTACT_TRACE_RECORDS` | `MEDIA_STREAMS` | `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS` | `SCHEDULED_REPORTS` | `SCREEN_RECORDINGS`.
  public resourceType?: string;

  // Specifies the storage configuration options for the Connect Instance. Documented below.
  public storageConfig?: connect_InstanceStorageConfigStorageConfig;

  // The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
  public associationId?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'Specifies the identifier of the hosting Amazon Connect Instance.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceType',
        'A valid resource type. Valid Values: `AGENT_EVENTS` | `ATTACHMENTS` | `CALL_RECORDINGS` | `CHAT_TRANSCRIPTS` | `CONTACT_EVALUATIONS` | `CONTACT_TRACE_RECORDS` | `MEDIA_STREAMS` | `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS` | `SCHEDULED_REPORTS` | `SCREEN_RECORDINGS`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'storageConfig',
        'Specifies the storage configuration options for the Connect Instance. Documented below.',
        () => connect_InstanceStorageConfigStorageConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
