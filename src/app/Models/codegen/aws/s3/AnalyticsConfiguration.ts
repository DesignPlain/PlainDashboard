import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_AnalyticsConfigurationFilter,
  s3_AnalyticsConfigurationFilter_GetTypes,
} from '../types/s3_AnalyticsConfigurationFilter';
import {
  s3_AnalyticsConfigurationStorageClassAnalysis,
  s3_AnalyticsConfigurationStorageClassAnalysis_GetTypes,
} from '../types/s3_AnalyticsConfigurationStorageClassAnalysis';

export interface AnalyticsConfigurationArgs {
  // Name of the bucket this analytics configuration is associated with.
  bucket?: string;

  // Object filtering that accepts a prefix, tags, or a logical AND of prefix and tags (documented below).
  filter?: s3_AnalyticsConfigurationFilter;

  // Unique identifier of the analytics configuration for the bucket.
  name?: string;

  // Configuration for the analytics data export (documented below).
  storageClassAnalysis?: s3_AnalyticsConfigurationStorageClassAnalysis;
}
export class AnalyticsConfiguration extends DS_Resource {
  // Configuration for the analytics data export (documented below).
  public storageClassAnalysis?: s3_AnalyticsConfigurationStorageClassAnalysis;

  // Name of the bucket this analytics configuration is associated with.
  public bucket?: string;

  // Object filtering that accepts a prefix, tags, or a logical AND of prefix and tags (documented below).
  public filter?: s3_AnalyticsConfigurationFilter;

  // Unique identifier of the analytics configuration for the bucket.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the bucket this analytics configuration is associated with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'filter',
        'Object filtering that accepts a prefix, tags, or a logical AND of prefix and tags (documented below).',
        () => s3_AnalyticsConfigurationFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique identifier of the analytics configuration for the bucket.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'storageClassAnalysis',
        'Configuration for the analytics data export (documented below).',
        () => s3_AnalyticsConfigurationStorageClassAnalysis_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
