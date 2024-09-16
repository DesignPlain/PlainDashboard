import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface finspace_KxDataviewSegmentConfiguration {
  // The database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume.
  dbPaths?: Array<string>;

  // Enables on-demand caching on the selected database path when a particular file or a column of the database is accessed. When on demand caching is --True--, dataviews perform minimal loading of files on the filesystem as needed. When it is set to --False--, everything is cached. The default value is --False--.
  onDemand?: boolean;

  // The name of the volume that you want to attach to a dataview. This volume must be in the same availability zone as the dataview that you are attaching to.
  volumeName?: string;
}

export function finspace_KxDataviewSegmentConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dbPaths',
      'The database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'onDemand',
      'Enables on-demand caching on the selected database path when a particular file or a column of the database is accessed. When on demand caching is **True**, dataviews perform minimal loading of files on the filesystem as needed. When it is set to **False**, everything is cached. The default value is **False**.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'volumeName',
      'The name of the volume that you want to attach to a dataview. This volume must be in the same availability zone as the dataview that you are attaching to.',
      () => [],
      true,
      false,
    ),
  ];
}
