import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface organizations_getFoldersFolder {
  // The timestamp of when the folder was requested to be deleted (if applicable)
  deleteTime?: string;

  // The display name of the folder
  displayName?: string;

  // Entity tag identifier of the folder
  etag?: string;

  // The id of the folder
  name?: string;

  // The parent id of the folder
  parent?: string;

  // The lifecycle state of the folder
  state?: string;

  // The timestamp of when the folder was last modified
  updateTime?: string;

  // The timestamp of when the folder was created
  createTime?: string;
}

export function organizations_getFoldersFolder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deleteTime',
      'The timestamp of when the folder was requested to be deleted (if applicable)',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The display name of the folder',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'etag',
      'Entity tag identifier of the folder',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The id of the folder',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'parent',
      'The parent id of the folder',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'The lifecycle state of the folder',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'updateTime',
      'The timestamp of when the folder was last modified',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'createTime',
      'The timestamp of when the folder was created',
      () => [],
      true,
      false,
    ),
  ];
}
