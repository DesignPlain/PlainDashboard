import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface MacsecKeyAssociationArgs {
  // The MAC Security (MACsec) CAK to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `ckn`.
  cak?: string;

  // The MAC Security (MACsec) CKN to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `cak`.
  ckn?: string;

  // The ID of the dedicated Direct Connect connection. The connection must be a dedicated connection in the `AVAILABLE` state.
  connectionId?: string;

  /*
The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection.

> --Note:-- `ckn` and `cak` are mutually exclusive with `secret_arn` - these arguments cannot be used together. If you use `ckn` and `cak`, you should not use `secret_arn`. If you use the `secret_arn` argument to reference an existing MAC Security (MACSec) secret key, you should not use `ckn` or `cak`.
*/
  secretArn?: string;
}
export class MacsecKeyAssociation extends DS_Resource {
  // The MAC Security (MACsec) CAK to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `ckn`.
  public cak?: string;

  // The MAC Security (MACsec) CKN to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `cak`.
  public ckn?: string;

  // The ID of the dedicated Direct Connect connection. The connection must be a dedicated connection in the `AVAILABLE` state.
  public connectionId?: string;

  /*
The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection.

> --Note:-- `ckn` and `cak` are mutually exclusive with `secret_arn` - these arguments cannot be used together. If you use `ckn` and `cak`, you should not use `secret_arn`. If you use the `secret_arn` argument to reference an existing MAC Security (MACSec) secret key, you should not use `ckn` or `cak`.
*/
  public secretArn?: string;

  // The date in UTC format that the MAC Security (MACsec) secret key takes effect.
  public startOn?: string;

  // The state of the MAC Security (MACsec) secret key. The possible values are: associating, associated, disassociating, disassociated. See [MacSecKey](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_MacSecKey.html#DX-Type-MacSecKey-state) for descriptions of each state.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'cak',
        'The MAC Security (MACsec) CAK to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `ckn`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ckn',
        'The MAC Security (MACsec) CKN to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `cak`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'The ID of the dedicated Direct Connect connection. The connection must be a dedicated connection in the `AVAILABLE` state.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'secretArn',
        'The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection.\n\n> **Note:** `ckn` and `cak` are mutually exclusive with `secret_arn` - these arguments cannot be used together. If you use `ckn` and `cak`, you should not use `secret_arn`. If you use the `secret_arn` argument to reference an existing MAC Security (MACSec) secret key, you should not use `ckn` or `cak`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
