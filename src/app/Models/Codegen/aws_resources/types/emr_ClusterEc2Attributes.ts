import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emr_ClusterEc2Attributes {
  // String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string.
  additionalSlaveSecurityGroups?: string;

  // Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes.
  emrManagedSlaveSecurityGroup?: string;

  // Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`.
  keyName?: string;

  // Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet.
  serviceAccessSecurityGroup?: string;

  // String containing a comma separated list of additional Amazon EC2 security group IDs for the master node.
  additionalMasterSecurityGroups?: string;

  // Identifier of the Amazon EC2 EMR-Managed security group for the master node.
  emrManagedMasterSecurityGroup?: string;

  // Instance Profile for EC2 instances of the cluster assume this role.
  instanceProfile?: string;

  // VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in an Amazon VPC.
  subnetId?: string;

  /*
List of VPC subnet id-s where you want the job flow to launch.  Amazon EMR identifies the best Availability Zone to launch instances according to your fleet specifications.

> --NOTE on EMR-Managed security groups:-- These security groups will have any missing inbound or outbound access rules added and maintained by AWS, to ensure proper communication between instances in a cluster. The EMR service will maintain these rules for groups provided in `emr_managed_master_security_group` and `emr_managed_slave_security_group`; attempts to remove the required rules may succeed, only for the EMR service to re-add them in a matter of minutes. This may cause this provider to fail to destroy an environment that contains an EMR cluster, because the EMR service does not revoke rules added on deletion, leaving a cyclic dependency between the security groups that prevents their deletion. To avoid this, use the `revoke_rules_on_delete` optional attribute for any Security Group used in `emr_managed_master_security_group` and `emr_managed_slave_security_group`. See [Amazon EMR-Managed Security Groups](http://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-man-sec-groups.html) for more information about the EMR-managed security group rules.
*/
  subnetIds?: Array<string>;
}

export function emr_ClusterEc2Attributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "emrManagedMasterSecurityGroup",
      "Identifier of the Amazon EC2 EMR-Managed security group for the master node.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceProfile",
      "Instance Profile for EC2 instances of the cluster assume this role.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in an Amazon VPC.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "additionalSlaveSecurityGroups",
      "String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyName",
      "Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessSecurityGroup",
      "Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "additionalMasterSecurityGroups",
      "String containing a comma separated list of additional Amazon EC2 security group IDs for the master node.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "emrManagedSlaveSecurityGroup",
      "Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "List of VPC subnet id-s where you want the job flow to launch.  Amazon EMR identifies the best Availability Zone to launch instances according to your fleet specifications.\n\n> **NOTE on EMR-Managed security groups:** These security groups will have any missing inbound or outbound access rules added and maintained by AWS, to ensure proper communication between instances in a cluster. The EMR service will maintain these rules for groups provided in `emr_managed_master_security_group` and `emr_managed_slave_security_group`; attempts to remove the required rules may succeed, only for the EMR service to re-add them in a matter of minutes. This may cause this provider to fail to destroy an environment that contains an EMR cluster, because the EMR service does not revoke rules added on deletion, leaving a cyclic dependency between the security groups that prevents their deletion. To avoid this, use the `revoke_rules_on_delete` optional attribute for any Security Group used in `emr_managed_master_security_group` and `emr_managed_slave_security_group`. See [Amazon EMR-Managed Security Groups](http://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-man-sec-groups.html) for more information about the EMR-managed security group rules.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
