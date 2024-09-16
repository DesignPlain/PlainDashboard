import { ResourceType } from './ResourceType';
import { DS_Resource, ResourceProperty } from '../ds_base/Resource';
import { DynamicUIProps } from '../ds_base/DynamicUIProps';
import { AccessLevel as ACCESSCONTEXTMANAGER_AccessLevel } from './accesscontextmanager/AccessLevel';
import { AccessLevelCondition as ACCESSCONTEXTMANAGER_AccessLevelCondition } from './accesscontextmanager/AccessLevelCondition';
import { AccessLevels as ACCESSCONTEXTMANAGER_AccessLevels } from './accesscontextmanager/AccessLevels';
import { AccessPolicy as ACCESSCONTEXTMANAGER_AccessPolicy } from './accesscontextmanager/AccessPolicy';
import { AccessPolicyIamBinding as ACCESSCONTEXTMANAGER_AccessPolicyIamBinding } from './accesscontextmanager/AccessPolicyIamBinding';
import { AccessPolicyIamMember as ACCESSCONTEXTMANAGER_AccessPolicyIamMember } from './accesscontextmanager/AccessPolicyIamMember';
import { AccessPolicyIamPolicy as ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy } from './accesscontextmanager/AccessPolicyIamPolicy';
import { AuthorizedOrgsDesc as ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc } from './accesscontextmanager/AuthorizedOrgsDesc';
import { EgressPolicy as ACCESSCONTEXTMANAGER_EgressPolicy } from './accesscontextmanager/EgressPolicy';
import { GcpUserAccessBinding as ACCESSCONTEXTMANAGER_GcpUserAccessBinding } from './accesscontextmanager/GcpUserAccessBinding';
import { IngressPolicy as ACCESSCONTEXTMANAGER_IngressPolicy } from './accesscontextmanager/IngressPolicy';
import { ServicePerimeter as ACCESSCONTEXTMANAGER_ServicePerimeter } from './accesscontextmanager/ServicePerimeter';
import { ServicePerimeterEgressPolicy as ACCESSCONTEXTMANAGER_ServicePerimeterEgressPolicy } from './accesscontextmanager/ServicePerimeterEgressPolicy';
import { ServicePerimeterIngressPolicy as ACCESSCONTEXTMANAGER_ServicePerimeterIngressPolicy } from './accesscontextmanager/ServicePerimeterIngressPolicy';
import { ServicePerimeterResource as ACCESSCONTEXTMANAGER_ServicePerimeterResource } from './accesscontextmanager/ServicePerimeterResource';
import { ServicePerimeters as ACCESSCONTEXTMANAGER_ServicePerimeters } from './accesscontextmanager/ServicePerimeters';
import { Domain as ACTIVEDIRECTORY_Domain } from './activedirectory/Domain';
import { DomainTrust as ACTIVEDIRECTORY_DomainTrust } from './activedirectory/DomainTrust';
import { Peering as ACTIVEDIRECTORY_Peering } from './activedirectory/Peering';
import { Backup as ALLOYDB_Backup } from './alloydb/Backup';
import { Cluster as ALLOYDB_Cluster } from './alloydb/Cluster';
import { Instance as ALLOYDB_Instance } from './alloydb/Instance';
import { User as ALLOYDB_User } from './alloydb/User';
import { Api as APIGATEWAY_Api } from './apigateway/Api';
import { ApiConfig as APIGATEWAY_ApiConfig } from './apigateway/ApiConfig';
import { ApiConfigIamBinding as APIGATEWAY_ApiConfigIamBinding } from './apigateway/ApiConfigIamBinding';
import { ApiConfigIamMember as APIGATEWAY_ApiConfigIamMember } from './apigateway/ApiConfigIamMember';
import { ApiConfigIamPolicy as APIGATEWAY_ApiConfigIamPolicy } from './apigateway/ApiConfigIamPolicy';
import { ApiIamBinding as APIGATEWAY_ApiIamBinding } from './apigateway/ApiIamBinding';
import { ApiIamMember as APIGATEWAY_ApiIamMember } from './apigateway/ApiIamMember';
import { ApiIamPolicy as APIGATEWAY_ApiIamPolicy } from './apigateway/ApiIamPolicy';
import { Gateway as APIGATEWAY_Gateway } from './apigateway/Gateway';
import { GatewayIamBinding as APIGATEWAY_GatewayIamBinding } from './apigateway/GatewayIamBinding';
import { GatewayIamMember as APIGATEWAY_GatewayIamMember } from './apigateway/GatewayIamMember';
import { GatewayIamPolicy as APIGATEWAY_GatewayIamPolicy } from './apigateway/GatewayIamPolicy';
import { AddonsConfig as APIGEE_AddonsConfig } from './apigee/AddonsConfig';
import { EndpointAttachment as APIGEE_EndpointAttachment } from './apigee/EndpointAttachment';
import { EnvGroup as APIGEE_EnvGroup } from './apigee/EnvGroup';
import { EnvGroupAttachment as APIGEE_EnvGroupAttachment } from './apigee/EnvGroupAttachment';
import { Environment as APIGEE_Environment } from './apigee/Environment';
import { EnvironmentIamBinding as APIGEE_EnvironmentIamBinding } from './apigee/EnvironmentIamBinding';
import { EnvironmentIamMember as APIGEE_EnvironmentIamMember } from './apigee/EnvironmentIamMember';
import { EnvironmentIamPolicy as APIGEE_EnvironmentIamPolicy } from './apigee/EnvironmentIamPolicy';
import { EnvKeystore as APIGEE_EnvKeystore } from './apigee/EnvKeystore';
import { EnvReferences as APIGEE_EnvReferences } from './apigee/EnvReferences';
import { Flowhook as APIGEE_Flowhook } from './apigee/Flowhook';
import { Instance as APIGEE_Instance } from './apigee/Instance';
import { InstanceAttachment as APIGEE_InstanceAttachment } from './apigee/InstanceAttachment';
import { KeystoresAliasesKeyCertFile as APIGEE_KeystoresAliasesKeyCertFile } from './apigee/KeystoresAliasesKeyCertFile';
import { KeystoresAliasesPkcs12 as APIGEE_KeystoresAliasesPkcs12 } from './apigee/KeystoresAliasesPkcs12';
import { KeystoresAliasesSelfSignedCert as APIGEE_KeystoresAliasesSelfSignedCert } from './apigee/KeystoresAliasesSelfSignedCert';
import { NatAddress as APIGEE_NatAddress } from './apigee/NatAddress';
import { Organization as APIGEE_Organization } from './apigee/Organization';
import { Sharedflow as APIGEE_Sharedflow } from './apigee/Sharedflow';
import { SharedflowDeployment as APIGEE_SharedflowDeployment } from './apigee/SharedflowDeployment';
import { SyncAuthorization as APIGEE_SyncAuthorization } from './apigee/SyncAuthorization';
import { TargetServer as APIGEE_TargetServer } from './apigee/TargetServer';
import { Application as APPENGINE_Application } from './appengine/Application';
import { ApplicationUrlDispatchRules as APPENGINE_ApplicationUrlDispatchRules } from './appengine/ApplicationUrlDispatchRules';
import { DomainMapping as APPENGINE_DomainMapping } from './appengine/DomainMapping';
import { EngineSplitTraffic as APPENGINE_EngineSplitTraffic } from './appengine/EngineSplitTraffic';
import { FirewallRule as APPENGINE_FirewallRule } from './appengine/FirewallRule';
import { FlexibleAppVersion as APPENGINE_FlexibleAppVersion } from './appengine/FlexibleAppVersion';
import { ServiceNetworkSettings as APPENGINE_ServiceNetworkSettings } from './appengine/ServiceNetworkSettings';
import { StandardAppVersion as APPENGINE_StandardAppVersion } from './appengine/StandardAppVersion';
import { Repository as ARTIFACTREGISTRY_Repository } from './artifactregistry/Repository';
import { RepositoryIamBinding as ARTIFACTREGISTRY_RepositoryIamBinding } from './artifactregistry/RepositoryIamBinding';
import { RepositoryIamMember as ARTIFACTREGISTRY_RepositoryIamMember } from './artifactregistry/RepositoryIamMember';
import { RepositoryIamPolicy as ARTIFACTREGISTRY_RepositoryIamPolicy } from './artifactregistry/RepositoryIamPolicy';
import { VpcscConfig as ARTIFACTREGISTRY_VpcscConfig } from './artifactregistry/VpcscConfig';
import { Workload as ASSUREDWORKLOADS_Workload } from './assuredworkloads/Workload';
import { ManagementServer as BACKUPDISASTERRECOVERY_ManagementServer } from './backupdisasterrecovery/ManagementServer';
import { AppConnection as BEYONDCORP_AppConnection } from './beyondcorp/AppConnection';
import { AppConnector as BEYONDCORP_AppConnector } from './beyondcorp/AppConnector';
import { AppGateway as BEYONDCORP_AppGateway } from './beyondcorp/AppGateway';
import { Catalog as BIGLAKE_Catalog } from './biglake/Catalog';
import { Database as BIGLAKE_Database } from './biglake/Database';
import { Table as BIGLAKE_Table } from './biglake/Table';
import { AppProfile as BIGQUERY_AppProfile } from './bigquery/AppProfile';
import { BiReservation as BIGQUERY_BiReservation } from './bigquery/BiReservation';
import { CapacityCommitment as BIGQUERY_CapacityCommitment } from './bigquery/CapacityCommitment';
import { Connection as BIGQUERY_Connection } from './bigquery/Connection';
import { ConnectionIamBinding as BIGQUERY_ConnectionIamBinding } from './bigquery/ConnectionIamBinding';
import { ConnectionIamMember as BIGQUERY_ConnectionIamMember } from './bigquery/ConnectionIamMember';
import { ConnectionIamPolicy as BIGQUERY_ConnectionIamPolicy } from './bigquery/ConnectionIamPolicy';
import { Dataset as BIGQUERY_Dataset } from './bigquery/Dataset';
import { DatasetAccess as BIGQUERY_DatasetAccess } from './bigquery/DatasetAccess';
import { DatasetIamBinding as BIGQUERY_DatasetIamBinding } from './bigquery/DatasetIamBinding';
import { DatasetIamMember as BIGQUERY_DatasetIamMember } from './bigquery/DatasetIamMember';
import { DatasetIamPolicy as BIGQUERY_DatasetIamPolicy } from './bigquery/DatasetIamPolicy';
import { DataTransferConfig as BIGQUERY_DataTransferConfig } from './bigquery/DataTransferConfig';
import { IamBinding as BIGQUERY_IamBinding } from './bigquery/IamBinding';
import { IamMember as BIGQUERY_IamMember } from './bigquery/IamMember';
import { IamPolicy as BIGQUERY_IamPolicy } from './bigquery/IamPolicy';
import { Job as BIGQUERY_Job } from './bigquery/Job';
import { Reservation as BIGQUERY_Reservation } from './bigquery/Reservation';
import { ReservationAssignment as BIGQUERY_ReservationAssignment } from './bigquery/ReservationAssignment';
import { Routine as BIGQUERY_Routine } from './bigquery/Routine';
import { Table as BIGQUERY_Table } from './bigquery/Table';
import { DataExchange as BIGQUERYANALYTICSHUB_DataExchange } from './bigqueryanalyticshub/DataExchange';
import { DataExchangeIamBinding as BIGQUERYANALYTICSHUB_DataExchangeIamBinding } from './bigqueryanalyticshub/DataExchangeIamBinding';
import { DataExchangeIamMember as BIGQUERYANALYTICSHUB_DataExchangeIamMember } from './bigqueryanalyticshub/DataExchangeIamMember';
import { DataExchangeIamPolicy as BIGQUERYANALYTICSHUB_DataExchangeIamPolicy } from './bigqueryanalyticshub/DataExchangeIamPolicy';
import { Listing as BIGQUERYANALYTICSHUB_Listing } from './bigqueryanalyticshub/Listing';
import { ListingIamBinding as BIGQUERYANALYTICSHUB_ListingIamBinding } from './bigqueryanalyticshub/ListingIamBinding';
import { ListingIamMember as BIGQUERYANALYTICSHUB_ListingIamMember } from './bigqueryanalyticshub/ListingIamMember';
import { ListingIamPolicy as BIGQUERYANALYTICSHUB_ListingIamPolicy } from './bigqueryanalyticshub/ListingIamPolicy';
import { DataPolicy as BIGQUERYDATAPOLICY_DataPolicy } from './bigquerydatapolicy/DataPolicy';
import { DataPolicyIamBinding as BIGQUERYDATAPOLICY_DataPolicyIamBinding } from './bigquerydatapolicy/DataPolicyIamBinding';
import { DataPolicyIamMember as BIGQUERYDATAPOLICY_DataPolicyIamMember } from './bigquerydatapolicy/DataPolicyIamMember';
import { DataPolicyIamPolicy as BIGQUERYDATAPOLICY_DataPolicyIamPolicy } from './bigquerydatapolicy/DataPolicyIamPolicy';
import { GCPolicy as BIGTABLE_GCPolicy } from './bigtable/GCPolicy';
import { Instance as BIGTABLE_Instance } from './bigtable/Instance';
import { InstanceIamBinding as BIGTABLE_InstanceIamBinding } from './bigtable/InstanceIamBinding';
import { InstanceIamMember as BIGTABLE_InstanceIamMember } from './bigtable/InstanceIamMember';
import { InstanceIamPolicy as BIGTABLE_InstanceIamPolicy } from './bigtable/InstanceIamPolicy';
import { Table as BIGTABLE_Table } from './bigtable/Table';
import { TableIamBinding as BIGTABLE_TableIamBinding } from './bigtable/TableIamBinding';
import { TableIamMember as BIGTABLE_TableIamMember } from './bigtable/TableIamMember';
import { TableIamPolicy as BIGTABLE_TableIamPolicy } from './bigtable/TableIamPolicy';
import { AccountIamBinding as BILLING_AccountIamBinding } from './billing/AccountIamBinding';
import { AccountIamMember as BILLING_AccountIamMember } from './billing/AccountIamMember';
import { AccountIamPolicy as BILLING_AccountIamPolicy } from './billing/AccountIamPolicy';
import { Budget as BILLING_Budget } from './billing/Budget';
import { ProjectInfo as BILLING_ProjectInfo } from './billing/ProjectInfo';
import { SubAccount as BILLING_SubAccount } from './billing/SubAccount';
import { Attestor as BINARYAUTHORIZATION_Attestor } from './binaryauthorization/Attestor';
import { AttestorIamBinding as BINARYAUTHORIZATION_AttestorIamBinding } from './binaryauthorization/AttestorIamBinding';
import { AttestorIamMember as BINARYAUTHORIZATION_AttestorIamMember } from './binaryauthorization/AttestorIamMember';
import { AttestorIamPolicy as BINARYAUTHORIZATION_AttestorIamPolicy } from './binaryauthorization/AttestorIamPolicy';
import { Policy as BINARYAUTHORIZATION_Policy } from './binaryauthorization/Policy';
import { BlockchainNodes as BLOCKCHAINNODEENGINE_BlockchainNodes } from './blockchainnodeengine/BlockchainNodes';
import { Authority as CERTIFICATEAUTHORITY_Authority } from './certificateauthority/Authority';
import { CaPool as CERTIFICATEAUTHORITY_CaPool } from './certificateauthority/CaPool';
import { CaPoolIamBinding as CERTIFICATEAUTHORITY_CaPoolIamBinding } from './certificateauthority/CaPoolIamBinding';
import { CaPoolIamMember as CERTIFICATEAUTHORITY_CaPoolIamMember } from './certificateauthority/CaPoolIamMember';
import { CaPoolIamPolicy as CERTIFICATEAUTHORITY_CaPoolIamPolicy } from './certificateauthority/CaPoolIamPolicy';
import { Certificate as CERTIFICATEAUTHORITY_Certificate } from './certificateauthority/Certificate';
import { CertificateTemplate as CERTIFICATEAUTHORITY_CertificateTemplate } from './certificateauthority/CertificateTemplate';
import { CertificateTemplateIamBinding as CERTIFICATEAUTHORITY_CertificateTemplateIamBinding } from './certificateauthority/CertificateTemplateIamBinding';
import { CertificateTemplateIamMember as CERTIFICATEAUTHORITY_CertificateTemplateIamMember } from './certificateauthority/CertificateTemplateIamMember';
import { CertificateTemplateIamPolicy as CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy } from './certificateauthority/CertificateTemplateIamPolicy';
import { Certificate as CERTIFICATEMANAGER_Certificate } from './certificatemanager/Certificate';
import { CertificateIssuanceConfig as CERTIFICATEMANAGER_CertificateIssuanceConfig } from './certificatemanager/CertificateIssuanceConfig';
import { CertificateMap as CERTIFICATEMANAGER_CertificateMap } from './certificatemanager/CertificateMap';
import { CertificateMapEntry as CERTIFICATEMANAGER_CertificateMapEntry } from './certificatemanager/CertificateMapEntry';
import { DnsAuthorization as CERTIFICATEMANAGER_DnsAuthorization } from './certificatemanager/DnsAuthorization';
import { TrustConfig as CERTIFICATEMANAGER_TrustConfig } from './certificatemanager/TrustConfig';
import { FolderFeed as CLOUDASSET_FolderFeed } from './cloudasset/FolderFeed';
import { OrganizationFeed as CLOUDASSET_OrganizationFeed } from './cloudasset/OrganizationFeed';
import { ProjectFeed as CLOUDASSET_ProjectFeed } from './cloudasset/ProjectFeed';
import { BitbucketServerConfig as CLOUDBUILD_BitbucketServerConfig } from './cloudbuild/BitbucketServerConfig';
import { Trigger as CLOUDBUILD_Trigger } from './cloudbuild/Trigger';
import { WorkerPool as CLOUDBUILD_WorkerPool } from './cloudbuild/WorkerPool';
import { Connection as CLOUDBUILDV2_Connection } from './cloudbuildv2/Connection';
import { ConnectionIAMBinding as CLOUDBUILDV2_ConnectionIAMBinding } from './cloudbuildv2/ConnectionIAMBinding';
import { ConnectionIAMMember as CLOUDBUILDV2_ConnectionIAMMember } from './cloudbuildv2/ConnectionIAMMember';
import { ConnectionIAMPolicy as CLOUDBUILDV2_ConnectionIAMPolicy } from './cloudbuildv2/ConnectionIAMPolicy';
import { Repository as CLOUDBUILDV2_Repository } from './cloudbuildv2/Repository';
import { Automation as CLOUDDEPLOY_Automation } from './clouddeploy/Automation';
import { CustomTargetType as CLOUDDEPLOY_CustomTargetType } from './clouddeploy/CustomTargetType';
import { DeliveryPipeline as CLOUDDEPLOY_DeliveryPipeline } from './clouddeploy/DeliveryPipeline';
import { DeliveryPipelineIamBinding as CLOUDDEPLOY_DeliveryPipelineIamBinding } from './clouddeploy/DeliveryPipelineIamBinding';
import { DeliveryPipelineIamMember as CLOUDDEPLOY_DeliveryPipelineIamMember } from './clouddeploy/DeliveryPipelineIamMember';
import { DeliveryPipelineIamPolicy as CLOUDDEPLOY_DeliveryPipelineIamPolicy } from './clouddeploy/DeliveryPipelineIamPolicy';
import { Target as CLOUDDEPLOY_Target } from './clouddeploy/Target';
import { TargetIamBinding as CLOUDDEPLOY_TargetIamBinding } from './clouddeploy/TargetIamBinding';
import { TargetIamMember as CLOUDDEPLOY_TargetIamMember } from './clouddeploy/TargetIamMember';
import { TargetIamPolicy as CLOUDDEPLOY_TargetIamPolicy } from './clouddeploy/TargetIamPolicy';
import { Registration as CLOUDDOMAINS_Registration } from './clouddomains/Registration';
import { Function as CLOUDFUNCTIONS_Function } from './cloudfunctions/Function';
import { FunctionIamBinding as CLOUDFUNCTIONS_FunctionIamBinding } from './cloudfunctions/FunctionIamBinding';
import { FunctionIamMember as CLOUDFUNCTIONS_FunctionIamMember } from './cloudfunctions/FunctionIamMember';
import { FunctionIamPolicy as CLOUDFUNCTIONS_FunctionIamPolicy } from './cloudfunctions/FunctionIamPolicy';
import { Function as CLOUDFUNCTIONSV2_Function } from './cloudfunctionsv2/Function';
import { FunctionIamBinding as CLOUDFUNCTIONSV2_FunctionIamBinding } from './cloudfunctionsv2/FunctionIamBinding';
import { FunctionIamMember as CLOUDFUNCTIONSV2_FunctionIamMember } from './cloudfunctionsv2/FunctionIamMember';
import { FunctionIamPolicy as CLOUDFUNCTIONSV2_FunctionIamPolicy } from './cloudfunctionsv2/FunctionIamPolicy';
import { Group as CLOUDIDENTITY_Group } from './cloudidentity/Group';
import { GroupMembership as CLOUDIDENTITY_GroupMembership } from './cloudidentity/GroupMembership';
import { Endpoint as CLOUDIDS_Endpoint } from './cloudids/Endpoint';
import { DomainMapping as CLOUDRUN_DomainMapping } from './cloudrun/DomainMapping';
import { IamBinding as CLOUDRUN_IamBinding } from './cloudrun/IamBinding';
import { IamMember as CLOUDRUN_IamMember } from './cloudrun/IamMember';
import { IamPolicy as CLOUDRUN_IamPolicy } from './cloudrun/IamPolicy';
import { Service as CLOUDRUN_Service } from './cloudrun/Service';
import { Job as CLOUDRUNV2_Job } from './cloudrunv2/Job';
import { JobIamBinding as CLOUDRUNV2_JobIamBinding } from './cloudrunv2/JobIamBinding';
import { JobIamMember as CLOUDRUNV2_JobIamMember } from './cloudrunv2/JobIamMember';
import { JobIamPolicy as CLOUDRUNV2_JobIamPolicy } from './cloudrunv2/JobIamPolicy';
import { Service as CLOUDRUNV2_Service } from './cloudrunv2/Service';
import { ServiceIamBinding as CLOUDRUNV2_ServiceIamBinding } from './cloudrunv2/ServiceIamBinding';
import { ServiceIamMember as CLOUDRUNV2_ServiceIamMember } from './cloudrunv2/ServiceIamMember';
import { ServiceIamPolicy as CLOUDRUNV2_ServiceIamPolicy } from './cloudrunv2/ServiceIamPolicy';
import { Job as CLOUDSCHEDULER_Job } from './cloudscheduler/Job';
import { Queue as CLOUDTASKS_Queue } from './cloudtasks/Queue';
import { QueueIamBinding as CLOUDTASKS_QueueIamBinding } from './cloudtasks/QueueIamBinding';
import { QueueIamMember as CLOUDTASKS_QueueIamMember } from './cloudtasks/QueueIamMember';
import { QueueIamPolicy as CLOUDTASKS_QueueIamPolicy } from './cloudtasks/QueueIamPolicy';
import { Environment as COMPOSER_Environment } from './composer/Environment';
import { Address as COMPUTE_Address } from './compute/Address';
import { AttachedDisk as COMPUTE_AttachedDisk } from './compute/AttachedDisk';
import { Autoscaler as COMPUTE_Autoscaler } from './compute/Autoscaler';
import { BackendBucket as COMPUTE_BackendBucket } from './compute/BackendBucket';
import { BackendBucketIamBinding as COMPUTE_BackendBucketIamBinding } from './compute/BackendBucketIamBinding';
import { BackendBucketIamMember as COMPUTE_BackendBucketIamMember } from './compute/BackendBucketIamMember';
import { BackendBucketIamPolicy as COMPUTE_BackendBucketIamPolicy } from './compute/BackendBucketIamPolicy';
import { BackendBucketSignedUrlKey as COMPUTE_BackendBucketSignedUrlKey } from './compute/BackendBucketSignedUrlKey';
import { BackendService as COMPUTE_BackendService } from './compute/BackendService';
import { BackendServiceIamBinding as COMPUTE_BackendServiceIamBinding } from './compute/BackendServiceIamBinding';
import { BackendServiceIamMember as COMPUTE_BackendServiceIamMember } from './compute/BackendServiceIamMember';
import { BackendServiceIamPolicy as COMPUTE_BackendServiceIamPolicy } from './compute/BackendServiceIamPolicy';
import { BackendServiceSignedUrlKey as COMPUTE_BackendServiceSignedUrlKey } from './compute/BackendServiceSignedUrlKey';
import { CaExternalAccountKey as COMPUTE_CaExternalAccountKey } from './compute/CaExternalAccountKey';
import { Disk as COMPUTE_Disk } from './compute/Disk';
import { DiskAsyncReplication as COMPUTE_DiskAsyncReplication } from './compute/DiskAsyncReplication';
import { DiskIamBinding as COMPUTE_DiskIamBinding } from './compute/DiskIamBinding';
import { DiskIamMember as COMPUTE_DiskIamMember } from './compute/DiskIamMember';
import { DiskIamPolicy as COMPUTE_DiskIamPolicy } from './compute/DiskIamPolicy';
import { DiskResourcePolicyAttachment as COMPUTE_DiskResourcePolicyAttachment } from './compute/DiskResourcePolicyAttachment';
import { ExternalVpnGateway as COMPUTE_ExternalVpnGateway } from './compute/ExternalVpnGateway';
import { Firewall as COMPUTE_Firewall } from './compute/Firewall';
import { FirewallPolicy as COMPUTE_FirewallPolicy } from './compute/FirewallPolicy';
import { FirewallPolicyAssociation as COMPUTE_FirewallPolicyAssociation } from './compute/FirewallPolicyAssociation';
import { FirewallPolicyRule as COMPUTE_FirewallPolicyRule } from './compute/FirewallPolicyRule';
import { ForwardingRule as COMPUTE_ForwardingRule } from './compute/ForwardingRule';
import { GlobalAddress as COMPUTE_GlobalAddress } from './compute/GlobalAddress';
import { GlobalForwardingRule as COMPUTE_GlobalForwardingRule } from './compute/GlobalForwardingRule';
import { GlobalNetworkEndpoint as COMPUTE_GlobalNetworkEndpoint } from './compute/GlobalNetworkEndpoint';
import { GlobalNetworkEndpointGroup as COMPUTE_GlobalNetworkEndpointGroup } from './compute/GlobalNetworkEndpointGroup';
import { HaVpnGateway as COMPUTE_HaVpnGateway } from './compute/HaVpnGateway';
import { HealthCheck as COMPUTE_HealthCheck } from './compute/HealthCheck';
import { HttpHealthCheck as COMPUTE_HttpHealthCheck } from './compute/HttpHealthCheck';
import { HttpsHealthCheck as COMPUTE_HttpsHealthCheck } from './compute/HttpsHealthCheck';
import { Image as COMPUTE_Image } from './compute/Image';
import { ImageIamBinding as COMPUTE_ImageIamBinding } from './compute/ImageIamBinding';
import { ImageIamMember as COMPUTE_ImageIamMember } from './compute/ImageIamMember';
import { ImageIamPolicy as COMPUTE_ImageIamPolicy } from './compute/ImageIamPolicy';
import { Instance as COMPUTE_Instance } from './compute/Instance';
import { InstanceFromMachineImage as COMPUTE_InstanceFromMachineImage } from './compute/InstanceFromMachineImage';
import { InstanceFromTemplate as COMPUTE_InstanceFromTemplate } from './compute/InstanceFromTemplate';
import { InstanceGroup as COMPUTE_InstanceGroup } from './compute/InstanceGroup';
import { InstanceGroupManager as COMPUTE_InstanceGroupManager } from './compute/InstanceGroupManager';
import { InstanceGroupMembership as COMPUTE_InstanceGroupMembership } from './compute/InstanceGroupMembership';
import { InstanceGroupNamedPort as COMPUTE_InstanceGroupNamedPort } from './compute/InstanceGroupNamedPort';
import { InstanceIAMBinding as COMPUTE_InstanceIAMBinding } from './compute/InstanceIAMBinding';
import { InstanceIAMMember as COMPUTE_InstanceIAMMember } from './compute/InstanceIAMMember';
import { InstanceIAMPolicy as COMPUTE_InstanceIAMPolicy } from './compute/InstanceIAMPolicy';
import { InstanceSettings as COMPUTE_InstanceSettings } from './compute/InstanceSettings';
import { InstanceTemplate as COMPUTE_InstanceTemplate } from './compute/InstanceTemplate';
import { InterconnectAttachment as COMPUTE_InterconnectAttachment } from './compute/InterconnectAttachment';
import { MachineImage as COMPUTE_MachineImage } from './compute/MachineImage';
import { MachineImageIamBinding as COMPUTE_MachineImageIamBinding } from './compute/MachineImageIamBinding';
import { MachineImageIamMember as COMPUTE_MachineImageIamMember } from './compute/MachineImageIamMember';
import { MachineImageIamPolicy as COMPUTE_MachineImageIamPolicy } from './compute/MachineImageIamPolicy';
import { ManagedSslCertificate as COMPUTE_ManagedSslCertificate } from './compute/ManagedSslCertificate';
import { MangedSslCertificate as COMPUTE_MangedSslCertificate } from './compute/MangedSslCertificate';
import { Network as COMPUTE_Network } from './compute/Network';
import { NetworkAttachment as COMPUTE_NetworkAttachment } from './compute/NetworkAttachment';
import { NetworkEdgeSecurityService as COMPUTE_NetworkEdgeSecurityService } from './compute/NetworkEdgeSecurityService';
import { NetworkEndpoint as COMPUTE_NetworkEndpoint } from './compute/NetworkEndpoint';
import { NetworkEndpointGroup as COMPUTE_NetworkEndpointGroup } from './compute/NetworkEndpointGroup';
import { NetworkEndpointList as COMPUTE_NetworkEndpointList } from './compute/NetworkEndpointList';
import { NetworkFirewallPolicy as COMPUTE_NetworkFirewallPolicy } from './compute/NetworkFirewallPolicy';
import { NetworkFirewallPolicyAssociation as COMPUTE_NetworkFirewallPolicyAssociation } from './compute/NetworkFirewallPolicyAssociation';
import { NetworkFirewallPolicyRule as COMPUTE_NetworkFirewallPolicyRule } from './compute/NetworkFirewallPolicyRule';
import { NetworkPeering as COMPUTE_NetworkPeering } from './compute/NetworkPeering';
import { NetworkPeeringRoutesConfig as COMPUTE_NetworkPeeringRoutesConfig } from './compute/NetworkPeeringRoutesConfig';
import { NodeGroup as COMPUTE_NodeGroup } from './compute/NodeGroup';
import { NodeTemplate as COMPUTE_NodeTemplate } from './compute/NodeTemplate';
import { OrganizationSecurityPolicy as COMPUTE_OrganizationSecurityPolicy } from './compute/OrganizationSecurityPolicy';
import { OrganizationSecurityPolicyAssociation as COMPUTE_OrganizationSecurityPolicyAssociation } from './compute/OrganizationSecurityPolicyAssociation';
import { OrganizationSecurityPolicyRule as COMPUTE_OrganizationSecurityPolicyRule } from './compute/OrganizationSecurityPolicyRule';
import { PacketMirroring as COMPUTE_PacketMirroring } from './compute/PacketMirroring';
import { PerInstanceConfig as COMPUTE_PerInstanceConfig } from './compute/PerInstanceConfig';
import { ProjectDefaultNetworkTier as COMPUTE_ProjectDefaultNetworkTier } from './compute/ProjectDefaultNetworkTier';
import { ProjectMetadata as COMPUTE_ProjectMetadata } from './compute/ProjectMetadata';
import { ProjectMetadataItem as COMPUTE_ProjectMetadataItem } from './compute/ProjectMetadataItem';
import { PublicAdvertisedPrefix as COMPUTE_PublicAdvertisedPrefix } from './compute/PublicAdvertisedPrefix';
import { PublicDelegatedPrefix as COMPUTE_PublicDelegatedPrefix } from './compute/PublicDelegatedPrefix';
import { RegionAutoscaler as COMPUTE_RegionAutoscaler } from './compute/RegionAutoscaler';
import { RegionBackendService as COMPUTE_RegionBackendService } from './compute/RegionBackendService';
import { RegionBackendServiceIamBinding as COMPUTE_RegionBackendServiceIamBinding } from './compute/RegionBackendServiceIamBinding';
import { RegionBackendServiceIamMember as COMPUTE_RegionBackendServiceIamMember } from './compute/RegionBackendServiceIamMember';
import { RegionBackendServiceIamPolicy as COMPUTE_RegionBackendServiceIamPolicy } from './compute/RegionBackendServiceIamPolicy';
import { RegionCommitment as COMPUTE_RegionCommitment } from './compute/RegionCommitment';
import { RegionDisk as COMPUTE_RegionDisk } from './compute/RegionDisk';
import { RegionDiskIamBinding as COMPUTE_RegionDiskIamBinding } from './compute/RegionDiskIamBinding';
import { RegionDiskIamMember as COMPUTE_RegionDiskIamMember } from './compute/RegionDiskIamMember';
import { RegionDiskIamPolicy as COMPUTE_RegionDiskIamPolicy } from './compute/RegionDiskIamPolicy';
import { RegionDiskResourcePolicyAttachment as COMPUTE_RegionDiskResourcePolicyAttachment } from './compute/RegionDiskResourcePolicyAttachment';
import { RegionHealthCheck as COMPUTE_RegionHealthCheck } from './compute/RegionHealthCheck';
import { RegionInstanceGroupManager as COMPUTE_RegionInstanceGroupManager } from './compute/RegionInstanceGroupManager';
import { RegionInstanceTemplate as COMPUTE_RegionInstanceTemplate } from './compute/RegionInstanceTemplate';
import { RegionNetworkEndpoint as COMPUTE_RegionNetworkEndpoint } from './compute/RegionNetworkEndpoint';
import { RegionNetworkEndpointGroup as COMPUTE_RegionNetworkEndpointGroup } from './compute/RegionNetworkEndpointGroup';
import { RegionNetworkFirewallPolicy as COMPUTE_RegionNetworkFirewallPolicy } from './compute/RegionNetworkFirewallPolicy';
import { RegionNetworkFirewallPolicyAssociation as COMPUTE_RegionNetworkFirewallPolicyAssociation } from './compute/RegionNetworkFirewallPolicyAssociation';
import { RegionNetworkFirewallPolicyRule as COMPUTE_RegionNetworkFirewallPolicyRule } from './compute/RegionNetworkFirewallPolicyRule';
import { RegionPerInstanceConfig as COMPUTE_RegionPerInstanceConfig } from './compute/RegionPerInstanceConfig';
import { RegionSecurityPolicy as COMPUTE_RegionSecurityPolicy } from './compute/RegionSecurityPolicy';
import { RegionSecurityPolicyRule as COMPUTE_RegionSecurityPolicyRule } from './compute/RegionSecurityPolicyRule';
import { RegionSslCertificate as COMPUTE_RegionSslCertificate } from './compute/RegionSslCertificate';
import { RegionSslPolicy as COMPUTE_RegionSslPolicy } from './compute/RegionSslPolicy';
import { RegionTargetHttpProxy as COMPUTE_RegionTargetHttpProxy } from './compute/RegionTargetHttpProxy';
import { RegionTargetHttpsProxy as COMPUTE_RegionTargetHttpsProxy } from './compute/RegionTargetHttpsProxy';
import { RegionTargetTcpProxy as COMPUTE_RegionTargetTcpProxy } from './compute/RegionTargetTcpProxy';
import { RegionUrlMap as COMPUTE_RegionUrlMap } from './compute/RegionUrlMap';
import { Reservation as COMPUTE_Reservation } from './compute/Reservation';
import { ResourcePolicy as COMPUTE_ResourcePolicy } from './compute/ResourcePolicy';
import { Route as COMPUTE_Route } from './compute/Route';
import { Router as COMPUTE_Router } from './compute/Router';
import { RouterInterface as COMPUTE_RouterInterface } from './compute/RouterInterface';
import { RouterNat as COMPUTE_RouterNat } from './compute/RouterNat';
import { RouterPeer as COMPUTE_RouterPeer } from './compute/RouterPeer';
import { SecurityPolicy as COMPUTE_SecurityPolicy } from './compute/SecurityPolicy';
import { SecurityScanConfig as COMPUTE_SecurityScanConfig } from './compute/SecurityScanConfig';
import { ServiceAttachment as COMPUTE_ServiceAttachment } from './compute/ServiceAttachment';
import { SharedVPCHostProject as COMPUTE_SharedVPCHostProject } from './compute/SharedVPCHostProject';
import { SharedVPCServiceProject as COMPUTE_SharedVPCServiceProject } from './compute/SharedVPCServiceProject';
import { Snapshot as COMPUTE_Snapshot } from './compute/Snapshot';
import { SnapshotIamBinding as COMPUTE_SnapshotIamBinding } from './compute/SnapshotIamBinding';
import { SnapshotIamMember as COMPUTE_SnapshotIamMember } from './compute/SnapshotIamMember';
import { SnapshotIamPolicy as COMPUTE_SnapshotIamPolicy } from './compute/SnapshotIamPolicy';
import { SSLCertificate as COMPUTE_SSLCertificate } from './compute/SSLCertificate';
import { SSLPolicy as COMPUTE_SSLPolicy } from './compute/SSLPolicy';
import { Subnetwork as COMPUTE_Subnetwork } from './compute/Subnetwork';
import { SubnetworkIAMBinding as COMPUTE_SubnetworkIAMBinding } from './compute/SubnetworkIAMBinding';
import { SubnetworkIAMMember as COMPUTE_SubnetworkIAMMember } from './compute/SubnetworkIAMMember';
import { SubnetworkIAMPolicy as COMPUTE_SubnetworkIAMPolicy } from './compute/SubnetworkIAMPolicy';
import { TargetGrpcProxy as COMPUTE_TargetGrpcProxy } from './compute/TargetGrpcProxy';
import { TargetHttpProxy as COMPUTE_TargetHttpProxy } from './compute/TargetHttpProxy';
import { TargetHttpsProxy as COMPUTE_TargetHttpsProxy } from './compute/TargetHttpsProxy';
import { TargetInstance as COMPUTE_TargetInstance } from './compute/TargetInstance';
import { TargetPool as COMPUTE_TargetPool } from './compute/TargetPool';
import { TargetSSLProxy as COMPUTE_TargetSSLProxy } from './compute/TargetSSLProxy';
import { TargetTCPProxy as COMPUTE_TargetTCPProxy } from './compute/TargetTCPProxy';
import { URLMap as COMPUTE_URLMap } from './compute/URLMap';
import { VPNGateway as COMPUTE_VPNGateway } from './compute/VPNGateway';
import { VPNTunnel as COMPUTE_VPNTunnel } from './compute/VPNTunnel';
import { AttachedCluster as CONTAINER_AttachedCluster } from './container/AttachedCluster';
import { AwsCluster as CONTAINER_AwsCluster } from './container/AwsCluster';
import { AwsNodePool as CONTAINER_AwsNodePool } from './container/AwsNodePool';
import { AzureClient as CONTAINER_AzureClient } from './container/AzureClient';
import { AzureCluster as CONTAINER_AzureCluster } from './container/AzureCluster';
import { AzureNodePool as CONTAINER_AzureNodePool } from './container/AzureNodePool';
import { Cluster as CONTAINER_Cluster } from './container/Cluster';
import { NodePool as CONTAINER_NodePool } from './container/NodePool';
import { Registry as CONTAINER_Registry } from './container/Registry';
import { Note as CONTAINERANALYSIS_Note } from './containeranalysis/Note';
import { NoteIamBinding as CONTAINERANALYSIS_NoteIamBinding } from './containeranalysis/NoteIamBinding';
import { NoteIamMember as CONTAINERANALYSIS_NoteIamMember } from './containeranalysis/NoteIamMember';
import { NoteIamPolicy as CONTAINERANALYSIS_NoteIamPolicy } from './containeranalysis/NoteIamPolicy';
import { Occurence as CONTAINERANALYSIS_Occurence } from './containeranalysis/Occurence';
import { ConnectionProfile as DATABASEMIGRATIONSERVICE_ConnectionProfile } from './databasemigrationservice/ConnectionProfile';
import { PrivateConnection as DATABASEMIGRATIONSERVICE_PrivateConnection } from './databasemigrationservice/PrivateConnection';
import { Entry as DATACATALOG_Entry } from './datacatalog/Entry';
import { EntryGroup as DATACATALOG_EntryGroup } from './datacatalog/EntryGroup';
import { EntryGroupIamBinding as DATACATALOG_EntryGroupIamBinding } from './datacatalog/EntryGroupIamBinding';
import { EntryGroupIamMember as DATACATALOG_EntryGroupIamMember } from './datacatalog/EntryGroupIamMember';
import { EntryGroupIamPolicy as DATACATALOG_EntryGroupIamPolicy } from './datacatalog/EntryGroupIamPolicy';
import { PolicyTag as DATACATALOG_PolicyTag } from './datacatalog/PolicyTag';
import { PolicyTagIamBinding as DATACATALOG_PolicyTagIamBinding } from './datacatalog/PolicyTagIamBinding';
import { PolicyTagIamMember as DATACATALOG_PolicyTagIamMember } from './datacatalog/PolicyTagIamMember';
import { PolicyTagIamPolicy as DATACATALOG_PolicyTagIamPolicy } from './datacatalog/PolicyTagIamPolicy';
import { Tag as DATACATALOG_Tag } from './datacatalog/Tag';
import { TagTemplate as DATACATALOG_TagTemplate } from './datacatalog/TagTemplate';
import { TagTemplateIamBinding as DATACATALOG_TagTemplateIamBinding } from './datacatalog/TagTemplateIamBinding';
import { TagTemplateIamMember as DATACATALOG_TagTemplateIamMember } from './datacatalog/TagTemplateIamMember';
import { TagTemplateIamPolicy as DATACATALOG_TagTemplateIamPolicy } from './datacatalog/TagTemplateIamPolicy';
import { Taxonomy as DATACATALOG_Taxonomy } from './datacatalog/Taxonomy';
import { TaxonomyIamBinding as DATACATALOG_TaxonomyIamBinding } from './datacatalog/TaxonomyIamBinding';
import { TaxonomyIamMember as DATACATALOG_TaxonomyIamMember } from './datacatalog/TaxonomyIamMember';
import { TaxonomyIamPolicy as DATACATALOG_TaxonomyIamPolicy } from './datacatalog/TaxonomyIamPolicy';
import { FlexTemplateJob as DATAFLOW_FlexTemplateJob } from './dataflow/FlexTemplateJob';
import { Job as DATAFLOW_Job } from './dataflow/Job';
import { Pipeline as DATAFLOW_Pipeline } from './dataflow/Pipeline';
import { Repository as DATAFORM_Repository } from './dataform/Repository';
import { RepositoryIamBinding as DATAFORM_RepositoryIamBinding } from './dataform/RepositoryIamBinding';
import { RepositoryIamMember as DATAFORM_RepositoryIamMember } from './dataform/RepositoryIamMember';
import { RepositoryIamPolicy as DATAFORM_RepositoryIamPolicy } from './dataform/RepositoryIamPolicy';
import { RepositoryReleaseConfig as DATAFORM_RepositoryReleaseConfig } from './dataform/RepositoryReleaseConfig';
import { RepositoryWorkflowConfig as DATAFORM_RepositoryWorkflowConfig } from './dataform/RepositoryWorkflowConfig';
import { Instance as DATAFUSION_Instance } from './datafusion/Instance';
import { PreventionDeidentifyTemplate as DATALOSS_PreventionDeidentifyTemplate } from './dataloss/PreventionDeidentifyTemplate';
import { PreventionInspectTemplate as DATALOSS_PreventionInspectTemplate } from './dataloss/PreventionInspectTemplate';
import { PreventionJobTrigger as DATALOSS_PreventionJobTrigger } from './dataloss/PreventionJobTrigger';
import { PreventionStoredInfoType as DATALOSS_PreventionStoredInfoType } from './dataloss/PreventionStoredInfoType';
import { Asset as DATAPLEX_Asset } from './dataplex/Asset';
import { AssetIamBinding as DATAPLEX_AssetIamBinding } from './dataplex/AssetIamBinding';
import { AssetIamMember as DATAPLEX_AssetIamMember } from './dataplex/AssetIamMember';
import { AssetIamPolicy as DATAPLEX_AssetIamPolicy } from './dataplex/AssetIamPolicy';
import { Datascan as DATAPLEX_Datascan } from './dataplex/Datascan';
import { DatascanIamBinding as DATAPLEX_DatascanIamBinding } from './dataplex/DatascanIamBinding';
import { DatascanIamMember as DATAPLEX_DatascanIamMember } from './dataplex/DatascanIamMember';
import { DatascanIamPolicy as DATAPLEX_DatascanIamPolicy } from './dataplex/DatascanIamPolicy';
import { Lake as DATAPLEX_Lake } from './dataplex/Lake';
import { LakeIamBinding as DATAPLEX_LakeIamBinding } from './dataplex/LakeIamBinding';
import { LakeIamMember as DATAPLEX_LakeIamMember } from './dataplex/LakeIamMember';
import { LakeIamPolicy as DATAPLEX_LakeIamPolicy } from './dataplex/LakeIamPolicy';
import { Task as DATAPLEX_Task } from './dataplex/Task';
import { TaskIamBinding as DATAPLEX_TaskIamBinding } from './dataplex/TaskIamBinding';
import { TaskIamMember as DATAPLEX_TaskIamMember } from './dataplex/TaskIamMember';
import { TaskIamPolicy as DATAPLEX_TaskIamPolicy } from './dataplex/TaskIamPolicy';
import { Zone as DATAPLEX_Zone } from './dataplex/Zone';
import { ZoneIamBinding as DATAPLEX_ZoneIamBinding } from './dataplex/ZoneIamBinding';
import { ZoneIamMember as DATAPLEX_ZoneIamMember } from './dataplex/ZoneIamMember';
import { ZoneIamPolicy as DATAPLEX_ZoneIamPolicy } from './dataplex/ZoneIamPolicy';
import { AutoscalingPolicy as DATAPROC_AutoscalingPolicy } from './dataproc/AutoscalingPolicy';
import { AutoscalingPolicyIamBinding as DATAPROC_AutoscalingPolicyIamBinding } from './dataproc/AutoscalingPolicyIamBinding';
import { AutoscalingPolicyIamMember as DATAPROC_AutoscalingPolicyIamMember } from './dataproc/AutoscalingPolicyIamMember';
import { AutoscalingPolicyIamPolicy as DATAPROC_AutoscalingPolicyIamPolicy } from './dataproc/AutoscalingPolicyIamPolicy';
import { Cluster as DATAPROC_Cluster } from './dataproc/Cluster';
import { ClusterIAMBinding as DATAPROC_ClusterIAMBinding } from './dataproc/ClusterIAMBinding';
import { ClusterIAMMember as DATAPROC_ClusterIAMMember } from './dataproc/ClusterIAMMember';
import { ClusterIAMPolicy as DATAPROC_ClusterIAMPolicy } from './dataproc/ClusterIAMPolicy';
import { Job as DATAPROC_Job } from './dataproc/Job';
import { JobIAMBinding as DATAPROC_JobIAMBinding } from './dataproc/JobIAMBinding';
import { JobIAMMember as DATAPROC_JobIAMMember } from './dataproc/JobIAMMember';
import { JobIAMPolicy as DATAPROC_JobIAMPolicy } from './dataproc/JobIAMPolicy';
import { MetastoreFederation as DATAPROC_MetastoreFederation } from './dataproc/MetastoreFederation';
import { MetastoreFederationIamBinding as DATAPROC_MetastoreFederationIamBinding } from './dataproc/MetastoreFederationIamBinding';
import { MetastoreFederationIamMember as DATAPROC_MetastoreFederationIamMember } from './dataproc/MetastoreFederationIamMember';
import { MetastoreFederationIamPolicy as DATAPROC_MetastoreFederationIamPolicy } from './dataproc/MetastoreFederationIamPolicy';
import { MetastoreService as DATAPROC_MetastoreService } from './dataproc/MetastoreService';
import { MetastoreServiceIamBinding as DATAPROC_MetastoreServiceIamBinding } from './dataproc/MetastoreServiceIamBinding';
import { MetastoreServiceIamMember as DATAPROC_MetastoreServiceIamMember } from './dataproc/MetastoreServiceIamMember';
import { MetastoreServiceIamPolicy as DATAPROC_MetastoreServiceIamPolicy } from './dataproc/MetastoreServiceIamPolicy';
import { WorkflowTemplate as DATAPROC_WorkflowTemplate } from './dataproc/WorkflowTemplate';
import { DataStoreIndex as DATASTORE_DataStoreIndex } from './datastore/DataStoreIndex';
import { ConnectionProfile as DATASTREAM_ConnectionProfile } from './datastream/ConnectionProfile';
import { PrivateConnection as DATASTREAM_PrivateConnection } from './datastream/PrivateConnection';
import { Stream as DATASTREAM_Stream } from './datastream/Stream';
import { Deployment as DEPLOYMENTMANAGER_Deployment } from './deploymentmanager/Deployment';
import { Agent as DIAGFLOW_Agent } from './diagflow/Agent';
import { CxAgent as DIAGFLOW_CxAgent } from './diagflow/CxAgent';
import { CxEntityType as DIAGFLOW_CxEntityType } from './diagflow/CxEntityType';
import { CxEnvironment as DIAGFLOW_CxEnvironment } from './diagflow/CxEnvironment';
import { CxFlow as DIAGFLOW_CxFlow } from './diagflow/CxFlow';
import { CxIntent as DIAGFLOW_CxIntent } from './diagflow/CxIntent';
import { CxPage as DIAGFLOW_CxPage } from './diagflow/CxPage';
import { CxSecuritySettings as DIAGFLOW_CxSecuritySettings } from './diagflow/CxSecuritySettings';
import { CxTestCase as DIAGFLOW_CxTestCase } from './diagflow/CxTestCase';
import { CxVersion as DIAGFLOW_CxVersion } from './diagflow/CxVersion';
import { CxWebhook as DIAGFLOW_CxWebhook } from './diagflow/CxWebhook';
import { EntityType as DIAGFLOW_EntityType } from './diagflow/EntityType';
import { Fulfillment as DIAGFLOW_Fulfillment } from './diagflow/Fulfillment';
import { Intent as DIAGFLOW_Intent } from './diagflow/Intent';
import { ChatEngine as DISCOVERYENGINE_ChatEngine } from './discoveryengine/ChatEngine';
import { DataStore as DISCOVERYENGINE_DataStore } from './discoveryengine/DataStore';
import { SearchEngine as DISCOVERYENGINE_SearchEngine } from './discoveryengine/SearchEngine';
import { DnsManagedZoneIamBinding as DNS_DnsManagedZoneIamBinding } from './dns/DnsManagedZoneIamBinding';
import { DnsManagedZoneIamMember as DNS_DnsManagedZoneIamMember } from './dns/DnsManagedZoneIamMember';
import { DnsManagedZoneIamPolicy as DNS_DnsManagedZoneIamPolicy } from './dns/DnsManagedZoneIamPolicy';
import { ManagedZone as DNS_ManagedZone } from './dns/ManagedZone';
import { Policy as DNS_Policy } from './dns/Policy';
import { RecordSet as DNS_RecordSet } from './dns/RecordSet';
import { ResponsePolicy as DNS_ResponsePolicy } from './dns/ResponsePolicy';
import { ResponsePolicyRule as DNS_ResponsePolicyRule } from './dns/ResponsePolicyRule';
import { Cluster as EDGECONTAINER_Cluster } from './edgecontainer/Cluster';
import { NodePool as EDGECONTAINER_NodePool } from './edgecontainer/NodePool';
import { VpnConnection as EDGECONTAINER_VpnConnection } from './edgecontainer/VpnConnection';
import { Network as EDGENETWORK_Network } from './edgenetwork/Network';
import { Subnet as EDGENETWORK_Subnet } from './edgenetwork/Subnet';
import { ConsumersIamBinding as ENDPOINTS_ConsumersIamBinding } from './endpoints/ConsumersIamBinding';
import { ConsumersIamMember as ENDPOINTS_ConsumersIamMember } from './endpoints/ConsumersIamMember';
import { ConsumersIamPolicy as ENDPOINTS_ConsumersIamPolicy } from './endpoints/ConsumersIamPolicy';
import { Service as ENDPOINTS_Service } from './endpoints/Service';
import { ServiceIamBinding as ENDPOINTS_ServiceIamBinding } from './endpoints/ServiceIamBinding';
import { ServiceIamMember as ENDPOINTS_ServiceIamMember } from './endpoints/ServiceIamMember';
import { ServiceIamPolicy as ENDPOINTS_ServiceIamPolicy } from './endpoints/ServiceIamPolicy';
import { Contact as ESSENTIALCONTACTS_Contact } from './essentialcontacts/Contact';
import { DocumentAiProcessor as ESSENTIALCONTACTS_DocumentAiProcessor } from './essentialcontacts/DocumentAiProcessor';
import { DocumentAiProcessorDefaultVersion as ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion } from './essentialcontacts/DocumentAiProcessorDefaultVersion';
import { DocumentAiWarehouseDocumentSchema as ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema } from './essentialcontacts/DocumentAiWarehouseDocumentSchema';
import { DocumentAiWarehouseLocation as ESSENTIALCONTACTS_DocumentAiWarehouseLocation } from './essentialcontacts/DocumentAiWarehouseLocation';
import { Channel as EVENTARC_Channel } from './eventarc/Channel';
import { GoogleChannelConfig as EVENTARC_GoogleChannelConfig } from './eventarc/GoogleChannelConfig';
import { Trigger as EVENTARC_Trigger } from './eventarc/Trigger';
import { Backup as FILESTORE_Backup } from './filestore/Backup';
import { Instance as FILESTORE_Instance } from './filestore/Instance';
import { Snapshot as FILESTORE_Snapshot } from './filestore/Snapshot';
import { AndroidApp as FIREBASE_AndroidApp } from './firebase/AndroidApp';
import { AppCheckAppAttestConfig as FIREBASE_AppCheckAppAttestConfig } from './firebase/AppCheckAppAttestConfig';
import { AppCheckDebugToken as FIREBASE_AppCheckDebugToken } from './firebase/AppCheckDebugToken';
import { AppCheckPlayIntegrityConfig as FIREBASE_AppCheckPlayIntegrityConfig } from './firebase/AppCheckPlayIntegrityConfig';
import { AppCheckRecaptchaEnterpriseConfig as FIREBASE_AppCheckRecaptchaEnterpriseConfig } from './firebase/AppCheckRecaptchaEnterpriseConfig';
import { AppCheckRecaptchaV3Config as FIREBASE_AppCheckRecaptchaV3Config } from './firebase/AppCheckRecaptchaV3Config';
import { AppCheckServiceConfig as FIREBASE_AppCheckServiceConfig } from './firebase/AppCheckServiceConfig';
import { AppleApp as FIREBASE_AppleApp } from './firebase/AppleApp';
import { DatabaseInstance as FIREBASE_DatabaseInstance } from './firebase/DatabaseInstance';
import { ExtensionsInstance as FIREBASE_ExtensionsInstance } from './firebase/ExtensionsInstance';
import { HostingChannel as FIREBASE_HostingChannel } from './firebase/HostingChannel';
import { HostingCustomDomain as FIREBASE_HostingCustomDomain } from './firebase/HostingCustomDomain';
import { HostingRelease as FIREBASE_HostingRelease } from './firebase/HostingRelease';
import { HostingSite as FIREBASE_HostingSite } from './firebase/HostingSite';
import { HostingVersion as FIREBASE_HostingVersion } from './firebase/HostingVersion';
import { Project as FIREBASE_Project } from './firebase/Project';
import { StorageBucket as FIREBASE_StorageBucket } from './firebase/StorageBucket';
import { WebApp as FIREBASE_WebApp } from './firebase/WebApp';
import { Release as FIREBASERULES_Release } from './firebaserules/Release';
import { Ruleset as FIREBASERULES_Ruleset } from './firebaserules/Ruleset';
import { BackupSchedule as FIRESTORE_BackupSchedule } from './firestore/BackupSchedule';
import { Database as FIRESTORE_Database } from './firestore/Database';
import { Document as FIRESTORE_Document } from './firestore/Document';
import { Field as FIRESTORE_Field } from './firestore/Field';
import { Index as FIRESTORE_Index } from './firestore/Index';
import { AccessApprovalSettings as FOLDER_AccessApprovalSettings } from './folder/AccessApprovalSettings';
import { IamAuditConfig as FOLDER_IamAuditConfig } from './folder/IamAuditConfig';
import { IAMBinding as FOLDER_IAMBinding } from './folder/IAMBinding';
import { IAMMember as FOLDER_IAMMember } from './folder/IAMMember';
import { IAMPolicy as FOLDER_IAMPolicy } from './folder/IAMPolicy';
import { OrganizationPolicy as FOLDER_OrganizationPolicy } from './folder/OrganizationPolicy';
import { BackupPlan as GKEBACKUP_BackupPlan } from './gkebackup/BackupPlan';
import { BackupPlanIamBinding as GKEBACKUP_BackupPlanIamBinding } from './gkebackup/BackupPlanIamBinding';
import { BackupPlanIamMember as GKEBACKUP_BackupPlanIamMember } from './gkebackup/BackupPlanIamMember';
import { BackupPlanIamPolicy as GKEBACKUP_BackupPlanIamPolicy } from './gkebackup/BackupPlanIamPolicy';
import { RestorePlan as GKEBACKUP_RestorePlan } from './gkebackup/RestorePlan';
import { RestorePlanIamBinding as GKEBACKUP_RestorePlanIamBinding } from './gkebackup/RestorePlanIamBinding';
import { RestorePlanIamMember as GKEBACKUP_RestorePlanIamMember } from './gkebackup/RestorePlanIamMember';
import { RestorePlanIamPolicy as GKEBACKUP_RestorePlanIamPolicy } from './gkebackup/RestorePlanIamPolicy';
import { Feature as GKEHUB_Feature } from './gkehub/Feature';
import { FeatureIamBinding as GKEHUB_FeatureIamBinding } from './gkehub/FeatureIamBinding';
import { FeatureIamMember as GKEHUB_FeatureIamMember } from './gkehub/FeatureIamMember';
import { FeatureIamPolicy as GKEHUB_FeatureIamPolicy } from './gkehub/FeatureIamPolicy';
import { FeatureMembership as GKEHUB_FeatureMembership } from './gkehub/FeatureMembership';
import { Fleet as GKEHUB_Fleet } from './gkehub/Fleet';
import { Membership as GKEHUB_Membership } from './gkehub/Membership';
import { MembershipBinding as GKEHUB_MembershipBinding } from './gkehub/MembershipBinding';
import { MembershipIamBinding as GKEHUB_MembershipIamBinding } from './gkehub/MembershipIamBinding';
import { MembershipIamMember as GKEHUB_MembershipIamMember } from './gkehub/MembershipIamMember';
import { MembershipIamPolicy as GKEHUB_MembershipIamPolicy } from './gkehub/MembershipIamPolicy';
import { MembershipRbacRoleBinding as GKEHUB_MembershipRbacRoleBinding } from './gkehub/MembershipRbacRoleBinding';
import { Namespace as GKEHUB_Namespace } from './gkehub/Namespace';
import { Scope as GKEHUB_Scope } from './gkehub/Scope';
import { ScopeIamBinding as GKEHUB_ScopeIamBinding } from './gkehub/ScopeIamBinding';
import { ScopeIamMember as GKEHUB_ScopeIamMember } from './gkehub/ScopeIamMember';
import { ScopeIamPolicy as GKEHUB_ScopeIamPolicy } from './gkehub/ScopeIamPolicy';
import { ScopeRbacRoleBinding as GKEHUB_ScopeRbacRoleBinding } from './gkehub/ScopeRbacRoleBinding';
import { BareMetalAdminCluster as GKEONPREM_BareMetalAdminCluster } from './gkeonprem/BareMetalAdminCluster';
import { BareMetalCluster as GKEONPREM_BareMetalCluster } from './gkeonprem/BareMetalCluster';
import { BareMetalNodePool as GKEONPREM_BareMetalNodePool } from './gkeonprem/BareMetalNodePool';
import { VMwareCluster as GKEONPREM_VMwareCluster } from './gkeonprem/VMwareCluster';
import { VMwareNodePool as GKEONPREM_VMwareNodePool } from './gkeonprem/VMwareNodePool';
import { ConsentStore as HEALTHCARE_ConsentStore } from './healthcare/ConsentStore';
import { ConsentStoreIamBinding as HEALTHCARE_ConsentStoreIamBinding } from './healthcare/ConsentStoreIamBinding';
import { ConsentStoreIamMember as HEALTHCARE_ConsentStoreIamMember } from './healthcare/ConsentStoreIamMember';
import { ConsentStoreIamPolicy as HEALTHCARE_ConsentStoreIamPolicy } from './healthcare/ConsentStoreIamPolicy';
import { Dataset as HEALTHCARE_Dataset } from './healthcare/Dataset';
import { DatasetIamBinding as HEALTHCARE_DatasetIamBinding } from './healthcare/DatasetIamBinding';
import { DatasetIamMember as HEALTHCARE_DatasetIamMember } from './healthcare/DatasetIamMember';
import { DatasetIamPolicy as HEALTHCARE_DatasetIamPolicy } from './healthcare/DatasetIamPolicy';
import { DicomStore as HEALTHCARE_DicomStore } from './healthcare/DicomStore';
import { DicomStoreIamBinding as HEALTHCARE_DicomStoreIamBinding } from './healthcare/DicomStoreIamBinding';
import { DicomStoreIamMember as HEALTHCARE_DicomStoreIamMember } from './healthcare/DicomStoreIamMember';
import { DicomStoreIamPolicy as HEALTHCARE_DicomStoreIamPolicy } from './healthcare/DicomStoreIamPolicy';
import { FhirStore as HEALTHCARE_FhirStore } from './healthcare/FhirStore';
import { FhirStoreIamBinding as HEALTHCARE_FhirStoreIamBinding } from './healthcare/FhirStoreIamBinding';
import { FhirStoreIamMember as HEALTHCARE_FhirStoreIamMember } from './healthcare/FhirStoreIamMember';
import { FhirStoreIamPolicy as HEALTHCARE_FhirStoreIamPolicy } from './healthcare/FhirStoreIamPolicy';
import { Hl7Store as HEALTHCARE_Hl7Store } from './healthcare/Hl7Store';
import { Hl7StoreIamBinding as HEALTHCARE_Hl7StoreIamBinding } from './healthcare/Hl7StoreIamBinding';
import { Hl7StoreIamMember as HEALTHCARE_Hl7StoreIamMember } from './healthcare/Hl7StoreIamMember';
import { Hl7StoreIamPolicy as HEALTHCARE_Hl7StoreIamPolicy } from './healthcare/Hl7StoreIamPolicy';
import { AccessBoundaryPolicy as IAM_AccessBoundaryPolicy } from './iam/AccessBoundaryPolicy';
import { DenyPolicy as IAM_DenyPolicy } from './iam/DenyPolicy';
import { WorkforcePool as IAM_WorkforcePool } from './iam/WorkforcePool';
import { WorkforcePoolProvider as IAM_WorkforcePoolProvider } from './iam/WorkforcePoolProvider';
import { WorkloadIdentityPool as IAM_WorkloadIdentityPool } from './iam/WorkloadIdentityPool';
import { WorkloadIdentityPoolProvider as IAM_WorkloadIdentityPoolProvider } from './iam/WorkloadIdentityPoolProvider';
import { AppEngineServiceIamBinding as IAP_AppEngineServiceIamBinding } from './iap/AppEngineServiceIamBinding';
import { AppEngineServiceIamMember as IAP_AppEngineServiceIamMember } from './iap/AppEngineServiceIamMember';
import { AppEngineServiceIamPolicy as IAP_AppEngineServiceIamPolicy } from './iap/AppEngineServiceIamPolicy';
import { AppEngineVersionIamBinding as IAP_AppEngineVersionIamBinding } from './iap/AppEngineVersionIamBinding';
import { AppEngineVersionIamMember as IAP_AppEngineVersionIamMember } from './iap/AppEngineVersionIamMember';
import { AppEngineVersionIamPolicy as IAP_AppEngineVersionIamPolicy } from './iap/AppEngineVersionIamPolicy';
import { Brand as IAP_Brand } from './iap/Brand';
import { Client as IAP_Client } from './iap/Client';
import { TunnelIamBinding as IAP_TunnelIamBinding } from './iap/TunnelIamBinding';
import { TunnelIamMember as IAP_TunnelIamMember } from './iap/TunnelIamMember';
import { TunnelIamPolicy as IAP_TunnelIamPolicy } from './iap/TunnelIamPolicy';
import { TunnelInstanceIAMBinding as IAP_TunnelInstanceIAMBinding } from './iap/TunnelInstanceIAMBinding';
import { TunnelInstanceIAMMember as IAP_TunnelInstanceIAMMember } from './iap/TunnelInstanceIAMMember';
import { TunnelInstanceIAMPolicy as IAP_TunnelInstanceIAMPolicy } from './iap/TunnelInstanceIAMPolicy';
import { WebBackendServiceIamBinding as IAP_WebBackendServiceIamBinding } from './iap/WebBackendServiceIamBinding';
import { WebBackendServiceIamMember as IAP_WebBackendServiceIamMember } from './iap/WebBackendServiceIamMember';
import { WebBackendServiceIamPolicy as IAP_WebBackendServiceIamPolicy } from './iap/WebBackendServiceIamPolicy';
import { WebIamBinding as IAP_WebIamBinding } from './iap/WebIamBinding';
import { WebIamMember as IAP_WebIamMember } from './iap/WebIamMember';
import { WebIamPolicy as IAP_WebIamPolicy } from './iap/WebIamPolicy';
import { WebRegionBackendServiceIamBinding as IAP_WebRegionBackendServiceIamBinding } from './iap/WebRegionBackendServiceIamBinding';
import { WebRegionBackendServiceIamMember as IAP_WebRegionBackendServiceIamMember } from './iap/WebRegionBackendServiceIamMember';
import { WebRegionBackendServiceIamPolicy as IAP_WebRegionBackendServiceIamPolicy } from './iap/WebRegionBackendServiceIamPolicy';
import { WebTypeAppEngingIamBinding as IAP_WebTypeAppEngingIamBinding } from './iap/WebTypeAppEngingIamBinding';
import { WebTypeAppEngingIamMember as IAP_WebTypeAppEngingIamMember } from './iap/WebTypeAppEngingIamMember';
import { WebTypeAppEngingIamPolicy as IAP_WebTypeAppEngingIamPolicy } from './iap/WebTypeAppEngingIamPolicy';
import { WebTypeComputeIamBinding as IAP_WebTypeComputeIamBinding } from './iap/WebTypeComputeIamBinding';
import { WebTypeComputeIamMember as IAP_WebTypeComputeIamMember } from './iap/WebTypeComputeIamMember';
import { WebTypeComputeIamPolicy as IAP_WebTypeComputeIamPolicy } from './iap/WebTypeComputeIamPolicy';
import { Config as IDENTITYPLATFORM_Config } from './identityplatform/Config';
import { DefaultSupportedIdpConfig as IDENTITYPLATFORM_DefaultSupportedIdpConfig } from './identityplatform/DefaultSupportedIdpConfig';
import { InboundSamlConfig as IDENTITYPLATFORM_InboundSamlConfig } from './identityplatform/InboundSamlConfig';
import { OauthIdpConfig as IDENTITYPLATFORM_OauthIdpConfig } from './identityplatform/OauthIdpConfig';
import { ProjectDefaultConfig as IDENTITYPLATFORM_ProjectDefaultConfig } from './identityplatform/ProjectDefaultConfig';
import { Tenant as IDENTITYPLATFORM_Tenant } from './identityplatform/Tenant';
import { TenantDefaultSupportedIdpConfig as IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig } from './identityplatform/TenantDefaultSupportedIdpConfig';
import { TenantInboundSamlConfig as IDENTITYPLATFORM_TenantInboundSamlConfig } from './identityplatform/TenantInboundSamlConfig';
import { TenantOauthIdpConfig as IDENTITYPLATFORM_TenantOauthIdpConfig } from './identityplatform/TenantOauthIdpConfig';
import { Connection as INTEGRATIONCONNECTORS_Connection } from './integrationconnectors/Connection';
import { EndpointAttachment as INTEGRATIONCONNECTORS_EndpointAttachment } from './integrationconnectors/EndpointAttachment';
import { CryptoKey as KMS_CryptoKey } from './kms/CryptoKey';
import { CryptoKeyIAMBinding as KMS_CryptoKeyIAMBinding } from './kms/CryptoKeyIAMBinding';
import { CryptoKeyIAMMember as KMS_CryptoKeyIAMMember } from './kms/CryptoKeyIAMMember';
import { CryptoKeyIAMPolicy as KMS_CryptoKeyIAMPolicy } from './kms/CryptoKeyIAMPolicy';
import { CryptoKeyVersion as KMS_CryptoKeyVersion } from './kms/CryptoKeyVersion';
import { KeyRing as KMS_KeyRing } from './kms/KeyRing';
import { KeyRingIAMBinding as KMS_KeyRingIAMBinding } from './kms/KeyRingIAMBinding';
import { KeyRingIAMMember as KMS_KeyRingIAMMember } from './kms/KeyRingIAMMember';
import { KeyRingIAMPolicy as KMS_KeyRingIAMPolicy } from './kms/KeyRingIAMPolicy';
import { KeyRingImportJob as KMS_KeyRingImportJob } from './kms/KeyRingImportJob';
import { SecretCiphertext as KMS_SecretCiphertext } from './kms/SecretCiphertext';
import { BillingAccountBucketConfig as LOGGING_BillingAccountBucketConfig } from './logging/BillingAccountBucketConfig';
import { BillingAccountExclusion as LOGGING_BillingAccountExclusion } from './logging/BillingAccountExclusion';
import { BillingAccountSink as LOGGING_BillingAccountSink } from './logging/BillingAccountSink';
import { FolderBucketConfig as LOGGING_FolderBucketConfig } from './logging/FolderBucketConfig';
import { FolderExclusion as LOGGING_FolderExclusion } from './logging/FolderExclusion';
import { FolderSettings as LOGGING_FolderSettings } from './logging/FolderSettings';
import { FolderSink as LOGGING_FolderSink } from './logging/FolderSink';
import { LinkedDataset as LOGGING_LinkedDataset } from './logging/LinkedDataset';
import { LogView as LOGGING_LogView } from './logging/LogView';
import { Metric as LOGGING_Metric } from './logging/Metric';
import { OrganizationBucketConfig as LOGGING_OrganizationBucketConfig } from './logging/OrganizationBucketConfig';
import { OrganizationExclusion as LOGGING_OrganizationExclusion } from './logging/OrganizationExclusion';
import { OrganizationSettings as LOGGING_OrganizationSettings } from './logging/OrganizationSettings';
import { OrganizationSink as LOGGING_OrganizationSink } from './logging/OrganizationSink';
import { ProjectBucketConfig as LOGGING_ProjectBucketConfig } from './logging/ProjectBucketConfig';
import { ProjectExclusion as LOGGING_ProjectExclusion } from './logging/ProjectExclusion';
import { ProjectSink as LOGGING_ProjectSink } from './logging/ProjectSink';
import { Instance as LOOKER_Instance } from './looker/Instance';
import { Instance as MEMCACHE_Instance } from './memcache/Instance';
import { Group as MIGRATIONCENTER_Group } from './migrationcenter/Group';
import { PreferenceSet as MIGRATIONCENTER_PreferenceSet } from './migrationcenter/PreferenceSet';
import { EngineModel as ML_EngineModel } from './ml/EngineModel';
import { AlertPolicy as MONITORING_AlertPolicy } from './monitoring/AlertPolicy';
import { CustomService as MONITORING_CustomService } from './monitoring/CustomService';
import { Dashboard as MONITORING_Dashboard } from './monitoring/Dashboard';
import { GenericService as MONITORING_GenericService } from './monitoring/GenericService';
import { Group as MONITORING_Group } from './monitoring/Group';
import { MetricDescriptor as MONITORING_MetricDescriptor } from './monitoring/MetricDescriptor';
import { MonitoredProject as MONITORING_MonitoredProject } from './monitoring/MonitoredProject';
import { NotificationChannel as MONITORING_NotificationChannel } from './monitoring/NotificationChannel';
import { Slo as MONITORING_Slo } from './monitoring/Slo';
import { UptimeCheckConfig as MONITORING_UptimeCheckConfig } from './monitoring/UptimeCheckConfig';
import { ActiveDirectory as NETAPP_ActiveDirectory } from './netapp/ActiveDirectory';
import { BackupPolicy as NETAPP_BackupPolicy } from './netapp/BackupPolicy';
import { BackupVault as NETAPP_BackupVault } from './netapp/BackupVault';
import { Kmsconfig as NETAPP_Kmsconfig } from './netapp/Kmsconfig';
import { StoragePool as NETAPP_StoragePool } from './netapp/StoragePool';
import { Volume as NETAPP_Volume } from './netapp/Volume';
import { VolumeReplication as NETAPP_VolumeReplication } from './netapp/VolumeReplication';
import { VolumeSnapshot as NETAPP_VolumeSnapshot } from './netapp/VolumeSnapshot';
import { Hub as NETWORKCONNECTIVITY_Hub } from './networkconnectivity/Hub';
import { PolicyBasedRoute as NETWORKCONNECTIVITY_PolicyBasedRoute } from './networkconnectivity/PolicyBasedRoute';
import { ServiceConnectionPolicy as NETWORKCONNECTIVITY_ServiceConnectionPolicy } from './networkconnectivity/ServiceConnectionPolicy';
import { Spoke as NETWORKCONNECTIVITY_Spoke } from './networkconnectivity/Spoke';
import { ConnectivityTest as NETWORKMANAGEMENT_ConnectivityTest } from './networkmanagement/ConnectivityTest';
import { AddressGroup as NETWORKSECURITY_AddressGroup } from './networksecurity/AddressGroup';
import { AddressGroupIamBinding as NETWORKSECURITY_AddressGroupIamBinding } from './networksecurity/AddressGroupIamBinding';
import { AddressGroupIamMember as NETWORKSECURITY_AddressGroupIamMember } from './networksecurity/AddressGroupIamMember';
import { AddressGroupIamPolicy as NETWORKSECURITY_AddressGroupIamPolicy } from './networksecurity/AddressGroupIamPolicy';
import { AuthorizationPolicy as NETWORKSECURITY_AuthorizationPolicy } from './networksecurity/AuthorizationPolicy';
import { ClientTlsPolicy as NETWORKSECURITY_ClientTlsPolicy } from './networksecurity/ClientTlsPolicy';
import { FirewallEndpoint as NETWORKSECURITY_FirewallEndpoint } from './networksecurity/FirewallEndpoint';
import { GatewaySecurityPolicy as NETWORKSECURITY_GatewaySecurityPolicy } from './networksecurity/GatewaySecurityPolicy';
import { GatewaySecurityPolicyRule as NETWORKSECURITY_GatewaySecurityPolicyRule } from './networksecurity/GatewaySecurityPolicyRule';
import { SecurityProfile as NETWORKSECURITY_SecurityProfile } from './networksecurity/SecurityProfile';
import { SecurityProfileGroup as NETWORKSECURITY_SecurityProfileGroup } from './networksecurity/SecurityProfileGroup';
import { ServerTlsPolicy as NETWORKSECURITY_ServerTlsPolicy } from './networksecurity/ServerTlsPolicy';
import { TlsInspectionPolicy as NETWORKSECURITY_TlsInspectionPolicy } from './networksecurity/TlsInspectionPolicy';
import { UrlList as NETWORKSECURITY_UrlList } from './networksecurity/UrlList';
import { EdgeCacheKeyset as NETWORKSERVICES_EdgeCacheKeyset } from './networkservices/EdgeCacheKeyset';
import { EdgeCacheOrigin as NETWORKSERVICES_EdgeCacheOrigin } from './networkservices/EdgeCacheOrigin';
import { EdgeCacheService as NETWORKSERVICES_EdgeCacheService } from './networkservices/EdgeCacheService';
import { EndpointPolicy as NETWORKSERVICES_EndpointPolicy } from './networkservices/EndpointPolicy';
import { Gateway as NETWORKSERVICES_Gateway } from './networkservices/Gateway';
import { GrpcRoute as NETWORKSERVICES_GrpcRoute } from './networkservices/GrpcRoute';
import { HttpRoute as NETWORKSERVICES_HttpRoute } from './networkservices/HttpRoute';
import { Mesh as NETWORKSERVICES_Mesh } from './networkservices/Mesh';
import { ServiceBinding as NETWORKSERVICES_ServiceBinding } from './networkservices/ServiceBinding';
import { TcpRoute as NETWORKSERVICES_TcpRoute } from './networkservices/TcpRoute';
import { TlsRoute as NETWORKSERVICES_TlsRoute } from './networkservices/TlsRoute';
import { Environment as NOTEBOOKS_Environment } from './notebooks/Environment';
import { Instance as NOTEBOOKS_Instance } from './notebooks/Instance';
import { InstanceIamBinding as NOTEBOOKS_InstanceIamBinding } from './notebooks/InstanceIamBinding';
import { InstanceIamMember as NOTEBOOKS_InstanceIamMember } from './notebooks/InstanceIamMember';
import { InstanceIamPolicy as NOTEBOOKS_InstanceIamPolicy } from './notebooks/InstanceIamPolicy';
import { Location as NOTEBOOKS_Location } from './notebooks/Location';
import { Runtime as NOTEBOOKS_Runtime } from './notebooks/Runtime';
import { RuntimeIamBinding as NOTEBOOKS_RuntimeIamBinding } from './notebooks/RuntimeIamBinding';
import { RuntimeIamMember as NOTEBOOKS_RuntimeIamMember } from './notebooks/RuntimeIamMember';
import { RuntimeIamPolicy as NOTEBOOKS_RuntimeIamPolicy } from './notebooks/RuntimeIamPolicy';
import { AccessApprovalSettings as ORGANIZATIONS_AccessApprovalSettings } from './organizations/AccessApprovalSettings';
import { Folder as ORGANIZATIONS_Folder } from './organizations/Folder';
import { IamAuditConfig as ORGANIZATIONS_IamAuditConfig } from './organizations/IamAuditConfig';
import { IAMBinding as ORGANIZATIONS_IAMBinding } from './organizations/IAMBinding';
import { IAMCustomRole as ORGANIZATIONS_IAMCustomRole } from './organizations/IAMCustomRole';
import { IAMMember as ORGANIZATIONS_IAMMember } from './organizations/IAMMember';
import { IAMPolicy as ORGANIZATIONS_IAMPolicy } from './organizations/IAMPolicy';
import { Policy as ORGANIZATIONS_Policy } from './organizations/Policy';
import { Project as ORGANIZATIONS_Project } from './organizations/Project';
import { CustomConstraint as ORGPOLICY_CustomConstraint } from './orgpolicy/CustomConstraint';
import { Policy as ORGPOLICY_Policy } from './orgpolicy/Policy';
import { GuestPolicies as OSCONFIG_GuestPolicies } from './osconfig/GuestPolicies';
import { OsPolicyAssignment as OSCONFIG_OsPolicyAssignment } from './osconfig/OsPolicyAssignment';
import { PatchDeployment as OSCONFIG_PatchDeployment } from './osconfig/PatchDeployment';
import { SshPublicKey as OSLOGIN_SshPublicKey } from './oslogin/SshPublicKey';
import { AccessApprovalSettings as PROJECTS_AccessApprovalSettings } from './projects/AccessApprovalSettings';
import { ApiKey as PROJECTS_ApiKey } from './projects/ApiKey';
import { DefaultServiceAccounts as PROJECTS_DefaultServiceAccounts } from './projects/DefaultServiceAccounts';
import { IAMAuditConfig as PROJECTS_IAMAuditConfig } from './projects/IAMAuditConfig';
import { IAMBinding as PROJECTS_IAMBinding } from './projects/IAMBinding';
import { IAMCustomRole as PROJECTS_IAMCustomRole } from './projects/IAMCustomRole';
import { IAMMember as PROJECTS_IAMMember } from './projects/IAMMember';
import { IAMPolicy as PROJECTS_IAMPolicy } from './projects/IAMPolicy';
import { OrganizationPolicy as PROJECTS_OrganizationPolicy } from './projects/OrganizationPolicy';
import { Service as PROJECTS_Service } from './projects/Service';
import { ServiceIdentity as PROJECTS_ServiceIdentity } from './projects/ServiceIdentity';
import { UsageExportBucket as PROJECTS_UsageExportBucket } from './projects/UsageExportBucket';
import { LiteReservation as PUBSUB_LiteReservation } from './pubsub/LiteReservation';
import { LiteSubscription as PUBSUB_LiteSubscription } from './pubsub/LiteSubscription';
import { LiteTopic as PUBSUB_LiteTopic } from './pubsub/LiteTopic';
import { Schema as PUBSUB_Schema } from './pubsub/Schema';
import { SchemaIamBinding as PUBSUB_SchemaIamBinding } from './pubsub/SchemaIamBinding';
import { SchemaIamMember as PUBSUB_SchemaIamMember } from './pubsub/SchemaIamMember';
import { SchemaIamPolicy as PUBSUB_SchemaIamPolicy } from './pubsub/SchemaIamPolicy';
import { Subscription as PUBSUB_Subscription } from './pubsub/Subscription';
import { SubscriptionIAMBinding as PUBSUB_SubscriptionIAMBinding } from './pubsub/SubscriptionIAMBinding';
import { SubscriptionIAMMember as PUBSUB_SubscriptionIAMMember } from './pubsub/SubscriptionIAMMember';
import { SubscriptionIAMPolicy as PUBSUB_SubscriptionIAMPolicy } from './pubsub/SubscriptionIAMPolicy';
import { Topic as PUBSUB_Topic } from './pubsub/Topic';
import { TopicIAMBinding as PUBSUB_TopicIAMBinding } from './pubsub/TopicIAMBinding';
import { TopicIAMMember as PUBSUB_TopicIAMMember } from './pubsub/TopicIAMMember';
import { TopicIAMPolicy as PUBSUB_TopicIAMPolicy } from './pubsub/TopicIAMPolicy';
import { EnterpriseKey as RECAPTCHA_EnterpriseKey } from './recaptcha/EnterpriseKey';
import { Cluster as REDIS_Cluster } from './redis/Cluster';
import { Instance as REDIS_Instance } from './redis/Instance';
import { Lien as RESOURCEMANAGER_Lien } from './resourcemanager/Lien';
import { Config as RUNTIMECONFIG_Config } from './runtimeconfig/Config';
import { ConfigIamBinding as RUNTIMECONFIG_ConfigIamBinding } from './runtimeconfig/ConfigIamBinding';
import { ConfigIamMember as RUNTIMECONFIG_ConfigIamMember } from './runtimeconfig/ConfigIamMember';
import { ConfigIamPolicy as RUNTIMECONFIG_ConfigIamPolicy } from './runtimeconfig/ConfigIamPolicy';
import { Variable as RUNTIMECONFIG_Variable } from './runtimeconfig/Variable';
import { Secret as SECRETMANAGER_Secret } from './secretmanager/Secret';
import { SecretIamBinding as SECRETMANAGER_SecretIamBinding } from './secretmanager/SecretIamBinding';
import { SecretIamMember as SECRETMANAGER_SecretIamMember } from './secretmanager/SecretIamMember';
import { SecretIamPolicy as SECRETMANAGER_SecretIamPolicy } from './secretmanager/SecretIamPolicy';
import { SecretVersion as SECRETMANAGER_SecretVersion } from './secretmanager/SecretVersion';
import { Instance as SECURESOURCEMANAGER_Instance } from './securesourcemanager/Instance';
import { InstanceIamBinding as SECURESOURCEMANAGER_InstanceIamBinding } from './securesourcemanager/InstanceIamBinding';
import { InstanceIamMember as SECURESOURCEMANAGER_InstanceIamMember } from './securesourcemanager/InstanceIamMember';
import { InstanceIamPolicy as SECURESOURCEMANAGER_InstanceIamPolicy } from './securesourcemanager/InstanceIamPolicy';
import { EventThreatDetectionCustomModule as SECURITYCENTER_EventThreatDetectionCustomModule } from './securitycenter/EventThreatDetectionCustomModule';
import { FolderCustomModule as SECURITYCENTER_FolderCustomModule } from './securitycenter/FolderCustomModule';
import { InstanceIamBinding as SECURITYCENTER_InstanceIamBinding } from './securitycenter/InstanceIamBinding';
import { InstanceIamMember as SECURITYCENTER_InstanceIamMember } from './securitycenter/InstanceIamMember';
import { InstanceIamPolicy as SECURITYCENTER_InstanceIamPolicy } from './securitycenter/InstanceIamPolicy';
import { MuteConfig as SECURITYCENTER_MuteConfig } from './securitycenter/MuteConfig';
import { NotificationConfig as SECURITYCENTER_NotificationConfig } from './securitycenter/NotificationConfig';
import { OrganizationCustomModule as SECURITYCENTER_OrganizationCustomModule } from './securitycenter/OrganizationCustomModule';
import { ProjectCustomModule as SECURITYCENTER_ProjectCustomModule } from './securitycenter/ProjectCustomModule';
import { Source as SECURITYCENTER_Source } from './securitycenter/Source';
import { SourceIamBinding as SECURITYCENTER_SourceIamBinding } from './securitycenter/SourceIamBinding';
import { SourceIamMember as SECURITYCENTER_SourceIamMember } from './securitycenter/SourceIamMember';
import { SourceIamPolicy as SECURITYCENTER_SourceIamPolicy } from './securitycenter/SourceIamPolicy';
import { Posture as SECURITYPOSTURE_Posture } from './securityposture/Posture';
import { PostureDeployment as SECURITYPOSTURE_PostureDeployment } from './securityposture/PostureDeployment';
import { Account as SERVICEACCOUNT_Account } from './serviceaccount/Account';
import { IAMBinding as SERVICEACCOUNT_IAMBinding } from './serviceaccount/IAMBinding';
import { IAMMember as SERVICEACCOUNT_IAMMember } from './serviceaccount/IAMMember';
import { IAMPolicy as SERVICEACCOUNT_IAMPolicy } from './serviceaccount/IAMPolicy';
import { Key as SERVICEACCOUNT_Key } from './serviceaccount/Key';
import { Endpoint as SERVICEDIRECTORY_Endpoint } from './servicedirectory/Endpoint';
import { Namespace as SERVICEDIRECTORY_Namespace } from './servicedirectory/Namespace';
import { NamespaceIamBinding as SERVICEDIRECTORY_NamespaceIamBinding } from './servicedirectory/NamespaceIamBinding';
import { NamespaceIamMember as SERVICEDIRECTORY_NamespaceIamMember } from './servicedirectory/NamespaceIamMember';
import { NamespaceIamPolicy as SERVICEDIRECTORY_NamespaceIamPolicy } from './servicedirectory/NamespaceIamPolicy';
import { Service as SERVICEDIRECTORY_Service } from './servicedirectory/Service';
import { ServiceIamBinding as SERVICEDIRECTORY_ServiceIamBinding } from './servicedirectory/ServiceIamBinding';
import { ServiceIamMember as SERVICEDIRECTORY_ServiceIamMember } from './servicedirectory/ServiceIamMember';
import { ServiceIamPolicy as SERVICEDIRECTORY_ServiceIamPolicy } from './servicedirectory/ServiceIamPolicy';
import { Connection as SERVICENETWORKING_Connection } from './servicenetworking/Connection';
import { PeeredDnsDomain as SERVICENETWORKING_PeeredDnsDomain } from './servicenetworking/PeeredDnsDomain';
import { ConsumerQuotaOverride as SERVICEUSAGE_ConsumerQuotaOverride } from './serviceusage/ConsumerQuotaOverride';
import { Repository as SOURCEREPO_Repository } from './sourcerepo/Repository';
import { RepositoryIamBinding as SOURCEREPO_RepositoryIamBinding } from './sourcerepo/RepositoryIamBinding';
import { RepositoryIamMember as SOURCEREPO_RepositoryIamMember } from './sourcerepo/RepositoryIamMember';
import { RepositoryIamPolicy as SOURCEREPO_RepositoryIamPolicy } from './sourcerepo/RepositoryIamPolicy';
import { Database as SPANNER_Database } from './spanner/Database';
import { DatabaseIAMBinding as SPANNER_DatabaseIAMBinding } from './spanner/DatabaseIAMBinding';
import { DatabaseIAMMember as SPANNER_DatabaseIAMMember } from './spanner/DatabaseIAMMember';
import { DatabaseIAMPolicy as SPANNER_DatabaseIAMPolicy } from './spanner/DatabaseIAMPolicy';
import { Instance as SPANNER_Instance } from './spanner/Instance';
import { InstanceIAMBinding as SPANNER_InstanceIAMBinding } from './spanner/InstanceIAMBinding';
import { InstanceIAMMember as SPANNER_InstanceIAMMember } from './spanner/InstanceIAMMember';
import { InstanceIAMPolicy as SPANNER_InstanceIAMPolicy } from './spanner/InstanceIAMPolicy';
import { Database as SQL_Database } from './sql/Database';
import { DatabaseInstance as SQL_DatabaseInstance } from './sql/DatabaseInstance';
import { SourceRepresentationInstance as SQL_SourceRepresentationInstance } from './sql/SourceRepresentationInstance';
import { SslCert as SQL_SslCert } from './sql/SslCert';
import { User as SQL_User } from './sql/User';
import { Bucket as STORAGE_Bucket } from './storage/Bucket';
import { BucketAccessControl as STORAGE_BucketAccessControl } from './storage/BucketAccessControl';
import { BucketACL as STORAGE_BucketACL } from './storage/BucketACL';
import { BucketIAMBinding as STORAGE_BucketIAMBinding } from './storage/BucketIAMBinding';
import { BucketIAMMember as STORAGE_BucketIAMMember } from './storage/BucketIAMMember';
import { BucketIAMPolicy as STORAGE_BucketIAMPolicy } from './storage/BucketIAMPolicy';
import { BucketObject as STORAGE_BucketObject } from './storage/BucketObject';
import { DefaultObjectAccessControl as STORAGE_DefaultObjectAccessControl } from './storage/DefaultObjectAccessControl';
import { DefaultObjectACL as STORAGE_DefaultObjectACL } from './storage/DefaultObjectACL';
import { HmacKey as STORAGE_HmacKey } from './storage/HmacKey';
import { InsightsReportConfig as STORAGE_InsightsReportConfig } from './storage/InsightsReportConfig';
import { Notification as STORAGE_Notification } from './storage/Notification';
import { ObjectAccessControl as STORAGE_ObjectAccessControl } from './storage/ObjectAccessControl';
import { ObjectACL as STORAGE_ObjectACL } from './storage/ObjectACL';
import { TransferAgentPool as STORAGE_TransferAgentPool } from './storage/TransferAgentPool';
import { TransferJob as STORAGE_TransferJob } from './storage/TransferJob';
import { LocationTagBinding as TAGS_LocationTagBinding } from './tags/LocationTagBinding';
import { TagBinding as TAGS_TagBinding } from './tags/TagBinding';
import { TagKey as TAGS_TagKey } from './tags/TagKey';
import { TagKeyIamBinding as TAGS_TagKeyIamBinding } from './tags/TagKeyIamBinding';
import { TagKeyIamMember as TAGS_TagKeyIamMember } from './tags/TagKeyIamMember';
import { TagKeyIamPolicy as TAGS_TagKeyIamPolicy } from './tags/TagKeyIamPolicy';
import { TagValue as TAGS_TagValue } from './tags/TagValue';
import { TagValueIamBinding as TAGS_TagValueIamBinding } from './tags/TagValueIamBinding';
import { TagValueIamMember as TAGS_TagValueIamMember } from './tags/TagValueIamMember';
import { TagValueIamPolicy as TAGS_TagValueIamPolicy } from './tags/TagValueIamPolicy';
import { Node as TPU_Node } from './tpu/Node';
import { V2Vm as TPU_V2Vm } from './tpu/V2Vm';
import { AiDataset as VERTEX_AiDataset } from './vertex/AiDataset';
import { AiEndpoint as VERTEX_AiEndpoint } from './vertex/AiEndpoint';
import { AiEndpointIamBinding as VERTEX_AiEndpointIamBinding } from './vertex/AiEndpointIamBinding';
import { AiEndpointIamMember as VERTEX_AiEndpointIamMember } from './vertex/AiEndpointIamMember';
import { AiEndpointIamPolicy as VERTEX_AiEndpointIamPolicy } from './vertex/AiEndpointIamPolicy';
import { AiFeatureGroup as VERTEX_AiFeatureGroup } from './vertex/AiFeatureGroup';
import { AiFeatureGroupFeature as VERTEX_AiFeatureGroupFeature } from './vertex/AiFeatureGroupFeature';
import { AiFeatureOnlineStore as VERTEX_AiFeatureOnlineStore } from './vertex/AiFeatureOnlineStore';
import { AiFeatureOnlineStoreFeatureview as VERTEX_AiFeatureOnlineStoreFeatureview } from './vertex/AiFeatureOnlineStoreFeatureview';
import { AiFeatureStore as VERTEX_AiFeatureStore } from './vertex/AiFeatureStore';
import { AiFeatureStoreEntityType as VERTEX_AiFeatureStoreEntityType } from './vertex/AiFeatureStoreEntityType';
import { AiFeatureStoreEntityTypeFeature as VERTEX_AiFeatureStoreEntityTypeFeature } from './vertex/AiFeatureStoreEntityTypeFeature';
import { AiFeatureStoreEntityTypeIamBinding as VERTEX_AiFeatureStoreEntityTypeIamBinding } from './vertex/AiFeatureStoreEntityTypeIamBinding';
import { AiFeatureStoreEntityTypeIamMember as VERTEX_AiFeatureStoreEntityTypeIamMember } from './vertex/AiFeatureStoreEntityTypeIamMember';
import { AiFeatureStoreEntityTypeIamPolicy as VERTEX_AiFeatureStoreEntityTypeIamPolicy } from './vertex/AiFeatureStoreEntityTypeIamPolicy';
import { AiFeatureStoreIamBinding as VERTEX_AiFeatureStoreIamBinding } from './vertex/AiFeatureStoreIamBinding';
import { AiFeatureStoreIamMember as VERTEX_AiFeatureStoreIamMember } from './vertex/AiFeatureStoreIamMember';
import { AiFeatureStoreIamPolicy as VERTEX_AiFeatureStoreIamPolicy } from './vertex/AiFeatureStoreIamPolicy';
import { AiIndex as VERTEX_AiIndex } from './vertex/AiIndex';
import { AiIndexEndpoint as VERTEX_AiIndexEndpoint } from './vertex/AiIndexEndpoint';
import { AiMetadataStore as VERTEX_AiMetadataStore } from './vertex/AiMetadataStore';
import { AiTensorboard as VERTEX_AiTensorboard } from './vertex/AiTensorboard';
import { Cluster as VMWAREENGINE_Cluster } from './vmwareengine/Cluster';
import { ExternalAccessRule as VMWAREENGINE_ExternalAccessRule } from './vmwareengine/ExternalAccessRule';
import { ExternalAddress as VMWAREENGINE_ExternalAddress } from './vmwareengine/ExternalAddress';
import { Network as VMWAREENGINE_Network } from './vmwareengine/Network';
import { NetworkPeering as VMWAREENGINE_NetworkPeering } from './vmwareengine/NetworkPeering';
import { NetworkPolicy as VMWAREENGINE_NetworkPolicy } from './vmwareengine/NetworkPolicy';
import { PrivateCloud as VMWAREENGINE_PrivateCloud } from './vmwareengine/PrivateCloud';
import { Subnet as VMWAREENGINE_Subnet } from './vmwareengine/Subnet';
import { Connector as VPCACCESS_Connector } from './vpcaccess/Connector';
import { Instance as WORKBENCH_Instance } from './workbench/Instance';
import { InstanceIamBinding as WORKBENCH_InstanceIamBinding } from './workbench/InstanceIamBinding';
import { InstanceIamMember as WORKBENCH_InstanceIamMember } from './workbench/InstanceIamMember';
import { InstanceIamPolicy as WORKBENCH_InstanceIamPolicy } from './workbench/InstanceIamPolicy';
import { Workflow as WORKFLOWS_Workflow } from './workflows/Workflow';
import { Workstation as WORKSTATIONS_Workstation } from './workstations/Workstation';
import { WorkstationCluster as WORKSTATIONS_WorkstationCluster } from './workstations/WorkstationCluster';
import { WorkstationConfig as WORKSTATIONS_WorkstationConfig } from './workstations/WorkstationConfig';
import { WorkstationConfigIamBinding as WORKSTATIONS_WorkstationConfigIamBinding } from './workstations/WorkstationConfigIamBinding';
import { WorkstationConfigIamMember as WORKSTATIONS_WorkstationConfigIamMember } from './workstations/WorkstationConfigIamMember';
import { WorkstationConfigIamPolicy as WORKSTATIONS_WorkstationConfigIamPolicy } from './workstations/WorkstationConfigIamPolicy';
import { WorkstationIamBinding as WORKSTATIONS_WorkstationIamBinding } from './workstations/WorkstationIamBinding';
import { WorkstationIamMember as WORKSTATIONS_WorkstationIamMember } from './workstations/WorkstationIamMember';
import { WorkstationIamPolicy as WORKSTATIONS_WorkstationIamPolicy } from './workstations/WorkstationIamPolicy';

export class ResourceProperties {
  static readonly ResourceFactoryMap1 = new Map<
    ResourceType,
    () => DS_Resource
  >([
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVEL,
      () => new ACCESSCONTEXTMANAGER_AccessLevel(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELCONDITION,
      () => new ACCESSCONTEXTMANAGER_AccessLevelCondition(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELS,
      () => new ACCESSCONTEXTMANAGER_AccessLevels(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_AccessPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMBINDING,
      () => new ACCESSCONTEXTMANAGER_AccessPolicyIamBinding(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMMEMBER,
      () => new ACCESSCONTEXTMANAGER_AccessPolicyIamMember(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMPOLICY,
      () => new ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_AUTHORIZEDORGSDESC,
      () => new ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_EGRESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_EgressPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_GCPUSERACCESSBINDING,
      () => new ACCESSCONTEXTMANAGER_GcpUserAccessBinding(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_INGRESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_IngressPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETER,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeter(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETEREGRESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeterEgressPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERINGRESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeterIngressPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERRESOURCE,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeterResource(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERS,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeters(),
    ],
    [ResourceType.ACTIVEDIRECTORY_DOMAIN, () => new ACTIVEDIRECTORY_Domain()],
    [
      ResourceType.ACTIVEDIRECTORY_DOMAINTRUST,
      () => new ACTIVEDIRECTORY_DomainTrust(),
    ],
    [ResourceType.ACTIVEDIRECTORY_PEERING, () => new ACTIVEDIRECTORY_Peering()],
    [ResourceType.ALLOYDB_BACKUP, () => new ALLOYDB_Backup()],
    [ResourceType.ALLOYDB_CLUSTER, () => new ALLOYDB_Cluster()],
    [ResourceType.ALLOYDB_INSTANCE, () => new ALLOYDB_Instance()],
    [ResourceType.ALLOYDB_USER, () => new ALLOYDB_User()],
    [ResourceType.APIGATEWAY_API, () => new APIGATEWAY_Api()],
    [ResourceType.APIGATEWAY_APICONFIG, () => new APIGATEWAY_ApiConfig()],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMBINDING,
      () => new APIGATEWAY_ApiConfigIamBinding(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMMEMBER,
      () => new APIGATEWAY_ApiConfigIamMember(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMPOLICY,
      () => new APIGATEWAY_ApiConfigIamPolicy(),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMBINDING,
      () => new APIGATEWAY_ApiIamBinding(),
    ],
    [ResourceType.APIGATEWAY_APIIAMMEMBER, () => new APIGATEWAY_ApiIamMember()],
    [ResourceType.APIGATEWAY_APIIAMPOLICY, () => new APIGATEWAY_ApiIamPolicy()],
    [ResourceType.APIGATEWAY_GATEWAY, () => new APIGATEWAY_Gateway()],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMBINDING,
      () => new APIGATEWAY_GatewayIamBinding(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMMEMBER,
      () => new APIGATEWAY_GatewayIamMember(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMPOLICY,
      () => new APIGATEWAY_GatewayIamPolicy(),
    ],
    [ResourceType.APIGEE_ADDONSCONFIG, () => new APIGEE_AddonsConfig()],
    [
      ResourceType.APIGEE_ENDPOINTATTACHMENT,
      () => new APIGEE_EndpointAttachment(),
    ],
    [ResourceType.APIGEE_ENVGROUP, () => new APIGEE_EnvGroup()],
    [
      ResourceType.APIGEE_ENVGROUPATTACHMENT,
      () => new APIGEE_EnvGroupAttachment(),
    ],
    [ResourceType.APIGEE_ENVIRONMENT, () => new APIGEE_Environment()],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMBINDING,
      () => new APIGEE_EnvironmentIamBinding(),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMMEMBER,
      () => new APIGEE_EnvironmentIamMember(),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMPOLICY,
      () => new APIGEE_EnvironmentIamPolicy(),
    ],
    [ResourceType.APIGEE_ENVKEYSTORE, () => new APIGEE_EnvKeystore()],
    [ResourceType.APIGEE_ENVREFERENCES, () => new APIGEE_EnvReferences()],
    [ResourceType.APIGEE_FLOWHOOK, () => new APIGEE_Flowhook()],
    [ResourceType.APIGEE_INSTANCE, () => new APIGEE_Instance()],
    [
      ResourceType.APIGEE_INSTANCEATTACHMENT,
      () => new APIGEE_InstanceAttachment(),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESKEYCERTFILE,
      () => new APIGEE_KeystoresAliasesKeyCertFile(),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESPKCS12,
      () => new APIGEE_KeystoresAliasesPkcs12(),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESSELFSIGNEDCERT,
      () => new APIGEE_KeystoresAliasesSelfSignedCert(),
    ],
    [ResourceType.APIGEE_NATADDRESS, () => new APIGEE_NatAddress()],
    [ResourceType.APIGEE_ORGANIZATION, () => new APIGEE_Organization()],
    [ResourceType.APIGEE_SHAREDFLOW, () => new APIGEE_Sharedflow()],
    [
      ResourceType.APIGEE_SHAREDFLOWDEPLOYMENT,
      () => new APIGEE_SharedflowDeployment(),
    ],
    [
      ResourceType.APIGEE_SYNCAUTHORIZATION,
      () => new APIGEE_SyncAuthorization(),
    ],
    [ResourceType.APIGEE_TARGETSERVER, () => new APIGEE_TargetServer()],
    [ResourceType.APPENGINE_APPLICATION, () => new APPENGINE_Application()],
    [
      ResourceType.APPENGINE_APPLICATIONURLDISPATCHRULES,
      () => new APPENGINE_ApplicationUrlDispatchRules(),
    ],
    [ResourceType.APPENGINE_DOMAINMAPPING, () => new APPENGINE_DomainMapping()],
    [
      ResourceType.APPENGINE_ENGINESPLITTRAFFIC,
      () => new APPENGINE_EngineSplitTraffic(),
    ],
    [ResourceType.APPENGINE_FIREWALLRULE, () => new APPENGINE_FirewallRule()],
    [
      ResourceType.APPENGINE_FLEXIBLEAPPVERSION,
      () => new APPENGINE_FlexibleAppVersion(),
    ],
    [
      ResourceType.APPENGINE_SERVICENETWORKSETTINGS,
      () => new APPENGINE_ServiceNetworkSettings(),
    ],
    [
      ResourceType.APPENGINE_STANDARDAPPVERSION,
      () => new APPENGINE_StandardAppVersion(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORY,
      () => new ARTIFACTREGISTRY_Repository(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMBINDING,
      () => new ARTIFACTREGISTRY_RepositoryIamBinding(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMMEMBER,
      () => new ARTIFACTREGISTRY_RepositoryIamMember(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMPOLICY,
      () => new ARTIFACTREGISTRY_RepositoryIamPolicy(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_VPCSCCONFIG,
      () => new ARTIFACTREGISTRY_VpcscConfig(),
    ],
    [
      ResourceType.ASSUREDWORKLOADS_WORKLOAD,
      () => new ASSUREDWORKLOADS_Workload(),
    ],
    [
      ResourceType.BACKUPDISASTERRECOVERY_MANAGEMENTSERVER,
      () => new BACKUPDISASTERRECOVERY_ManagementServer(),
    ],
    [
      ResourceType.BEYONDCORP_APPCONNECTION,
      () => new BEYONDCORP_AppConnection(),
    ],
    [ResourceType.BEYONDCORP_APPCONNECTOR, () => new BEYONDCORP_AppConnector()],
    [ResourceType.BEYONDCORP_APPGATEWAY, () => new BEYONDCORP_AppGateway()],
    [ResourceType.BIGLAKE_CATALOG, () => new BIGLAKE_Catalog()],
    [ResourceType.BIGLAKE_DATABASE, () => new BIGLAKE_Database()],
    [ResourceType.BIGLAKE_TABLE, () => new BIGLAKE_Table()],
    [ResourceType.BIGQUERY_APPPROFILE, () => new BIGQUERY_AppProfile()],
    [ResourceType.BIGQUERY_BIRESERVATION, () => new BIGQUERY_BiReservation()],
    [
      ResourceType.BIGQUERY_CAPACITYCOMMITMENT,
      () => new BIGQUERY_CapacityCommitment(),
    ],
    [ResourceType.BIGQUERY_CONNECTION, () => new BIGQUERY_Connection()],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMBINDING,
      () => new BIGQUERY_ConnectionIamBinding(),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMMEMBER,
      () => new BIGQUERY_ConnectionIamMember(),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMPOLICY,
      () => new BIGQUERY_ConnectionIamPolicy(),
    ],
    [ResourceType.BIGQUERY_DATASET, () => new BIGQUERY_Dataset()],
    [ResourceType.BIGQUERY_DATASETACCESS, () => new BIGQUERY_DatasetAccess()],
    [
      ResourceType.BIGQUERY_DATASETIAMBINDING,
      () => new BIGQUERY_DatasetIamBinding(),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMMEMBER,
      () => new BIGQUERY_DatasetIamMember(),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMPOLICY,
      () => new BIGQUERY_DatasetIamPolicy(),
    ],
    [
      ResourceType.BIGQUERY_DATATRANSFERCONFIG,
      () => new BIGQUERY_DataTransferConfig(),
    ],
    [ResourceType.BIGQUERY_IAMBINDING, () => new BIGQUERY_IamBinding()],
    [ResourceType.BIGQUERY_IAMMEMBER, () => new BIGQUERY_IamMember()],
    [ResourceType.BIGQUERY_IAMPOLICY, () => new BIGQUERY_IamPolicy()],
    [ResourceType.BIGQUERY_JOB, () => new BIGQUERY_Job()],
    [ResourceType.BIGQUERY_RESERVATION, () => new BIGQUERY_Reservation()],
    [
      ResourceType.BIGQUERY_RESERVATIONASSIGNMENT,
      () => new BIGQUERY_ReservationAssignment(),
    ],
    [ResourceType.BIGQUERY_ROUTINE, () => new BIGQUERY_Routine()],
    [ResourceType.BIGQUERY_TABLE, () => new BIGQUERY_Table()],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGE,
      () => new BIGQUERYANALYTICSHUB_DataExchange(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMBINDING,
      () => new BIGQUERYANALYTICSHUB_DataExchangeIamBinding(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMMEMBER,
      () => new BIGQUERYANALYTICSHUB_DataExchangeIamMember(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMPOLICY,
      () => new BIGQUERYANALYTICSHUB_DataExchangeIamPolicy(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTING,
      () => new BIGQUERYANALYTICSHUB_Listing(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMBINDING,
      () => new BIGQUERYANALYTICSHUB_ListingIamBinding(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMMEMBER,
      () => new BIGQUERYANALYTICSHUB_ListingIamMember(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMPOLICY,
      () => new BIGQUERYANALYTICSHUB_ListingIamPolicy(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICY,
      () => new BIGQUERYDATAPOLICY_DataPolicy(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMBINDING,
      () => new BIGQUERYDATAPOLICY_DataPolicyIamBinding(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMMEMBER,
      () => new BIGQUERYDATAPOLICY_DataPolicyIamMember(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMPOLICY,
      () => new BIGQUERYDATAPOLICY_DataPolicyIamPolicy(),
    ],
    [ResourceType.BIGTABLE_GCPOLICY, () => new BIGTABLE_GCPolicy()],
    [ResourceType.BIGTABLE_INSTANCE, () => new BIGTABLE_Instance()],
    [
      ResourceType.BIGTABLE_INSTANCEIAMBINDING,
      () => new BIGTABLE_InstanceIamBinding(),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMMEMBER,
      () => new BIGTABLE_InstanceIamMember(),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMPOLICY,
      () => new BIGTABLE_InstanceIamPolicy(),
    ],
    [ResourceType.BIGTABLE_TABLE, () => new BIGTABLE_Table()],
    [
      ResourceType.BIGTABLE_TABLEIAMBINDING,
      () => new BIGTABLE_TableIamBinding(),
    ],
    [ResourceType.BIGTABLE_TABLEIAMMEMBER, () => new BIGTABLE_TableIamMember()],
    [ResourceType.BIGTABLE_TABLEIAMPOLICY, () => new BIGTABLE_TableIamPolicy()],
    [
      ResourceType.BILLING_ACCOUNTIAMBINDING,
      () => new BILLING_AccountIamBinding(),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMMEMBER,
      () => new BILLING_AccountIamMember(),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMPOLICY,
      () => new BILLING_AccountIamPolicy(),
    ],
    [ResourceType.BILLING_BUDGET, () => new BILLING_Budget()],
    [ResourceType.BILLING_PROJECTINFO, () => new BILLING_ProjectInfo()],
    [ResourceType.BILLING_SUBACCOUNT, () => new BILLING_SubAccount()],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTOR,
      () => new BINARYAUTHORIZATION_Attestor(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMBINDING,
      () => new BINARYAUTHORIZATION_AttestorIamBinding(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMMEMBER,
      () => new BINARYAUTHORIZATION_AttestorIamMember(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMPOLICY,
      () => new BINARYAUTHORIZATION_AttestorIamPolicy(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_POLICY,
      () => new BINARYAUTHORIZATION_Policy(),
    ],
    [
      ResourceType.BLOCKCHAINNODEENGINE_BLOCKCHAINNODES,
      () => new BLOCKCHAINNODEENGINE_BlockchainNodes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_AUTHORITY,
      () => new CERTIFICATEAUTHORITY_Authority(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOL,
      () => new CERTIFICATEAUTHORITY_CaPool(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMBINDING,
      () => new CERTIFICATEAUTHORITY_CaPoolIamBinding(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMMEMBER,
      () => new CERTIFICATEAUTHORITY_CaPoolIamMember(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMPOLICY,
      () => new CERTIFICATEAUTHORITY_CaPoolIamPolicy(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATE,
      () => new CERTIFICATEAUTHORITY_Certificate(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATE,
      () => new CERTIFICATEAUTHORITY_CertificateTemplate(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMBINDING,
      () => new CERTIFICATEAUTHORITY_CertificateTemplateIamBinding(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMMEMBER,
      () => new CERTIFICATEAUTHORITY_CertificateTemplateIamMember(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMPOLICY,
      () => new CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATE,
      () => new CERTIFICATEMANAGER_Certificate(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEISSUANCECONFIG,
      () => new CERTIFICATEMANAGER_CertificateIssuanceConfig(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAP,
      () => new CERTIFICATEMANAGER_CertificateMap(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAPENTRY,
      () => new CERTIFICATEMANAGER_CertificateMapEntry(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_DNSAUTHORIZATION,
      () => new CERTIFICATEMANAGER_DnsAuthorization(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_TRUSTCONFIG,
      () => new CERTIFICATEMANAGER_TrustConfig(),
    ],
    [ResourceType.CLOUDASSET_FOLDERFEED, () => new CLOUDASSET_FolderFeed()],
    [
      ResourceType.CLOUDASSET_ORGANIZATIONFEED,
      () => new CLOUDASSET_OrganizationFeed(),
    ],
    [ResourceType.CLOUDASSET_PROJECTFEED, () => new CLOUDASSET_ProjectFeed()],
    [
      ResourceType.CLOUDBUILD_BITBUCKETSERVERCONFIG,
      () => new CLOUDBUILD_BitbucketServerConfig(),
    ],
    [ResourceType.CLOUDBUILD_TRIGGER, () => new CLOUDBUILD_Trigger()],
    [ResourceType.CLOUDBUILD_WORKERPOOL, () => new CLOUDBUILD_WorkerPool()],
    [ResourceType.CLOUDBUILDV2_CONNECTION, () => new CLOUDBUILDV2_Connection()],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMBINDING,
      () => new CLOUDBUILDV2_ConnectionIAMBinding(),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMMEMBER,
      () => new CLOUDBUILDV2_ConnectionIAMMember(),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMPOLICY,
      () => new CLOUDBUILDV2_ConnectionIAMPolicy(),
    ],
    [ResourceType.CLOUDBUILDV2_REPOSITORY, () => new CLOUDBUILDV2_Repository()],
    [ResourceType.CLOUDDEPLOY_AUTOMATION, () => new CLOUDDEPLOY_Automation()],
    [
      ResourceType.CLOUDDEPLOY_CUSTOMTARGETTYPE,
      () => new CLOUDDEPLOY_CustomTargetType(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINE,
      () => new CLOUDDEPLOY_DeliveryPipeline(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMBINDING,
      () => new CLOUDDEPLOY_DeliveryPipelineIamBinding(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMMEMBER,
      () => new CLOUDDEPLOY_DeliveryPipelineIamMember(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMPOLICY,
      () => new CLOUDDEPLOY_DeliveryPipelineIamPolicy(),
    ],
    [ResourceType.CLOUDDEPLOY_TARGET, () => new CLOUDDEPLOY_Target()],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMBINDING,
      () => new CLOUDDEPLOY_TargetIamBinding(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMMEMBER,
      () => new CLOUDDEPLOY_TargetIamMember(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMPOLICY,
      () => new CLOUDDEPLOY_TargetIamPolicy(),
    ],
    [
      ResourceType.CLOUDDOMAINS_REGISTRATION,
      () => new CLOUDDOMAINS_Registration(),
    ],
    [ResourceType.CLOUDFUNCTIONS_FUNCTION, () => new CLOUDFUNCTIONS_Function()],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMBINDING,
      () => new CLOUDFUNCTIONS_FunctionIamBinding(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMMEMBER,
      () => new CLOUDFUNCTIONS_FunctionIamMember(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMPOLICY,
      () => new CLOUDFUNCTIONS_FunctionIamPolicy(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTION,
      () => new CLOUDFUNCTIONSV2_Function(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMBINDING,
      () => new CLOUDFUNCTIONSV2_FunctionIamBinding(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMMEMBER,
      () => new CLOUDFUNCTIONSV2_FunctionIamMember(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMPOLICY,
      () => new CLOUDFUNCTIONSV2_FunctionIamPolicy(),
    ],
    [ResourceType.CLOUDIDENTITY_GROUP, () => new CLOUDIDENTITY_Group()],
    [
      ResourceType.CLOUDIDENTITY_GROUPMEMBERSHIP,
      () => new CLOUDIDENTITY_GroupMembership(),
    ],
    [ResourceType.CLOUDIDS_ENDPOINT, () => new CLOUDIDS_Endpoint()],
    [ResourceType.CLOUDRUN_DOMAINMAPPING, () => new CLOUDRUN_DomainMapping()],
    [ResourceType.CLOUDRUN_IAMBINDING, () => new CLOUDRUN_IamBinding()],
    [ResourceType.CLOUDRUN_IAMMEMBER, () => new CLOUDRUN_IamMember()],
    [ResourceType.CLOUDRUN_IAMPOLICY, () => new CLOUDRUN_IamPolicy()],
    [ResourceType.CLOUDRUN_SERVICE, () => new CLOUDRUN_Service()],
    [ResourceType.CLOUDRUNV2_JOB, () => new CLOUDRUNV2_Job()],
    [
      ResourceType.CLOUDRUNV2_JOBIAMBINDING,
      () => new CLOUDRUNV2_JobIamBinding(),
    ],
    [ResourceType.CLOUDRUNV2_JOBIAMMEMBER, () => new CLOUDRUNV2_JobIamMember()],
    [ResourceType.CLOUDRUNV2_JOBIAMPOLICY, () => new CLOUDRUNV2_JobIamPolicy()],
    [ResourceType.CLOUDRUNV2_SERVICE, () => new CLOUDRUNV2_Service()],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMBINDING,
      () => new CLOUDRUNV2_ServiceIamBinding(),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMMEMBER,
      () => new CLOUDRUNV2_ServiceIamMember(),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMPOLICY,
      () => new CLOUDRUNV2_ServiceIamPolicy(),
    ],
    [ResourceType.CLOUDSCHEDULER_JOB, () => new CLOUDSCHEDULER_Job()],
    [ResourceType.CLOUDTASKS_QUEUE, () => new CLOUDTASKS_Queue()],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMBINDING,
      () => new CLOUDTASKS_QueueIamBinding(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMMEMBER,
      () => new CLOUDTASKS_QueueIamMember(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMPOLICY,
      () => new CLOUDTASKS_QueueIamPolicy(),
    ],
    [ResourceType.COMPOSER_ENVIRONMENT, () => new COMPOSER_Environment()],
    [ResourceType.COMPUTE_ADDRESS, () => new COMPUTE_Address()],
    [ResourceType.COMPUTE_ATTACHEDDISK, () => new COMPUTE_AttachedDisk()],
    [ResourceType.COMPUTE_AUTOSCALER, () => new COMPUTE_Autoscaler()],
    [ResourceType.COMPUTE_BACKENDBUCKET, () => new COMPUTE_BackendBucket()],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMBINDING,
      () => new COMPUTE_BackendBucketIamBinding(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMMEMBER,
      () => new COMPUTE_BackendBucketIamMember(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMPOLICY,
      () => new COMPUTE_BackendBucketIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETSIGNEDURLKEY,
      () => new COMPUTE_BackendBucketSignedUrlKey(),
    ],
    [ResourceType.COMPUTE_BACKENDSERVICE, () => new COMPUTE_BackendService()],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMBINDING,
      () => new COMPUTE_BackendServiceIamBinding(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMMEMBER,
      () => new COMPUTE_BackendServiceIamMember(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMPOLICY,
      () => new COMPUTE_BackendServiceIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICESIGNEDURLKEY,
      () => new COMPUTE_BackendServiceSignedUrlKey(),
    ],
    [
      ResourceType.COMPUTE_CAEXTERNALACCOUNTKEY,
      () => new COMPUTE_CaExternalAccountKey(),
    ],
    [ResourceType.COMPUTE_DISK, () => new COMPUTE_Disk()],
    [
      ResourceType.COMPUTE_DISKASYNCREPLICATION,
      () => new COMPUTE_DiskAsyncReplication(),
    ],
    [ResourceType.COMPUTE_DISKIAMBINDING, () => new COMPUTE_DiskIamBinding()],
    [ResourceType.COMPUTE_DISKIAMMEMBER, () => new COMPUTE_DiskIamMember()],
    [ResourceType.COMPUTE_DISKIAMPOLICY, () => new COMPUTE_DiskIamPolicy()],
    [
      ResourceType.COMPUTE_DISKRESOURCEPOLICYATTACHMENT,
      () => new COMPUTE_DiskResourcePolicyAttachment(),
    ],
    [
      ResourceType.COMPUTE_EXTERNALVPNGATEWAY,
      () => new COMPUTE_ExternalVpnGateway(),
    ],
    [ResourceType.COMPUTE_FIREWALL, () => new COMPUTE_Firewall()],
    [ResourceType.COMPUTE_FIREWALLPOLICY, () => new COMPUTE_FirewallPolicy()],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYASSOCIATION,
      () => new COMPUTE_FirewallPolicyAssociation(),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYRULE,
      () => new COMPUTE_FirewallPolicyRule(),
    ],
    [ResourceType.COMPUTE_FORWARDINGRULE, () => new COMPUTE_ForwardingRule()],
    [ResourceType.COMPUTE_GLOBALADDRESS, () => new COMPUTE_GlobalAddress()],
    [
      ResourceType.COMPUTE_GLOBALFORWARDINGRULE,
      () => new COMPUTE_GlobalForwardingRule(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINT,
      () => new COMPUTE_GlobalNetworkEndpoint(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINTGROUP,
      () => new COMPUTE_GlobalNetworkEndpointGroup(),
    ],
    [ResourceType.COMPUTE_HAVPNGATEWAY, () => new COMPUTE_HaVpnGateway()],
    [ResourceType.COMPUTE_HEALTHCHECK, () => new COMPUTE_HealthCheck()],
    [ResourceType.COMPUTE_HTTPHEALTHCHECK, () => new COMPUTE_HttpHealthCheck()],
    [
      ResourceType.COMPUTE_HTTPSHEALTHCHECK,
      () => new COMPUTE_HttpsHealthCheck(),
    ],
    [ResourceType.COMPUTE_IMAGE, () => new COMPUTE_Image()],
    [ResourceType.COMPUTE_IMAGEIAMBINDING, () => new COMPUTE_ImageIamBinding()],
    [ResourceType.COMPUTE_IMAGEIAMMEMBER, () => new COMPUTE_ImageIamMember()],
    [ResourceType.COMPUTE_IMAGEIAMPOLICY, () => new COMPUTE_ImageIamPolicy()],
    [ResourceType.COMPUTE_INSTANCE, () => new COMPUTE_Instance()],
    [
      ResourceType.COMPUTE_INSTANCEFROMMACHINEIMAGE,
      () => new COMPUTE_InstanceFromMachineImage(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEFROMTEMPLATE,
      () => new COMPUTE_InstanceFromTemplate(),
    ],
    [ResourceType.COMPUTE_INSTANCEGROUP, () => new COMPUTE_InstanceGroup()],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMANAGER,
      () => new COMPUTE_InstanceGroupManager(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMEMBERSHIP,
      () => new COMPUTE_InstanceGroupMembership(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPNAMEDPORT,
      () => new COMPUTE_InstanceGroupNamedPort(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMBINDING,
      () => new COMPUTE_InstanceIAMBinding(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMMEMBER,
      () => new COMPUTE_InstanceIAMMember(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMPOLICY,
      () => new COMPUTE_InstanceIAMPolicy(),
    ],
    [
      ResourceType.COMPUTE_INSTANCESETTINGS,
      () => new COMPUTE_InstanceSettings(),
    ],
    [
      ResourceType.COMPUTE_INSTANCETEMPLATE,
      () => new COMPUTE_InstanceTemplate(),
    ],
    [
      ResourceType.COMPUTE_INTERCONNECTATTACHMENT,
      () => new COMPUTE_InterconnectAttachment(),
    ],
    [ResourceType.COMPUTE_MACHINEIMAGE, () => new COMPUTE_MachineImage()],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMBINDING,
      () => new COMPUTE_MachineImageIamBinding(),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMMEMBER,
      () => new COMPUTE_MachineImageIamMember(),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMPOLICY,
      () => new COMPUTE_MachineImageIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_MANAGEDSSLCERTIFICATE,
      () => new COMPUTE_ManagedSslCertificate(),
    ],
    [
      ResourceType.COMPUTE_MANGEDSSLCERTIFICATE,
      () => new COMPUTE_MangedSslCertificate(),
    ],
    [ResourceType.COMPUTE_NETWORK, () => new COMPUTE_Network()],
    [
      ResourceType.COMPUTE_NETWORKATTACHMENT,
      () => new COMPUTE_NetworkAttachment(),
    ],
    [
      ResourceType.COMPUTE_NETWORKEDGESECURITYSERVICE,
      () => new COMPUTE_NetworkEdgeSecurityService(),
    ],
    [ResourceType.COMPUTE_NETWORKENDPOINT, () => new COMPUTE_NetworkEndpoint()],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTGROUP,
      () => new COMPUTE_NetworkEndpointGroup(),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTLIST,
      () => new COMPUTE_NetworkEndpointList(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICY,
      () => new COMPUTE_NetworkFirewallPolicy(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYASSOCIATION,
      () => new COMPUTE_NetworkFirewallPolicyAssociation(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYRULE,
      () => new COMPUTE_NetworkFirewallPolicyRule(),
    ],
    [ResourceType.COMPUTE_NETWORKPEERING, () => new COMPUTE_NetworkPeering()],
    [
      ResourceType.COMPUTE_NETWORKPEERINGROUTESCONFIG,
      () => new COMPUTE_NetworkPeeringRoutesConfig(),
    ],
    [ResourceType.COMPUTE_NODEGROUP, () => new COMPUTE_NodeGroup()],
    [ResourceType.COMPUTE_NODETEMPLATE, () => new COMPUTE_NodeTemplate()],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICY,
      () => new COMPUTE_OrganizationSecurityPolicy(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYASSOCIATION,
      () => new COMPUTE_OrganizationSecurityPolicyAssociation(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYRULE,
      () => new COMPUTE_OrganizationSecurityPolicyRule(),
    ],
    [ResourceType.COMPUTE_PACKETMIRRORING, () => new COMPUTE_PacketMirroring()],
    [
      ResourceType.COMPUTE_PERINSTANCECONFIG,
      () => new COMPUTE_PerInstanceConfig(),
    ],
    [
      ResourceType.COMPUTE_PROJECTDEFAULTNETWORKTIER,
      () => new COMPUTE_ProjectDefaultNetworkTier(),
    ],
    [ResourceType.COMPUTE_PROJECTMETADATA, () => new COMPUTE_ProjectMetadata()],
    [
      ResourceType.COMPUTE_PROJECTMETADATAITEM,
      () => new COMPUTE_ProjectMetadataItem(),
    ],
    [
      ResourceType.COMPUTE_PUBLICADVERTISEDPREFIX,
      () => new COMPUTE_PublicAdvertisedPrefix(),
    ],
    [
      ResourceType.COMPUTE_PUBLICDELEGATEDPREFIX,
      () => new COMPUTE_PublicDelegatedPrefix(),
    ],
    [
      ResourceType.COMPUTE_REGIONAUTOSCALER,
      () => new COMPUTE_RegionAutoscaler(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICE,
      () => new COMPUTE_RegionBackendService(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMBINDING,
      () => new COMPUTE_RegionBackendServiceIamBinding(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMMEMBER,
      () => new COMPUTE_RegionBackendServiceIamMember(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMPOLICY,
      () => new COMPUTE_RegionBackendServiceIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_REGIONCOMMITMENT,
      () => new COMPUTE_RegionCommitment(),
    ],
    [ResourceType.COMPUTE_REGIONDISK, () => new COMPUTE_RegionDisk()],
    [
      ResourceType.COMPUTE_REGIONDISKIAMBINDING,
      () => new COMPUTE_RegionDiskIamBinding(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMMEMBER,
      () => new COMPUTE_RegionDiskIamMember(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMPOLICY,
      () => new COMPUTE_RegionDiskIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKRESOURCEPOLICYATTACHMENT,
      () => new COMPUTE_RegionDiskResourcePolicyAttachment(),
    ],
    [
      ResourceType.COMPUTE_REGIONHEALTHCHECK,
      () => new COMPUTE_RegionHealthCheck(),
    ],
    [
      ResourceType.COMPUTE_REGIONINSTANCEGROUPMANAGER,
      () => new COMPUTE_RegionInstanceGroupManager(),
    ],
    [
      ResourceType.COMPUTE_REGIONINSTANCETEMPLATE,
      () => new COMPUTE_RegionInstanceTemplate(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINT,
      () => new COMPUTE_RegionNetworkEndpoint(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINTGROUP,
      () => new COMPUTE_RegionNetworkEndpointGroup(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICY,
      () => new COMPUTE_RegionNetworkFirewallPolicy(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYASSOCIATION,
      () => new COMPUTE_RegionNetworkFirewallPolicyAssociation(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYRULE,
      () => new COMPUTE_RegionNetworkFirewallPolicyRule(),
    ],
    [
      ResourceType.COMPUTE_REGIONPERINSTANCECONFIG,
      () => new COMPUTE_RegionPerInstanceConfig(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICY,
      () => new COMPUTE_RegionSecurityPolicy(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICYRULE,
      () => new COMPUTE_RegionSecurityPolicyRule(),
    ],
    [
      ResourceType.COMPUTE_REGIONSSLCERTIFICATE,
      () => new COMPUTE_RegionSslCertificate(),
    ],
    [ResourceType.COMPUTE_REGIONSSLPOLICY, () => new COMPUTE_RegionSslPolicy()],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPPROXY,
      () => new COMPUTE_RegionTargetHttpProxy(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPSPROXY,
      () => new COMPUTE_RegionTargetHttpsProxy(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETTCPPROXY,
      () => new COMPUTE_RegionTargetTcpProxy(),
    ],
    [ResourceType.COMPUTE_REGIONURLMAP, () => new COMPUTE_RegionUrlMap()],
    [ResourceType.COMPUTE_RESERVATION, () => new COMPUTE_Reservation()],
    [ResourceType.COMPUTE_RESOURCEPOLICY, () => new COMPUTE_ResourcePolicy()],
    [ResourceType.COMPUTE_ROUTE, () => new COMPUTE_Route()],
    [ResourceType.COMPUTE_ROUTER, () => new COMPUTE_Router()],
    [ResourceType.COMPUTE_ROUTERINTERFACE, () => new COMPUTE_RouterInterface()],
    [ResourceType.COMPUTE_ROUTERNAT, () => new COMPUTE_RouterNat()],
    [ResourceType.COMPUTE_ROUTERPEER, () => new COMPUTE_RouterPeer()],
    [ResourceType.COMPUTE_SECURITYPOLICY, () => new COMPUTE_SecurityPolicy()],
    [
      ResourceType.COMPUTE_SECURITYSCANCONFIG,
      () => new COMPUTE_SecurityScanConfig(),
    ],
    [
      ResourceType.COMPUTE_SERVICEATTACHMENT,
      () => new COMPUTE_ServiceAttachment(),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCHOSTPROJECT,
      () => new COMPUTE_SharedVPCHostProject(),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCSERVICEPROJECT,
      () => new COMPUTE_SharedVPCServiceProject(),
    ],
    [ResourceType.COMPUTE_SNAPSHOT, () => new COMPUTE_Snapshot()],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMBINDING,
      () => new COMPUTE_SnapshotIamBinding(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMMEMBER,
      () => new COMPUTE_SnapshotIamMember(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMPOLICY,
      () => new COMPUTE_SnapshotIamPolicy(),
    ],
    [ResourceType.COMPUTE_SSLCERTIFICATE, () => new COMPUTE_SSLCertificate()],
    [ResourceType.COMPUTE_SSLPOLICY, () => new COMPUTE_SSLPolicy()],
    [ResourceType.COMPUTE_SUBNETWORK, () => new COMPUTE_Subnetwork()],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMBINDING,
      () => new COMPUTE_SubnetworkIAMBinding(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMMEMBER,
      () => new COMPUTE_SubnetworkIAMMember(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMPOLICY,
      () => new COMPUTE_SubnetworkIAMPolicy(),
    ],
    [ResourceType.COMPUTE_TARGETGRPCPROXY, () => new COMPUTE_TargetGrpcProxy()],
    [ResourceType.COMPUTE_TARGETHTTPPROXY, () => new COMPUTE_TargetHttpProxy()],
    [
      ResourceType.COMPUTE_TARGETHTTPSPROXY,
      () => new COMPUTE_TargetHttpsProxy(),
    ],
    [ResourceType.COMPUTE_TARGETINSTANCE, () => new COMPUTE_TargetInstance()],
    [ResourceType.COMPUTE_TARGETPOOL, () => new COMPUTE_TargetPool()],
    [ResourceType.COMPUTE_TARGETSSLPROXY, () => new COMPUTE_TargetSSLProxy()],
    [ResourceType.COMPUTE_TARGETTCPPROXY, () => new COMPUTE_TargetTCPProxy()],
    [ResourceType.COMPUTE_URLMAP, () => new COMPUTE_URLMap()],
    [ResourceType.COMPUTE_VPNGATEWAY, () => new COMPUTE_VPNGateway()],
    [ResourceType.COMPUTE_VPNTUNNEL, () => new COMPUTE_VPNTunnel()],
    [
      ResourceType.CONTAINER_ATTACHEDCLUSTER,
      () => new CONTAINER_AttachedCluster(),
    ],
    [ResourceType.CONTAINER_AWSCLUSTER, () => new CONTAINER_AwsCluster()],
    [ResourceType.CONTAINER_AWSNODEPOOL, () => new CONTAINER_AwsNodePool()],
    [ResourceType.CONTAINER_AZURECLIENT, () => new CONTAINER_AzureClient()],
    [ResourceType.CONTAINER_AZURECLUSTER, () => new CONTAINER_AzureCluster()],
    [ResourceType.CONTAINER_AZURENODEPOOL, () => new CONTAINER_AzureNodePool()],
    [ResourceType.CONTAINER_CLUSTER, () => new CONTAINER_Cluster()],
    [ResourceType.CONTAINER_NODEPOOL, () => new CONTAINER_NodePool()],
    [ResourceType.CONTAINER_REGISTRY, () => new CONTAINER_Registry()],
    [ResourceType.CONTAINERANALYSIS_NOTE, () => new CONTAINERANALYSIS_Note()],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMBINDING,
      () => new CONTAINERANALYSIS_NoteIamBinding(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMMEMBER,
      () => new CONTAINERANALYSIS_NoteIamMember(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMPOLICY,
      () => new CONTAINERANALYSIS_NoteIamPolicy(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_OCCURENCE,
      () => new CONTAINERANALYSIS_Occurence(),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_CONNECTIONPROFILE,
      () => new DATABASEMIGRATIONSERVICE_ConnectionProfile(),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_PRIVATECONNECTION,
      () => new DATABASEMIGRATIONSERVICE_PrivateConnection(),
    ],
    [ResourceType.DATACATALOG_ENTRY, () => new DATACATALOG_Entry()],
    [ResourceType.DATACATALOG_ENTRYGROUP, () => new DATACATALOG_EntryGroup()],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMBINDING,
      () => new DATACATALOG_EntryGroupIamBinding(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMMEMBER,
      () => new DATACATALOG_EntryGroupIamMember(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMPOLICY,
      () => new DATACATALOG_EntryGroupIamPolicy(),
    ],
    [ResourceType.DATACATALOG_POLICYTAG, () => new DATACATALOG_PolicyTag()],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMBINDING,
      () => new DATACATALOG_PolicyTagIamBinding(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMMEMBER,
      () => new DATACATALOG_PolicyTagIamMember(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMPOLICY,
      () => new DATACATALOG_PolicyTagIamPolicy(),
    ],
    [ResourceType.DATACATALOG_TAG, () => new DATACATALOG_Tag()],
    [ResourceType.DATACATALOG_TAGTEMPLATE, () => new DATACATALOG_TagTemplate()],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMBINDING,
      () => new DATACATALOG_TagTemplateIamBinding(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMMEMBER,
      () => new DATACATALOG_TagTemplateIamMember(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMPOLICY,
      () => new DATACATALOG_TagTemplateIamPolicy(),
    ],
    [ResourceType.DATACATALOG_TAXONOMY, () => new DATACATALOG_Taxonomy()],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMBINDING,
      () => new DATACATALOG_TaxonomyIamBinding(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMMEMBER,
      () => new DATACATALOG_TaxonomyIamMember(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMPOLICY,
      () => new DATACATALOG_TaxonomyIamPolicy(),
    ],
    [
      ResourceType.DATAFLOW_FLEXTEMPLATEJOB,
      () => new DATAFLOW_FlexTemplateJob(),
    ],
    [ResourceType.DATAFLOW_JOB, () => new DATAFLOW_Job()],
    [ResourceType.DATAFLOW_PIPELINE, () => new DATAFLOW_Pipeline()],
    [ResourceType.DATAFORM_REPOSITORY, () => new DATAFORM_Repository()],
    [
      ResourceType.DATAFORM_REPOSITORYIAMBINDING,
      () => new DATAFORM_RepositoryIamBinding(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMMEMBER,
      () => new DATAFORM_RepositoryIamMember(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMPOLICY,
      () => new DATAFORM_RepositoryIamPolicy(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYRELEASECONFIG,
      () => new DATAFORM_RepositoryReleaseConfig(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYWORKFLOWCONFIG,
      () => new DATAFORM_RepositoryWorkflowConfig(),
    ],
    [ResourceType.DATAFUSION_INSTANCE, () => new DATAFUSION_Instance()],
    [
      ResourceType.DATALOSS_PREVENTIONDEIDENTIFYTEMPLATE,
      () => new DATALOSS_PreventionDeidentifyTemplate(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONINSPECTTEMPLATE,
      () => new DATALOSS_PreventionInspectTemplate(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONJOBTRIGGER,
      () => new DATALOSS_PreventionJobTrigger(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONSTOREDINFOTYPE,
      () => new DATALOSS_PreventionStoredInfoType(),
    ],
    [ResourceType.DATAPLEX_ASSET, () => new DATAPLEX_Asset()],
    [
      ResourceType.DATAPLEX_ASSETIAMBINDING,
      () => new DATAPLEX_AssetIamBinding(),
    ],
    [ResourceType.DATAPLEX_ASSETIAMMEMBER, () => new DATAPLEX_AssetIamMember()],
    [ResourceType.DATAPLEX_ASSETIAMPOLICY, () => new DATAPLEX_AssetIamPolicy()],
    [ResourceType.DATAPLEX_DATASCAN, () => new DATAPLEX_Datascan()],
    [
      ResourceType.DATAPLEX_DATASCANIAMBINDING,
      () => new DATAPLEX_DatascanIamBinding(),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMMEMBER,
      () => new DATAPLEX_DatascanIamMember(),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMPOLICY,
      () => new DATAPLEX_DatascanIamPolicy(),
    ],
    [ResourceType.DATAPLEX_LAKE, () => new DATAPLEX_Lake()],
    [ResourceType.DATAPLEX_LAKEIAMBINDING, () => new DATAPLEX_LakeIamBinding()],
    [ResourceType.DATAPLEX_LAKEIAMMEMBER, () => new DATAPLEX_LakeIamMember()],
    [ResourceType.DATAPLEX_LAKEIAMPOLICY, () => new DATAPLEX_LakeIamPolicy()],
    [ResourceType.DATAPLEX_TASK, () => new DATAPLEX_Task()],
    [ResourceType.DATAPLEX_TASKIAMBINDING, () => new DATAPLEX_TaskIamBinding()],
    [ResourceType.DATAPLEX_TASKIAMMEMBER, () => new DATAPLEX_TaskIamMember()],
    [ResourceType.DATAPLEX_TASKIAMPOLICY, () => new DATAPLEX_TaskIamPolicy()],
    [ResourceType.DATAPLEX_ZONE, () => new DATAPLEX_Zone()],
    [ResourceType.DATAPLEX_ZONEIAMBINDING, () => new DATAPLEX_ZoneIamBinding()],
    [ResourceType.DATAPLEX_ZONEIAMMEMBER, () => new DATAPLEX_ZoneIamMember()],
    [ResourceType.DATAPLEX_ZONEIAMPOLICY, () => new DATAPLEX_ZoneIamPolicy()],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICY,
      () => new DATAPROC_AutoscalingPolicy(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMBINDING,
      () => new DATAPROC_AutoscalingPolicyIamBinding(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMMEMBER,
      () => new DATAPROC_AutoscalingPolicyIamMember(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMPOLICY,
      () => new DATAPROC_AutoscalingPolicyIamPolicy(),
    ],
    [ResourceType.DATAPROC_CLUSTER, () => new DATAPROC_Cluster()],
    [
      ResourceType.DATAPROC_CLUSTERIAMBINDING,
      () => new DATAPROC_ClusterIAMBinding(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMMEMBER,
      () => new DATAPROC_ClusterIAMMember(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMPOLICY,
      () => new DATAPROC_ClusterIAMPolicy(),
    ],
    [ResourceType.DATAPROC_JOB, () => new DATAPROC_Job()],
    [ResourceType.DATAPROC_JOBIAMBINDING, () => new DATAPROC_JobIAMBinding()],
    [ResourceType.DATAPROC_JOBIAMMEMBER, () => new DATAPROC_JobIAMMember()],
    [ResourceType.DATAPROC_JOBIAMPOLICY, () => new DATAPROC_JobIAMPolicy()],
    [
      ResourceType.DATAPROC_METASTOREFEDERATION,
      () => new DATAPROC_MetastoreFederation(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMBINDING,
      () => new DATAPROC_MetastoreFederationIamBinding(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMMEMBER,
      () => new DATAPROC_MetastoreFederationIamMember(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMPOLICY,
      () => new DATAPROC_MetastoreFederationIamPolicy(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICE,
      () => new DATAPROC_MetastoreService(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMBINDING,
      () => new DATAPROC_MetastoreServiceIamBinding(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMMEMBER,
      () => new DATAPROC_MetastoreServiceIamMember(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMPOLICY,
      () => new DATAPROC_MetastoreServiceIamPolicy(),
    ],
    [
      ResourceType.DATAPROC_WORKFLOWTEMPLATE,
      () => new DATAPROC_WorkflowTemplate(),
    ],
    [
      ResourceType.DATASTORE_DATASTOREINDEX,
      () => new DATASTORE_DataStoreIndex(),
    ],
    [
      ResourceType.DATASTREAM_CONNECTIONPROFILE,
      () => new DATASTREAM_ConnectionProfile(),
    ],
    [
      ResourceType.DATASTREAM_PRIVATECONNECTION,
      () => new DATASTREAM_PrivateConnection(),
    ],
    [ResourceType.DATASTREAM_STREAM, () => new DATASTREAM_Stream()],
    [
      ResourceType.DEPLOYMENTMANAGER_DEPLOYMENT,
      () => new DEPLOYMENTMANAGER_Deployment(),
    ],
    [ResourceType.DIAGFLOW_AGENT, () => new DIAGFLOW_Agent()],
    [ResourceType.DIAGFLOW_CXAGENT, () => new DIAGFLOW_CxAgent()],
    [ResourceType.DIAGFLOW_CXENTITYTYPE, () => new DIAGFLOW_CxEntityType()],
    [ResourceType.DIAGFLOW_CXENVIRONMENT, () => new DIAGFLOW_CxEnvironment()],
    [ResourceType.DIAGFLOW_CXFLOW, () => new DIAGFLOW_CxFlow()],
    [ResourceType.DIAGFLOW_CXINTENT, () => new DIAGFLOW_CxIntent()],
    [ResourceType.DIAGFLOW_CXPAGE, () => new DIAGFLOW_CxPage()],
    [
      ResourceType.DIAGFLOW_CXSECURITYSETTINGS,
      () => new DIAGFLOW_CxSecuritySettings(),
    ],
    [ResourceType.DIAGFLOW_CXTESTCASE, () => new DIAGFLOW_CxTestCase()],
    [ResourceType.DIAGFLOW_CXVERSION, () => new DIAGFLOW_CxVersion()],
    [ResourceType.DIAGFLOW_CXWEBHOOK, () => new DIAGFLOW_CxWebhook()],
    [ResourceType.DIAGFLOW_ENTITYTYPE, () => new DIAGFLOW_EntityType()],
    [ResourceType.DIAGFLOW_FULFILLMENT, () => new DIAGFLOW_Fulfillment()],
    [ResourceType.DIAGFLOW_INTENT, () => new DIAGFLOW_Intent()],
    [
      ResourceType.DISCOVERYENGINE_CHATENGINE,
      () => new DISCOVERYENGINE_ChatEngine(),
    ],
    [
      ResourceType.DISCOVERYENGINE_DATASTORE,
      () => new DISCOVERYENGINE_DataStore(),
    ],
    [
      ResourceType.DISCOVERYENGINE_SEARCHENGINE,
      () => new DISCOVERYENGINE_SearchEngine(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMBINDING,
      () => new DNS_DnsManagedZoneIamBinding(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMMEMBER,
      () => new DNS_DnsManagedZoneIamMember(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMPOLICY,
      () => new DNS_DnsManagedZoneIamPolicy(),
    ],
    [ResourceType.DNS_MANAGEDZONE, () => new DNS_ManagedZone()],
    [ResourceType.DNS_POLICY, () => new DNS_Policy()],
    [ResourceType.DNS_RECORDSET, () => new DNS_RecordSet()],
    [ResourceType.DNS_RESPONSEPOLICY, () => new DNS_ResponsePolicy()],
    [ResourceType.DNS_RESPONSEPOLICYRULE, () => new DNS_ResponsePolicyRule()],
    [ResourceType.EDGECONTAINER_CLUSTER, () => new EDGECONTAINER_Cluster()],
    [ResourceType.EDGECONTAINER_NODEPOOL, () => new EDGECONTAINER_NodePool()],
    [
      ResourceType.EDGECONTAINER_VPNCONNECTION,
      () => new EDGECONTAINER_VpnConnection(),
    ],
    [ResourceType.EDGENETWORK_NETWORK, () => new EDGENETWORK_Network()],
    [ResourceType.EDGENETWORK_SUBNET, () => new EDGENETWORK_Subnet()],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMBINDING,
      () => new ENDPOINTS_ConsumersIamBinding(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMMEMBER,
      () => new ENDPOINTS_ConsumersIamMember(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMPOLICY,
      () => new ENDPOINTS_ConsumersIamPolicy(),
    ],
    [ResourceType.ENDPOINTS_SERVICE, () => new ENDPOINTS_Service()],
    [
      ResourceType.ENDPOINTS_SERVICEIAMBINDING,
      () => new ENDPOINTS_ServiceIamBinding(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMMEMBER,
      () => new ENDPOINTS_ServiceIamMember(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMPOLICY,
      () => new ENDPOINTS_ServiceIamPolicy(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_CONTACT,
      () => new ESSENTIALCONTACTS_Contact(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSOR,
      () => new ESSENTIALCONTACTS_DocumentAiProcessor(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSORDEFAULTVERSION,
      () => new ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSEDOCUMENTSCHEMA,
      () => new ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSELOCATION,
      () => new ESSENTIALCONTACTS_DocumentAiWarehouseLocation(),
    ],
    [ResourceType.EVENTARC_CHANNEL, () => new EVENTARC_Channel()],
    [
      ResourceType.EVENTARC_GOOGLECHANNELCONFIG,
      () => new EVENTARC_GoogleChannelConfig(),
    ],
    [ResourceType.EVENTARC_TRIGGER, () => new EVENTARC_Trigger()],
    [ResourceType.FILESTORE_BACKUP, () => new FILESTORE_Backup()],
    [ResourceType.FILESTORE_INSTANCE, () => new FILESTORE_Instance()],
    [ResourceType.FILESTORE_SNAPSHOT, () => new FILESTORE_Snapshot()],
    [ResourceType.FIREBASE_ANDROIDAPP, () => new FIREBASE_AndroidApp()],
    [
      ResourceType.FIREBASE_APPCHECKAPPATTESTCONFIG,
      () => new FIREBASE_AppCheckAppAttestConfig(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKDEBUGTOKEN,
      () => new FIREBASE_AppCheckDebugToken(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKPLAYINTEGRITYCONFIG,
      () => new FIREBASE_AppCheckPlayIntegrityConfig(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAENTERPRISECONFIG,
      () => new FIREBASE_AppCheckRecaptchaEnterpriseConfig(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAV3CONFIG,
      () => new FIREBASE_AppCheckRecaptchaV3Config(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKSERVICECONFIG,
      () => new FIREBASE_AppCheckServiceConfig(),
    ],
    [ResourceType.FIREBASE_APPLEAPP, () => new FIREBASE_AppleApp()],
    [
      ResourceType.FIREBASE_DATABASEINSTANCE,
      () => new FIREBASE_DatabaseInstance(),
    ],
    [
      ResourceType.FIREBASE_EXTENSIONSINSTANCE,
      () => new FIREBASE_ExtensionsInstance(),
    ],
    [ResourceType.FIREBASE_HOSTINGCHANNEL, () => new FIREBASE_HostingChannel()],
    [
      ResourceType.FIREBASE_HOSTINGCUSTOMDOMAIN,
      () => new FIREBASE_HostingCustomDomain(),
    ],
    [ResourceType.FIREBASE_HOSTINGRELEASE, () => new FIREBASE_HostingRelease()],
    [ResourceType.FIREBASE_HOSTINGSITE, () => new FIREBASE_HostingSite()],
    [ResourceType.FIREBASE_HOSTINGVERSION, () => new FIREBASE_HostingVersion()],
    [ResourceType.FIREBASE_PROJECT, () => new FIREBASE_Project()],
    [ResourceType.FIREBASE_STORAGEBUCKET, () => new FIREBASE_StorageBucket()],
    [ResourceType.FIREBASE_WEBAPP, () => new FIREBASE_WebApp()],
    [ResourceType.FIREBASERULES_RELEASE, () => new FIREBASERULES_Release()],
    [ResourceType.FIREBASERULES_RULESET, () => new FIREBASERULES_Ruleset()],
    [
      ResourceType.FIRESTORE_BACKUPSCHEDULE,
      () => new FIRESTORE_BackupSchedule(),
    ],
    [ResourceType.FIRESTORE_DATABASE, () => new FIRESTORE_Database()],
    [ResourceType.FIRESTORE_DOCUMENT, () => new FIRESTORE_Document()],
    [ResourceType.FIRESTORE_FIELD, () => new FIRESTORE_Field()],
    [ResourceType.FIRESTORE_INDEX, () => new FIRESTORE_Index()],
    [
      ResourceType.FOLDER_ACCESSAPPROVALSETTINGS,
      () => new FOLDER_AccessApprovalSettings(),
    ],
    [ResourceType.FOLDER_IAMAUDITCONFIG, () => new FOLDER_IamAuditConfig()],
    [ResourceType.FOLDER_IAMBINDING, () => new FOLDER_IAMBinding()],
    [ResourceType.FOLDER_IAMMEMBER, () => new FOLDER_IAMMember()],
    [ResourceType.FOLDER_IAMPOLICY, () => new FOLDER_IAMPolicy()],
    [
      ResourceType.FOLDER_ORGANIZATIONPOLICY,
      () => new FOLDER_OrganizationPolicy(),
    ],
    [ResourceType.GKEBACKUP_BACKUPPLAN, () => new GKEBACKUP_BackupPlan()],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMBINDING,
      () => new GKEBACKUP_BackupPlanIamBinding(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMMEMBER,
      () => new GKEBACKUP_BackupPlanIamMember(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMPOLICY,
      () => new GKEBACKUP_BackupPlanIamPolicy(),
    ],
    [ResourceType.GKEBACKUP_RESTOREPLAN, () => new GKEBACKUP_RestorePlan()],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMBINDING,
      () => new GKEBACKUP_RestorePlanIamBinding(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMMEMBER,
      () => new GKEBACKUP_RestorePlanIamMember(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMPOLICY,
      () => new GKEBACKUP_RestorePlanIamPolicy(),
    ],
    [ResourceType.GKEHUB_FEATURE, () => new GKEHUB_Feature()],
    [
      ResourceType.GKEHUB_FEATUREIAMBINDING,
      () => new GKEHUB_FeatureIamBinding(),
    ],
    [ResourceType.GKEHUB_FEATUREIAMMEMBER, () => new GKEHUB_FeatureIamMember()],
    [ResourceType.GKEHUB_FEATUREIAMPOLICY, () => new GKEHUB_FeatureIamPolicy()],
    [
      ResourceType.GKEHUB_FEATUREMEMBERSHIP,
      () => new GKEHUB_FeatureMembership(),
    ],
    [ResourceType.GKEHUB_FLEET, () => new GKEHUB_Fleet()],
    [ResourceType.GKEHUB_MEMBERSHIP, () => new GKEHUB_Membership()],
    [
      ResourceType.GKEHUB_MEMBERSHIPBINDING,
      () => new GKEHUB_MembershipBinding(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMBINDING,
      () => new GKEHUB_MembershipIamBinding(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMMEMBER,
      () => new GKEHUB_MembershipIamMember(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMPOLICY,
      () => new GKEHUB_MembershipIamPolicy(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPRBACROLEBINDING,
      () => new GKEHUB_MembershipRbacRoleBinding(),
    ],
    [ResourceType.GKEHUB_NAMESPACE, () => new GKEHUB_Namespace()],
    [ResourceType.GKEHUB_SCOPE, () => new GKEHUB_Scope()],
    [ResourceType.GKEHUB_SCOPEIAMBINDING, () => new GKEHUB_ScopeIamBinding()],
    [ResourceType.GKEHUB_SCOPEIAMMEMBER, () => new GKEHUB_ScopeIamMember()],
    [ResourceType.GKEHUB_SCOPEIAMPOLICY, () => new GKEHUB_ScopeIamPolicy()],
    [
      ResourceType.GKEHUB_SCOPERBACROLEBINDING,
      () => new GKEHUB_ScopeRbacRoleBinding(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALADMINCLUSTER,
      () => new GKEONPREM_BareMetalAdminCluster(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALCLUSTER,
      () => new GKEONPREM_BareMetalCluster(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALNODEPOOL,
      () => new GKEONPREM_BareMetalNodePool(),
    ],
    [ResourceType.GKEONPREM_VMWARECLUSTER, () => new GKEONPREM_VMwareCluster()],
    [
      ResourceType.GKEONPREM_VMWARENODEPOOL,
      () => new GKEONPREM_VMwareNodePool(),
    ],
    [ResourceType.HEALTHCARE_CONSENTSTORE, () => new HEALTHCARE_ConsentStore()],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMBINDING,
      () => new HEALTHCARE_ConsentStoreIamBinding(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMMEMBER,
      () => new HEALTHCARE_ConsentStoreIamMember(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMPOLICY,
      () => new HEALTHCARE_ConsentStoreIamPolicy(),
    ],
    [ResourceType.HEALTHCARE_DATASET, () => new HEALTHCARE_Dataset()],
    [
      ResourceType.HEALTHCARE_DATASETIAMBINDING,
      () => new HEALTHCARE_DatasetIamBinding(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMMEMBER,
      () => new HEALTHCARE_DatasetIamMember(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMPOLICY,
      () => new HEALTHCARE_DatasetIamPolicy(),
    ],
    [ResourceType.HEALTHCARE_DICOMSTORE, () => new HEALTHCARE_DicomStore()],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMBINDING,
      () => new HEALTHCARE_DicomStoreIamBinding(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMMEMBER,
      () => new HEALTHCARE_DicomStoreIamMember(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMPOLICY,
      () => new HEALTHCARE_DicomStoreIamPolicy(),
    ],
    [ResourceType.HEALTHCARE_FHIRSTORE, () => new HEALTHCARE_FhirStore()],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMBINDING,
      () => new HEALTHCARE_FhirStoreIamBinding(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMMEMBER,
      () => new HEALTHCARE_FhirStoreIamMember(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMPOLICY,
      () => new HEALTHCARE_FhirStoreIamPolicy(),
    ],
    [ResourceType.HEALTHCARE_HL7STORE, () => new HEALTHCARE_Hl7Store()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMBINDING,
      () => new HEALTHCARE_Hl7StoreIamBinding(),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMMEMBER,
      () => new HEALTHCARE_Hl7StoreIamMember(),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMPOLICY,
      () => new HEALTHCARE_Hl7StoreIamPolicy(),
    ],
    [
      ResourceType.IAM_ACCESSBOUNDARYPOLICY,
      () => new IAM_AccessBoundaryPolicy(),
    ],
    [ResourceType.IAM_DENYPOLICY, () => new IAM_DenyPolicy()],
    [ResourceType.IAM_WORKFORCEPOOL, () => new IAM_WorkforcePool()],
    [
      ResourceType.IAM_WORKFORCEPOOLPROVIDER,
      () => new IAM_WorkforcePoolProvider(),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOL,
      () => new IAM_WorkloadIdentityPool(),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOLPROVIDER,
      () => new IAM_WorkloadIdentityPoolProvider(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMBINDING,
      () => new IAP_AppEngineServiceIamBinding(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMMEMBER,
      () => new IAP_AppEngineServiceIamMember(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMPOLICY,
      () => new IAP_AppEngineServiceIamPolicy(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMBINDING,
      () => new IAP_AppEngineVersionIamBinding(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMMEMBER,
      () => new IAP_AppEngineVersionIamMember(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMPOLICY,
      () => new IAP_AppEngineVersionIamPolicy(),
    ],
    [ResourceType.IAP_BRAND, () => new IAP_Brand()],
    [ResourceType.IAP_CLIENT, () => new IAP_Client()],
    [ResourceType.IAP_TUNNELIAMBINDING, () => new IAP_TunnelIamBinding()],
    [ResourceType.IAP_TUNNELIAMMEMBER, () => new IAP_TunnelIamMember()],
    [ResourceType.IAP_TUNNELIAMPOLICY, () => new IAP_TunnelIamPolicy()],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMBINDING,
      () => new IAP_TunnelInstanceIAMBinding(),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMMEMBER,
      () => new IAP_TunnelInstanceIAMMember(),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMPOLICY,
      () => new IAP_TunnelInstanceIAMPolicy(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMBINDING,
      () => new IAP_WebBackendServiceIamBinding(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMMEMBER,
      () => new IAP_WebBackendServiceIamMember(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMPOLICY,
      () => new IAP_WebBackendServiceIamPolicy(),
    ],
    [ResourceType.IAP_WEBIAMBINDING, () => new IAP_WebIamBinding()],
    [ResourceType.IAP_WEBIAMMEMBER, () => new IAP_WebIamMember()],
    [ResourceType.IAP_WEBIAMPOLICY, () => new IAP_WebIamPolicy()],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMBINDING,
      () => new IAP_WebRegionBackendServiceIamBinding(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMMEMBER,
      () => new IAP_WebRegionBackendServiceIamMember(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMPOLICY,
      () => new IAP_WebRegionBackendServiceIamPolicy(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMBINDING,
      () => new IAP_WebTypeAppEngingIamBinding(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMMEMBER,
      () => new IAP_WebTypeAppEngingIamMember(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMPOLICY,
      () => new IAP_WebTypeAppEngingIamPolicy(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMBINDING,
      () => new IAP_WebTypeComputeIamBinding(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMMEMBER,
      () => new IAP_WebTypeComputeIamMember(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMPOLICY,
      () => new IAP_WebTypeComputeIamPolicy(),
    ],
    [ResourceType.IDENTITYPLATFORM_CONFIG, () => new IDENTITYPLATFORM_Config()],
    [
      ResourceType.IDENTITYPLATFORM_DEFAULTSUPPORTEDIDPCONFIG,
      () => new IDENTITYPLATFORM_DefaultSupportedIdpConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_INBOUNDSAMLCONFIG,
      () => new IDENTITYPLATFORM_InboundSamlConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_OAUTHIDPCONFIG,
      () => new IDENTITYPLATFORM_OauthIdpConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_PROJECTDEFAULTCONFIG,
      () => new IDENTITYPLATFORM_ProjectDefaultConfig(),
    ],
    [ResourceType.IDENTITYPLATFORM_TENANT, () => new IDENTITYPLATFORM_Tenant()],
    [
      ResourceType.IDENTITYPLATFORM_TENANTDEFAULTSUPPORTEDIDPCONFIG,
      () => new IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTINBOUNDSAMLCONFIG,
      () => new IDENTITYPLATFORM_TenantInboundSamlConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTOAUTHIDPCONFIG,
      () => new IDENTITYPLATFORM_TenantOauthIdpConfig(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_CONNECTION,
      () => new INTEGRATIONCONNECTORS_Connection(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_ENDPOINTATTACHMENT,
      () => new INTEGRATIONCONNECTORS_EndpointAttachment(),
    ],
    [ResourceType.KMS_CRYPTOKEY, () => new KMS_CryptoKey()],
    [ResourceType.KMS_CRYPTOKEYIAMBINDING, () => new KMS_CryptoKeyIAMBinding()],
    [ResourceType.KMS_CRYPTOKEYIAMMEMBER, () => new KMS_CryptoKeyIAMMember()],
    [ResourceType.KMS_CRYPTOKEYIAMPOLICY, () => new KMS_CryptoKeyIAMPolicy()],
    [ResourceType.KMS_CRYPTOKEYVERSION, () => new KMS_CryptoKeyVersion()],
    [ResourceType.KMS_KEYRING, () => new KMS_KeyRing()],
    [ResourceType.KMS_KEYRINGIAMBINDING, () => new KMS_KeyRingIAMBinding()],
    [ResourceType.KMS_KEYRINGIAMMEMBER, () => new KMS_KeyRingIAMMember()],
    [ResourceType.KMS_KEYRINGIAMPOLICY, () => new KMS_KeyRingIAMPolicy()],
    [ResourceType.KMS_KEYRINGIMPORTJOB, () => new KMS_KeyRingImportJob()],
    [ResourceType.KMS_SECRETCIPHERTEXT, () => new KMS_SecretCiphertext()],
    [
      ResourceType.LOGGING_BILLINGACCOUNTBUCKETCONFIG,
      () => new LOGGING_BillingAccountBucketConfig(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTEXCLUSION,
      () => new LOGGING_BillingAccountExclusion(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTSINK,
      () => new LOGGING_BillingAccountSink(),
    ],
    [
      ResourceType.LOGGING_FOLDERBUCKETCONFIG,
      () => new LOGGING_FolderBucketConfig(),
    ],
    [ResourceType.LOGGING_FOLDEREXCLUSION, () => new LOGGING_FolderExclusion()],
    [ResourceType.LOGGING_FOLDERSETTINGS, () => new LOGGING_FolderSettings()],
    [ResourceType.LOGGING_FOLDERSINK, () => new LOGGING_FolderSink()],
    [ResourceType.LOGGING_LINKEDDATASET, () => new LOGGING_LinkedDataset()],
    [ResourceType.LOGGING_LOGVIEW, () => new LOGGING_LogView()],
    [ResourceType.LOGGING_METRIC, () => new LOGGING_Metric()],
    [
      ResourceType.LOGGING_ORGANIZATIONBUCKETCONFIG,
      () => new LOGGING_OrganizationBucketConfig(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONEXCLUSION,
      () => new LOGGING_OrganizationExclusion(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSETTINGS,
      () => new LOGGING_OrganizationSettings(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSINK,
      () => new LOGGING_OrganizationSink(),
    ],
    [
      ResourceType.LOGGING_PROJECTBUCKETCONFIG,
      () => new LOGGING_ProjectBucketConfig(),
    ],
    [
      ResourceType.LOGGING_PROJECTEXCLUSION,
      () => new LOGGING_ProjectExclusion(),
    ],
    [ResourceType.LOGGING_PROJECTSINK, () => new LOGGING_ProjectSink()],
    [ResourceType.LOOKER_INSTANCE, () => new LOOKER_Instance()],
    [ResourceType.MEMCACHE_INSTANCE, () => new MEMCACHE_Instance()],
    [ResourceType.MIGRATIONCENTER_GROUP, () => new MIGRATIONCENTER_Group()],
    [
      ResourceType.MIGRATIONCENTER_PREFERENCESET,
      () => new MIGRATIONCENTER_PreferenceSet(),
    ],
    [ResourceType.ML_ENGINEMODEL, () => new ML_EngineModel()],
    [ResourceType.MONITORING_ALERTPOLICY, () => new MONITORING_AlertPolicy()],
    [
      ResourceType.MONITORING_CUSTOMSERVICE,
      () => new MONITORING_CustomService(),
    ],
    [ResourceType.MONITORING_DASHBOARD, () => new MONITORING_Dashboard()],
    [
      ResourceType.MONITORING_GENERICSERVICE,
      () => new MONITORING_GenericService(),
    ],
    [ResourceType.MONITORING_GROUP, () => new MONITORING_Group()],
    [
      ResourceType.MONITORING_METRICDESCRIPTOR,
      () => new MONITORING_MetricDescriptor(),
    ],
    [
      ResourceType.MONITORING_MONITOREDPROJECT,
      () => new MONITORING_MonitoredProject(),
    ],
    [
      ResourceType.MONITORING_NOTIFICATIONCHANNEL,
      () => new MONITORING_NotificationChannel(),
    ],
    [ResourceType.MONITORING_SLO, () => new MONITORING_Slo()],
    [
      ResourceType.MONITORING_UPTIMECHECKCONFIG,
      () => new MONITORING_UptimeCheckConfig(),
    ],
    [ResourceType.NETAPP_ACTIVEDIRECTORY, () => new NETAPP_ActiveDirectory()],
    [ResourceType.NETAPP_BACKUPPOLICY, () => new NETAPP_BackupPolicy()],
    [ResourceType.NETAPP_BACKUPVAULT, () => new NETAPP_BackupVault()],
    [ResourceType.NETAPP_KMSCONFIG, () => new NETAPP_Kmsconfig()],
    [ResourceType.NETAPP_STORAGEPOOL, () => new NETAPP_StoragePool()],
    [ResourceType.NETAPP_VOLUME, () => new NETAPP_Volume()],
    [
      ResourceType.NETAPP_VOLUMEREPLICATION,
      () => new NETAPP_VolumeReplication(),
    ],
    [ResourceType.NETAPP_VOLUMESNAPSHOT, () => new NETAPP_VolumeSnapshot()],
    [ResourceType.NETWORKCONNECTIVITY_HUB, () => new NETWORKCONNECTIVITY_Hub()],
    [
      ResourceType.NETWORKCONNECTIVITY_POLICYBASEDROUTE,
      () => new NETWORKCONNECTIVITY_PolicyBasedRoute(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SERVICECONNECTIONPOLICY,
      () => new NETWORKCONNECTIVITY_ServiceConnectionPolicy(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SPOKE,
      () => new NETWORKCONNECTIVITY_Spoke(),
    ],
    [
      ResourceType.NETWORKMANAGEMENT_CONNECTIVITYTEST,
      () => new NETWORKMANAGEMENT_ConnectivityTest(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUP,
      () => new NETWORKSECURITY_AddressGroup(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMBINDING,
      () => new NETWORKSECURITY_AddressGroupIamBinding(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMMEMBER,
      () => new NETWORKSECURITY_AddressGroupIamMember(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMPOLICY,
      () => new NETWORKSECURITY_AddressGroupIamPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_AUTHORIZATIONPOLICY,
      () => new NETWORKSECURITY_AuthorizationPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_CLIENTTLSPOLICY,
      () => new NETWORKSECURITY_ClientTlsPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_FIREWALLENDPOINT,
      () => new NETWORKSECURITY_FirewallEndpoint(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICY,
      () => new NETWORKSECURITY_GatewaySecurityPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICYRULE,
      () => new NETWORKSECURITY_GatewaySecurityPolicyRule(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILE,
      () => new NETWORKSECURITY_SecurityProfile(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILEGROUP,
      () => new NETWORKSECURITY_SecurityProfileGroup(),
    ],
    [
      ResourceType.NETWORKSECURITY_SERVERTLSPOLICY,
      () => new NETWORKSECURITY_ServerTlsPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_TLSINSPECTIONPOLICY,
      () => new NETWORKSECURITY_TlsInspectionPolicy(),
    ],
    [ResourceType.NETWORKSECURITY_URLLIST, () => new NETWORKSECURITY_UrlList()],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEKEYSET,
      () => new NETWORKSERVICES_EdgeCacheKeyset(),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEORIGIN,
      () => new NETWORKSERVICES_EdgeCacheOrigin(),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHESERVICE,
      () => new NETWORKSERVICES_EdgeCacheService(),
    ],
    [
      ResourceType.NETWORKSERVICES_ENDPOINTPOLICY,
      () => new NETWORKSERVICES_EndpointPolicy(),
    ],
    [ResourceType.NETWORKSERVICES_GATEWAY, () => new NETWORKSERVICES_Gateway()],
    [
      ResourceType.NETWORKSERVICES_GRPCROUTE,
      () => new NETWORKSERVICES_GrpcRoute(),
    ],
    [
      ResourceType.NETWORKSERVICES_HTTPROUTE,
      () => new NETWORKSERVICES_HttpRoute(),
    ],
    [ResourceType.NETWORKSERVICES_MESH, () => new NETWORKSERVICES_Mesh()],
    [
      ResourceType.NETWORKSERVICES_SERVICEBINDING,
      () => new NETWORKSERVICES_ServiceBinding(),
    ],
    [
      ResourceType.NETWORKSERVICES_TCPROUTE,
      () => new NETWORKSERVICES_TcpRoute(),
    ],
    [
      ResourceType.NETWORKSERVICES_TLSROUTE,
      () => new NETWORKSERVICES_TlsRoute(),
    ],
    [ResourceType.NOTEBOOKS_ENVIRONMENT, () => new NOTEBOOKS_Environment()],
    [ResourceType.NOTEBOOKS_INSTANCE, () => new NOTEBOOKS_Instance()],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMBINDING,
      () => new NOTEBOOKS_InstanceIamBinding(),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMMEMBER,
      () => new NOTEBOOKS_InstanceIamMember(),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMPOLICY,
      () => new NOTEBOOKS_InstanceIamPolicy(),
    ],
    [ResourceType.NOTEBOOKS_LOCATION, () => new NOTEBOOKS_Location()],
    [ResourceType.NOTEBOOKS_RUNTIME, () => new NOTEBOOKS_Runtime()],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMBINDING,
      () => new NOTEBOOKS_RuntimeIamBinding(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMMEMBER,
      () => new NOTEBOOKS_RuntimeIamMember(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMPOLICY,
      () => new NOTEBOOKS_RuntimeIamPolicy(),
    ],
    [
      ResourceType.ORGANIZATIONS_ACCESSAPPROVALSETTINGS,
      () => new ORGANIZATIONS_AccessApprovalSettings(),
    ],
    [ResourceType.ORGANIZATIONS_FOLDER, () => new ORGANIZATIONS_Folder()],
    [
      ResourceType.ORGANIZATIONS_IAMAUDITCONFIG,
      () => new ORGANIZATIONS_IamAuditConfig(),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMBINDING,
      () => new ORGANIZATIONS_IAMBinding(),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMCUSTOMROLE,
      () => new ORGANIZATIONS_IAMCustomRole(),
    ],
    [ResourceType.ORGANIZATIONS_IAMMEMBER, () => new ORGANIZATIONS_IAMMember()],
    [ResourceType.ORGANIZATIONS_IAMPOLICY, () => new ORGANIZATIONS_IAMPolicy()],
    [ResourceType.ORGANIZATIONS_POLICY, () => new ORGANIZATIONS_Policy()],
    [ResourceType.ORGANIZATIONS_PROJECT, () => new ORGANIZATIONS_Project()],
    [
      ResourceType.ORGPOLICY_CUSTOMCONSTRAINT,
      () => new ORGPOLICY_CustomConstraint(),
    ],
    [ResourceType.ORGPOLICY_POLICY, () => new ORGPOLICY_Policy()],
    [ResourceType.OSCONFIG_GUESTPOLICIES, () => new OSCONFIG_GuestPolicies()],
    [
      ResourceType.OSCONFIG_OSPOLICYASSIGNMENT,
      () => new OSCONFIG_OsPolicyAssignment(),
    ],
    [
      ResourceType.OSCONFIG_PATCHDEPLOYMENT,
      () => new OSCONFIG_PatchDeployment(),
    ],
    [ResourceType.OSLOGIN_SSHPUBLICKEY, () => new OSLOGIN_SshPublicKey()],
    [
      ResourceType.PROJECTS_ACCESSAPPROVALSETTINGS,
      () => new PROJECTS_AccessApprovalSettings(),
    ],
    [ResourceType.PROJECTS_APIKEY, () => new PROJECTS_ApiKey()],
    [
      ResourceType.PROJECTS_DEFAULTSERVICEACCOUNTS,
      () => new PROJECTS_DefaultServiceAccounts(),
    ],
    [ResourceType.PROJECTS_IAMAUDITCONFIG, () => new PROJECTS_IAMAuditConfig()],
    [ResourceType.PROJECTS_IAMBINDING, () => new PROJECTS_IAMBinding()],
    [ResourceType.PROJECTS_IAMCUSTOMROLE, () => new PROJECTS_IAMCustomRole()],
    [ResourceType.PROJECTS_IAMMEMBER, () => new PROJECTS_IAMMember()],
    [ResourceType.PROJECTS_IAMPOLICY, () => new PROJECTS_IAMPolicy()],
    [
      ResourceType.PROJECTS_ORGANIZATIONPOLICY,
      () => new PROJECTS_OrganizationPolicy(),
    ],
    [ResourceType.PROJECTS_SERVICE, () => new PROJECTS_Service()],
    [
      ResourceType.PROJECTS_SERVICEIDENTITY,
      () => new PROJECTS_ServiceIdentity(),
    ],
    [
      ResourceType.PROJECTS_USAGEEXPORTBUCKET,
      () => new PROJECTS_UsageExportBucket(),
    ],
    [ResourceType.PUBSUB_LITERESERVATION, () => new PUBSUB_LiteReservation()],
    [ResourceType.PUBSUB_LITESUBSCRIPTION, () => new PUBSUB_LiteSubscription()],
    [ResourceType.PUBSUB_LITETOPIC, () => new PUBSUB_LiteTopic()],
    [ResourceType.PUBSUB_SCHEMA, () => new PUBSUB_Schema()],
    [ResourceType.PUBSUB_SCHEMAIAMBINDING, () => new PUBSUB_SchemaIamBinding()],
    [ResourceType.PUBSUB_SCHEMAIAMMEMBER, () => new PUBSUB_SchemaIamMember()],
    [ResourceType.PUBSUB_SCHEMAIAMPOLICY, () => new PUBSUB_SchemaIamPolicy()],
    [ResourceType.PUBSUB_SUBSCRIPTION, () => new PUBSUB_Subscription()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMBINDING,
      () => new PUBSUB_SubscriptionIAMBinding(),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMMEMBER,
      () => new PUBSUB_SubscriptionIAMMember(),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMPOLICY,
      () => new PUBSUB_SubscriptionIAMPolicy(),
    ],
    [ResourceType.PUBSUB_TOPIC, () => new PUBSUB_Topic()],
    [ResourceType.PUBSUB_TOPICIAMBINDING, () => new PUBSUB_TopicIAMBinding()],
    [ResourceType.PUBSUB_TOPICIAMMEMBER, () => new PUBSUB_TopicIAMMember()],
    [ResourceType.PUBSUB_TOPICIAMPOLICY, () => new PUBSUB_TopicIAMPolicy()],
    [ResourceType.RECAPTCHA_ENTERPRISEKEY, () => new RECAPTCHA_EnterpriseKey()],
    [ResourceType.REDIS_CLUSTER, () => new REDIS_Cluster()],
    [ResourceType.REDIS_INSTANCE, () => new REDIS_Instance()],
    [ResourceType.RESOURCEMANAGER_LIEN, () => new RESOURCEMANAGER_Lien()],
    [ResourceType.RUNTIMECONFIG_CONFIG, () => new RUNTIMECONFIG_Config()],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMBINDING,
      () => new RUNTIMECONFIG_ConfigIamBinding(),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMMEMBER,
      () => new RUNTIMECONFIG_ConfigIamMember(),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMPOLICY,
      () => new RUNTIMECONFIG_ConfigIamPolicy(),
    ],
    [ResourceType.RUNTIMECONFIG_VARIABLE, () => new RUNTIMECONFIG_Variable()],
    [ResourceType.SECRETMANAGER_SECRET, () => new SECRETMANAGER_Secret()],
    [
      ResourceType.SECRETMANAGER_SECRETIAMBINDING,
      () => new SECRETMANAGER_SecretIamBinding(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMMEMBER,
      () => new SECRETMANAGER_SecretIamMember(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMPOLICY,
      () => new SECRETMANAGER_SecretIamPolicy(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETVERSION,
      () => new SECRETMANAGER_SecretVersion(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCE,
      () => new SECURESOURCEMANAGER_Instance(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMBINDING,
      () => new SECURESOURCEMANAGER_InstanceIamBinding(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMMEMBER,
      () => new SECURESOURCEMANAGER_InstanceIamMember(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMPOLICY,
      () => new SECURESOURCEMANAGER_InstanceIamPolicy(),
    ],
    [
      ResourceType.SECURITYCENTER_EVENTTHREATDETECTIONCUSTOMMODULE,
      () => new SECURITYCENTER_EventThreatDetectionCustomModule(),
    ],
    [
      ResourceType.SECURITYCENTER_FOLDERCUSTOMMODULE,
      () => new SECURITYCENTER_FolderCustomModule(),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMBINDING,
      () => new SECURITYCENTER_InstanceIamBinding(),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMMEMBER,
      () => new SECURITYCENTER_InstanceIamMember(),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMPOLICY,
      () => new SECURITYCENTER_InstanceIamPolicy(),
    ],
    [
      ResourceType.SECURITYCENTER_MUTECONFIG,
      () => new SECURITYCENTER_MuteConfig(),
    ],
    [
      ResourceType.SECURITYCENTER_NOTIFICATIONCONFIG,
      () => new SECURITYCENTER_NotificationConfig(),
    ],
    [
      ResourceType.SECURITYCENTER_ORGANIZATIONCUSTOMMODULE,
      () => new SECURITYCENTER_OrganizationCustomModule(),
    ],
    [
      ResourceType.SECURITYCENTER_PROJECTCUSTOMMODULE,
      () => new SECURITYCENTER_ProjectCustomModule(),
    ],
    [ResourceType.SECURITYCENTER_SOURCE, () => new SECURITYCENTER_Source()],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMBINDING,
      () => new SECURITYCENTER_SourceIamBinding(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMMEMBER,
      () => new SECURITYCENTER_SourceIamMember(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMPOLICY,
      () => new SECURITYCENTER_SourceIamPolicy(),
    ],
    [ResourceType.SECURITYPOSTURE_POSTURE, () => new SECURITYPOSTURE_Posture()],
    [
      ResourceType.SECURITYPOSTURE_POSTUREDEPLOYMENT,
      () => new SECURITYPOSTURE_PostureDeployment(),
    ],
    [ResourceType.SERVICEACCOUNT_ACCOUNT, () => new SERVICEACCOUNT_Account()],
    [
      ResourceType.SERVICEACCOUNT_IAMBINDING,
      () => new SERVICEACCOUNT_IAMBinding(),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMMEMBER,
      () => new SERVICEACCOUNT_IAMMember(),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMPOLICY,
      () => new SERVICEACCOUNT_IAMPolicy(),
    ],
    [ResourceType.SERVICEACCOUNT_KEY, () => new SERVICEACCOUNT_Key()],
    [
      ResourceType.SERVICEDIRECTORY_ENDPOINT,
      () => new SERVICEDIRECTORY_Endpoint(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACE,
      () => new SERVICEDIRECTORY_Namespace(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMBINDING,
      () => new SERVICEDIRECTORY_NamespaceIamBinding(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMMEMBER,
      () => new SERVICEDIRECTORY_NamespaceIamMember(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMPOLICY,
      () => new SERVICEDIRECTORY_NamespaceIamPolicy(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICE,
      () => new SERVICEDIRECTORY_Service(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMBINDING,
      () => new SERVICEDIRECTORY_ServiceIamBinding(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMMEMBER,
      () => new SERVICEDIRECTORY_ServiceIamMember(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMPOLICY,
      () => new SERVICEDIRECTORY_ServiceIamPolicy(),
    ],
    [
      ResourceType.SERVICENETWORKING_CONNECTION,
      () => new SERVICENETWORKING_Connection(),
    ],
    [
      ResourceType.SERVICENETWORKING_PEEREDDNSDOMAIN,
      () => new SERVICENETWORKING_PeeredDnsDomain(),
    ],
    [
      ResourceType.SERVICEUSAGE_CONSUMERQUOTAOVERRIDE,
      () => new SERVICEUSAGE_ConsumerQuotaOverride(),
    ],
    [ResourceType.SOURCEREPO_REPOSITORY, () => new SOURCEREPO_Repository()],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMBINDING,
      () => new SOURCEREPO_RepositoryIamBinding(),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMMEMBER,
      () => new SOURCEREPO_RepositoryIamMember(),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMPOLICY,
      () => new SOURCEREPO_RepositoryIamPolicy(),
    ],
    [ResourceType.SPANNER_DATABASE, () => new SPANNER_Database()],
    [
      ResourceType.SPANNER_DATABASEIAMBINDING,
      () => new SPANNER_DatabaseIAMBinding(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMMEMBER,
      () => new SPANNER_DatabaseIAMMember(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMPOLICY,
      () => new SPANNER_DatabaseIAMPolicy(),
    ],
    [ResourceType.SPANNER_INSTANCE, () => new SPANNER_Instance()],
    [
      ResourceType.SPANNER_INSTANCEIAMBINDING,
      () => new SPANNER_InstanceIAMBinding(),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMMEMBER,
      () => new SPANNER_InstanceIAMMember(),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMPOLICY,
      () => new SPANNER_InstanceIAMPolicy(),
    ],
    [ResourceType.SQL_DATABASE, () => new SQL_Database()],
    [ResourceType.SQL_DATABASEINSTANCE, () => new SQL_DatabaseInstance()],
    [
      ResourceType.SQL_SOURCEREPRESENTATIONINSTANCE,
      () => new SQL_SourceRepresentationInstance(),
    ],
    [ResourceType.SQL_SSLCERT, () => new SQL_SslCert()],
    [ResourceType.SQL_USER, () => new SQL_User()],
    [ResourceType.STORAGE_BUCKET, () => new STORAGE_Bucket()],
    [
      ResourceType.STORAGE_BUCKETACCESSCONTROL,
      () => new STORAGE_BucketAccessControl(),
    ],
    [ResourceType.STORAGE_BUCKETACL, () => new STORAGE_BucketACL()],
    [
      ResourceType.STORAGE_BUCKETIAMBINDING,
      () => new STORAGE_BucketIAMBinding(),
    ],
    [ResourceType.STORAGE_BUCKETIAMMEMBER, () => new STORAGE_BucketIAMMember()],
    [ResourceType.STORAGE_BUCKETIAMPOLICY, () => new STORAGE_BucketIAMPolicy()],
    [ResourceType.STORAGE_BUCKETOBJECT, () => new STORAGE_BucketObject()],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACCESSCONTROL,
      () => new STORAGE_DefaultObjectAccessControl(),
    ],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACL,
      () => new STORAGE_DefaultObjectACL(),
    ],
    [ResourceType.STORAGE_HMACKEY, () => new STORAGE_HmacKey()],
    [
      ResourceType.STORAGE_INSIGHTSREPORTCONFIG,
      () => new STORAGE_InsightsReportConfig(),
    ],
    [ResourceType.STORAGE_NOTIFICATION, () => new STORAGE_Notification()],
    [
      ResourceType.STORAGE_OBJECTACCESSCONTROL,
      () => new STORAGE_ObjectAccessControl(),
    ],
    [ResourceType.STORAGE_OBJECTACL, () => new STORAGE_ObjectACL()],
    [
      ResourceType.STORAGE_TRANSFERAGENTPOOL,
      () => new STORAGE_TransferAgentPool(),
    ],
    [ResourceType.STORAGE_TRANSFERJOB, () => new STORAGE_TransferJob()],
    [ResourceType.TAGS_LOCATIONTAGBINDING, () => new TAGS_LocationTagBinding()],
    [ResourceType.TAGS_TAGBINDING, () => new TAGS_TagBinding()],
    [ResourceType.TAGS_TAGKEY, () => new TAGS_TagKey()],
    [ResourceType.TAGS_TAGKEYIAMBINDING, () => new TAGS_TagKeyIamBinding()],
    [ResourceType.TAGS_TAGKEYIAMMEMBER, () => new TAGS_TagKeyIamMember()],
    [ResourceType.TAGS_TAGKEYIAMPOLICY, () => new TAGS_TagKeyIamPolicy()],
    [ResourceType.TAGS_TAGVALUE, () => new TAGS_TagValue()],
    [ResourceType.TAGS_TAGVALUEIAMBINDING, () => new TAGS_TagValueIamBinding()],
    [ResourceType.TAGS_TAGVALUEIAMMEMBER, () => new TAGS_TagValueIamMember()],
    [ResourceType.TAGS_TAGVALUEIAMPOLICY, () => new TAGS_TagValueIamPolicy()],
    [ResourceType.TPU_NODE, () => new TPU_Node()],
    [ResourceType.TPU_V2VM, () => new TPU_V2Vm()],
    [ResourceType.VERTEX_AIDATASET, () => new VERTEX_AiDataset()],
    [ResourceType.VERTEX_AIENDPOINT, () => new VERTEX_AiEndpoint()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMBINDING,
      () => new VERTEX_AiEndpointIamBinding(),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMMEMBER,
      () => new VERTEX_AiEndpointIamMember(),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMPOLICY,
      () => new VERTEX_AiEndpointIamPolicy(),
    ],
    [ResourceType.VERTEX_AIFEATUREGROUP, () => new VERTEX_AiFeatureGroup()],
    [
      ResourceType.VERTEX_AIFEATUREGROUPFEATURE,
      () => new VERTEX_AiFeatureGroupFeature(),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTORE,
      () => new VERTEX_AiFeatureOnlineStore(),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTOREFEATUREVIEW,
      () => new VERTEX_AiFeatureOnlineStoreFeatureview(),
    ],
    [ResourceType.VERTEX_AIFEATURESTORE, () => new VERTEX_AiFeatureStore()],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPE,
      () => new VERTEX_AiFeatureStoreEntityType(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEFEATURE,
      () => new VERTEX_AiFeatureStoreEntityTypeFeature(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMBINDING,
      () => new VERTEX_AiFeatureStoreEntityTypeIamBinding(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMMEMBER,
      () => new VERTEX_AiFeatureStoreEntityTypeIamMember(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMPOLICY,
      () => new VERTEX_AiFeatureStoreEntityTypeIamPolicy(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMBINDING,
      () => new VERTEX_AiFeatureStoreIamBinding(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMMEMBER,
      () => new VERTEX_AiFeatureStoreIamMember(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMPOLICY,
      () => new VERTEX_AiFeatureStoreIamPolicy(),
    ],
    [ResourceType.VERTEX_AIINDEX, () => new VERTEX_AiIndex()],
    [ResourceType.VERTEX_AIINDEXENDPOINT, () => new VERTEX_AiIndexEndpoint()],
    [ResourceType.VERTEX_AIMETADATASTORE, () => new VERTEX_AiMetadataStore()],
    [ResourceType.VERTEX_AITENSORBOARD, () => new VERTEX_AiTensorboard()],
    [ResourceType.VMWAREENGINE_CLUSTER, () => new VMWAREENGINE_Cluster()],
    [
      ResourceType.VMWAREENGINE_EXTERNALACCESSRULE,
      () => new VMWAREENGINE_ExternalAccessRule(),
    ],
    [
      ResourceType.VMWAREENGINE_EXTERNALADDRESS,
      () => new VMWAREENGINE_ExternalAddress(),
    ],
    [ResourceType.VMWAREENGINE_NETWORK, () => new VMWAREENGINE_Network()],
    [
      ResourceType.VMWAREENGINE_NETWORKPEERING,
      () => new VMWAREENGINE_NetworkPeering(),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORKPOLICY,
      () => new VMWAREENGINE_NetworkPolicy(),
    ],
    [
      ResourceType.VMWAREENGINE_PRIVATECLOUD,
      () => new VMWAREENGINE_PrivateCloud(),
    ],
    [ResourceType.VMWAREENGINE_SUBNET, () => new VMWAREENGINE_Subnet()],
    [ResourceType.VPCACCESS_CONNECTOR, () => new VPCACCESS_Connector()],
    [ResourceType.WORKBENCH_INSTANCE, () => new WORKBENCH_Instance()],
    [
      ResourceType.WORKBENCH_INSTANCEIAMBINDING,
      () => new WORKBENCH_InstanceIamBinding(),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMMEMBER,
      () => new WORKBENCH_InstanceIamMember(),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMPOLICY,
      () => new WORKBENCH_InstanceIamPolicy(),
    ],
    [ResourceType.WORKFLOWS_WORKFLOW, () => new WORKFLOWS_Workflow()],
    [
      ResourceType.WORKSTATIONS_WORKSTATION,
      () => new WORKSTATIONS_Workstation(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCLUSTER,
      () => new WORKSTATIONS_WorkstationCluster(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIG,
      () => new WORKSTATIONS_WorkstationConfig(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMBINDING,
      () => new WORKSTATIONS_WorkstationConfigIamBinding(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMMEMBER,
      () => new WORKSTATIONS_WorkstationConfigIamMember(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMPOLICY,
      () => new WORKSTATIONS_WorkstationConfigIamPolicy(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMBINDING,
      () => new WORKSTATIONS_WorkstationIamBinding(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMMEMBER,
      () => new WORKSTATIONS_WorkstationIamMember(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMPOLICY,
      () => new WORKSTATIONS_WorkstationIamPolicy(),
    ],
  ]);

  public static GetResourceObject(resType: ResourceType): DS_Resource {
    let map = this.ResourceFactoryMap1.get(resType);
    return (map as () => DS_Resource)();
  }

  public static propertiesMap1: Map<ResourceType, ResourceProperty> = new Map([
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVEL,
      new ResourceProperty(
        'An AccessLevel is a label that can be applied to requests to GCP services, along with a list of requirements necessary for the label to be applied.   To get more information about AccessLevel, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels) - How-to Guides     - [Access Policy Quickstart](https://cloud.google.com/access-context-manager/docs/quickstart)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        ACCESSCONTEXTMANAGER_AccessLevel.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELCONDITION,
      new ResourceProperty(
        "Allows configuring a single access level condition to be appended to an access level's conditions. This resource is intended to be used in cases where it is not possible to compile a full list of conditions to include in a `gcp.accesscontextmanager.AccessLevel` resource, to enable them to be added separately.  > --Note:-- If this resource is used alongside a `gcp.accesscontextmanager.AccessLevel` resource, the access level resource must have a `lifecycle` block with `ignore_changes = [basic[0].conditions]` so they don't fight over which service accounts should be included.   To get more information about AccessLevelCondition, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels) - How-to Guides     - [Access Policy Quickstart](https://cloud.google.com/access-context-manager/docs/quickstart)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.",
        ACCESSCONTEXTMANAGER_AccessLevelCondition.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELS,
      new ResourceProperty(
        'Replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically. This is a bulk edit of all Access Levels and may override existing Access Levels created by `gcp.accesscontextmanager.AccessLevel`, thus causing a permadiff if used alongside `gcp.accesscontextmanager.AccessLevel` on the same parent.   To get more information about AccessLevels, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels) - How-to Guides     - [Access Policy Quickstart](https://cloud.google.com/access-context-manager/docs/quickstart)',
        ACCESSCONTEXTMANAGER_AccessLevels.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICY,
      new ResourceProperty(
        'AccessPolicy is a container for AccessLevels (which define the necessary attributes to use GCP services) and ServicePerimeters (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.   To get more information about AccessPolicy, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies) - How-to Guides     - [Access Policy Quickstart](https://cloud.google.com/access-context-manager/docs/quickstart)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        ACCESSCONTEXTMANAGER_AccessPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Access Context Manager (VPC Service Controls) AccessPolicy. Each of these resources serves a different use case:',
        ACCESSCONTEXTMANAGER_AccessPolicyIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Access Context Manager (VPC Service Controls) AccessPolicy. Each of these resources serves a different use case:',
        ACCESSCONTEXTMANAGER_AccessPolicyIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Access Context Manager (VPC Service Controls) AccessPolicy. Each of these resources serves a different use case:',
        ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_AUTHORIZEDORGSDESC,
      new ResourceProperty(
        'An authorized organizations description describes a list of organizations (1) that have been authorized to use certain asset (for example, device) data owned by different organizations at the enforcement points, or (2) with certain asset (for example, device) have been authorized to access the resources in another organization at the enforcement points.   To get more information about AuthorizedOrgsDesc, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.authorizedOrgsDescs) - How-to Guides     - [gcloud docs](https://cloud.google.com/beyondcorp-enterprise/docs/cross-org-authorization)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_EGRESSPOLICY,
      new ResourceProperty(
        'This resource has been deprecated, please refer to ServicePerimeterEgressPolicy.',
        ACCESSCONTEXTMANAGER_EgressPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_GCPUSERACCESSBINDING,
      new ResourceProperty(
        'Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.   To get more information about GcpUserAccessBinding, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/organizations.gcpUserAccessBindings)',
        ACCESSCONTEXTMANAGER_GcpUserAccessBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_INGRESSPOLICY,
      new ResourceProperty(
        'This resource has been deprecated, please refer to ServicePerimeterIngressPolicy.',
        ACCESSCONTEXTMANAGER_IngressPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETER,
      new ResourceProperty(
        'ServicePerimeter describes a set of GCP resources which can freely import and export data amongst themselves, but not export outside of the ServicePerimeter. If a request with a source within this ServicePerimeter has a target outside of the ServicePerimeter, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single GCP project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only GCP projects as members, a single GCP project may belong to multiple Service Perimeter Bridges.   To get more information about ServicePerimeter, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters) - How-to Guides     - [Service Perimeter Quickstart](https://cloud.google.com/vpc-service-controls/docs/quickstart)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        ACCESSCONTEXTMANAGER_ServicePerimeter.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETEREGRESSPOLICY,
      new ResourceProperty(
        'EgressPolicies match requests based on egressFrom and egressTo stanzas.',
        ACCESSCONTEXTMANAGER_ServicePerimeterEgressPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERINGRESSPOLICY,
      new ResourceProperty(
        'IngressPolicies match requests based on ingressFrom and ingressTo stanzas. For an ingress policy to match,',
        ACCESSCONTEXTMANAGER_ServicePerimeterIngressPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERRESOURCE,
      new ResourceProperty(
        "Allows configuring a single GCP resource that should be inside of a service perimeter. This resource is intended to be used in cases where it is not possible to compile a full list of projects to include in a `gcp.accesscontextmanager.ServicePerimeter` resource, to enable them to be added separately.  > --Note:-- If this resource is used alongside a `gcp.accesscontextmanager.ServicePerimeter` resource, the service perimeter resource must have a `lifecycle` block with `ignore_changes = [status[0].resources]` so they don't fight over which resources should be in the policy.   To get more information about ServicePerimeterResource, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters) - How-to Guides     - [Service Perimeter Quickstart](https://cloud.google.com/vpc-service-controls/docs/quickstart)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.",
        ACCESSCONTEXTMANAGER_ServicePerimeterResource.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERS,
      new ResourceProperty(
        'Replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically. This is a bulk edit of all Service Perimeters and may override existing Service Perimeters created by `gcp.accesscontextmanager.ServicePerimeter`, thus causing a permadiff if used alongside `gcp.accesscontextmanager.ServicePerimeter` on the same parent.   To get more information about ServicePerimeters, see:  - [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters) - How-to Guides     - [Service Perimeter Quickstart](https://cloud.google.com/vpc-service-controls/docs/quickstart)',
        ACCESSCONTEXTMANAGER_ServicePerimeters.GetTypes(),
      ),
    ],
    [
      ResourceType.ACTIVEDIRECTORY_DOMAIN,
      new ResourceProperty(
        'Creates a Microsoft AD domain   To get more information about Domain, see:  - [API documentation](https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains) - How-to Guides     - [Managed Microsoft Active Directory Quickstart](https://cloud.google.com/managed-microsoft-ad/docs/quickstarts)',
        ACTIVEDIRECTORY_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.ACTIVEDIRECTORY_DOMAINTRUST,
      new ResourceProperty(
        'Adds a trust between Active Directory domains   To get more information about DomainTrust, see:  - [API documentation](https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains/attachTrust) - How-to Guides     - [Active Directory Trust](https://cloud.google.com/managed-microsoft-ad/docs/create-one-way-trust)',
        ACTIVEDIRECTORY_DomainTrust.GetTypes(),
      ),
    ],
    [
      ResourceType.ACTIVEDIRECTORY_PEERING,
      new ResourceProperty('', ACTIVEDIRECTORY_Peering.GetTypes()),
    ],
    [
      ResourceType.ALLOYDB_BACKUP,
      new ResourceProperty(
        'An AlloyDB Backup.   To get more information about Backup, see:  - [API documentation](https://cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.backups/create) - How-to Guides     - [AlloyDB](https://cloud.google.com/alloydb/docs/)',
        ALLOYDB_Backup.GetTypes(),
      ),
    ],
    [
      ResourceType.ALLOYDB_CLUSTER,
      new ResourceProperty(
        'A managed alloydb cluster.   To get more information about Cluster, see:  - [API documentation](https://cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters/create) - How-to Guides     - [AlloyDB](https://cloud.google.com/alloydb/docs/)  > --Note:-- Users can promote a secondary cluster to a primary cluster with the help of `cluster_type`. To promote, users have to set the `cluster_type` property as `PRIMARY` and remove the `secondary_config` field from cluster configuration. See Example.',
        ALLOYDB_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.ALLOYDB_INSTANCE,
      new ResourceProperty('', ALLOYDB_Instance.GetTypes()),
    ],
    [
      ResourceType.ALLOYDB_USER,
      new ResourceProperty(
        'A database user in an AlloyDB cluster.   To get more information about User, see:  - [API documentation](https://cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters.users/create) - How-to Guides     - [AlloyDB](https://cloud.google.com/alloydb/docs/)',
        ALLOYDB_User.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_API,
      new ResourceProperty(
        'A consumable API that can be used by multiple Gateways.  To get more information about Api, see:  - [API documentation](https://cloud.google.com/api-gateway/docs/reference/rest/v1beta/projects.locations.apis) - How-to Guides     - [Official Documentation](https://cloud.google.com/api-gateway/docs/quickstart)',
        APIGATEWAY_Api.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIG,
      new ResourceProperty(
        'An API Configuration is an association of an API Controller Config and a Gateway Config  To get more information about ApiConfig, see:  - [API documentation](https://cloud.google.com/api-gateway/docs/reference/rest/v1beta/projects.locations.apis.configs) - How-to Guides     - [Official Documentation](https://cloud.google.com/api-gateway/docs/creating-api-config)',
        APIGATEWAY_ApiConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway ApiConfig. Each of these resources serves a different use case:',
        APIGATEWAY_ApiConfigIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway ApiConfig. Each of these resources serves a different use case:',
        APIGATEWAY_ApiConfigIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway ApiConfig. Each of these resources serves a different use case:',
        APIGATEWAY_ApiConfigIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway Api. Each of these resources serves a different use case:',
        APIGATEWAY_ApiIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway Api. Each of these resources serves a different use case:',
        APIGATEWAY_ApiIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway Api. Each of these resources serves a different use case:',
        APIGATEWAY_ApiIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAY,
      new ResourceProperty(
        'A consumable API that can be used by multiple Gateways.  To get more information about Gateway, see:  - [API documentation](https://cloud.google.com/api-gateway/docs/reference/rest/v1beta/projects.locations.apis) - How-to Guides     - [Official Documentation](https://cloud.google.com/api-gateway/docs/quickstart)',
        APIGATEWAY_Gateway.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway Gateway. Each of these resources serves a different use case:',
        APIGATEWAY_GatewayIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway Gateway. Each of these resources serves a different use case:',
        APIGATEWAY_GatewayIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for API Gateway Gateway. Each of these resources serves a different use case:',
        APIGATEWAY_GatewayIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ADDONSCONFIG,
      new ResourceProperty(
        'Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.   To get more information about AddonsConfig, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#setaddons) - How-to Guides     - [Creating an API organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org)',
        APIGEE_AddonsConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENDPOINTATTACHMENT,
      new ResourceProperty(
        'Apigee Endpoint Attachment.   To get more information about EndpointAttachment, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.endpointAttachments/create) - How-to Guides     - [Creating an environment](https://cloud.google.com/apigee/docs/api-platform/get-started/create-environment)',
        APIGEE_EndpointAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVGROUP,
      new ResourceProperty(
        'An `Environment group` in Apigee.   To get more information about Envgroup, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.envgroups/create) - How-to Guides     - [Creating an environment](https://cloud.google.com/apigee/docs/api-platform/get-started/create-environment)',
        APIGEE_EnvGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVGROUPATTACHMENT,
      new ResourceProperty(
        'An `Environment Group attachment` in Apigee.   To get more information about EnvgroupAttachment, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.envgroups.attachments/create) - How-to Guides     - [Creating an environment](https://cloud.google.com/apigee/docs/api-platform/get-started/create-environment)',
        APIGEE_EnvGroupAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENT,
      new ResourceProperty(
        'An `Environment` in Apigee.   To get more information about Environment, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments/create) - How-to Guides     - [Creating an environment](https://cloud.google.com/apigee/docs/api-platform/get-started/create-environment)',
        APIGEE_Environment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Apigee Environment. Each of these resources serves a different use case:',
        APIGEE_EnvironmentIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Apigee Environment. Each of these resources serves a different use case:',
        APIGEE_EnvironmentIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Apigee Environment. Each of these resources serves a different use case:',
        APIGEE_EnvironmentIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVKEYSTORE,
      new ResourceProperty(
        'An `Environment KeyStore` in Apigee.',
        APIGEE_EnvKeystore.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ENVREFERENCES,
      new ResourceProperty(
        'An `Environment Reference` in Apigee.',
        APIGEE_EnvReferences.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_FLOWHOOK,
      new ResourceProperty(
        'Represents a sharedflow attachment to a flowhook point.',
        APIGEE_Flowhook.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_INSTANCE,
      new ResourceProperty(
        'An `Instance` is the runtime dataplane in Apigee.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances/create) - How-to Guides     - [Creating a runtime instance](https://cloud.google.com/apigee/docs/api-platform/get-started/create-instance)',
        APIGEE_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_INSTANCEATTACHMENT,
      new ResourceProperty(
        'An `Instance attachment` in Apigee.   To get more information about InstanceAttachment, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances.attachments/create) - How-to Guides     - [Creating an environment](https://cloud.google.com/apigee/docs/api-platform/get-started/create-environment)',
        APIGEE_InstanceAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESKEYCERTFILE,
      new ResourceProperty(
        'An alias from a key/certificate pair.',
        APIGEE_KeystoresAliasesKeyCertFile.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESPKCS12,
      new ResourceProperty(
        'An alias from a pkcs12 file.',
        APIGEE_KeystoresAliasesPkcs12.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESSELFSIGNEDCERT,
      new ResourceProperty(
        'An Environment Keystore Alias for Self Signed Certificate Format in Apigee   To get more information about KeystoresAliasesSelfSignedCert, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments.keystores.aliases/create) - How-to Guides     - [Creating an environment](https://cloud.google.com/apigee/docs/api-platform/get-started/create-environment)',
        APIGEE_KeystoresAliasesSelfSignedCert.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_NATADDRESS,
      new ResourceProperty(
        'Apigee NAT (network address translation) address. A NAT address is a static external IP address used for Internet egress traffic. This is not avaible for Apigee hybrid. Apigee NAT addresses are not automatically activated because they might require explicit allow entries on the target systems first. See https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances.natAddresses/activate   To get more information about NatAddress, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances.natAddresses) - How-to Guides     - [Provisioning NAT IPs](https://cloud.google.com/apigee/docs/api-platform/security/nat-provisioning)',
        APIGEE_NatAddress.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_ORGANIZATION,
      new ResourceProperty(
        'An `Organization` is the top-level container in Apigee.   To get more information about Organization, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations) - How-to Guides     - [Creating an API organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org)',
        APIGEE_Organization.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_SHAREDFLOW,
      new ResourceProperty(
        "You can combine policies and resources into a shared flow that you can consume from multiple API proxies, and even from other shared flows. Although it's like a proxy, a shared flow has no endpoint. It can be used only from an API proxy or shared flow that's in the same organization as the shared flow itself.",
        APIGEE_Sharedflow.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_SHAREDFLOWDEPLOYMENT,
      new ResourceProperty(
        'Deploys a revision of a sharedflow.',
        APIGEE_SharedflowDeployment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_SYNCAUTHORIZATION,
      new ResourceProperty(
        'Authorize the Synchronizer to download environment data from the control plane.   To get more information about SyncAuthorization, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#getsyncauthorization) - How-to Guides     - [Enable Synchronizer access](https://cloud.google.com/apigee/docs/hybrid/v1.8/synchronizer-access#enable-synchronizer-access)',
        APIGEE_SyncAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGEE_TARGETSERVER,
      new ResourceProperty(
        'TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.   To get more information about TargetServer, see:  - [API documentation](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments.targetservers/create) - How-to Guides     - [Load balancing across backend servers](https://cloud.google.com/apigee/docs/api-platform/deploy/load-balancing-across-backend-servers)',
        APIGEE_TargetServer.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_APPLICATION,
      new ResourceProperty(
        "Allows creation and management of an App Engine application.  > App Engine applications cannot be deleted once they're created; you have to delete the    entire project to delete the application. This provider will report the application has been    successfully deleted; this is a limitation of the provider, and will go away in the future.    This provider is not able to delete App Engine applications.",
        APPENGINE_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_APPLICATIONURLDISPATCHRULES,
      new ResourceProperty(
        'Rules to match an HTTP request and dispatch that request to a service.   To get more information about ApplicationUrlDispatchRules, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps#UrlDispatchRule)',
        APPENGINE_ApplicationUrlDispatchRules.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_DOMAINMAPPING,
      new ResourceProperty(
        'A domain serving an App Engine application.   To get more information about DomainMapping, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.domainMappings) - How-to Guides     - [Official Documentation](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains)',
        APPENGINE_DomainMapping.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_ENGINESPLITTRAFFIC,
      new ResourceProperty(
        'Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.   To get more information about ServiceSplitTraffic, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services)',
        APPENGINE_EngineSplitTraffic.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_FIREWALLRULE,
      new ResourceProperty(
        'A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.   To get more information about FirewallRule, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.firewall.ingressRules) - How-to Guides     - [Official Documentation](https://cloud.google.com/appengine/docs/standard/python/creating-firewalls#creating_firewall_rules)',
        APPENGINE_FirewallRule.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_FLEXIBLEAPPVERSION,
      new ResourceProperty(
        'Flexible App Version resource to create a new version of flexible GAE Application. Based on Google Compute Engine, the App Engine flexible environment automatically scales your app up and down while also balancing the load. Learn about the differences between the standard environment and the flexible environment at https://cloud.google.com/appengine/docs/the-appengine-environments.  > --Note:-- The App Engine flexible environment service account uses the member ID `service-[YOUR_PROJECT_NUMBER]@gae-api-prod.google.com.iam.gserviceaccount.com` It should have the App Engine Flexible Environment Service Agent role, which will be applied when the `appengineflex.googleapis.com` service is enabled.   To get more information about FlexibleAppVersion, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) - How-to Guides     - [Official Documentation](https://cloud.google.com/appengine/docs/flexible)',
        APPENGINE_FlexibleAppVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_SERVICENETWORKSETTINGS,
      new ResourceProperty(
        'A NetworkSettings resource is a container for ingress settings for a version or service.   To get more information about ServiceNetworkSettings, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services)',
        APPENGINE_ServiceNetworkSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.APPENGINE_STANDARDAPPVERSION,
      new ResourceProperty(
        'Standard App Version resource to create a new version of standard GAE Application. Learn about the differences between the standard environment and the flexible environment at https://cloud.google.com/appengine/docs/the-appengine-environments. Currently supporting Zip and File Containers.   To get more information about StandardAppVersion, see:  - [API documentation](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) - How-to Guides     - [Official Documentation](https://cloud.google.com/appengine/docs/standard)',
        APPENGINE_StandardAppVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORY,
      new ResourceProperty(
        'A repository for storing artifacts   To get more information about Repository, see:  - [API documentation](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories) - How-to Guides     - [Official Documentation](https://cloud.google.com/artifact-registry/docs/overview)',
        ARTIFACTREGISTRY_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Artifact Registry Repository. Each of these resources serves a different use case:',
        ARTIFACTREGISTRY_RepositoryIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Artifact Registry Repository. Each of these resources serves a different use case:',
        ARTIFACTREGISTRY_RepositoryIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Artifact Registry Repository. Each of these resources serves a different use case:',
        ARTIFACTREGISTRY_RepositoryIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_VPCSCCONFIG,
      new ResourceProperty('', ARTIFACTREGISTRY_VpcscConfig.GetTypes()),
    ],
    [
      ResourceType.ASSUREDWORKLOADS_WORKLOAD,
      new ResourceProperty(
        'The AssuredWorkloads Workload resource',
        ASSUREDWORKLOADS_Workload.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUPDISASTERRECOVERY_MANAGEMENTSERVER,
      new ResourceProperty(
        '',
        BACKUPDISASTERRECOVERY_ManagementServer.GetTypes(),
      ),
    ],
    [
      ResourceType.BEYONDCORP_APPCONNECTION,
      new ResourceProperty(
        'A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection.  Multiple connectors can be authorised for a single AppConnection.   To get more information about AppConnection, see:  - [API documentation](https://cloud.google.com/beyondcorp/docs/reference/rest#rest-resource:-v1.projects.locations.appconnections) - How-to Guides     - [Official Documentation](https://cloud.google.com/beyondcorp-enterprise/docs/enable-app-connector)',
        BEYONDCORP_AppConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.BEYONDCORP_APPCONNECTOR,
      new ResourceProperty(
        'A BeyondCorp AppConnector resource represents an application facing component deployed proximal to  and with direct access to the application instances. It is used to establish connectivity between the  remote enterprise environment and GCP. It initiates connections to the applications and can proxy the  data from users over the connection.   To get more information about AppConnector, see:  - [API documentation](https://cloud.google.com/beyondcorp/docs/reference/rest#rest-resource:-v1.projects.locations.appconnectors) - How-to Guides     - [Official Documentation](https://cloud.google.com/beyondcorp-enterprise/docs/enable-app-connector)',
        BEYONDCORP_AppConnector.GetTypes(),
      ),
    ],
    [
      ResourceType.BEYONDCORP_APPGATEWAY,
      new ResourceProperty(
        'A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates  all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be  authorised for a single AppGateway.   To get more information about AppGateway, see:  - [API documentation](https://cloud.google.com/beyondcorp/docs/reference/rest#rest-resource:-v1.projects.locations.appgateways) - How-to Guides     - [Official Documentation](https://cloud.google.com/beyondcorp-enterprise/docs/enable-app-connector)',
        BEYONDCORP_AppGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGLAKE_CATALOG,
      new ResourceProperty(
        'Catalogs are top-level containers for Databases and Tables.   To get more information about Catalog, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs) - How-to Guides     - [Manage open source metadata with BigLake Metastore](https://cloud.google.com/bigquery/docs/manage-open-source-metadata#create_catalogs)',
        BIGLAKE_Catalog.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGLAKE_DATABASE,
      new ResourceProperty(
        'Databases are containers of tables.   To get more information about Database, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs.databases) - How-to Guides     - [Manage open source metadata with BigLake Metastore](https://cloud.google.com/bigquery/docs/manage-open-source-metadata#create_databases)',
        BIGLAKE_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGLAKE_TABLE,
      new ResourceProperty(
        'Represents a table.   To get more information about Table, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs.databases.tables) - How-to Guides     - [Manage open source metadata with BigLake Metastore](https://cloud.google.com/bigquery/docs/manage-open-source-metadata#create_tables)',
        BIGLAKE_Table.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_APPPROFILE,
      new ResourceProperty(
        'App profile is a configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.   To get more information about AppProfile, see:  - [API documentation](https://cloud.google.com/bigtable/docs/reference/admin/rest/v2/projects.instances.appProfiles)',
        BIGQUERY_AppProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_BIRESERVATION,
      new ResourceProperty(
        'Represents a BI Reservation.   To get more information about BiReservation, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/reservations/rest/v1/BiReservation) - How-to Guides     - [Introduction to Reservations](https://cloud.google.com/bigquery/docs/reservations-intro)',
        BIGQUERY_BiReservation.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_CAPACITYCOMMITMENT,
      new ResourceProperty(
        'Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes.  In order to remove annual commitment, its plan needs to be changed to monthly or flex first.   To get more information about CapacityCommitment, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/reservations/rest/v1/projects.locations.capacityCommitments) - How-to Guides     - [Introduction to Reservations](https://cloud.google.com/bigquery/docs/reservations-intro)',
        BIGQUERY_CapacityCommitment.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_CONNECTION,
      new ResourceProperty(
        'A connection allows BigQuery connections to external data sources..   To get more information about Connection, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest/v1/projects.locations.connections/create) - How-to Guides     - [Cloud SQL federated queries](https://cloud.google.com/bigquery/docs/cloud-sql-federated-queries)',
        BIGQUERY_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Connection Connection. Each of these resources serves a different use case:',
        BIGQUERY_ConnectionIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Connection Connection. Each of these resources serves a different use case:',
        BIGQUERY_ConnectionIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Connection Connection. Each of these resources serves a different use case:',
        BIGQUERY_ConnectionIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_DATASET,
      new ResourceProperty('', BIGQUERY_Dataset.GetTypes()),
    ],
    [
      ResourceType.BIGQUERY_DATASETACCESS,
      new ResourceProperty('', BIGQUERY_DatasetAccess.GetTypes()),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery dataset. Each of these resources serves a different use case:',
        BIGQUERY_DatasetIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery dataset. Each of these resources serves a different use case:',
        BIGQUERY_DatasetIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery dataset. Each of these resources serves a different use case:',
        BIGQUERY_DatasetIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_DATATRANSFERCONFIG,
      new ResourceProperty(
        'Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer.   To get more information about Config, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/datatransfer/rest/v1/projects.locations.transferConfigs/create) - How-to Guides     - [Official Documentation](https://cloud.google.com/bigquery/docs/reference/datatransfer/rest/)',
        BIGQUERY_DataTransferConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_IAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Table. Each of these resources serves a different use case:',
        BIGQUERY_IamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_IAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Table. Each of these resources serves a different use case:',
        BIGQUERY_IamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_IAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Table. Each of these resources serves a different use case:',
        BIGQUERY_IamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_JOB,
      new ResourceProperty(
        'Jobs are actions that BigQuery runs on your behalf to load data, export data, query data, or copy data. Once a BigQuery job is created, it cannot be changed or deleted.   To get more information about Job, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs) - How-to Guides     - [BigQuery Jobs Intro](https://cloud.google.com/bigquery/docs/jobs-overview)',
        BIGQUERY_Job.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_RESERVATION,
      new ResourceProperty(
        'A reservation is a mechanism used to guarantee BigQuery slots to users.   To get more information about Reservation, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/reservations/rest/v1/projects.locations.reservations/create) - How-to Guides     - [Introduction to Reservations](https://cloud.google.com/bigquery/docs/reservations-intro)',
        BIGQUERY_Reservation.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_RESERVATIONASSIGNMENT,
      new ResourceProperty(
        'The BigqueryReservation Assignment resource',
        BIGQUERY_ReservationAssignment.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_ROUTINE,
      new ResourceProperty(
        'A user-defined function or a stored procedure that belongs to a Dataset   To get more information about Routine, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/rest/v2/routines) - How-to Guides     - [Routines Intro](https://cloud.google.com/bigquery/docs/reference/rest/v2/routines)',
        BIGQUERY_Routine.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERY_TABLE,
      new ResourceProperty(
        "Creates a table resource in a dataset for Google BigQuery. For more information see [the official documentation](https://cloud.google.com/bigquery/docs/) and [API](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables).  > --Note--: On newer versions of the provider, you must explicitly set `deletion_protection=false` (and run `pulumi update` to write the field to state) in order to destroy an instance. It is recommended to not set this field (or set it to true) until you're ready to destroy.",
        BIGQUERY_Table.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGE,
      new ResourceProperty(
        'A Bigquery Analytics Hub data exchange   To get more information about DataExchange, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/analytics-hub/rest/v1/projects.locations.dataExchanges) - How-to Guides     - [Official Documentation](https://cloud.google.com/bigquery/docs/analytics-hub-introduction)',
        BIGQUERYANALYTICSHUB_DataExchange.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Bigquery Analytics Hub DataExchange. Each of these resources serves a different use case:',
        BIGQUERYANALYTICSHUB_DataExchangeIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Bigquery Analytics Hub DataExchange. Each of these resources serves a different use case:',
        BIGQUERYANALYTICSHUB_DataExchangeIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Bigquery Analytics Hub DataExchange. Each of these resources serves a different use case:',
        BIGQUERYANALYTICSHUB_DataExchangeIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTING,
      new ResourceProperty(
        'A Bigquery Analytics Hub data exchange listing   To get more information about Listing, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/analytics-hub/rest/v1/projects.locations.dataExchanges.listings) - How-to Guides     - [Official Documentation](https://cloud.google.com/bigquery/docs/analytics-hub-introduction)',
        BIGQUERYANALYTICSHUB_Listing.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Bigquery Analytics Hub Listing. Each of these resources serves a different use case:',
        BIGQUERYANALYTICSHUB_ListingIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Bigquery Analytics Hub Listing. Each of these resources serves a different use case:',
        BIGQUERYANALYTICSHUB_ListingIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Bigquery Analytics Hub Listing. Each of these resources serves a different use case:',
        BIGQUERYANALYTICSHUB_ListingIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICY,
      new ResourceProperty(
        'A BigQuery Data Policy   To get more information about DataPolicy, see:  - [API documentation](https://cloud.google.com/bigquery/docs/reference/bigquerydatapolicy/rest/v1beta1/projects.locations.dataPolicies/create) - How-to Guides     - [Official Documentation](https://cloud.google.com/bigquery/docs/column-data-masking-intro)',
        BIGQUERYDATAPOLICY_DataPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Data Policy DataPolicy. Each of these resources serves a different use case:',
        BIGQUERYDATAPOLICY_DataPolicyIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Data Policy DataPolicy. Each of these resources serves a different use case:',
        BIGQUERYDATAPOLICY_DataPolicyIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for BigQuery Data Policy DataPolicy. Each of these resources serves a different use case:',
        BIGQUERYDATAPOLICY_DataPolicyIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_GCPOLICY,
      new ResourceProperty(
        "Creates a Google Cloud Bigtable GC Policy inside a family. For more information see [the official documentation](https://cloud.google.com/bigtable/) and [API](https://cloud.google.com/bigtable/docs/go/reference).  > --Warning--: We don't recommend having multiple GC policies for the same column family as it may result in unexpected behavior.  > --Note--: GC policies associated with a replicated table cannot be destroyed directly. Destroying a GC policy is translated into never perform garbage collection, this is considered relaxing from pure age-based or version-based GC policy, hence not allowed. The workaround is unreplicating the instance first by updating the instance to have one cluster.",
        BIGTABLE_GCPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_INSTANCE,
      new ResourceProperty(
        '## +---  subcategory: "Cloud Bigtable" description: |-   Creates a Google Bigtable instance. ---  # gcp.bigtable.Instance  Creates a Google Bigtable instance. For more information see:  - [API documentation](https://cloud.google.com/bigtable/docs/reference/admin/rest/v2/projects.instances.clusters) - How-to Guides     - [Official Documentation](https://cloud.google.com/bigtable/docs)',
        BIGTABLE_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on bigtable instances. Each of these resources serves a different use case:',
        BIGTABLE_InstanceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on bigtable instances. Each of these resources serves a different use case:',
        BIGTABLE_InstanceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on bigtable instances. Each of these resources serves a different use case:',
        BIGTABLE_InstanceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_TABLE,
      new ResourceProperty(
        'Creates a Google Cloud Bigtable table inside an instance. For more information see [the official documentation](https://cloud.google.com/bigtable/) and [API](https://cloud.google.com/bigtable/docs/go/reference).',
        BIGTABLE_Table.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_TABLEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on bigtable tables. Each of these resources serves a different use case:',
        BIGTABLE_TableIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_TABLEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on bigtable tables. Each of these resources serves a different use case:',
        BIGTABLE_TableIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BIGTABLE_TABLEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on bigtable tables. Each of these resources serves a different use case:',
        BIGTABLE_TableIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on billing accounts. Each of these resources serves a different use case:',
        BILLING_AccountIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on billing accounts. Each of these resources serves a different use case:',
        BILLING_AccountIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on billing accounts. Each of these resources serves a different use case:',
        BILLING_AccountIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BILLING_BUDGET,
      new ResourceProperty(
        'Budget configuration for a billing account.   To get more information about Budget, see:  - [API documentation](https://cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets) - How-to Guides     - [Creating a budget](https://cloud.google.com/billing/docs/how-to/budgets)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the Billing Budgets API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        BILLING_Budget.GetTypes(),
      ),
    ],
    [
      ResourceType.BILLING_PROJECTINFO,
      new ResourceProperty(
        'Billing information for a project.   To get more information about ProjectInfo, see:  - [API documentation](https://cloud.google.com/billing/docs/reference/rest/v1/projects) - How-to Guides     - [Enable, disable, or change billing for a project](https://cloud.google.com/billing/docs/how-to/modify-project)',
        BILLING_ProjectInfo.GetTypes(),
      ),
    ],
    [
      ResourceType.BILLING_SUBACCOUNT,
      new ResourceProperty(
        'Allows creation and management of a Google Cloud Billing Subaccount.',
        BILLING_SubAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTOR,
      new ResourceProperty(
        'An attestor that attests to container image artifacts.   To get more information about Attestor, see:  - [API documentation](https://cloud.google.com/binary-authorization/docs/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/binary-authorization/)',
        BINARYAUTHORIZATION_Attestor.GetTypes(),
      ),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Binary Authorization Attestor. Each of these resources serves a different use case:',
        BINARYAUTHORIZATION_AttestorIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Binary Authorization Attestor. Each of these resources serves a different use case:',
        BINARYAUTHORIZATION_AttestorIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Binary Authorization Attestor. Each of these resources serves a different use case:',
        BINARYAUTHORIZATION_AttestorIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_POLICY,
      new ResourceProperty(
        'A policy for container image binary authorization.   To get more information about Policy, see:  - [API documentation](https://cloud.google.com/binary-authorization/docs/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/binary-authorization/)',
        BINARYAUTHORIZATION_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.BLOCKCHAINNODEENGINE_BLOCKCHAINNODES,
      new ResourceProperty(
        'A representation of a blockchain node.   To get more information about BlockchainNodes, see:  - [API documentation](https://cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes) - How-to Guides     - [Official Documentation](https://cloud.google.com/blockchain-node-engine)',
        BLOCKCHAINNODEENGINE_BlockchainNodes.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_AUTHORITY,
      new ResourceProperty(
        "A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.   To get more information about CertificateAuthority, see:  - [API documentation](https://cloud.google.com/certificate-authority-service/docs/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/certificate-authority-service)  > --Warning:-- On newer versions of the provider, you must explicitly set `deletion_protection=false` (and run `pulumi up` to write the field to state) in order to destroy a CertificateAuthority. It is recommended to not set this field (or set it to true) until you're ready to destroy.",
        CERTIFICATEAUTHORITY_Authority.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOL,
      new ResourceProperty(
        'A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.',
        CERTIFICATEAUTHORITY_CaPool.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Certificate Authority Service CaPool. Each of these resources serves a different use case:',
        CERTIFICATEAUTHORITY_CaPoolIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Certificate Authority Service CaPool. Each of these resources serves a different use case:',
        CERTIFICATEAUTHORITY_CaPoolIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Certificate Authority Service CaPool. Each of these resources serves a different use case:',
        CERTIFICATEAUTHORITY_CaPoolIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATE,
      new ResourceProperty(
        'A Certificate corresponds to a signed X.509 certificate issued by a Certificate.   > --Note:-- The Certificate Authority that is referenced by this resource --must-- be `tier = "ENTERPRISE"`',
        CERTIFICATEAUTHORITY_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATE,
      new ResourceProperty(
        'Certificate Authority Service provides reusable and parameterized templates that you can use for common certificate issuance scenarios. A certificate template represents a relatively static and well-defined certificate issuance schema within an organization.  A certificate template can essentially become a full-fledged vertical certificate issuance framework.  For more information, see: - [Understanding Certificate Templates](https://cloud.google.com/certificate-authority-service/docs/certificate-template) - [Common configurations and Certificate Profiles](https://cloud.google.com/certificate-authority-service/docs/certificate-profile)',
        CERTIFICATEAUTHORITY_CertificateTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Certificate Authority Service CertificateTemplate. Each of these resources serves a different use case:',
        CERTIFICATEAUTHORITY_CertificateTemplateIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Certificate Authority Service CertificateTemplate. Each of these resources serves a different use case:',
        CERTIFICATEAUTHORITY_CertificateTemplateIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Certificate Authority Service CertificateTemplate. Each of these resources serves a different use case:',
        CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATE,
      new ResourceProperty(
        'Certificate represents a HTTP-reachable backend for a Certificate.',
        CERTIFICATEMANAGER_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEISSUANCECONFIG,
      new ResourceProperty(
        'Certificate represents a HTTP-reachable backend for a Certificate.   To get more information about CertificateIssuanceConfig, see:  - [API documentation](https://cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs) - How-to Guides     - [Manage certificate issuance configs](https://cloud.google.com/certificate-manager/docs/issuance-configs)',
        CERTIFICATEMANAGER_CertificateIssuanceConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAP,
      new ResourceProperty(
        'CertificateMap defines a collection of certificate configurations, which are usable by any associated target proxies',
        CERTIFICATEMANAGER_CertificateMap.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAPENTRY,
      new ResourceProperty(
        'CertificateMapEntry is a list of certificate configurations, that have been issued for a particular hostname',
        CERTIFICATEMANAGER_CertificateMapEntry.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_DNSAUTHORIZATION,
      new ResourceProperty(
        'DnsAuthorization represents a HTTP-reachable backend for a DnsAuthorization.',
        CERTIFICATEMANAGER_DnsAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_TRUSTCONFIG,
      new ResourceProperty(
        'TrustConfig represents a resource that represents your Public Key Infrastructure (PKI) configuration in Certificate Manager for use in mutual TLS authentication scenarios.   To get more information about TrustConfig, see:  - [API documentation](https://cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.trustConfigs/create) - How-to Guides     - [Official Documentation](https://cloud.google.com/certificate-manager/docs)',
        CERTIFICATEMANAGER_TrustConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDASSET_FOLDERFEED,
      new ResourceProperty(
        'Describes a Cloud Asset Inventory feed used to to listen to asset updates.   To get more information about FolderFeed, see:  - [API documentation](https://cloud.google.com/asset-inventory/docs/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/asset-inventory/docs)',
        CLOUDASSET_FolderFeed.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDASSET_ORGANIZATIONFEED,
      new ResourceProperty(
        'Describes a Cloud Asset Inventory feed used to to listen to asset updates.   To get more information about OrganizationFeed, see:  - [API documentation](https://cloud.google.com/asset-inventory/docs/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/asset-inventory/docs)',
        CLOUDASSET_OrganizationFeed.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDASSET_PROJECTFEED,
      new ResourceProperty(
        'Describes a Cloud Asset Inventory feed used to to listen to asset updates.   To get more information about ProjectFeed, see:  - [API documentation](https://cloud.google.com/asset-inventory/docs/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/asset-inventory/docs)',
        CLOUDASSET_ProjectFeed.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILD_BITBUCKETSERVERCONFIG,
      new ResourceProperty(
        'BitbucketServerConfig represents the configuration for a Bitbucket Server.   To get more information about BitbucketServerConfig, see:  - [API documentation](https://cloud.google.com/build/docs/api/reference/rest/v1/projects.locations.bitbucketServerConfigs) - How-to Guides     - [Connect to a Bitbucket Server host](https://cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)',
        CLOUDBUILD_BitbucketServerConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILD_TRIGGER,
      new ResourceProperty(
        'Configuration for an automated build in response to source repository changes.   To get more information about Trigger, see:  - [API documentation](https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.triggers) - How-to Guides     - [Automating builds using build triggers](https://cloud.google.com/cloud-build/docs/running-builds/automate-builds)  > --Note:-- You can retrieve the email of the Cloud Build Service Account used in jobs by using the `gcp.projects.ServiceIdentity` resource.',
        CLOUDBUILD_Trigger.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILD_WORKERPOOL,
      new ResourceProperty(
        'Definition of custom Cloud Build WorkerPools for running jobs with custom configuration and custom networking.',
        CLOUDBUILD_WorkerPool.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTION,
      new ResourceProperty(
        'A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center or GitLab.   To get more information about Connection, see:  - [API documentation](https://cloud.google.com/build/docs/api/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/build/docs)',
        CLOUDBUILDV2_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Build v2 Connection. Each of these resources serves a different use case:',
        CLOUDBUILDV2_ConnectionIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Build v2 Connection. Each of these resources serves a different use case:',
        CLOUDBUILDV2_ConnectionIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Build v2 Connection. Each of these resources serves a different use case:',
        CLOUDBUILDV2_ConnectionIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDBUILDV2_REPOSITORY,
      new ResourceProperty(
        'A repository associated to a parent connection.   To get more information about Repository, see:  - [API documentation](https://cloud.google.com/build/docs/api/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/build/docs)',
        CLOUDBUILDV2_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_AUTOMATION,
      new ResourceProperty(
        'An `Automation` enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion amongst Targets, Rollout repair and Rollout deployment strategy advancement.   To get more information about Automation, see:  - [API documentation](https://cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.automations) - How-to Guides     - [Automate your deployment](https://cloud.google.com/deploy/docs/automation)',
        CLOUDDEPLOY_Automation.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_CUSTOMTARGETTYPE,
      new ResourceProperty(
        'A Cloud Deploy `CustomTargetType` defines a type of custom target that can be referenced in a Cloud Deploy `Target` in order to facilitate deploying to other systems besides the supported runtimes.   To get more information about CustomTargetType, see:  - [API documentation](https://cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes) - How-to Guides     - [Define and use a custom target type](https://cloud.google.com/deploy/docs/deploy-app-custom-target)',
        CLOUDDEPLOY_CustomTargetType.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINE,
      new ResourceProperty(
        'The Cloud Deploy `DeliveryPipeline` resource',
        CLOUDDEPLOY_DeliveryPipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMBINDING,
      new ResourceProperty(
        '',
        CLOUDDEPLOY_DeliveryPipelineIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMMEMBER,
      new ResourceProperty(
        '',
        CLOUDDEPLOY_DeliveryPipelineIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMPOLICY,
      new ResourceProperty(
        '',
        CLOUDDEPLOY_DeliveryPipelineIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGET,
      new ResourceProperty(
        'The Cloud Deploy `Target` resource',
        CLOUDDEPLOY_Target.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMBINDING,
      new ResourceProperty('', CLOUDDEPLOY_TargetIamBinding.GetTypes()),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMMEMBER,
      new ResourceProperty('', CLOUDDEPLOY_TargetIamMember.GetTypes()),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMPOLICY,
      new ResourceProperty('', CLOUDDEPLOY_TargetIamPolicy.GetTypes()),
    ],
    [
      ResourceType.CLOUDDOMAINS_REGISTRATION,
      new ResourceProperty('', CLOUDDOMAINS_Registration.GetTypes()),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTION,
      new ResourceProperty(
        'Creates a new Cloud Function. For more information see:  - [API documentation](https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions) - How-to Guides     - [Official Documentation](https://cloud.google.com/functions/docs)   > --Warning:-- As of November 1, 2019, newly created Functions are private-by-default and will require [appropriate IAM permissions](https://cloud.google.com/functions/docs/reference/iam/roles) to be invoked. See below examples for how to set up the appropriate permissions, or view the [Cloud Functions IAM resources](https://www.terraform.io/docs/providers/google/r/cloudfunctions_cloud_function_iam.html) for Cloud Functions.',
        CLOUDFUNCTIONS_Function.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Functions CloudFunction. Each of these resources serves a different use case:',
        CLOUDFUNCTIONS_FunctionIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Functions CloudFunction. Each of these resources serves a different use case:',
        CLOUDFUNCTIONS_FunctionIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Functions CloudFunction. Each of these resources serves a different use case:',
        CLOUDFUNCTIONS_FunctionIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTION,
      new ResourceProperty(
        'A Cloud Function that contains user computation executed in response to an event.   To get more information about function, see:  - [API documentation](https://cloud.google.com/functions/docs/reference/rest/v2beta/projects.locations.functions)',
        CLOUDFUNCTIONSV2_Function.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Functions (2nd gen) function. Each of these resources serves a different use case:',
        CLOUDFUNCTIONSV2_FunctionIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Functions (2nd gen) function. Each of these resources serves a different use case:',
        CLOUDFUNCTIONSV2_FunctionIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Functions (2nd gen) function. Each of these resources serves a different use case:',
        CLOUDFUNCTIONSV2_FunctionIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDIDENTITY_GROUP,
      new ResourceProperty(
        'A Cloud Identity resource representing a Group.   To get more information about Group, see:  - [API documentation](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups) - How-to Guides     - [Official Documentation](https://cloud.google.com/identity/docs/how-to/setup)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the Cloud Identity API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        CLOUDIDENTITY_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDIDENTITY_GROUPMEMBERSHIP,
      new ResourceProperty(
        'A Membership defines a relationship between a Group and an entity belonging to that Group, referred to as a "member".   To get more information about GroupMembership, see:  - [API documentation](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships) - How-to Guides     - [Official Documentation](https://cloud.google.com/identity/docs/how-to/memberships-google-groups)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the Cloud Identity API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        CLOUDIDENTITY_GroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDIDS_ENDPOINT,
      new ResourceProperty(
        'Cloud IDS is an intrusion detection service that provides threat detection for intrusions, malware, spyware, and command-and-control attacks on your network.   To get more information about Endpoint, see:  - [API documentation](https://cloud.google.com/intrusion-detection-system/docs/configuring-ids)',
        CLOUDIDS_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUN_DOMAINMAPPING,
      new ResourceProperty(
        "Resource to hold the state and status of a user's domain mapping.   To get more information about DomainMapping, see:  - [API documentation](https://cloud.google.com/run/docs/reference/rest/v1/projects.locations.domainmappings) - How-to Guides     - [Official Documentation](https://cloud.google.com/run/docs/mapping-custom-domains)",
        CLOUDRUN_DomainMapping.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUN_IAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run Service. Each of these resources serves a different use case:',
        CLOUDRUN_IamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUN_IAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run Service. Each of these resources serves a different use case:',
        CLOUDRUN_IamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUN_IAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run Service. Each of these resources serves a different use case:',
        CLOUDRUN_IamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUN_SERVICE,
      new ResourceProperty(
        'A Cloud Run service has a unique endpoint and autoscales containers.   To get more information about Service, see:  - [API documentation](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services) - How-to Guides     - [Official Documentation](https://cloud.google.com/run/docs/)  > --Warning:-- We recommend using the `gcp.cloudrunv2.Service` resource which offers a better developer experience and broader support of Cloud Run features.',
        CLOUDRUN_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_JOB,
      new ResourceProperty(
        'A Cloud Run Job resource that references a container image which is run to completion.   To get more information about Job, see:  - [API documentation](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.jobs) - How-to Guides     - [Official Documentation](https://cloud.google.com/run/docs/)',
        CLOUDRUNV2_Job.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_JOBIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run (v2 API) Job. Each of these resources serves a different use case:',
        CLOUDRUNV2_JobIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_JOBIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run (v2 API) Job. Each of these resources serves a different use case:',
        CLOUDRUNV2_JobIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_JOBIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run (v2 API) Job. Each of these resources serves a different use case:',
        CLOUDRUNV2_JobIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICE,
      new ResourceProperty(
        'Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.   To get more information about Service, see:  - [API documentation](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services) - How-to Guides     - [Official Documentation](https://cloud.google.com/run/docs/)',
        CLOUDRUNV2_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run (v2 API) Service. Each of these resources serves a different use case:',
        CLOUDRUNV2_ServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run (v2 API) Service. Each of these resources serves a different use case:',
        CLOUDRUNV2_ServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Run (v2 API) Service. Each of these resources serves a different use case:',
        CLOUDRUNV2_ServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDSCHEDULER_JOB,
      new ResourceProperty(
        'A scheduled job that can publish a PubSub message or an HTTP request every X interval of time, using a crontab format string.   To get more information about Job, see:  - [API documentation](https://cloud.google.com/scheduler/docs/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/scheduler/)',
        CLOUDSCHEDULER_Job.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUE,
      new ResourceProperty(
        'A named resource to which messages are sent by publishers.',
        CLOUDTASKS_Queue.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Tasks Queue. Each of these resources serves a different use case:',
        CLOUDTASKS_QueueIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Tasks Queue. Each of these resources serves a different use case:',
        CLOUDTASKS_QueueIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Tasks Queue. Each of these resources serves a different use case:',
        CLOUDTASKS_QueueIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPOSER_ENVIRONMENT,
      new ResourceProperty('', COMPOSER_Environment.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_ADDRESS,
      new ResourceProperty(
        "Represents an Address resource.  Each virtual machine instance has an ephemeral internal IP address and, optionally, an external IP address. To communicate between instances on the same network, you can use an instance's internal IP address. To communicate with the Internet and instances outside of the same network, you must specify the instance's external IP address.  Internal IP addresses are ephemeral and only belong to an instance for the lifetime of the instance; if the instance is deleted and recreated, the instance is assigned a new internal IP address, either by Compute Engine or by you. External IP addresses can be either ephemeral or static.   To get more information about Address, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/beta/addresses) - How-to Guides     - [Reserving a Static External IP Address](https://cloud.google.com/compute/docs/instances-and-network)     - [Reserving a Static Internal IP Address](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address)",
        COMPUTE_Address.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ATTACHEDDISK,
      new ResourceProperty(
        'Persistent disks can be attached to a compute instance using the `attached_disk` section within the compute instance configuration. However there may be situations where managing the attached disks via the compute instance config isn\'t preferable or possible, such as attaching dynamic numbers of disks using the `count` variable.   To get more information about attaching disks, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/instances/attachDisk) - How-to Guides     - [Adding a persistent disk](https://cloud.google.com/compute/docs/disks/add-persistent-disk)  --Note:-- When using `gcp.compute.AttachedDisk` you --must-- use `lifecycle.ignore_changes = ["attached_disk"]` on the `gcp.compute.Instance` resource that has the disks attached. Otherwise the two resources will fight for control of the attached disk block.',
        COMPUTE_AttachedDisk.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_AUTOSCALER,
      new ResourceProperty(
        'Represents an Autoscaler resource.  Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define.   To get more information about Autoscaler, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/autoscalers) - How-to Guides     - [Autoscaling Groups of Instances](https://cloud.google.com/compute/docs/autoscaler/)',
        COMPUTE_Autoscaler.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKET,
      new ResourceProperty(
        'Backend buckets allow you to use Google Cloud Storage buckets with HTTP(S) load balancing.  An HTTP(S) load balancer can direct traffic to specified URLs to a backend bucket rather than a backend service. It can send requests for static content to a Cloud Storage bucket and requests for dynamic content to a virtual machine instance.   To get more information about BackendBucket, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/backendBuckets) - How-to Guides     - [Using a Cloud Storage bucket as a load balancer backend](https://cloud.google.com/compute/docs/load-balancing/http/backend-bucket)',
        COMPUTE_BackendBucket.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMBINDING,
      new ResourceProperty('', COMPUTE_BackendBucketIamBinding.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMMEMBER,
      new ResourceProperty('', COMPUTE_BackendBucketIamMember.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMPOLICY,
      new ResourceProperty('', COMPUTE_BackendBucketIamPolicy.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETSIGNEDURLKEY,
      new ResourceProperty(
        'A key for signing Cloud CDN signed URLs for BackendBuckets.   To get more information about BackendBucketSignedUrlKey, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/backendBuckets) - How-to Guides     - [Using Signed URLs](https://cloud.google.com/cdn/docs/using-signed-urls/)',
        COMPUTE_BackendBucketSignedUrlKey.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICE,
      new ResourceProperty(
        'A Backend Service defines a group of virtual machines that will serve traffic for load balancing. This resource is a global backend service, appropriate for external load balancing or self-managed internal load balancing. For managed internal load balancing, use a regional backend service instead.  Currently self-managed internal load balancing is only available in beta.   To get more information about BackendService, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/backendServices) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/http/backend-service)',
        COMPUTE_BackendService.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMBINDING,
      new ResourceProperty('', COMPUTE_BackendServiceIamBinding.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMMEMBER,
      new ResourceProperty('', COMPUTE_BackendServiceIamMember.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMPOLICY,
      new ResourceProperty('', COMPUTE_BackendServiceIamPolicy.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICESIGNEDURLKEY,
      new ResourceProperty(
        'A key for signing Cloud CDN signed URLs for Backend Services.   To get more information about BackendServiceSignedUrlKey, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) - How-to Guides     - [Using Signed URLs](https://cloud.google.com/cdn/docs/using-signed-urls/)',
        COMPUTE_BackendServiceSignedUrlKey.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_CAEXTERNALACCOUNTKEY,
      new ResourceProperty(
        "A representation of an ExternalAccountKey used for external account binding within ACME.   To get more information about ExternalAccountKey, see:  - [API documentation](https://cloud.google.com/certificate-manager/docs/reference/public-ca/rest/v1/projects.locations.externalAccountKeys/create) - How-to Guides     - [Official Documentation](https://cloud.google.com/certificate-manager/docs/public-ca)     - [Request EAB key ID and HMAC](https://cloud.google.com/certificate-manager/docs/public-ca-tutorial#request-key-hmac)     - [Request Certificate Using Public CA](https://cloud.google.com/certificate-manager/docs/public-ca-tutorial)  > --Warning:-- This resource is create-only and could not be read from the API. On delete, the resource would be removed from the state. You must use an EAB secret within 7 days of obtaining it. The EAB secret is invalidated if you don't use it within 7 days. The ACME account registered by using an EAB secret has no expiration.",
        COMPUTE_CaExternalAccountKey.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_DISK,
      new ResourceProperty(
        'Persistent disks are durable storage devices that function similarly to the physical disks in a desktop or a server. Compute Engine manages the hardware behind these devices to ensure data redundancy and optimize performance for you. Persistent disks are available as either standard hard disk drives (HDD) or solid-state drives (SSD).  Persistent disks are located independently from your virtual machine instances, so you can detach or move persistent disks to keep your data even after you delete your instances. Persistent disk performance scales automatically with size, so you can resize your existing persistent disks or add more persistent disks to an instance to meet your performance and storage space requirements.  Add a persistent disk to your instance when you need reliable and affordable storage with consistent performance characteristics.   To get more information about Disk, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/disks) - How-to Guides     - [Adding a persistent disk](https://cloud.google.com/compute/docs/disks/add-persistent-disk)',
        COMPUTE_Disk.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_DISKASYNCREPLICATION,
      new ResourceProperty(
        'Starts and stops asynchronous persistent disk replication. For more information see [the official documentation](https://cloud.google.com/compute/docs/disks/async-pd/about) and the [API](https://cloud.google.com/compute/docs/reference/rest/v1/disks).',
        COMPUTE_DiskAsyncReplication.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_DISKIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Disk. Each of these resources serves a different use case:',
        COMPUTE_DiskIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_DISKIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Disk. Each of these resources serves a different use case:',
        COMPUTE_DiskIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_DISKIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Disk. Each of these resources serves a different use case:',
        COMPUTE_DiskIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_DISKRESOURCEPOLICYATTACHMENT,
      new ResourceProperty(
        'Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.  > --Note:-- This resource does not support regional disks (`gcp.compute.RegionDisk`). For regional disks, please refer to the `gcp.compute.RegionDiskResourcePolicyAttachment` resource.',
        COMPUTE_DiskResourcePolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_EXTERNALVPNGATEWAY,
      new ResourceProperty(
        'Represents a VPN gateway managed outside of GCP.   To get more information about ExternalVpnGateway, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/externalVpnGateways)',
        COMPUTE_ExternalVpnGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_FIREWALL,
      new ResourceProperty(
        'Each network has its own firewall controlling access to and from the instances.  All traffic to instances, even from other instances, is blocked by the firewall unless firewall rules are created to allow it.  The default network has automatically created firewall rules that are shown in default firewall rules. No manually created network has automatically created firewall rules except for a default "allow" rule for outgoing traffic and a default "deny" for incoming traffic. For all networks except the default network, you must create any firewall rules you need.   To get more information about Firewall, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/firewalls) - How-to Guides     - [Official Documentation](https://cloud.google.com/vpc/docs/firewalls)',
        COMPUTE_Firewall.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICY,
      new ResourceProperty(
        'Hierarchical firewall policy rules let you create and enforce a consistent firewall policy across your organization. Rules can explicitly allow or deny connections or delegate evaluation to lower level policies. Policies can be created within organizations or folders.  This resource should be generally be used with `gcp.compute.FirewallPolicyAssociation` and `gcp.compute.FirewallPolicyRule`  For more information see the [official documentation](https://cloud.google.com/vpc/docs/firewall-policies)',
        COMPUTE_FirewallPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYASSOCIATION,
      new ResourceProperty(
        'Allows associating hierarchical firewall policies with the target where they are applied. This allows creating policies and rules in a different location than they are applied.  For more information on applying hierarchical firewall policies see the [official documentation](https://cloud.google.com/vpc/docs/firewall-policies#managing_hierarchical_firewall_policy_resources)',
        COMPUTE_FirewallPolicyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYRULE,
      new ResourceProperty(
        'The Compute FirewallPolicyRule resource',
        COMPUTE_FirewallPolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_FORWARDINGRULE,
      new ResourceProperty(
        'A ForwardingRule resource. A ForwardingRule resource specifies which pool of target virtual machines to forward a packet to if it matches the given [IPAddress, IPProtocol, portRange] tuple.   To get more information about ForwardingRule, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/forwardingRules) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/network/forwarding-rules)',
        COMPUTE_ForwardingRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_GLOBALADDRESS,
      new ResourceProperty(
        'Represents a Global Address resource. Global addresses are used for HTTP(S) load balancing.   To get more information about GlobalAddress, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/globalAddresses) - How-to Guides     - [Reserving a Static External IP Address](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address)',
        COMPUTE_GlobalAddress.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_GLOBALFORWARDINGRULE,
      new ResourceProperty(
        'Represents a GlobalForwardingRule resource. Global forwarding rules are used to forward traffic to the correct load balancer for HTTP load balancing. Global forwarding rules can only be used for HTTP load balancing.  For more information, see https://cloud.google.com/compute/docs/load-balancing/http/',
        COMPUTE_GlobalForwardingRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINT,
      new ResourceProperty(
        'A Global Network endpoint represents a IP address and port combination that exists outside of GCP. --NOTE--: Global network endpoints cannot be created outside of a global network endpoint group.   To get more information about GlobalNetworkEndpoint, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/networkEndpointGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/negs/)',
        COMPUTE_GlobalNetworkEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINTGROUP,
      new ResourceProperty(
        "A global network endpoint group contains endpoints that reside outside of Google Cloud. Currently a global network endpoint group can only support a single endpoint.  Recreating a global network endpoint group that's in use by another resource will give a `resourceInUseByAnotherResource` error. Use `lifecycle.create_before_destroy` to avoid this type of error.   To get more information about GlobalNetworkEndpointGroup, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/networkEndpointGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/negs/internet-neg-concepts)",
        COMPUTE_GlobalNetworkEndpointGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_HAVPNGATEWAY,
      new ResourceProperty(
        'Represents a VPN gateway running in GCP. This virtual device is managed by Google, but used only by you. This type of VPN Gateway allows for the creation of VPN solutions with higher availability than classic Target VPN Gateways.   To get more information about HaVpnGateway, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/vpnGateways) - How-to Guides     - [Choosing a VPN](https://cloud.google.com/vpn/docs/how-to/choosing-a-vpn)     - [Cloud VPN Overview](https://cloud.google.com/vpn/docs/concepts/overview)',
        COMPUTE_HaVpnGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_HEALTHCHECK,
      new ResourceProperty(
        'Health Checks determine whether instances are responsive and able to do work. They are an important part of a comprehensive load balancing configuration, as they enable monitoring instances behind load balancers.  Health Checks poll instances at a specified interval. Instances that do not respond successfully to some number of probes in a row are marked as unhealthy. No new connections are sent to unhealthy instances, though existing connections will continue. The health check will continue to poll unhealthy instances. If an instance later responds successfully to some number of consecutive probes, it is marked healthy again and can receive new connections.  ~>--NOTE--: Legacy HTTP(S) health checks must be used for target pool-based network load balancers. See the [official guide](https://cloud.google.com/load-balancing/docs/health-check-concepts#selecting_hc) for choosing a type of health check.   To get more information about HealthCheck, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/health-checks)',
        COMPUTE_HealthCheck.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_HTTPHEALTHCHECK,
      new ResourceProperty(
        'An HttpHealthCheck resource. This resource defines a template for how individual VMs should be checked for health, via HTTP.   > --Note:-- gcp.compute.HttpHealthCheck is a legacy health check. The newer [gcp.compute.HealthCheck](https://www.terraform.io/docs/providers/google/r/compute_health_check.html) should be preferred for all uses except [Network Load Balancers](https://cloud.google.com/compute/docs/load-balancing/network/) which still require the legacy version.   To get more information about HttpHealthCheck, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks) - How-to Guides     - [Adding Health Checks](https://cloud.google.com/compute/docs/load-balancing/health-checks#legacy_health_checks)',
        COMPUTE_HttpHealthCheck.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_HTTPSHEALTHCHECK,
      new ResourceProperty(
        'An HttpsHealthCheck resource. This resource defines a template for how individual VMs should be checked for health, via HTTPS.   > --Note:-- gcp.compute.HttpsHealthCheck is a legacy health check. The newer [gcp.compute.HealthCheck](https://www.terraform.io/docs/providers/google/r/compute_health_check.html) should be preferred for all uses except [Network Load Balancers](https://cloud.google.com/compute/docs/load-balancing/network/) which still require the legacy version.   To get more information about HttpsHealthCheck, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks) - How-to Guides     - [Adding Health Checks](https://cloud.google.com/compute/docs/load-balancing/health-checks#legacy_health_checks)',
        COMPUTE_HttpsHealthCheck.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_IMAGE,
      new ResourceProperty(
        'Represents an Image resource.  Google Compute Engine uses operating system images to create the root persistent disks for your instances. You specify an image when you create an instance. Images contain a boot loader, an operating system, and a root file system. Linux operating system images are also capable of running containers on Compute Engine.  Images can be either public or custom.  Public images are provided and maintained by Google, open-source communities, and third-party vendors. By default, all projects have access to these images and can use them to create instances.  Custom images are available only to your project. You can create a custom image from root persistent disks and other images. Then, use the custom image to create an instance.   To get more information about Image, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/images) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/images)',
        COMPUTE_Image.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_IMAGEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Image. Each of these resources serves a different use case:',
        COMPUTE_ImageIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_IMAGEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Image. Each of these resources serves a different use case:',
        COMPUTE_ImageIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_IMAGEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Image. Each of these resources serves a different use case:',
        COMPUTE_ImageIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCE,
      new ResourceProperty(
        'Manages a VM instance resource within GCE. For more information see [the official documentation](https://cloud.google.com/compute/docs/instances) and [API](https://cloud.google.com/compute/docs/reference/latest/instances).',
        COMPUTE_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEFROMMACHINEIMAGE,
      new ResourceProperty(
        'Manages a VM instance resource within GCE. For more information see [the official documentation](https://cloud.google.com/compute/docs/instances) and [API](https://cloud.google.com/compute/docs/reference/latest/instances).  This resource is specifically to create a compute instance from a given `source_machine_image`. To create an instance without a machine image, use the `gcp.compute.Instance` resource.',
        COMPUTE_InstanceFromMachineImage.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEFROMTEMPLATE,
      new ResourceProperty(
        'Manages a VM instance resource within GCE. For more information see [the official documentation](https://cloud.google.com/compute/docs/instances) and [API](https://cloud.google.com/compute/docs/reference/latest/instances).  This resource is specifically to create a compute instance from a given `source_instance_template`. To create an instance without a template, use the `gcp.compute.Instance` resource.',
        COMPUTE_InstanceFromTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUP,
      new ResourceProperty(
        'Creates a group of dissimilar Compute Engine virtual machine instances. For more information, see [the official documentation](https://cloud.google.com/compute/docs/instance-groups/#unmanaged_instance_groups) and [API](https://cloud.google.com/compute/docs/reference/latest/instanceGroups)',
        COMPUTE_InstanceGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMANAGER,
      new ResourceProperty(
        'The Google Compute Engine Instance Group Manager API creates and manages pools of homogeneous Compute Engine virtual machine instances from a common instance template. For more information, see [the official documentation](https://cloud.google.com/compute/docs/instance-groups/manager) and [API](https://cloud.google.com/compute/docs/reference/latest/instanceGroupManagers)  > --Note:-- Use [gcp.compute.RegionInstanceGroupManager](https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager.html) to create a regional (multi-zone) instance group manager.',
        COMPUTE_InstanceGroupManager.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMEMBERSHIP,
      new ResourceProperty(
        "Represents the Instance membership to the Instance Group.  > --NOTE-- You can use this resource instead of the `instances` field in the `gcp.compute.InstanceGroup`, however it's not recommended to use it alongside this field. It might cause inconsistencies, as they can end up competing over control.  > --NOTE-- This resource has been added to avoid a situation, where after Instance is recreated, it's removed from Instance Group and it's needed to perform `apply` twice. To avoid situations like this, please use this resource with the lifecycle `update_triggered_by` method, with the passed Instance's ID.   To get more information about InstanceGroupMembership, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroups) - How-to Guides     - [Add instances](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroups/addInstances)     - [Remove instances](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroups/removeInstances)     - [List instances](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroups/listInstances)",
        COMPUTE_InstanceGroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPNAMEDPORT,
      new ResourceProperty(
        "Mange the named ports setting for a managed instance group without managing the group as whole. This resource is primarily intended for use with GKE-generated groups that shouldn't otherwise be managed by other tools.   To get more information about InstanceGroupNamedPort, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroup) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/instance-groups/)",
        COMPUTE_InstanceGroupNamedPort.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Instance. Each of these resources serves a different use case:',
        COMPUTE_InstanceIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Instance. Each of these resources serves a different use case:',
        COMPUTE_InstanceIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Instance. Each of these resources serves a different use case:',
        COMPUTE_InstanceIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INSTANCESETTINGS,
      new ResourceProperty('', COMPUTE_InstanceSettings.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_INSTANCETEMPLATE,
      new ResourceProperty(
        '> --Note--: Global instance templates can be used in any region. To lower the impact of outages outside your region and gain data residency within your region, use google_compute_region_instance_template.  Manages a VM instance template resource within GCE. For more information see [the official documentation](https://cloud.google.com/compute/docs/instance-templates) and [API](https://cloud.google.com/compute/docs/reference/latest/instanceTemplates).',
        COMPUTE_InstanceTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_INTERCONNECTATTACHMENT,
      new ResourceProperty(
        'Represents an InterconnectAttachment (VLAN attachment) resource. For more information, see Creating VLAN Attachments.',
        COMPUTE_InterconnectAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGE,
      new ResourceProperty(
        'Represents a Machine Image resource. Machine images store all the configuration, metadata, permissions, and data from one or more disks required to create a Virtual machine (VM) instance.  To get more information about MachineImage, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/machineImages) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/machine-images)',
        COMPUTE_MachineImage.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine MachineImage. Each of these resources serves a different use case:',
        COMPUTE_MachineImageIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine MachineImage. Each of these resources serves a different use case:',
        COMPUTE_MachineImageIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine MachineImage. Each of these resources serves a different use case:',
        COMPUTE_MachineImageIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_MANAGEDSSLCERTIFICATE,
      new ResourceProperty(
        'An SslCertificate resource, used for HTTPS load balancing.  This resource represents a certificate for which the certificate secrets are created and managed by Google.  For a resource where you provide the key, see the SSL Certificate resource.   To get more information about ManagedSslCertificate, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/sslCertificates) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/ssl-certificates)  > --Warning:-- This resource should be used with extreme caution!  Provisioning an SSL certificate is complex.  Ensure that you understand the lifecycle of a certificate before attempting complex tasks like cert rotation automatically. This resource will "return" as soon as the certificate object is created, but post-creation the certificate object will go through a "provisioning" process.  The provisioning process can complete only when the domain name for which the certificate is created points to a target pool which, itself, points at the certificate.  Depending on your DNS provider, this may take some time, and migrating from self-managed certificates to Google-managed certificates may entail some downtime while the certificate provisions.  In conclusion: Be extremely cautious.',
        COMPUTE_ManagedSslCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_MANGEDSSLCERTIFICATE,
      new ResourceProperty(
        'An SslCertificate resource, used for HTTPS load balancing.  This resource represents a certificate for which the certificate secrets are created and managed by Google.  For a resource where you provide the key, see the SSL Certificate resource.   To get more information about ManagedSslCertificate, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/sslCertificates) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/ssl-certificates)  > --Warning:-- This resource should be used with extreme caution!  Provisioning an SSL certificate is complex.  Ensure that you understand the lifecycle of a certificate before attempting complex tasks like cert rotation automatically. This resource will "return" as soon as the certificate object is created, but post-creation the certificate object will go through a "provisioning" process.  The provisioning process can complete only when the domain name for which the certificate is created points to a target pool which, itself, points at the certificate.  Depending on your DNS provider, this may take some time, and migrating from self-managed certificates to Google-managed certificates may entail some downtime while the certificate provisions.  In conclusion: Be extremely cautious.',
        COMPUTE_MangedSslCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORK,
      new ResourceProperty(
        'Manages a VPC network or legacy network resource on GCP.   To get more information about Network, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/networks) - How-to Guides     - [Official Documentation](https://cloud.google.com/vpc/docs/vpc)',
        COMPUTE_Network.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKATTACHMENT,
      new ResourceProperty('', COMPUTE_NetworkAttachment.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_NETWORKEDGESECURITYSERVICE,
      new ResourceProperty('', COMPUTE_NetworkEdgeSecurityService.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINT,
      new ResourceProperty(
        'A Network endpoint represents a IP address and port combination that is part of a specific network endpoint group (NEG). NEGs are zonal collections of these endpoints for GCP resources within a single subnet. --NOTE--: Network endpoints cannot be created outside of a network endpoint group.   To get more information about NetworkEndpoint, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/networkEndpointGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/negs/)',
        COMPUTE_NetworkEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTGROUP,
      new ResourceProperty(
        "Network endpoint groups (NEGs) are zonal resources that represent collections of IP address and port combinations for GCP resources within a single subnet. Each IP address and port combination is called a network endpoint.  Network endpoint groups can be used as backends in backend services for HTTP(S), TCP proxy, and SSL proxy load balancers. You cannot use NEGs as a backend with internal load balancers. Because NEG backends allow you to specify IP addresses and ports, you can distribute traffic in a granular fashion among applications or containers running within VM instances.  Recreating a network endpoint group that's in use by another resource will give a `resourceInUseByAnotherResource` error. Use `lifecycle.create_before_destroy` to avoid this type of error.   To get more information about NetworkEndpointGroup, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/networkEndpointGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/negs/)",
        COMPUTE_NetworkEndpointGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTLIST,
      new ResourceProperty(
        'A set of network endpoints belonging to a network endpoint group (NEG). A single network endpoint represents a IP address and port combination that is part of a specific network endpoint group  (NEG). NEGs are zonal collections of these endpoints for GCP resources within a single subnet. --NOTE--: Network endpoints cannot be created outside of a network endpoint group.  This resource is authoritative for a single NEG. Any endpoints not specified by this resource will be deleted when the resource configuration is applied.   To get more information about NetworkEndpoints, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/networkEndpointGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/negs/)',
        COMPUTE_NetworkEndpointList.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICY,
      new ResourceProperty(
        'The Compute NetworkFirewallPolicy resource',
        COMPUTE_NetworkFirewallPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYASSOCIATION,
      new ResourceProperty(
        'The Compute NetworkFirewallPolicyAssociation resource',
        COMPUTE_NetworkFirewallPolicyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYRULE,
      new ResourceProperty(
        'The Compute NetworkFirewallPolicyRule resource',
        COMPUTE_NetworkFirewallPolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKPEERING,
      new ResourceProperty(
        'Manages a network peering within GCE. For more information see [the official documentation](https://cloud.google.com/compute/docs/vpc/vpc-peering) and [API](https://cloud.google.com/compute/docs/reference/latest/networks).  > Both networks must create a peering with each other for the peering to be functional.  > Subnets IP ranges across peered VPC networks cannot overlap.',
        COMPUTE_NetworkPeering.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NETWORKPEERINGROUTESCONFIG,
      new ResourceProperty(
        "Manage a network peering's route settings without managing the peering as a whole. This resource is primarily intended for use with GCP-generated peerings that shouldn't otherwise be managed by other tools. Deleting this resource is a no-op and the peering will not be modified.   To get more information about NetworkPeeringRoutesConfig, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/networks/updatePeering) - How-to Guides     - [Official Documentation](https://cloud.google.com/vpc/docs/vpc-peering)",
        COMPUTE_NetworkPeeringRoutesConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NODEGROUP,
      new ResourceProperty(
        'Represents a NodeGroup resource to manage a group of sole-tenant nodes.   To get more information about NodeGroup, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) - How-to Guides     - [Sole-Tenant Nodes](https://cloud.google.com/compute/docs/nodes/)  > --Warning:-- Due to limitations of the API, this provider cannot update the number of nodes in a node group and changes to node group size either through provider config or through external changes will cause the provider to delete and recreate the node group.',
        COMPUTE_NodeGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_NODETEMPLATE,
      new ResourceProperty(
        'Represents a NodeTemplate resource. Node templates specify properties for creating sole-tenant nodes, such as node type, vCPU and memory requirements, node affinity labels, and region.   To get more information about NodeTemplate, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/nodeTemplates) - How-to Guides     - [Sole-Tenant Nodes](https://cloud.google.com/compute/docs/nodes/)',
        COMPUTE_NodeTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICY,
      new ResourceProperty(
        'Organization security policies are used to control incoming/outgoing traffic.  To get more information about OrganizationSecurityPolicy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/organizationSecurityPolicies) - How-to Guides     - [Creating a firewall policy](https://cloud.google.com/vpc/docs/using-firewall-policies#create-policy)',
        COMPUTE_OrganizationSecurityPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYASSOCIATION,
      new ResourceProperty(
        'An association for the OrganizationSecurityPolicy.  To get more information about OrganizationSecurityPolicyAssociation, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/organizationSecurityPolicies/addAssociation) - How-to Guides     - [Associating a policy with the organization or folder](https://cloud.google.com/vpc/docs/using-firewall-policies#associate)',
        COMPUTE_OrganizationSecurityPolicyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYRULE,
      new ResourceProperty(
        'A rule for the OrganizationSecurityPolicy.  To get more information about OrganizationSecurityPolicyRule, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/organizationSecurityPolicies/addRule) - How-to Guides     - [Creating firewall rules](https://cloud.google.com/vpc/docs/using-firewall-policies#create-rules)',
        COMPUTE_OrganizationSecurityPolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PACKETMIRRORING,
      new ResourceProperty(
        'Packet Mirroring mirrors traffic to and from particular VM instances. You can use the collected traffic to help you detect security threats and monitor application performance.   To get more information about PacketMirroring, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/packetMirrorings) - How-to Guides     - [Using Packet Mirroring](https://cloud.google.com/vpc/docs/using-packet-mirroring#creating)',
        COMPUTE_PacketMirroring.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PERINSTANCECONFIG,
      new ResourceProperty(
        'A config defined for a single managed instance that belongs to an instance group manager. It preserves the instance name across instance group manager operations and can define stateful disks or metadata that are unique to the instance.   To get more information about PerInstanceConfig, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/instance-groups/stateful-migs#per-instance_configs)',
        COMPUTE_PerInstanceConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PROJECTDEFAULTNETWORKTIER,
      new ResourceProperty(
        'Configures the Google Compute Engine [Default Network Tier](https://cloud.google.com/network-tiers/docs/using-network-service-tiers#setting_the_tier_for_all_resources_in_a_project) for a project.  For more information, see, [the Project API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/projects/setDefaultNetworkTier).',
        COMPUTE_ProjectDefaultNetworkTier.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PROJECTMETADATA,
      new ResourceProperty(
        'Authoritatively manages metadata common to all instances for a project in GCE. For more information see [the official documentation](https://cloud.google.com/compute/docs/storing-retrieving-metadata) and [API](https://cloud.google.com/compute/docs/reference/latest/projects/setCommonInstanceMetadata).  > --Note:--  This resource manages all project-level metadata including project-level ssh keys. Keys unset in config but set on the server will be removed. If you want to manage only single key/value pairs within the project metadata rather than the entire set, then use google_compute_project_metadata_item.',
        COMPUTE_ProjectMetadata.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PROJECTMETADATAITEM,
      new ResourceProperty(
        'Manages a single key/value pair on metadata common to all instances for a project in GCE. Using `gcp.compute.ProjectMetadataItem` lets you manage a single key/value setting in the provider rather than the entire project metadata map.',
        COMPUTE_ProjectMetadataItem.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PUBLICADVERTISEDPREFIX,
      new ResourceProperty(
        'Represents a PublicAdvertisedPrefix for use with bring your own IP addresses (BYOIP).   To get more information about PublicAdvertisedPrefix, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/publicAdvertisedPrefixes) - How-to Guides     - [Using bring your own IP](https://cloud.google.com/vpc/docs/using-bring-your-own-ip)',
        COMPUTE_PublicAdvertisedPrefix.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_PUBLICDELEGATEDPREFIX,
      new ResourceProperty(
        'Represents a PublicDelegatedPrefix for use with bring your own IP addresses (BYOIP).   To get more information about PublicDelegatedPrefix, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/publicDelegatedPrefixes) - How-to Guides     - [Using bring your own IP](https://cloud.google.com/vpc/docs/using-bring-your-own-ip)',
        COMPUTE_PublicDelegatedPrefix.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONAUTOSCALER,
      new ResourceProperty(
        'Represents an Autoscaler resource.  Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define.   To get more information about RegionAutoscaler, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionAutoscalers) - How-to Guides     - [Autoscaling Groups of Instances](https://cloud.google.com/compute/docs/autoscaler/)',
        COMPUTE_RegionAutoscaler.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICE,
      new ResourceProperty(
        'A Region Backend Service defines a regionally-scoped group of virtual machines that will serve traffic for load balancing.   To get more information about RegionBackendService, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/latest/regionBackendServices) - How-to Guides     - [Internal TCP/UDP Load Balancing](https://cloud.google.com/compute/docs/load-balancing/internal/)',
        COMPUTE_RegionBackendService.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMBINDING,
      new ResourceProperty(
        '',
        COMPUTE_RegionBackendServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMMEMBER,
      new ResourceProperty(
        '',
        COMPUTE_RegionBackendServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMPOLICY,
      new ResourceProperty(
        '',
        COMPUTE_RegionBackendServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONCOMMITMENT,
      new ResourceProperty(
        'Represents a regional Commitment resource.  Creating a commitment resource means that you are purchasing a committed use contract with an explicit start and end time. You can create commitments based on vCPUs and memory usage and receive discounted rates.   To get more information about RegionCommitment, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionCommitments) - How-to Guides     - [Committed use discounts for Compute Engine](https://cloud.google.com/compute/docs/instances/committed-use-discounts-overview)',
        COMPUTE_RegionCommitment.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONDISK,
      new ResourceProperty(
        'Persistent disks are durable storage devices that function similarly to the physical disks in a desktop or a server. Compute Engine manages the hardware behind these devices to ensure data redundancy and optimize performance for you. Persistent disks are available as either standard hard disk drives (HDD) or solid-state drives (SSD).  Persistent disks are located independently from your virtual machine instances, so you can detach or move persistent disks to keep your data even after you delete your instances. Persistent disk performance scales automatically with size, so you can resize your existing persistent disks or add more persistent disks to an instance to meet your performance and storage space requirements.  Add a persistent disk to your instance when you need reliable and affordable storage with consistent performance characteristics.   To get more information about RegionDisk, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionDisks) - How-to Guides     - [Adding or Resizing Regional Persistent Disks](https://cloud.google.com/compute/docs/disks/regional-persistent-disk)',
        COMPUTE_RegionDisk.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Disk. Each of these resources serves a different use case:',
        COMPUTE_RegionDiskIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Disk. Each of these resources serves a different use case:',
        COMPUTE_RegionDiskIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Disk. Each of these resources serves a different use case:',
        COMPUTE_RegionDiskIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKRESOURCEPOLICYATTACHMENT,
      new ResourceProperty(
        'Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.  > --Note:-- This resource does not support zonal disks (`gcp.compute.Disk`). For zonal disks, please refer to the `gcp.compute.DiskResourcePolicyAttachment` resource.',
        COMPUTE_RegionDiskResourcePolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONHEALTHCHECK,
      new ResourceProperty(
        'Health Checks determine whether instances are responsive and able to do work. They are an important part of a comprehensive load balancing configuration, as they enable monitoring instances behind load balancers.  Health Checks poll instances at a specified interval. Instances that do not respond successfully to some number of probes in a row are marked as unhealthy. No new connections are sent to unhealthy instances, though existing connections will continue. The health check will continue to poll unhealthy instances. If an instance later responds successfully to some number of consecutive probes, it is marked healthy again and can receive new connections.   To get more information about RegionHealthCheck, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionHealthChecks) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/health-checks)',
        COMPUTE_RegionHealthCheck.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONINSTANCEGROUPMANAGER,
      new ResourceProperty(
        'The Google Compute Engine Regional Instance Group Manager API creates and manages pools of homogeneous Compute Engine virtual machine instances from a common instance template.  To get more information about regionInstanceGroupManagers, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/latest/regionInstanceGroupManagers) - How-to Guides     - [Regional Instance Groups Guide](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups)  > --Note:-- Use [gcp.compute.InstanceGroupManager](https://www.terraform.io/docs/providers/google/r/compute_instance_group_manager.html) to create a zonal instance group manager.',
        COMPUTE_RegionInstanceGroupManager.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONINSTANCETEMPLATE,
      new ResourceProperty('', COMPUTE_RegionInstanceTemplate.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINT,
      new ResourceProperty(
        'A Region network endpoint represents a IP address/FQDN and port combination that is part of a specific network endpoint group (NEG).  > --NOTE--: Network endpoints cannot be created outside of a network endpoint group.   To get more information about RegionNetworkEndpoint, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/regionNetworkEndpointGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/negs/)     - [Internet NEGs Official Documentation](https://cloud.google.com/load-balancing/docs/negs/internet-neg-concepts)',
        COMPUTE_RegionNetworkEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINTGROUP,
      new ResourceProperty(
        'A regional NEG that can support Serverless Products and proxying traffic to external backends.  To get more information about RegionNetworkEndpointGroup, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/regionNetworkEndpointGroups) - How-to Guides     - [Serverless NEGs Official Documentation](https://cloud.google.com/load-balancing/docs/negs/serverless-neg-concepts)     - [Internet NEGs Official Documentation](https://cloud.google.com/load-balancing/docs/negs/internet-neg-concepts)',
        COMPUTE_RegionNetworkEndpointGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICY,
      new ResourceProperty(
        'The Compute NetworkFirewallPolicy resource',
        COMPUTE_RegionNetworkFirewallPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYASSOCIATION,
      new ResourceProperty(
        'The Compute NetworkFirewallPolicyAssociation resource',
        COMPUTE_RegionNetworkFirewallPolicyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYRULE,
      new ResourceProperty(
        'The Compute NetworkFirewallPolicyRule resource',
        COMPUTE_RegionNetworkFirewallPolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONPERINSTANCECONFIG,
      new ResourceProperty(
        'A config defined for a single managed instance that belongs to an instance group manager. It preserves the instance name across instance group manager operations and can define stateful disks or metadata that are unique to the instance. This resource works with regional instance group managers.   To get more information about RegionPerInstanceConfig, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/instance-groups/stateful-migs#per-instance_configs)',
        COMPUTE_RegionPerInstanceConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICY,
      new ResourceProperty('', COMPUTE_RegionSecurityPolicy.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICYRULE,
      new ResourceProperty('', COMPUTE_RegionSecurityPolicyRule.GetTypes()),
    ],
    [
      ResourceType.COMPUTE_REGIONSSLCERTIFICATE,
      new ResourceProperty(
        'A RegionSslCertificate resource, used for HTTPS load balancing. This resource provides a mechanism to upload an SSL key and certificate to the load balancer to serve secure connections from the user.   To get more information about RegionSslCertificate, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionSslCertificates) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/ssl-certificates)',
        COMPUTE_RegionSslCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONSSLPOLICY,
      new ResourceProperty(
        'Represents a Regional SSL policy. SSL policies give you the ability to control the',
        COMPUTE_RegionSslPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPPROXY,
      new ResourceProperty(
        'Represents a RegionTargetHttpProxy resource, which is used by one or more forwarding rules to route incoming HTTP requests to a URL map.   To get more information about RegionTargetHttpProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionTargetHttpProxies) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/http/target-proxies)',
        COMPUTE_RegionTargetHttpProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPSPROXY,
      new ResourceProperty(
        'Represents a RegionTargetHttpsProxy resource, which is used by one or more forwarding rules to route incoming HTTPS requests to a URL map.   To get more information about RegionTargetHttpsProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionTargetHttpsProxies) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/http/target-proxies)',
        COMPUTE_RegionTargetHttpsProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETTCPPROXY,
      new ResourceProperty(
        'Represents a RegionTargetTcpProxy resource, which is used by one or more forwarding rules to route incoming TCP requests to a regional TCP proxy load balancer.   To get more information about RegionTargetTcpProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/regionTargetTcpProxies) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/tcp/internal-proxy)',
        COMPUTE_RegionTargetTcpProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_REGIONURLMAP,
      new ResourceProperty(
        'UrlMaps are used to route requests to a backend service based on rules that you define for the host and path of an incoming URL.',
        COMPUTE_RegionUrlMap.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_RESERVATION,
      new ResourceProperty(
        'Represents a reservation resource. A reservation ensures that capacity is held in a specific zone even if the reserved VMs are not running.  Reservations apply only to Compute Engine, Cloud Dataproc, and Google Kubernetes Engine VM usage.Reservations do not apply to `f1-micro` or `g1-small` machine types, preemptible VMs, sole tenant nodes, or other services not listed above like Cloud SQL and Dataflow.   To get more information about Reservation, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/reservations) - How-to Guides     - [Reserving zonal resources](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources)',
        COMPUTE_Reservation.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_RESOURCEPOLICY,
      new ResourceProperty(
        'A policy that can be attached to a resource to specify or schedule actions on that resource.   To get more information about ResourcePolicy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/resourcePolicies)',
        COMPUTE_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ROUTE,
      new ResourceProperty(
        "Represents a Route resource.  A route is a rule that specifies how certain packets should be handled by the virtual network. Routes are associated with virtual machines by tag, and the set of routes for a particular virtual machine is called its routing table. For each packet leaving a virtual machine, the system searches that virtual machine's routing table for a single best matching route.  Routes match packets by destination IP address, preferring smaller or more specific ranges over larger ones. If there is a tie, the system selects the route with the smallest priority value. If there is still a tie, it uses the layer three and four packet headers to select just one of the remaining matching routes. The packet is then forwarded as specified by the next_hop field of the winning route -- either to another virtual machine destination, a virtual machine gateway or a Compute Engine-operated gateway. Packets that do not match any route in the sending virtual machine's routing table will be dropped.  A Route resource must have exactly one specification of either nextHopGateway, nextHopInstance, nextHopIp, nextHopVpnTunnel, or nextHopIlb.   To get more information about Route, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/routes) - How-to Guides     - [Using Routes](https://cloud.google.com/vpc/docs/using-routes)",
        COMPUTE_Route.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ROUTER,
      new ResourceProperty(
        'Represents a Router resource.   To get more information about Router, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/routers) - How-to Guides     - [Google Cloud Router](https://cloud.google.com/router/docs/)',
        COMPUTE_Router.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ROUTERINTERFACE,
      new ResourceProperty(
        'Manages a Cloud Router interface. For more information see [the official documentation](https://cloud.google.com/compute/docs/cloudrouter) and [API](https://cloud.google.com/compute/docs/reference/latest/routers).',
        COMPUTE_RouterInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ROUTERNAT,
      new ResourceProperty(
        'A NAT service created in a router.   To get more information about RouterNat, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/routers) - How-to Guides     - [Google Cloud Router](https://cloud.google.com/router/docs/)',
        COMPUTE_RouterNat.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_ROUTERPEER,
      new ResourceProperty(
        'BGP information that must be configured into the routing stack to establish BGP peering. This information must specify the peer ASN and either the interface name, IP address, or peer IP address. Please refer to RFC4273.   To get more information about RouterBgpPeer, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/routers) - How-to Guides     - [Google Cloud Router](https://cloud.google.com/router/docs/)',
        COMPUTE_RouterPeer.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SECURITYPOLICY,
      new ResourceProperty(
        'A Security Policy defines an IP blacklist or whitelist that protects load balanced Google Cloud services by denying or permitting traffic from specified IP ranges. For more information see the [official documentation](https://cloud.google.com/armor/docs/configure-security-policies) and the [API](https://cloud.google.com/compute/docs/reference/rest/beta/securityPolicies).  Security Policy is used by google_compute_backend_service.',
        COMPUTE_SecurityPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SECURITYSCANCONFIG,
      new ResourceProperty(
        'A ScanConfig resource contains the configurations to launch a scan.  To get more information about ScanConfig, see:  - [API documentation](https://cloud.google.com/security-scanner/docs/reference/rest/v1beta/projects.scanConfigs) - How-to Guides     - [Using Cloud Security Scanner](https://cloud.google.com/security-scanner/docs/scanning)',
        COMPUTE_SecurityScanConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SERVICEATTACHMENT,
      new ResourceProperty(
        'Represents a ServiceAttachment resource.   To get more information about ServiceAttachment, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/beta/serviceAttachments) - How-to Guides     - [Configuring Private Service Connect to access services](https://cloud.google.com/vpc/docs/configure-private-service-connect-services)',
        COMPUTE_ServiceAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCHOSTPROJECT,
      new ResourceProperty(
        'Enables the Google Compute Engine [Shared VPC](https://cloud.google.com/compute/docs/shared-vpc) feature for a project, assigning it as a Shared VPC host project.  For more information, see, [the Project API documentation](https://cloud.google.com/compute/docs/reference/latest/projects), where the Shared VPC feature is referred to by its former name "XPN".',
        COMPUTE_SharedVPCHostProject.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCSERVICEPROJECT,
      new ResourceProperty(
        'Enables the Google Compute Engine [Shared VPC](https://cloud.google.com/compute/docs/shared-vpc) feature for a project, assigning it as a Shared VPC service project associated with a given host project.  For more information, see, [the Project API documentation](https://cloud.google.com/compute/docs/reference/latest/projects), where the Shared VPC feature is referred to by its former name "XPN".  > --Note:-- If Shared VPC Admin role is set at the folder level, use the google-beta provider. The google provider only supports this permission at project or organizational level currently. [[0]](https://cloud.google.com/vpc/docs/provisioning-shared-vpc#enable-shared-vpc-host)',
        COMPUTE_SharedVPCServiceProject.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOT,
      new ResourceProperty(
        'Represents a Persistent Disk Snapshot resource.  Use snapshots to back up data from your persistent disks. Snapshots are different from public images and custom images, which are used primarily to create instances or configure instance templates. Snapshots are useful for periodic backup of the data on your persistent disks. You can create snapshots from persistent disks even while they are attached to running instances.  Snapshots are incremental, so you can create regular snapshots on a persistent disk faster and at a much lower cost than if you regularly created a full image of the disk.   To get more information about Snapshot, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/snapshots) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/disks/create-snapshots)',
        COMPUTE_Snapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Snapshot. Each of these resources serves a different use case:',
        COMPUTE_SnapshotIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Snapshot. Each of these resources serves a different use case:',
        COMPUTE_SnapshotIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Snapshot. Each of these resources serves a different use case:',
        COMPUTE_SnapshotIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SSLCERTIFICATE,
      new ResourceProperty(
        'An SslCertificate resource, used for HTTPS load balancing. This resource provides a mechanism to upload an SSL key and certificate to the load balancer to serve secure connections from the user.   To get more information about SslCertificate, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/sslCertificates) - How-to Guides     - [Official Documentation](https://cloud.google.com/load-balancing/docs/ssl-certificates)',
        COMPUTE_SSLCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SSLPOLICY,
      new ResourceProperty(
        'Represents a SSL policy. SSL policies give you the ability to control the features of SSL that your SSL proxy or HTTPS load balancer negotiates.   To get more information about SslPolicy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/sslPolicies) - How-to Guides     - [Using SSL Policies](https://cloud.google.com/compute/docs/load-balancing/ssl-policies)',
        COMPUTE_SSLPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORK,
      new ResourceProperty(
        'A VPC network is a virtual version of the traditional physical networks that exist within and between physical data centers. A VPC network provides connectivity for your Compute Engine virtual machine (VM) instances, Container Engine containers, App Engine Flex services, and other network-related resources.  Each GCP project contains one or more VPC networks. Each VPC network is a global entity spanning all GCP regions. This global VPC network allows VM instances and other resources to communicate with each other via internal, private IP addresses.  Each VPC network is subdivided into subnets, and each subnet is contained within a single region. You can have more than one subnet in a region for a given VPC network. Each subnet has a contiguous private RFC1918 IP space. You create instances, containers, and the like in these subnets. When you create an instance, you must create it in a subnet, and the instance draws its internal IP address from that subnet.  Virtual machine (VM) instances in a VPC network can communicate with instances in all other subnets of the same VPC network, regardless of region, using their RFC1918 private IP addresses. You can isolate portions of the network, even entire subnets, using firewall rules.   To get more information about Subnetwork, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) - How-to Guides     - [Private Google Access](https://cloud.google.com/vpc/docs/configure-private-google-access)     - [Cloud Networking](https://cloud.google.com/vpc/docs/using-vpc)',
        COMPUTE_Subnetwork.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Subnetwork. Each of these resources serves a different use case:',
        COMPUTE_SubnetworkIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Subnetwork. Each of these resources serves a different use case:',
        COMPUTE_SubnetworkIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Compute Engine Subnetwork. Each of these resources serves a different use case:',
        COMPUTE_SubnetworkIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETGRPCPROXY,
      new ResourceProperty(
        'Represents a Target gRPC Proxy resource. A target gRPC proxy is a component of load balancers intended for load balancing gRPC traffic. Global forwarding rules reference a target gRPC proxy. The Target gRPC Proxy references a URL map which specifies how traffic routes to gRPC backend services.   To get more information about TargetGrpcProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/targetGrpcProxies) - How-to Guides     - [Using Target gRPC Proxies](https://cloud.google.com/traffic-director/docs/proxyless-overview)',
        COMPUTE_TargetGrpcProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETHTTPPROXY,
      new ResourceProperty(
        'Represents a TargetHttpProxy resource, which is used by one or more global forwarding rule to route incoming HTTP requests to a URL map.   To get more information about TargetHttpProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/targetHttpProxies) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/http/target-proxies)',
        COMPUTE_TargetHttpProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETHTTPSPROXY,
      new ResourceProperty(
        'Represents a TargetHttpsProxy resource, which is used by one or more global forwarding rule to route incoming HTTPS requests to a URL map.   To get more information about TargetHttpsProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/targetHttpsProxies) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/http/target-proxies)',
        COMPUTE_TargetHttpsProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETINSTANCE,
      new ResourceProperty(
        "Represents a TargetInstance resource which defines an endpoint instance that terminates traffic of certain protocols. In particular, they are used in Protocol Forwarding, where forwarding rules can send packets to a non-NAT'ed target instance. Each target instance contains a single virtual machine instance that receives and handles traffic from the corresponding forwarding rules.   To get more information about TargetInstance, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/targetInstances) - How-to Guides     - [Using Protocol Forwarding](https://cloud.google.com/compute/docs/protocol-forwarding)",
        COMPUTE_TargetInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETPOOL,
      new ResourceProperty(
        'Manages a Target Pool within GCE. This is a collection of instances used as target of a network load balancer (Forwarding Rule). For more information see [the official documentation](https://cloud.google.com/compute/docs/load-balancing/network/target-pools) and [API](https://cloud.google.com/compute/docs/reference/latest/targetPools).',
        COMPUTE_TargetPool.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETSSLPROXY,
      new ResourceProperty(
        'Represents a TargetSslProxy resource, which is used by one or more global forwarding rule to route incoming SSL requests to a backend service.   To get more information about TargetSslProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/targetSslProxies) - How-to Guides     - [Setting Up SSL proxy for Google Cloud Load Balancing](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/)',
        COMPUTE_TargetSSLProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_TARGETTCPPROXY,
      new ResourceProperty(
        'Represents a TargetTcpProxy resource, which is used by one or more global forwarding rule to route incoming TCP requests to a Backend service.   To get more information about TargetTcpProxy, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/v1/targetTcpProxies) - How-to Guides     - [Setting Up TCP proxy for Google Cloud Load Balancing](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/tcp-proxy)',
        COMPUTE_TargetTCPProxy.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_URLMAP,
      new ResourceProperty(
        'UrlMaps are used to route requests to a backend service based on rules that you define for the host and path of an incoming URL.   To get more information about UrlMap, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/urlMaps)',
        COMPUTE_URLMap.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_VPNGATEWAY,
      new ResourceProperty(
        'Represents a VPN gateway running in GCP. This virtual device is managed by Google, but used only by you.   To get more information about VpnGateway, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/targetVpnGateways)  > --Warning:-- Classic VPN is deprecating certain functionality on October 31, 2021. For more information, see the [Classic VPN partial deprecation page](https://cloud.google.com/network-connectivity/docs/vpn/deprecations/classic-vpn-deprecation).',
        COMPUTE_VPNGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPUTE_VPNTUNNEL,
      new ResourceProperty(
        'VPN tunnel resource.   To get more information about VpnTunnel, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/vpnTunnels) - How-to Guides     - [Cloud VPN Overview](https://cloud.google.com/vpn/docs/concepts/overview)     - [Networks and Tunnel Routing](https://cloud.google.com/vpn/docs/concepts/choosing-networks-routing)',
        COMPUTE_VPNTunnel.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_ATTACHEDCLUSTER,
      new ResourceProperty(
        'An Anthos cluster running on customer owned infrastructure.   To get more information about Cluster, see:  - [API documentation](https://cloud.google.com/anthos/clusters/docs/multi-cloud/reference/rest) - How-to Guides     - [API reference](https://cloud.google.com/anthos/clusters/docs/multi-cloud/reference/rest/v1/projects.locations.attachedClusters)     - [Multicloud overview](https://cloud.google.com/anthos/clusters/docs/multi-cloud)',
        CONTAINER_AttachedCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_AWSCLUSTER,
      new ResourceProperty(
        'An Anthos cluster running on AWS.  For more information, see: - [Multicloud overview](https://cloud.google.com/anthos/clusters/docs/multi-cloud)',
        CONTAINER_AwsCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_AWSNODEPOOL,
      new ResourceProperty(
        'An Anthos node pool running on AWS.  For more information, see: - [Multicloud overview](https://cloud.google.com/anthos/clusters/docs/multi-cloud)',
        CONTAINER_AwsNodePool.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_AZURECLIENT,
      new ResourceProperty(
        'AzureClient resources hold client authentication information needed by the Anthos Multi-Cloud API to manage Azure resources on your Azure subscription.When an AzureCluster is created, an AzureClient resource needs to be provided and all operations on Azure resources associated to that cluster will authenticate to Azure services using the given client.AzureClient resources are immutable and cannot be modified upon creation.Each AzureClient resource is bound to a single Azure Active Directory Application and tenant.  For more information, see: - [Multicloud overview](https://cloud.google.com/anthos/clusters/docs/multi-cloud)',
        CONTAINER_AzureClient.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_AZURECLUSTER,
      new ResourceProperty(
        'An Anthos cluster running on Azure.  For more information, see: - [Multicloud overview](https://cloud.google.com/anthos/clusters/docs/multi-cloud)',
        CONTAINER_AzureCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_AZURENODEPOOL,
      new ResourceProperty(
        'An Anthos node pool running on Azure.  For more information, see: - [Multicloud overview](https://cloud.google.com/anthos/clusters/docs/multi-cloud)',
        CONTAINER_AzureNodePool.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_CLUSTER,
      new ResourceProperty(
        'Manages a Google Kubernetes Engine (GKE) cluster.  To get more information about GKE clusters, see:   - [The API reference](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters)   - How-to guides     - [GKE overview](https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)     - [About cluster configuration choices](https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters)  > On version 5.0.0+ of the provider, you must explicitly set `deletion_protection = false` and run `pulumi up` to write the field to state in order to destroy a cluster.  > All arguments and attributes (including certificate outputs) will be stored in the raw state as plaintext. [Read more about secrets in state](https://www.pulumi.com/docs/intro/concepts/programming-model/#secrets).',
        CONTAINER_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_NODEPOOL,
      new ResourceProperty(
        'Manages a node pool in a Google Kubernetes Engine (GKE) cluster separately from the cluster control plane. For more information see [the official documentation](https://cloud.google.com/container-engine/docs/node-pools) and [the API reference](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools).',
        CONTAINER_NodePool.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINER_REGISTRY,
      new ResourceProperty(
        'Ensures that the Google Cloud Storage bucket that backs Google Container Registry exists. Creating this resource will create the backing bucket if it does not exist, or do nothing if the bucket already exists. Destroying this resource does -NOT- destroy the backing bucket. For more information see [the official documentation](https://cloud.google.com/container-registry/docs/overview)  This resource can be used to ensure that the GCS bucket exists prior to assigning permissions. For more information see the [access control page](https://cloud.google.com/container-registry/docs/access-control) for GCR.',
        CONTAINER_Registry.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTE,
      new ResourceProperty(
        'A Container Analysis note is a high-level piece of metadata that describes a type of analysis that can be done for a resource.   To get more information about Note, see:  - [API documentation](https://cloud.google.com/container-analysis/api/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/container-analysis/)     - [Creating Attestations (Occurrences)](https://cloud.google.com/binary-authorization/docs/making-attestations)',
        CONTAINERANALYSIS_Note.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Container Registry Note. Each of these resources serves a different use case:',
        CONTAINERANALYSIS_NoteIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Container Registry Note. Each of these resources serves a different use case:',
        CONTAINERANALYSIS_NoteIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Container Registry Note. Each of these resources serves a different use case:',
        CONTAINERANALYSIS_NoteIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTAINERANALYSIS_OCCURENCE,
      new ResourceProperty(
        'An occurrence is an instance of a Note, or type of analysis that can be done for a resource.   To get more information about Occurrence, see:  - [API documentation](https://cloud.google.com/container-analysis/api/reference/rest/) - How-to Guides     - [Official Documentation](https://cloud.google.com/container-analysis/)',
        CONTAINERANALYSIS_Occurence.GetTypes(),
      ),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_CONNECTIONPROFILE,
      new ResourceProperty(
        'A connection profile definition.   To get more information about ConnectionProfile, see:  - [API documentation](https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles/create) - How-to Guides     - [Database Migration](https://cloud.google.com/database-migration/docs/)',
        DATABASEMIGRATIONSERVICE_ConnectionProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_PRIVATECONNECTION,
      new ResourceProperty(
        "The PrivateConnection resource is used to establish private connectivity between Database Migration Service and a customer's network.   To get more information about PrivateConnection, see:  - [API documentation](https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.privateConnections) - How-to Guides     - [Official Documentation](https://cloud.google.com/database-migration/docs/oracle-to-postgresql/create-private-connectivity-configuration)",
        DATABASEMIGRATIONSERVICE_PrivateConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_ENTRY,
      new ResourceProperty(
        'Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of Google Cloud Platform. Clients can use the linkedResource field in the Entry resource to refer to the original resource ID of the source system.  An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.   To get more information about Entry, see:  - [API documentation](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-catalog/docs)',
        DATACATALOG_Entry.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUP,
      new ResourceProperty(
        'An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.   To get more information about EntryGroup, see:  - [API documentation](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-catalog/docs)',
        DATACATALOG_EntryGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog EntryGroup. Each of these resources serves a different use case:',
        DATACATALOG_EntryGroupIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog EntryGroup. Each of these resources serves a different use case:',
        DATACATALOG_EntryGroupIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog EntryGroup. Each of these resources serves a different use case:',
        DATACATALOG_EntryGroupIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAG,
      new ResourceProperty(
        'Denotes one policy tag in a taxonomy.   To get more information about PolicyTag, see:  - [API documentation](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.taxonomies.policyTags) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-catalog/docs)',
        DATACATALOG_PolicyTag.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog PolicyTag. Each of these resources serves a different use case:',
        DATACATALOG_PolicyTagIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog PolicyTag. Each of these resources serves a different use case:',
        DATACATALOG_PolicyTagIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog PolicyTag. Each of these resources serves a different use case:',
        DATACATALOG_PolicyTagIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAG,
      new ResourceProperty(
        'Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template.  See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.   To get more information about Tag, see:  - [API documentation](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.tags) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-catalog/docs)',
        DATACATALOG_Tag.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATE,
      new ResourceProperty(
        'A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources.   To get more information about TagTemplate, see:  - [API documentation](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-catalog/docs)',
        DATACATALOG_TagTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog TagTemplate. Each of these resources serves a different use case:',
        DATACATALOG_TagTemplateIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog TagTemplate. Each of these resources serves a different use case:',
        DATACATALOG_TagTemplateIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog TagTemplate. Each of these resources serves a different use case:',
        DATACATALOG_TagTemplateIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMY,
      new ResourceProperty(
        'A collection of policy tags that classify data along a common axis.   To get more information about Taxonomy, see:  - [API documentation](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.taxonomies) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-catalog/docs)',
        DATACATALOG_Taxonomy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog Taxonomy. Each of these resources serves a different use case:',
        DATACATALOG_TaxonomyIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog Taxonomy. Each of these resources serves a different use case:',
        DATACATALOG_TaxonomyIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Data catalog Taxonomy. Each of these resources serves a different use case:',
        DATACATALOG_TaxonomyIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAFLOW_FLEXTEMPLATEJOB,
      new ResourceProperty('', DATAFLOW_FlexTemplateJob.GetTypes()),
    ],
    [
      ResourceType.DATAFLOW_JOB,
      new ResourceProperty(
        'Creates a job on Dataflow, which is an implementation of Apache Beam running on Google Compute Engine. For more information see the official documentation for [Beam](https://beam.apache.org) and [Dataflow](https://cloud.google.com/dataflow/).',
        DATAFLOW_Job.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAFLOW_PIPELINE,
      new ResourceProperty(
        'The main pipeline entity and all the necessary metadata for launching and managing linked jobs.   To get more information about Pipeline, see:  - [API documentation](https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines) - How-to Guides     - [Official Documentation](https://cloud.google.com/dataflow)',
        DATAFLOW_Pipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAFORM_REPOSITORY,
      new ResourceProperty('', DATAFORM_Repository.GetTypes()),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMBINDING,
      new ResourceProperty('', DATAFORM_RepositoryIamBinding.GetTypes()),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMMEMBER,
      new ResourceProperty('', DATAFORM_RepositoryIamMember.GetTypes()),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMPOLICY,
      new ResourceProperty('', DATAFORM_RepositoryIamPolicy.GetTypes()),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYRELEASECONFIG,
      new ResourceProperty('', DATAFORM_RepositoryReleaseConfig.GetTypes()),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYWORKFLOWCONFIG,
      new ResourceProperty('', DATAFORM_RepositoryWorkflowConfig.GetTypes()),
    ],
    [
      ResourceType.DATAFUSION_INSTANCE,
      new ResourceProperty(
        'Represents a Data Fusion instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/data-fusion/docs/reference/rest/v1beta1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-fusion/docs/)',
        DATAFUSION_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONDEIDENTIFYTEMPLATE,
      new ResourceProperty(
        'Allows creation of templates to de-identify content.   To get more information about DeidentifyTemplate, see:  - [API documentation](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.deidentifyTemplates) - How-to Guides     - [Official Documentation](https://cloud.google.com/dlp/docs/concepts-templates)',
        DATALOSS_PreventionDeidentifyTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONINSPECTTEMPLATE,
      new ResourceProperty(
        'An inspect job template.   To get more information about InspectTemplate, see:  - [API documentation](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.inspectTemplates) - How-to Guides     - [Official Documentation](https://cloud.google.com/dlp/docs/creating-templates-inspect)',
        DATALOSS_PreventionInspectTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONJOBTRIGGER,
      new ResourceProperty(
        'A job trigger configuration.   To get more information about JobTrigger, see:  - [API documentation](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.jobTriggers) - How-to Guides     - [Official Documentation](https://cloud.google.com/dlp/docs/creating-job-triggers)',
        DATALOSS_PreventionJobTrigger.GetTypes(),
      ),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONSTOREDINFOTYPE,
      new ResourceProperty(
        'Allows creation of custom info types.   To get more information about StoredInfoType, see:  - [API documentation](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.storedInfoTypes) - How-to Guides     - [Official Documentation](https://cloud.google.com/dlp/docs/creating-stored-infotypes)',
        DATALOSS_PreventionStoredInfoType.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ASSET,
      new ResourceProperty(
        'The Dataplex Asset resource',
        DATAPLEX_Asset.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ASSETIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Asset. Each of these resources serves a different use case:',
        DATAPLEX_AssetIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ASSETIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Asset. Each of these resources serves a different use case:',
        DATAPLEX_AssetIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ASSETIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Asset. Each of these resources serves a different use case:',
        DATAPLEX_AssetIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_DATASCAN,
      new ResourceProperty(
        'Represents a user-visible job which provides the insights for the related data source.   To get more information about Datascan, see:  - [API documentation](https://cloud.google.com/dataplex/docs/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/dataplex/docs)',
        DATAPLEX_Datascan.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Datascan. Each of these resources serves a different use case:',
        DATAPLEX_DatascanIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Datascan. Each of these resources serves a different use case:',
        DATAPLEX_DatascanIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Datascan. Each of these resources serves a different use case:',
        DATAPLEX_DatascanIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_LAKE,
      new ResourceProperty(
        'The Dataplex Lake resource',
        DATAPLEX_Lake.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_LAKEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Lake. Each of these resources serves a different use case:',
        DATAPLEX_LakeIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_LAKEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Lake. Each of these resources serves a different use case:',
        DATAPLEX_LakeIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_LAKEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Lake. Each of these resources serves a different use case:',
        DATAPLEX_LakeIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_TASK,
      new ResourceProperty(
        'A Dataplex task represents the work that you want Dataplex to do on a schedule. It encapsulates code, parameters, and the schedule.   To get more information about Task, see:  - [API documentation](https://cloud.google.com/dataplex/docs/reference/rest/v1/projects.locations.lakes.tasks) - How-to Guides     - [Official Documentation](https://cloud.google.com/dataplex/docs)',
        DATAPLEX_Task.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_TASKIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Task. Each of these resources serves a different use case:',
        DATAPLEX_TaskIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_TASKIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Task. Each of these resources serves a different use case:',
        DATAPLEX_TaskIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_TASKIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Task. Each of these resources serves a different use case:',
        DATAPLEX_TaskIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ZONE,
      new ResourceProperty(
        'The Dataplex Zone resource',
        DATAPLEX_Zone.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ZONEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Zone. Each of these resources serves a different use case:',
        DATAPLEX_ZoneIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ZONEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Zone. Each of these resources serves a different use case:',
        DATAPLEX_ZoneIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPLEX_ZONEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataplex Zone. Each of these resources serves a different use case:',
        DATAPLEX_ZoneIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICY,
      new ResourceProperty(
        'Describes an autoscaling policy for Dataproc cluster autoscaler.',
        DATAPROC_AutoscalingPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataproc AutoscalingPolicy. Each of these resources serves a different use case:',
        DATAPROC_AutoscalingPolicyIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataproc AutoscalingPolicy. Each of these resources serves a different use case:',
        DATAPROC_AutoscalingPolicyIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataproc AutoscalingPolicy. Each of these resources serves a different use case:',
        DATAPROC_AutoscalingPolicyIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_CLUSTER,
      new ResourceProperty(
        'Manages a Cloud Dataproc cluster resource within GCP.  - [API documentation](https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.clusters) - How-to Guides     - [Official Documentation](https://cloud.google.com/dataproc/docs)   !> --Warning:-- Due to limitations of the API, all arguments except `labels`,`cluster_config.worker_config.num_instances` and `cluster_config.preemptible_worker_config.num_instances` are non-updatable. Changing `cluster_config.worker_config.min_num_instances` will be ignored. Changing others will cause recreation of the whole cluster!',
        DATAPROC_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on dataproc clusters. Each of these resources serves a different use case:',
        DATAPROC_ClusterIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on dataproc clusters. Each of these resources serves a different use case:',
        DATAPROC_ClusterIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on dataproc clusters. Each of these resources serves a different use case:',
        DATAPROC_ClusterIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_JOB,
      new ResourceProperty(
        "Manages a job resource within a Dataproc cluster within GCE. For more information see [the official dataproc documentation](https://cloud.google.com/dataproc/).  !> --Note:-- This resource does not support 'update' and changing any attributes will cause the resource to be recreated.",
        DATAPROC_Job.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_JOBIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on dataproc jobs. Each of these resources serves a different use case:',
        DATAPROC_JobIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_JOBIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on dataproc jobs. Each of these resources serves a different use case:',
        DATAPROC_JobIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_JOBIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage IAM policies on dataproc jobs. Each of these resources serves a different use case:',
        DATAPROC_JobIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATION,
      new ResourceProperty('', DATAPROC_MetastoreFederation.GetTypes()),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMBINDING,
      new ResourceProperty(
        '',
        DATAPROC_MetastoreFederationIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMMEMBER,
      new ResourceProperty(
        '',
        DATAPROC_MetastoreFederationIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMPOLICY,
      new ResourceProperty(
        '',
        DATAPROC_MetastoreFederationIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICE,
      new ResourceProperty(
        'A managed metastore service that serves metadata queries.   To get more information about Service, see:  - [API documentation](https://cloud.google.com/dataproc-metastore/docs/reference/rest/v1/projects.locations.services) - How-to Guides     - [Official Documentation](https://cloud.google.com/dataproc-metastore/docs/overview)',
        DATAPROC_MetastoreService.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataproc metastore Service. Each of these resources serves a different use case:',
        DATAPROC_MetastoreServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataproc metastore Service. Each of these resources serves a different use case:',
        DATAPROC_MetastoreServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Dataproc metastore Service. Each of these resources serves a different use case:',
        DATAPROC_MetastoreServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPROC_WORKFLOWTEMPLATE,
      new ResourceProperty(
        'A Workflow Template is a reusable workflow configuration. It defines a graph of jobs with information on where to run those jobs.',
        DATAPROC_WorkflowTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASTORE_DATASTOREINDEX,
      new ResourceProperty(
        'Describes a composite index for Cloud Datastore.   To get more information about Index, see:  - [API documentation](https://cloud.google.com/datastore/docs/reference/admin/rest/v1/projects.indexes) - How-to Guides     - [Official Documentation](https://cloud.google.com/datastore/docs/concepts/indexes)  > --Warning:-- This resource creates a Datastore Index on a project that has already enabled a Datastore-compatible database. If you haven\'t already enabled one, you can create a `gcp.appengine.Application` resource with `database_type` set to `"CLOUD_DATASTORE_COMPATIBILITY"` to do so. Your Datastore location will be the same as the App Engine location specified.',
        DATASTORE_DataStoreIndex.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASTREAM_CONNECTIONPROFILE,
      new ResourceProperty(
        'A set of reusable connection configurations to be used as a source or destination for a stream.   To get more information about ConnectionProfile, see:  - [API documentation](https://cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles) - How-to Guides     - [Official Documentation](https://cloud.google.com/datastream/docs/create-connection-profiles)',
        DATASTREAM_ConnectionProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASTREAM_PRIVATECONNECTION,
      new ResourceProperty(
        "The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.   To get more information about PrivateConnection, see:  - [API documentation](https://cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.privateConnections) - How-to Guides     - [Official Documentation](https://cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)",
        DATASTREAM_PrivateConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASTREAM_STREAM,
      new ResourceProperty(
        'A resource representing streaming data from a source to a destination.   To get more information about Stream, see:  - [API documentation](https://cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.streams) - How-to Guides     - [Official Documentation](https://cloud.google.com/datastream/docs/create-a-stream)',
        DATASTREAM_Stream.GetTypes(),
      ),
    ],
    [
      ResourceType.DEPLOYMENTMANAGER_DEPLOYMENT,
      new ResourceProperty(
        "A collection of resources that are deployed and managed together using a configuration file    > --Warning:-- This resource is intended only to manage a Deployment resource, and attempts to manage the Deployment's resources in the provider as well will likely result in errors or unexpected behavior as the two tools fight over ownership. We strongly discourage doing so unless you are an experienced user of both tools.  In addition, due to limitations of the API, the provider will treat deployments in preview as recreate-only for any update operation other than actually deploying an in-preview deployment (i.e. `preview=true` to `preview=false`).",
        DEPLOYMENTMANAGER_Deployment.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_AGENT,
      new ResourceProperty(
        'A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system.   To get more information about Agent, see:  - [API documentation](https://cloud.google.com/dialogflow/docs/reference/rest/v2/projects/agent) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/docs/)',
        DIAGFLOW_Agent.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXAGENT,
      new ResourceProperty(
        'Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way.   To get more information about Agent, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxAgent.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXENTITYTYPE,
      new ResourceProperty(
        'Entities are extracted from user input and represent parameters that are meaningful to your application. For example, a date range, a proper name such as a geographic location or landmark, and so on. Entities represent actionable data for your application.   To get more information about EntityType, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.entityTypes) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxEntityType.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXENVIRONMENT,
      new ResourceProperty(
        'Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.   To get more information about Environment, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.environments) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxEnvironment.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXFLOW,
      new ResourceProperty(
        'Flows represents the conversation flows when you build your chatbot agent.   To get more information about Flow, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxFlow.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXINTENT,
      new ResourceProperty(
        "An intent represents a user's intent to interact with a conversational agent.   To get more information about Intent, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.intents) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)",
        DIAGFLOW_CxIntent.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXPAGE,
      new ResourceProperty(
        'A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages.   To get more information about Page, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxPage.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXSECURITYSETTINGS,
      new ResourceProperty(
        'Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect. Multiple security settings can be configured in each location. Each agent can specify the security settings to apply, and each setting can be applied to multiple agents in the same project and location.   To get more information about SecuritySettings, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.securitySettings) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxSecuritySettings.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXTESTCASE,
      new ResourceProperty(
        'You can use the built-in test feature to uncover bugs and prevent regressions. A test execution verifies that agent responses have not changed for end-user inputs defined in the test case.   To get more information about TestCase, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.testCases) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxTestCase.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXVERSION,
      new ResourceProperty(
        'You can create multiple versions of your agent flows and deploy them to separate serving environments. When you edit a flow, you are editing a draft flow. At any point, you can save a draft flow as a flow version. A flow version is an immutable snapshot of your flow data and associated agent data like intents, entities, webhooks, pages, route groups, etc.   To get more information about Version, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.versions) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)',
        DIAGFLOW_CxVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_CXWEBHOOK,
      new ResourceProperty(
        "Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.   To get more information about Webhook, see:  - [API documentation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.webhooks) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/cx/docs)",
        DIAGFLOW_CxWebhook.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_ENTITYTYPE,
      new ResourceProperty(
        'Represents an entity type. Entity types serve as a tool for extracting parameter values from natural language queries.   To get more information about EntityType, see:  - [API documentation](https://cloud.google.com/dialogflow/docs/reference/rest/v2/projects.agent.entityTypes) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/docs/)',
        DIAGFLOW_EntityType.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_FULFILLMENT,
      new ResourceProperty(
        "By default, your agent responds to a matched intent with a static response. If you're using one of the integration options, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday.   To get more information about Fulfillment, see:  - [API documentation](https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent/getFulfillment) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/es/docs/fulfillment-overview)",
        DIAGFLOW_Fulfillment.GetTypes(),
      ),
    ],
    [
      ResourceType.DIAGFLOW_INTENT,
      new ResourceProperty(
        'Represents a Dialogflow intent. Intents convert a number of user expressions or patterns into an action. An action is an extraction of a user command or sentence semantics.   To get more information about Intent, see:  - [API documentation](https://cloud.google.com/dialogflow/docs/reference/rest/v2/projects.agent.intents) - How-to Guides     - [Official Documentation](https://cloud.google.com/dialogflow/docs/)',
        DIAGFLOW_Intent.GetTypes(),
      ),
    ],
    [
      ResourceType.DISCOVERYENGINE_CHATENGINE,
      new ResourceProperty(
        'Vertex chat and Conversation Engine Chat type   To get more information about ChatEngine, see:  - [API documentation](https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/projects.locations.collections.engines) - How-to Guides     - [Vertex AI Conversation](https://cloud.google.com/dialogflow/cx/docs/concept/generative)',
        DISCOVERYENGINE_ChatEngine.GetTypes(),
      ),
    ],
    [
      ResourceType.DISCOVERYENGINE_DATASTORE,
      new ResourceProperty(
        "Data store is a collection of websites and documents used to find answers for end-user's questions in Discovery Engine (a.k.a. Vertex AI Search and Conversation).   To get more information about DataStore, see:  - [API documentation](https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/projects.locations.collections.dataStores) - How-to Guides     - [Create a search data store](https://cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)",
        DISCOVERYENGINE_DataStore.GetTypes(),
      ),
    ],
    [
      ResourceType.DISCOVERYENGINE_SEARCHENGINE,
      new ResourceProperty(
        'Vertex AI Search and Conversation can be used to create a search engine or a chat application by connecting it with a datastore   To get more information about SearchEngine, see:  - [API documentation](https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/projects.locations.collections.engines) - How-to Guides     - [Create a Search Engine](https://cloud.google.com/generative-ai-app-builder/docs/create-engine-es)',
        DISCOVERYENGINE_SearchEngine.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud DNS ManagedZone. Each of these resources serves a different use case:',
        DNS_DnsManagedZoneIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud DNS ManagedZone. Each of these resources serves a different use case:',
        DNS_DnsManagedZoneIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud DNS ManagedZone. Each of these resources serves a different use case:',
        DNS_DnsManagedZoneIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_MANAGEDZONE,
      new ResourceProperty(
        'A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.   To get more information about ManagedZone, see:  - [API documentation](https://cloud.google.com/dns/api/v1/managedZones) - How-to Guides     - [Managing Zones](https://cloud.google.com/dns/zones/)',
        DNS_ManagedZone.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_POLICY,
      new ResourceProperty(
        'A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.   To get more information about Policy, see:  - [API documentation](https://cloud.google.com/dns/docs/reference/v1beta2/policies) - How-to Guides     - [Using DNS server policies](https://cloud.google.com/dns/zones/#using-dns-server-policies)',
        DNS_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_RECORDSET,
      new ResourceProperty('', DNS_RecordSet.GetTypes()),
    ],
    [
      ResourceType.DNS_RESPONSEPOLICY,
      new ResourceProperty(
        'A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.',
        DNS_ResponsePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DNS_RESPONSEPOLICYRULE,
      new ResourceProperty(
        'A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.',
        DNS_ResponsePolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.EDGECONTAINER_CLUSTER,
      new ResourceProperty(
        'Cluster contains information about a Google Distributed Cloud Edge Kubernetes cluster.   To get more information about Cluster, see:  - [API documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs/reference/container/rest/v1/projects.locations.clusters) - How-to Guides     - [Create and manage clusters](https://cloud.google.com/distributed-cloud/edge/latest/docs/clusters)',
        EDGECONTAINER_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.EDGECONTAINER_NODEPOOL,
      new ResourceProperty(
        '"A set of Kubernetes nodes in a cluster with common configuration and specification."   To get more information about NodePool, see:  - [API documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs/reference/container/rest/v1/projects.locations.clusters.nodePools) - How-to Guides     - [Google Distributed Cloud Edge](https://cloud.google.com/distributed-cloud/edge/latest/docs)',
        EDGECONTAINER_NodePool.GetTypes(),
      ),
    ],
    [
      ResourceType.EDGECONTAINER_VPNCONNECTION,
      new ResourceProperty(
        'A VPN connection   To get more information about VpnConnection, see:  - [API documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs/reference/container/rest/v1/projects.locations.vpnConnections) - How-to Guides     - [Google Distributed Cloud Edge](https://cloud.google.com/distributed-cloud/edge/latest/docs)',
        EDGECONTAINER_VpnConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.EDGENETWORK_NETWORK,
      new ResourceProperty(
        'A Distributed Cloud Edge network, which provides L3 isolation within a zone.   To get more information about Network, see:  - [API documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs/reference/network/rest/v1/projects.locations.zones.networks) - How-to Guides     - [Create and manage networks](https://cloud.google.com/distributed-cloud/edge/latest/docs/networks#api)',
        EDGENETWORK_Network.GetTypes(),
      ),
    ],
    [
      ResourceType.EDGENETWORK_SUBNET,
      new ResourceProperty(
        'A Distributed Cloud Edge subnet, which provides L2 isolation within a network.   To get more information about Subnet, see:  - [API documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs/reference/network/rest/v1/projects.locations.zones.subnets) - How-to Guides     - [Create and manage subnetworks](https://cloud.google.com/distributed-cloud/edge/latest/docs/subnetworks#api)',
        EDGENETWORK_Subnet.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Endpoints ServiceConsumers. Each of these resources serves a different use case:',
        ENDPOINTS_ConsumersIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Endpoints ServiceConsumers. Each of these resources serves a different use case:',
        ENDPOINTS_ConsumersIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Endpoints ServiceConsumers. Each of these resources serves a different use case:',
        ENDPOINTS_ConsumersIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_SERVICE,
      new ResourceProperty(
        'This resource creates and rolls out a Cloud Endpoints service using OpenAPI or gRPC.  View the relevant docs for [OpenAPI](https://cloud.google.com/endpoints/docs/openapi/) and [gRPC](https://cloud.google.com/endpoints/docs/grpc/).',
        ENDPOINTS_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Endpoints Service. Each of these resources serves a different use case:',
        ENDPOINTS_ServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Endpoints Service. Each of these resources serves a different use case:',
        ENDPOINTS_ServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Endpoints Service. Each of these resources serves a different use case:',
        ENDPOINTS_ServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_CONTACT,
      new ResourceProperty(
        'A contact that will receive notifications from Google Cloud.   To get more information about Contact, see:  - [API documentation](https://cloud.google.com/resource-manager/docs/reference/essentialcontacts/rest/v1/projects.contacts) - How-to Guides     - [Official Documentation](https://cloud.google.com/resource-manager/docs/managing-notification-contacts)  > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the Essential Contacts API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        ESSENTIALCONTACTS_Contact.GetTypes(),
      ),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSOR,
      new ResourceProperty(
        'The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.   To get more information about Processor, see:  - [API documentation](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations.processors) - How-to Guides     - [Official Documentation](https://cloud.google.com/document-ai/docs/overview)',
        ESSENTIALCONTACTS_DocumentAiProcessor.GetTypes(),
      ),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSORDEFAULTVERSION,
      new ResourceProperty(
        'The default version for the processor. Deleting this resource is a no-op, and does not unset the default version.',
        ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSEDOCUMENTSCHEMA,
      new ResourceProperty(
        'A document schema is used to define document structure.   To get more information about DocumentSchema, see:  - [API documentation](https://cloud.google.com/document-warehouse/docs/reference/rest/v1/projects.locations.documentSchemas) - How-to Guides     - [Official Documentation](https://cloud.google.com/document-warehouse/docs/manage-document-schemas)',
        ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema.GetTypes(),
      ),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSELOCATION,
      new ResourceProperty(
        'A location is used to initialize a project.   To get more information about Location, see:  - [API documentation](https://cloud.google.com/document-warehouse/docs/reference/rest/v1/projects.locations) - How-to Guides     - [Official Documentation](https://cloud.google.com/document-warehouse/docs/overview)',
        ESSENTIALCONTACTS_DocumentAiWarehouseLocation.GetTypes(),
      ),
    ],
    [
      ResourceType.EVENTARC_CHANNEL,
      new ResourceProperty(
        'The Eventarc Channel resource',
        EVENTARC_Channel.GetTypes(),
      ),
    ],
    [
      ResourceType.EVENTARC_GOOGLECHANNELCONFIG,
      new ResourceProperty(
        'The Eventarc GoogleChannelConfig resource',
        EVENTARC_GoogleChannelConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.EVENTARC_TRIGGER,
      new ResourceProperty(
        'The Eventarc Trigger resource',
        EVENTARC_Trigger.GetTypes(),
      ),
    ],
    [
      ResourceType.FILESTORE_BACKUP,
      new ResourceProperty(
        'A Google Cloud Filestore backup.   To get more information about Backup, see:  - [API documentation](https://cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances.backups) - How-to Guides     - [Official Documentation](https://cloud.google.com/filestore/docs/backups)     - [Creating Backups](https://cloud.google.com/filestore/docs/create-backups)',
        FILESTORE_Backup.GetTypes(),
      ),
    ],
    [
      ResourceType.FILESTORE_INSTANCE,
      new ResourceProperty(
        'A Google Cloud Filestore instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/filestore/docs/reference/rest/v1beta1/projects.locations.instances/create) - How-to Guides     - [Official Documentation](https://cloud.google.com/filestore/docs/creating-instances)     - [Use with Kubernetes](https://cloud.google.com/filestore/docs/accessing-fileshares)     - [Copying Data In/Out](https://cloud.google.com/filestore/docs/copying-data)',
        FILESTORE_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.FILESTORE_SNAPSHOT,
      new ResourceProperty(
        'A Google Cloud Filestore snapshot.   To get more information about Snapshot, see:  - [API documentation](https://cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances.snapshots) - How-to Guides     - [Official Documentation](https://cloud.google.com/filestore/docs/snapshots)     - [Creating Snapshots](https://cloud.google.com/filestore/docs/create-snapshots)',
        FILESTORE_Snapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_ANDROIDAPP,
      new ResourceProperty('', FIREBASE_AndroidApp.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_APPCHECKAPPATTESTCONFIG,
      new ResourceProperty(
        "An app's App Attest configuration object. Note that the Team ID registered with your app is used as part of the validation process. Make sure your `gcp.firebase.AppleApp` has a team_id present.   To get more information about AppAttestConfig, see:  - [API documentation](https://firebase.google.com/docs/reference/appcheck/rest/v1/projects.apps.appAttestConfig) - How-to Guides     - [Official Documentation](https://firebase.google.com/docs/app-check)",
        FIREBASE_AppCheckAppAttestConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_APPCHECKDEBUGTOKEN,
      new ResourceProperty(
        'A debug token is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.   To get more information about DebugToken, see:  - [API documentation](https://firebase.google.com/docs/reference/appcheck/rest/v1/projects.apps.debugTokens) - How-to Guides     - [Official Documentation](https://firebase.google.com/docs/app-check)',
        FIREBASE_AppCheckDebugToken.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_APPCHECKPLAYINTEGRITYCONFIG,
      new ResourceProperty(
        "An app's Play Integrity configuration object. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API. Make sure your `gcp.firebase.AndroidApp` has at least one `sha256_hashes` present.   To get more information about PlayIntegrityConfig, see:  - [API documentation](https://firebase.google.com/docs/reference/appcheck/rest/v1/projects.apps.playIntegrityConfig) - How-to Guides     - [Official Documentation](https://firebase.google.com/docs/app-check)",
        FIREBASE_AppCheckPlayIntegrityConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAENTERPRISECONFIG,
      new ResourceProperty(
        "An app's reCAPTCHA Enterprise configuration object.   To get more information about RecaptchaEnterpriseConfig, see:  - [API documentation](https://firebase.google.com/docs/reference/appcheck/rest/v1/projects.apps.recaptchaEnterpriseConfig) - How-to Guides     - [Official Documentation](https://firebase.google.com/docs/app-check)",
        FIREBASE_AppCheckRecaptchaEnterpriseConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAV3CONFIG,
      new ResourceProperty(
        "An app's reCAPTCHA V3 configuration object.   To get more information about RecaptchaV3Config, see:  - [API documentation](https://firebase.google.com/docs/reference/appcheck/rest/v1/projects.apps.recaptchaV3Config) - How-to Guides     - [Official Documentation](https://firebase.google.com/docs/app-check)",
        FIREBASE_AppCheckRecaptchaV3Config.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_APPCHECKSERVICECONFIG,
      new ResourceProperty(
        'The enforcement configuration for a service supported by App Check.   To get more information about ServiceConfig, see:  - [API documentation](https://firebase.google.com/docs/reference/appcheck/rest/v1/projects.services) - How-to Guides     - [Official Documentation](https://firebase.google.com/docs/app-check)',
        FIREBASE_AppCheckServiceConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_APPLEAPP,
      new ResourceProperty('', FIREBASE_AppleApp.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_DATABASEINSTANCE,
      new ResourceProperty('', FIREBASE_DatabaseInstance.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_EXTENSIONSINSTANCE,
      new ResourceProperty('', FIREBASE_ExtensionsInstance.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_HOSTINGCHANNEL,
      new ResourceProperty('', FIREBASE_HostingChannel.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_HOSTINGCUSTOMDOMAIN,
      new ResourceProperty('', FIREBASE_HostingCustomDomain.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_HOSTINGRELEASE,
      new ResourceProperty('', FIREBASE_HostingRelease.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_HOSTINGSITE,
      new ResourceProperty('', FIREBASE_HostingSite.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_HOSTINGVERSION,
      new ResourceProperty('', FIREBASE_HostingVersion.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_PROJECT,
      new ResourceProperty(
        'A Google Cloud Firebase instance. This enables Firebase resources on a given google project. Since a FirebaseProject is actually also a GCP Project, a FirebaseProject uses underlying GCP identifiers (most importantly, the projectId) as its own for easy interop with GCP APIs. Once Firebase has been added to a Google Project it cannot be removed.  To get more information about Project, see:  - [API documentation](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects) - How-to Guides     - [Official Documentation](https://firebase.google.com/)',
        FIREBASE_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASE_STORAGEBUCKET,
      new ResourceProperty('', FIREBASE_StorageBucket.GetTypes()),
    ],
    [
      ResourceType.FIREBASE_WEBAPP,
      new ResourceProperty(
        'A Google Cloud Firebase web application instance  To get more information about WebApp, see:  - [API documentation](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps) - How-to Guides     - [Official Documentation](https://firebase.google.com/)',
        FIREBASE_WebApp.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASERULES_RELEASE,
      new ResourceProperty(
        'For more information, see: - [Get started with Firebase Security Rules](https://firebase.google.com/docs/rules/get-started)',
        FIREBASERULES_Release.GetTypes(),
      ),
    ],
    [
      ResourceType.FIREBASERULES_RULESET,
      new ResourceProperty(
        'For more information, see: - [Get started with Firebase Security Rules](https://firebase.google.com/docs/rules/get-started)',
        FIREBASERULES_Ruleset.GetTypes(),
      ),
    ],
    [
      ResourceType.FIRESTORE_BACKUPSCHEDULE,
      new ResourceProperty(
        'A backup schedule for a Cloud Firestore Database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though.   To get more information about BackupSchedule, see:  - [API documentation](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.backupSchedules) - How-to Guides     - [Official Documentation](https://cloud.google.com/firestore/docs/backups)  > --Warning:-- This resource creates a Firestore Backup Schedule on a project that already has a Firestore database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though.',
        FIRESTORE_BackupSchedule.GetTypes(),
      ),
    ],
    [
      ResourceType.FIRESTORE_DATABASE,
      new ResourceProperty(
        'A Cloud Firestore Database.  If you wish to use Firestore with App Engine, use the `gcp.appengine.Application` resource instead. If you were previously using the `gcp.appengine.Application` resource exclusively for managing a Firestore database and would like to use the `gcp.firestore.Database` resource instead, please follow the instructions [here](https://cloud.google.com/firestore/docs/app-engine-requirement).   To get more information about Database, see:  - [API documentation](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases) - How-to Guides     - [Official Documentation](https://cloud.google.com/firestore/docs/)',
        FIRESTORE_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.FIRESTORE_DOCUMENT,
      new ResourceProperty(
        'In Cloud Firestore, the unit of storage is the document. A document is a lightweight record that contains fields, which map to values. Each document is identified by a name.   To get more information about Document, see:  - [API documentation](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) - How-to Guides     - [Official Documentation](https://cloud.google.com/firestore/docs/manage-data/add-data)  > --Warning:-- This resource creates a Firestore Document on a project that already has a Firestore database. If you haven\'t already created it, you may create a `gcp.firestore.Database` resource with `type` set to `"FIRESTORE_NATIVE"` and `location_id` set to your chosen location. If you wish to use App Engine, you may instead create a `gcp.appengine.Application` resource with `database_type` set to `"CLOUD_FIRESTORE"`. Your Firestore location will be the same as the App Engine location specified. Note: The surface does not support configurable database id. Only `(default)` is allowed for the database parameter.',
        FIRESTORE_Document.GetTypes(),
      ),
    ],
    [
      ResourceType.FIRESTORE_FIELD,
      new ResourceProperty(
        'Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.   To get more information about Field, see:  - [API documentation](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.collectionGroups.fields) - How-to Guides     - [Official Documentation](https://cloud.google.com/firestore/docs/query-data/indexing)  > --Warning:-- This resource creates a Firestore Single Field override on a project that  already has a Firestore database. If you haven\'t already created it, you may create a `gcp.firestore.Database` resource with `location_id` set to your chosen location.',
        FIRESTORE_Field.GetTypes(),
      ),
    ],
    [
      ResourceType.FIRESTORE_INDEX,
      new ResourceProperty(
        'Cloud Firestore indexes enable simple and complex queries against documents in a database.  This resource manages composite indexes and not single field indexes.   To get more information about Index, see:  - [API documentation](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.collectionGroups.indexes) - How-to Guides     - [Official Documentation](https://cloud.google.com/firestore/docs/query-data/indexing)  > --Warning:-- This resource creates a Firestore Index on a project that already has a Firestore database. If you haven\'t already created it, you may create a `gcp.firestore.Database` resource and `location_id` set to your chosen location. If you wish to use App Engine, you may instead create a `gcp.appengine.Application` resource with `database_type` set to `"CLOUD_FIRESTORE"`. Your Firestore location will be the same as the App Engine location specified.',
        FIRESTORE_Index.GetTypes(),
      ),
    ],
    [
      ResourceType.FOLDER_ACCESSAPPROVALSETTINGS,
      new ResourceProperty(
        'Access Approval enables you to require your explicit approval whenever Google support and engineering need to access your customer content.   To get more information about FolderSettings, see:  - [API documentation](https://cloud.google.com/access-approval/docs/reference/rest/v1/folders)',
        FOLDER_AccessApprovalSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.FOLDER_IAMAUDITCONFIG,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a folder. Each of these resources serves a different use case:',
        FOLDER_IamAuditConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.FOLDER_IAMBINDING,
      new ResourceProperty(
        'Allows creation and management of a single binding within IAM policy for an existing Google Cloud Platform folder.  > --Note:-- This resource _must not_ be used in conjunction with    `gcp.folder.IAMPolicy` or they will fight over what your policy    should be.  > --Note:-- On create, this resource will overwrite members of any existing roles.     Use `pulumi import` and inspect the output to ensure     your existing members are preserved.',
        FOLDER_IAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.FOLDER_IAMMEMBER,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a folder. Each of these resources serves a different use case:',
        FOLDER_IAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.FOLDER_IAMPOLICY,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a folder. Each of these resources serves a different use case:',
        FOLDER_IAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.FOLDER_ORGANIZATIONPOLICY,
      new ResourceProperty(
        'Allows management of Organization Policies for a Google Cloud Folder.   > --Warning:-- This resource has been superseded by `gcp.orgpolicy.Policy`. `gcp.orgpolicy.Policy` uses Organization Policy API V2 instead of Cloud Resource Manager API V1 and it supports additional features such as tags and conditions.  To get more information about Organization Policies, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v1/folders/setOrgPolicy) - How-to Guides     - [Introduction to the Organization Policy Service](https://cloud.google.com/resource-manager/docs/organization-policy/overview)',
        FOLDER_OrganizationPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLAN,
      new ResourceProperty(
        'Represents a Backup Plan instance.   To get more information about BackupPlan, see:  - [API documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/projects.locations.backupPlans) - How-to Guides     - [Official Documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)',
        GKEBACKUP_BackupPlan.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Backup for GKE BackupPlan. Each of these resources serves a different use case:',
        GKEBACKUP_BackupPlanIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Backup for GKE BackupPlan. Each of these resources serves a different use case:',
        GKEBACKUP_BackupPlanIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Backup for GKE BackupPlan. Each of these resources serves a different use case:',
        GKEBACKUP_BackupPlanIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLAN,
      new ResourceProperty(
        'Represents a Restore Plan instance.   To get more information about RestorePlan, see:  - [API documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/projects.locations.restorePlans) - How-to Guides     - [Official Documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)',
        GKEBACKUP_RestorePlan.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMBINDING,
      new ResourceProperty(
        'Represents a Restore Plan instance.   To get more information about RestorePlan, see:  - [API documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/projects.locations.restorePlans) - How-to Guides     - [Official Documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)',
        GKEBACKUP_RestorePlanIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMMEMBER,
      new ResourceProperty(
        'Represents a Restore Plan instance.   To get more information about RestorePlan, see:  - [API documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/projects.locations.restorePlans) - How-to Guides     - [Official Documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)',
        GKEBACKUP_RestorePlanIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMPOLICY,
      new ResourceProperty(
        'Represents a Restore Plan instance.   To get more information about RestorePlan, see:  - [API documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/projects.locations.restorePlans) - How-to Guides     - [Official Documentation](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)',
        GKEBACKUP_RestorePlanIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_FEATURE,
      new ResourceProperty(
        'Feature represents the settings and status of any Hub Feature.   To get more information about Feature, see:  - [API documentation](https://cloud.google.com/anthos/fleet-management/docs/reference/rest/v1/projects.locations.features) - How-to Guides     - [Registering a Cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_Feature.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_FEATUREIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Feature. Each of these resources serves a different use case:',
        GKEHUB_FeatureIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_FEATUREIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Feature. Each of these resources serves a different use case:',
        GKEHUB_FeatureIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_FEATUREIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Feature. Each of these resources serves a different use case:',
        GKEHUB_FeatureIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_FEATUREMEMBERSHIP,
      new ResourceProperty(
        'Contains information about a GKEHub Feature Memberships. Feature Memberships configure GKEHub Features that apply to specific memberships rather than the project as a whole. The google_gke_hub is the Fleet API.',
        GKEHUB_FeatureMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_FLEET,
      new ResourceProperty(
        'Fleet contains information about a group of clusters.   To get more information about Fleet, see:  - [API documentation](https://cloud.google.com/anthos/multicluster-management/reference/rest/v1/projects.locations.fleets) - How-to Guides     - [Registering a Cluster to a Fleet](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_Fleet.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIP,
      new ResourceProperty(
        'Membership contains information about a member cluster.   To get more information about Membership, see:  - [API documentation](https://cloud.google.com/anthos/multicluster-management/reference/rest/v1/projects.locations.memberships) - How-to Guides     - [Registering a Cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_Membership.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPBINDING,
      new ResourceProperty(
        'MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to.   To get more information about MembershipBinding, see:  - [API documentation](https://cloud.google.com/anthos/fleet-management/docs/reference/rest/v1/projects.locations.memberships.bindings) - How-to Guides     - [Registering a Cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_MembershipBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Membership. Each of these resources serves a different use case:',
        GKEHUB_MembershipIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Membership. Each of these resources serves a different use case:',
        GKEHUB_MembershipIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Membership. Each of these resources serves a different use case:',
        GKEHUB_MembershipIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPRBACROLEBINDING,
      new ResourceProperty('', GKEHUB_MembershipRbacRoleBinding.GetTypes()),
    ],
    [
      ResourceType.GKEHUB_NAMESPACE,
      new ResourceProperty(
        'Namespace represents a namespace across the Fleet.   To get more information about Namespace, see:  - [API documentation](https://cloud.google.com/anthos/fleet-management/docs/reference/rest/v1/projects.locations.scopes.namespaces) - How-to Guides     - [Registering a Cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_Namespace.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_SCOPE,
      new ResourceProperty(
        'Scope represents a Scope in a Fleet.   To get more information about Scope, see:  - [API documentation](https://cloud.google.com/anthos/fleet-management/docs/reference/rest/v1/projects.locations.scopes) - How-to Guides     - [Registering a Cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_Scope.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_SCOPEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Scope. Each of these resources serves a different use case:',
        GKEHUB_ScopeIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_SCOPEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Scope. Each of these resources serves a different use case:',
        GKEHUB_ScopeIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_SCOPEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for GKEHub Scope. Each of these resources serves a different use case:',
        GKEHUB_ScopeIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEHUB_SCOPERBACROLEBINDING,
      new ResourceProperty(
        'RBACRoleBinding represents a rbacrolebinding across the Fleet.   To get more information about ScopeRBACRoleBinding, see:  - [API documentation](https://cloud.google.com/anthos/fleet-management/docs/reference/rest/v1/projects.locations.scopes.rbacrolebindings) - How-to Guides     - [Registering a Cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster#register_cluster)',
        GKEHUB_ScopeRbacRoleBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALADMINCLUSTER,
      new ResourceProperty(
        'A Google Bare Metal Admin Cluster.',
        GKEONPREM_BareMetalAdminCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALCLUSTER,
      new ResourceProperty(
        'A Google Bare Metal User Cluster.',
        GKEONPREM_BareMetalCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALNODEPOOL,
      new ResourceProperty(
        'A Google Bare Metal Node Pool.',
        GKEONPREM_BareMetalNodePool.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEONPREM_VMWARECLUSTER,
      new ResourceProperty(
        'A Google VMware User Cluster.',
        GKEONPREM_VMwareCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.GKEONPREM_VMWARENODEPOOL,
      new ResourceProperty(
        'A Google Vmware Node Pool.',
        GKEONPREM_VMwareNodePool.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTORE,
      new ResourceProperty(
        'The Consent Management API is a tool for tracking user consents and the documentation associated with the consents.   To get more information about ConsentStore, see:  - [API documentation](https://cloud.google.com/healthcare/docs/reference/rest/v1/projects.locations.datasets.consentStores) - How-to Guides     - [Creating a Consent store](https://cloud.google.com/healthcare/docs/how-tos/consent)',
        HEALTHCARE_ConsentStore.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Healthcare ConsentStore. Each of these resources serves a different use case:',
        HEALTHCARE_ConsentStoreIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Healthcare ConsentStore. Each of these resources serves a different use case:',
        HEALTHCARE_ConsentStoreIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Healthcare ConsentStore. Each of these resources serves a different use case:',
        HEALTHCARE_ConsentStoreIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DATASET,
      new ResourceProperty(
        'A Healthcare `Dataset` is a toplevel logical grouping of `dicomStores`, `fhirStores` and `hl7V2Stores`.   To get more information about Dataset, see:  - [API documentation](https://cloud.google.com/healthcare/docs/reference/rest/v1/projects.locations.datasets) - How-to Guides     - [Creating a dataset](https://cloud.google.com/healthcare/docs/how-tos/datasets)',
        HEALTHCARE_Dataset.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare dataset. Each of these resources serves a different use case:',
        HEALTHCARE_DatasetIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare dataset. Each of these resources serves a different use case:',
        HEALTHCARE_DatasetIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare dataset. Each of these resources serves a different use case:',
        HEALTHCARE_DatasetIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTORE,
      new ResourceProperty(
        'A DicomStore is a datastore inside a Healthcare dataset that conforms to the DICOM (https://www.dicomstandard.org/about/) standard for Healthcare information exchange   To get more information about DicomStore, see:  - [API documentation](https://cloud.google.com/healthcare/docs/reference/rest/v1/projects.locations.datasets.dicomStores) - How-to Guides     - [Creating a DICOM store](https://cloud.google.com/healthcare/docs/how-tos/dicom)',
        HEALTHCARE_DicomStore.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare DICOM store. Each of these resources serves a different use case:',
        HEALTHCARE_DicomStoreIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare DICOM store. Each of these resources serves a different use case:',
        HEALTHCARE_DicomStoreIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare DICOM store. Each of these resources serves a different use case:',
        HEALTHCARE_DicomStoreIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTORE,
      new ResourceProperty(
        'A FhirStore is a datastore inside a Healthcare dataset that conforms to the FHIR (https://www.hl7.org/fhir/STU3/) standard for Healthcare information exchange   To get more information about FhirStore, see:  - [API documentation](https://cloud.google.com/healthcare/docs/reference/rest/v1/projects.locations.datasets.fhirStores) - How-to Guides     - [Creating a FHIR store](https://cloud.google.com/healthcare/docs/how-tos/fhir)',
        HEALTHCARE_FhirStore.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare FHIR store. Each of these resources serves a different use case:',
        HEALTHCARE_FhirStoreIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare FHIR store. Each of these resources serves a different use case:',
        HEALTHCARE_FhirStoreIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare FHIR store. Each of these resources serves a different use case:',
        HEALTHCARE_FhirStoreIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_HL7STORE,
      new ResourceProperty(
        'A Hl7V2Store is a datastore inside a Healthcare dataset that conforms to the FHIR (https://www.hl7.org/hl7V2/STU3/) standard for Healthcare information exchange   To get more information about Hl7V2Store, see:  - [API documentation](https://cloud.google.com/healthcare/docs/reference/rest/v1/projects.locations.datasets.hl7V2Stores) - How-to Guides     - [Creating a HL7v2 Store](https://cloud.google.com/healthcare/docs/how-tos/hl7v2)',
        HEALTHCARE_Hl7Store.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare HL7v2 store. Each of these resources serves a different use case:',
        HEALTHCARE_Hl7StoreIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare HL7v2 store. Each of these resources serves a different use case:',
        HEALTHCARE_Hl7StoreIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Healthcare HL7v2 store. Each of these resources serves a different use case:',
        HEALTHCARE_Hl7StoreIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_ACCESSBOUNDARYPOLICY,
      new ResourceProperty(
        'Represents a collection of access boundary policies to apply to a given resource. --NOTE--: This is a private feature and users should contact GCP support if they would like to test it.',
        IAM_AccessBoundaryPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_DENYPOLICY,
      new ResourceProperty(
        'Represents a collection of denial policies to apply to a given resource.   To get more information about DenyPolicy, see:  - [API documentation](https://cloud.google.com/iam/docs/reference/rest/v2/policies) - How-to Guides     - [Permissions supported in deny policies](https://cloud.google.com/iam/docs/deny-permissions-support)',
        IAM_DenyPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_WORKFORCEPOOL,
      new ResourceProperty(
        'Represents a collection of external workforces. Provides namespaces for federated users that can be referenced in IAM policies.   To get more information about WorkforcePool, see:  - [API documentation](https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools) - How-to Guides     - [Manage pools](https://cloud.google.com/iam/docs/manage-workforce-identity-pools-providers#manage_pools)  > --Note:-- Ask your Google Cloud account team to request access to workforce identity federation for your billing/quota project. The account team notifies you when the project is granted access.',
        IAM_WorkforcePool.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_WORKFORCEPOOLPROVIDER,
      new ResourceProperty(
        'A configuration for an external identity provider.   To get more information about WorkforcePoolProvider, see:  - [API documentation](https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools.providers) - How-to Guides     - [Configure a provider within the workforce pool](https://cloud.google.com/iam/docs/manage-workforce-identity-pools-providers#configure_a_provider_within_the_workforce_pool)  > --Note:-- Ask your Google Cloud account team to request access to workforce identity federation for your billing/quota project. The account team notifies you when the project is granted access.',
        IAM_WorkforcePoolProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOL,
      new ResourceProperty(
        'Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.   To get more information about WorkloadIdentityPool, see:  - [API documentation](https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools) - How-to Guides     - [Managing workload identity pools](https://cloud.google.com/iam/docs/manage-workload-identity-pools-providers#pools)',
        IAM_WorkloadIdentityPool.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOLPROVIDER,
      new ResourceProperty(
        'A configuration for an external identity provider.   To get more information about WorkloadIdentityPoolProvider, see:  - [API documentation](https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.providers) - How-to Guides     - [Managing workload identity providers](https://cloud.google.com/iam/docs/manage-workload-identity-pools-providers#managing_workload_identity_providers)',
        IAM_WorkloadIdentityPoolProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy AppEngineService. Each of these resources serves a different use case:',
        IAP_AppEngineServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy AppEngineService. Each of these resources serves a different use case:',
        IAP_AppEngineServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy AppEngineService. Each of these resources serves a different use case:',
        IAP_AppEngineServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy AppEngineVersion. Each of these resources serves a different use case:',
        IAP_AppEngineVersionIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy AppEngineVersion. Each of these resources serves a different use case:',
        IAP_AppEngineVersionIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy AppEngineVersion. Each of these resources serves a different use case:',
        IAP_AppEngineVersionIamPolicy.GetTypes(),
      ),
    ],
    [ResourceType.IAP_BRAND, new ResourceProperty('', IAP_Brand.GetTypes())],
    [
      ResourceType.IAP_CLIENT,
      new ResourceProperty(
        'Contains the data that describes an Identity Aware Proxy owned client.  > --Note:-- Only internal org clients can be created via declarative tools. External clients must be manually created via the GCP console. This restriction is due to the existing APIs and not lack of support in this tool.   To get more information about Client, see:  - [API documentation](https://cloud.google.com/iap/docs/reference/rest/v1/projects.brands.identityAwareProxyClients) - How-to Guides     - [Setting up IAP Client](https://cloud.google.com/iap/docs/authentication-howto)',
        IAP_Client.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_TUNNELIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy Tunnel. Each of these resources serves a different use case:',
        IAP_TunnelIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_TUNNELIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy Tunnel. Each of these resources serves a different use case:',
        IAP_TunnelIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_TUNNELIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy Tunnel. Each of these resources serves a different use case:',
        IAP_TunnelIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy TunnelInstance. Each of these resources serves a different use case:',
        IAP_TunnelInstanceIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy TunnelInstance. Each of these resources serves a different use case:',
        IAP_TunnelInstanceIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy TunnelInstance. Each of these resources serves a different use case:',
        IAP_TunnelInstanceIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebBackendService. Each of these resources serves a different use case:',
        IAP_WebBackendServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebBackendService. Each of these resources serves a different use case:',
        IAP_WebBackendServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebBackendService. Each of these resources serves a different use case:',
        IAP_WebBackendServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy Web. Each of these resources serves a different use case:',
        IAP_WebIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy Web. Each of these resources serves a different use case:',
        IAP_WebIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy Web. Each of these resources serves a different use case:',
        IAP_WebIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebRegionBackendService. Each of these resources serves a different use case:',
        IAP_WebRegionBackendServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebRegionBackendService. Each of these resources serves a different use case:',
        IAP_WebRegionBackendServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebRegionBackendService. Each of these resources serves a different use case:',
        IAP_WebRegionBackendServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebTypeAppEngine. Each of these resources serves a different use case:',
        IAP_WebTypeAppEngingIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebTypeAppEngine. Each of these resources serves a different use case:',
        IAP_WebTypeAppEngingIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebTypeAppEngine. Each of these resources serves a different use case:',
        IAP_WebTypeAppEngingIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebTypeCompute. Each of these resources serves a different use case:',
        IAP_WebTypeComputeIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebTypeCompute. Each of these resources serves a different use case:',
        IAP_WebTypeComputeIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Identity-Aware Proxy WebTypeCompute. Each of these resources serves a different use case:',
        IAP_WebTypeComputeIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_CONFIG,
      new ResourceProperty(
        'Identity Platform configuration for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access apps and services.  This entity is created only once during intialization and cannot be deleted, individual Identity Providers may be disabled instead.  This resource may only be created in billing-enabled projects.   To get more information about Config, see:  - [API documentation](https://cloud.google.com/identity-platform/docs/reference/rest/v2/Config) - How-to Guides     - [Official Documentation](https://cloud.google.com/identity-platform/docs)',
        IDENTITYPLATFORM_Config.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_DEFAULTSUPPORTEDIDPCONFIG,
      new ResourceProperty(
        'Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.',
        IDENTITYPLATFORM_DefaultSupportedIdpConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_INBOUNDSAMLCONFIG,
      new ResourceProperty(
        'Inbound SAML configuration for a Identity Toolkit project.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.',
        IDENTITYPLATFORM_InboundSamlConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_OAUTHIDPCONFIG,
      new ResourceProperty(
        'OIDC IdP configuration for a Identity Toolkit project.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.',
        IDENTITYPLATFORM_OauthIdpConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_PROJECTDEFAULTCONFIG,
      new ResourceProperty(
        '> --Warning:-- `gcp.identityplatform.Config` is deprecated and will be removed in the next major release of the provider. Use the `gcp.identityplatform.Config` resource instead. It contains a more comprehensive list of fields, and was created before `gcp.identityplatform.ProjectDefaultConfig` was added.  There is no persistent data associated with this resource.    > --Warning:-- If you are using User ADCs (Application Default Credentials) with this resource, you must specify a `billing_project` and set `user_project_override` to true in the provider configuration. Otherwise the ACM API will return a 403 error. Your account must have the `serviceusage.services.use` permission on the `billing_project` you defined.',
        IDENTITYPLATFORM_ProjectDefaultConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANT,
      new ResourceProperty(
        'Tenant configuration in a multi-tenant project.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.  You must [enable multi-tenancy](https://cloud.google.com/identity-platform/docs/multi-tenancy-quickstart) via the Cloud Console prior to creating tenants.',
        IDENTITYPLATFORM_Tenant.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTDEFAULTSUPPORTEDIDPCONFIG,
      new ResourceProperty(
        'Configurations options for the tenant for authenticating with a the standard set of Identity Toolkit-trusted IDPs.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.',
        IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTINBOUNDSAMLCONFIG,
      new ResourceProperty(
        'Inbound SAML configuration for a Identity Toolkit tenant.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.',
        IDENTITYPLATFORM_TenantInboundSamlConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTOAUTHIDPCONFIG,
      new ResourceProperty(
        'OIDC IdP configuration for a Identity Toolkit project within a tenant.  You must enable the [Google Identity Platform](https://console.cloud.google.com/marketplace/details/google-cloud-platform/customer-identity) in the marketplace prior to using this resource.',
        IDENTITYPLATFORM_TenantOauthIdpConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_CONNECTION,
      new ResourceProperty(
        'An Integration connectors Connection.   To get more information about Connection, see:  - [API documentation](https://cloud.google.com/integration-connectors/docs/reference/rest/v1/projects.locations.connections) - How-to Guides     - [Official Documentation](https://cloud.google.com/integration-connectors/docs/createconnection)',
        INTEGRATIONCONNECTORS_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_ENDPOINTATTACHMENT,
      new ResourceProperty(
        'An Integration connectors Endpoint Attachment.   To get more information about EndpointAttachment, see:  - [API documentation](https://cloud.google.com/integration-connectors/docs/reference/rest/v1/projects.locations.endpointAttachments) - How-to Guides     - [Official Documentation](https://cloud.google.com/integration-connectors/docs/create-endpoint-attachment)',
        INTEGRATIONCONNECTORS_EndpointAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CRYPTOKEY,
      new ResourceProperty(
        'A `CryptoKey` represents a logical key that can be used for cryptographic operations.   > --Note:-- CryptoKeys cannot be deleted from Google Cloud Platform. Destroying a provider-managed CryptoKey will remove it from state and delete all CryptoKeyVersions, rendering the key unusable, but -will not delete the resource from the project.- When the provider destroys these keys, any data previously encrypted with these keys will be irrecoverable. For this reason, it is strongly recommended that you add lifecycle hooks to the resource to prevent accidental destruction.   To get more information about CryptoKey, see:  - [API documentation](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys) - How-to Guides     - [Creating a key](https://cloud.google.com/kms/docs/creating-keys#create_a_key)',
        KMS_CryptoKey.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CRYPTOKEYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for KMS crypto key. Each of these resources serves a different use case:',
        KMS_CryptoKeyIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CRYPTOKEYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for KMS crypto key. Each of these resources serves a different use case:',
        KMS_CryptoKeyIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CRYPTOKEYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for KMS crypto key. Each of these resources serves a different use case:',
        KMS_CryptoKeyIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CRYPTOKEYVERSION,
      new ResourceProperty(
        'A `CryptoKeyVersion` represents an individual cryptographic key, and the associated key material.   Destroying a cryptoKeyVersion will not delete the resource from the project.   To get more information about CryptoKeyVersion, see:  - [API documentation](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions) - How-to Guides     - [Creating a key Version](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/create)',
        KMS_CryptoKeyVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEYRING,
      new ResourceProperty(
        'A `KeyRing` is a toplevel logical grouping of `CryptoKeys`.   > --Note:-- KeyRings cannot be deleted from Google Cloud Platform. Destroying a provider-managed KeyRing will remove it from state but -will not delete the resource from the project.-   To get more information about KeyRing, see:  - [API documentation](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings) - How-to Guides     - [Creating a key ring](https://cloud.google.com/kms/docs/creating-keys#create_a_key_ring)',
        KMS_KeyRing.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEYRINGIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for KMS key ring. Each of these resources serves a different use case:',
        KMS_KeyRingIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEYRINGIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for KMS key ring. Each of these resources serves a different use case:',
        KMS_KeyRingIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEYRINGIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for KMS key ring. Each of these resources serves a different use case:',
        KMS_KeyRingIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEYRINGIMPORTJOB,
      new ResourceProperty(
        "A `KeyRingImportJob` can be used to create `CryptoKeys` and `CryptoKeyVersions` using pre-existing key material, generated outside of Cloud KMS. A `KeyRingImportJob` expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the `KeyRingImportJob`'s public key.   > --Note:-- KeyRingImportJobs cannot be deleted from Google Cloud Platform. Destroying a provider-managed KeyRingImportJob will remove it from state but -will not delete the resource from the project.-   To get more information about KeyRingImportJob, see:  - [API documentation](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.importJobs) - How-to Guides     - [Importing a key](https://cloud.google.com/kms/docs/importing-a-key)",
        KMS_KeyRingImportJob.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_SECRETCIPHERTEXT,
      new ResourceProperty(
        'Encrypts secret data with Google Cloud KMS and provides access to the ciphertext.   > --NOTE:-- Using this resource will allow you to conceal secret data within your resource definitions, but it does not take care of protecting that data in the logging output, plan output, or state output.  Please take care to secure your secret data outside of resource definitions.   To get more information about SecretCiphertext, see:  - [API documentation](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys/encrypt) - How-to Guides     - [Encrypting and decrypting data with a symmetric key](https://cloud.google.com/kms/docs/encrypt-decrypt)',
        KMS_SecretCiphertext.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTBUCKETCONFIG,
      new ResourceProperty(
        'Manages a billing account level logging bucket config. For more information see [the official logging documentation](https://cloud.google.com/logging/docs/) and [Storing Logs](https://cloud.google.com/logging/docs/storage).  > --Note:-- Logging buckets are automatically created for a given folder, project, organization, billingAccount and cannot be deleted. Creating a resource of this type will acquire and update the resource that already exists at the desired location. These buckets cannot be removed so deleting this resource will remove the bucket config from your state but will leave the logging bucket unchanged. The buckets that are currently automatically created are "_Default" and "_Required".',
        LOGGING_BillingAccountBucketConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTEXCLUSION,
      new ResourceProperty('', LOGGING_BillingAccountExclusion.GetTypes()),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTSINK,
      new ResourceProperty(
        '- [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.sinks) - How-to Guides     - [Exporting Logs](https://cloud.google.com/logging/docs/export)  > --Note-- You must have the "Logs Configuration Writer" IAM role (`roles/logging.configWriter`) [granted on the billing account](https://cloud.google.com/billing/reference/rest/v1/billingAccounts/getIamPolicy) to the credentials used with this provider. [IAM roles granted on a billing account](https://cloud.google.com/billing/docs/how-to/billing-access) are separate from the typical IAM roles granted on a project.',
        LOGGING_BillingAccountSink.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_FOLDERBUCKETCONFIG,
      new ResourceProperty(
        'Manages a folder-level logging bucket config. For more information see [the official logging documentation](https://cloud.google.com/logging/docs/) and [Storing Logs](https://cloud.google.com/logging/docs/storage).  > --Note:-- Logging buckets are automatically created for a given folder, project, organization, billingAccount and cannot be deleted. Creating a resource of this type will acquire and update the resource that already exists at the desired location. These buckets cannot be removed so deleting this resource will remove the bucket config from your state but will leave the logging bucket unchanged. The buckets that are currently automatically created are "_Default" and "_Required".',
        LOGGING_FolderBucketConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_FOLDEREXCLUSION,
      new ResourceProperty(
        'Manages a folder-level logging exclusion. For more information see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/folders.exclusions) - How-to Guides     - [Excluding Logs](https://cloud.google.com/logging/docs/exclusions)  > You can specify exclusions for log sinks created by the provider by using the exclusions field of `gcp.logging.FolderSink`',
        LOGGING_FolderExclusion.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_FOLDERSETTINGS,
      new ResourceProperty(
        'Default resource settings control whether CMEK is required for new log buckets. These settings also determine the storage location for the _Default and _Required log buckets, and whether the _Default sink is enabled or disabled.   To get more information about FolderSettings, see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/TopLevel/getSettings) - How-to Guides     - [Configure default settings for organizations and folders](https://cloud.google.com/logging/docs/default-settings)',
        LOGGING_FolderSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_FOLDERSINK,
      new ResourceProperty(
        'Manages a folder-level logging sink. For more information see: - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/folders.sinks) - How-to Guides     - [Exporting Logs](https://cloud.google.com/logging/docs/export)',
        LOGGING_FolderSink.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_LINKEDDATASET,
      new ResourceProperty(
        'Describes a BigQuery linked dataset   To get more information about LinkedDataset, see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/locations.buckets.links) - How-to Guides     - [Official Documentation](https://cloud.google.com/logging/docs/apis)',
        LOGGING_LinkedDataset.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_LOGVIEW,
      new ResourceProperty(
        'Describes a view over log entries in a bucket.   To get more information about LogView, see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.locations.buckets.views) - How-to Guides     - [Official Documentation](https://cloud.google.com/logging/docs/apis)',
        LOGGING_LogView.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_METRIC,
      new ResourceProperty(
        'Logs-based metric can also be used to extract values from logs and create a a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.   To get more information about Metric, see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics/create) - How-to Guides     - [Official Documentation](https://cloud.google.com/logging/docs/apis)',
        LOGGING_Metric.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONBUCKETCONFIG,
      new ResourceProperty(
        'Manages a organization-level logging bucket config. For more information see [the official logging documentation](https://cloud.google.com/logging/docs/) and [Storing Logs](https://cloud.google.com/logging/docs/storage).  > --Note:-- Logging buckets are automatically created for a given folder, project, organization, billingAccount and cannot be deleted. Creating a resource of this type will acquire and update the resource that already exists at the desired location. These buckets cannot be removed so deleting this resource will remove the bucket config from your state but will leave the logging bucket unchanged. The buckets that are currently automatically created are "_Default" and "_Required".',
        LOGGING_OrganizationBucketConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONEXCLUSION,
      new ResourceProperty(
        'Manages an organization-level logging exclusion. For more information see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/organizations.exclusions) - How-to Guides     - [Excluding Logs](https://cloud.google.com/logging/docs/exclusions)  > You can specify exclusions for log sinks created by the provider by using the exclusions field of `gcp.logging.OrganizationSink`',
        LOGGING_OrganizationExclusion.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSETTINGS,
      new ResourceProperty(
        'Default resource settings control whether CMEK is required for new log buckets. These settings also determine the storage location for the _Default and _Required log buckets, and whether the _Default sink is enabled or disabled.   To get more information about OrganizationSettings, see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/TopLevel/getSettings) - How-to Guides     - [Configure default settings for organizations and folders](https://cloud.google.com/logging/docs/default-settings)',
        LOGGING_OrganizationSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSINK,
      new ResourceProperty(
        'Manages a organization-level logging sink. For more information see: - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/organizations.sinks) - How-to Guides     - [Exporting Logs](https://cloud.google.com/logging/docs/export)',
        LOGGING_OrganizationSink.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_PROJECTBUCKETCONFIG,
      new ResourceProperty(
        'Manages a project-level logging bucket config. For more information see [the official logging documentation](https://cloud.google.com/logging/docs/) and [Storing Logs](https://cloud.google.com/logging/docs/storage).  > --Note:-- Logging buckets are automatically created for a given folder, project, organization, billingAccount and cannot be deleted. Creating a resource of this type will acquire and update the resource that already exists at the desired location. These buckets cannot be removed so deleting this resource will remove the bucket config from your state but will leave the logging bucket unchanged. The buckets that are currently automatically created are "_Default" and "_Required".',
        LOGGING_ProjectBucketConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_PROJECTEXCLUSION,
      new ResourceProperty(
        'Manages a project-level logging exclusion. For more information see:  - [API documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.exclusions) - How-to Guides     - [Excluding Logs](https://cloud.google.com/logging/docs/exclusions)  > You can specify exclusions for log sinks created by the provider by using the exclusions field of `gcp.logging.ProjectSink`',
        LOGGING_ProjectExclusion.GetTypes(),
      ),
    ],
    [
      ResourceType.LOGGING_PROJECTSINK,
      new ResourceProperty('', LOGGING_ProjectSink.GetTypes()),
    ],
    [
      ResourceType.LOOKER_INSTANCE,
      new ResourceProperty(
        'A Google Cloud Looker instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/looker/docs/reference/rest/v1/projects.locations.instances) - How-to Guides     - [Create a Looker (Google Cloud core) instance](https://cloud.google.com/looker/docs/looker-core-instance-create)     - [Configure a Looker (Google Cloud core) instance](https://cloud.google.com/looker/docs/looker-core-instance-setup)',
        LOOKER_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.MEMCACHE_INSTANCE,
      new ResourceProperty(
        'A Google Cloud Memcache instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/memorystore/docs/memcached/reference/rest/v1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/memcache/docs/creating-instances)',
        MEMCACHE_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.MIGRATIONCENTER_GROUP,
      new ResourceProperty(
        'A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group.',
        MIGRATIONCENTER_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.MIGRATIONCENTER_PREFERENCESET,
      new ResourceProperty(
        'Manages the PreferenceSet resource.   To get more information about PreferenceSet, see:  - [API documentation](https://cloud.google.com/migration-center/docs/reference/rest/v1) - How-to Guides     - [Managing Migration Preferences](https://cloud.google.com/migration-center/docs/migration-preferences)',
        MIGRATIONCENTER_PreferenceSet.GetTypes(),
      ),
    ],
    [
      ResourceType.ML_ENGINEMODEL,
      new ResourceProperty(
        'Represents a machine learning solution.  A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.   To get more information about Model, see:  - [API documentation](https://cloud.google.com/ai-platform/prediction/docs/reference/rest/v1/projects.models) - How-to Guides     - [Official Documentation](https://cloud.google.com/ai-platform/prediction/docs/deploying-models)',
        ML_EngineModel.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_ALERTPOLICY,
      new ResourceProperty(
        'A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state.   To get more information about AlertPolicy, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies) - How-to Guides     - [Official Documentation](https://cloud.google.com/monitoring/alerts/)',
        MONITORING_AlertPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_CUSTOMSERVICE,
      new ResourceProperty(
        'A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern. In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible   To get more information about Service, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services) - How-to Guides     - [Service Monitoring](https://cloud.google.com/monitoring/service-monitoring)     - [Monitoring API Documentation](https://cloud.google.com/monitoring/api/v3/)     - [Service-orientation on Wikipedia](https://en.wikipedia.org/wiki/Service-orientation)',
        MONITORING_CustomService.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_DASHBOARD,
      new ResourceProperty(
        'A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.  To get more information about Dashboards, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards) - How-to Guides     - [Official Documentation](https://cloud.google.com/monitoring/dashboards)',
        MONITORING_Dashboard.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_GENERICSERVICE,
      new ResourceProperty(
        'A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern. In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible   To get more information about GenericService, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services) - How-to Guides     - [Service Monitoring](https://cloud.google.com/monitoring/service-monitoring)     - [Monitoring API Documentation](https://cloud.google.com/monitoring/api/v3/)     - [Service-orientation on Wikipedia](https://en.wikipedia.org/wiki/Service-orientation)',
        MONITORING_GenericService.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_GROUP,
      new ResourceProperty(
        "The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group.   To get more information about Group, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.groups) - How-to Guides     - [Official Documentation](https://cloud.google.com/monitoring/groups/)",
        MONITORING_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_METRICDESCRIPTOR,
      new ResourceProperty(
        "Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.   To get more information about MetricDescriptor, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) - How-to Guides     - [Official Documentation](https://cloud.google.com/monitoring/custom-metrics/)",
        MONITORING_MetricDescriptor.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_MONITOREDPROJECT,
      new ResourceProperty(
        'A [project being monitored](https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.   To get more information about MonitoredProject, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/locations.global.metricsScopes.projects) - How-to Guides     - [Official Documentation](https://cloud.google.com/monitoring/settings/manage-api)',
        MONITORING_MonitoredProject.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_NOTIFICATIONCHANNEL,
      new ResourceProperty(
        "A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.  Notification Channels are designed to be flexible and are made up of a supported `type` and labels to configure that channel. Each `type` has specific labels that need to be present for that channel to be correctly configured. The labels that are required to be present for one channel `type` are often different than those required for another. Due to these loose constraints it's often best to set up a channel through the UI and import it to the provider when setting up a brand new channel type to determine which labels are required.  A list of supported channels per project the `list` endpoint can be accessed programmatically or through the api explorer at  https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list . This provides the channel type and all of the required labels that must be passed.   To get more information about NotificationChannel, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannels) - How-to Guides     - [Notification Options](https://cloud.google.com/monitoring/support/notification-options)     - [Monitoring API Documentation](https://cloud.google.com/monitoring/api/v3/)",
        MONITORING_NotificationChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_SLO,
      new ResourceProperty(
        'A Service-Level Objective (SLO) describes the level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99%!o(MISSING)f requests in each rolling week have latency below 200 milliseconds" or "99.5%!o(MISSING)f requests in each calendar month return successfully."   To get more information about Slo, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services.serviceLevelObjectives) - How-to Guides     - [Service Monitoring](https://cloud.google.com/monitoring/service-monitoring)     - [Monitoring API Documentation](https://cloud.google.com/monitoring/api/v3/)',
        MONITORING_Slo.GetTypes(),
      ),
    ],
    [
      ResourceType.MONITORING_UPTIMECHECKCONFIG,
      new ResourceProperty(
        'This message configures which resources and services to monitor for availability.   To get more information about UptimeCheckConfig, see:  - [API documentation](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.uptimeCheckConfigs) - How-to Guides     - [Official Documentation](https://cloud.google.com/monitoring/uptime-checks/)',
        MONITORING_UptimeCheckConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_ACTIVEDIRECTORY,
      new ResourceProperty(
        'ActiveDirectory is the public representation of the active directory config.   To get more information about activeDirectory, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories) - How-to Guides     - [Official Documentation](https://cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/about-ad)',
        NETAPP_ActiveDirectory.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_BACKUPPOLICY,
      new ResourceProperty(
        'A backup policy is used to schedule backups at regular daily, weekly, or monthly intervals. Backup policies allow you to attach a backup schedule to a volume. The policy defines how many backups to retain at daily, weekly, or monthly intervals.   To get more information about backupPolicy, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.backupPolicies) - How-to Guides     - [Documentation](https://cloud.google.com/netapp/volumes/docs/protect-data/about-volume-backups#about_backup_policies)',
        NETAPP_BackupPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_BACKUPVAULT,
      new ResourceProperty(
        'A backup vault is the location where backups are stored. You can only create one backup vault per region. A vault can hold multiple backups for multiple volumes in that region.   To get more information about backupVault, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.backupVaults) - How-to Guides     - [Documentation](https://cloud.google.com/netapp/volumes/docs/protect-data/about-volume-backups)',
        NETAPP_BackupVault.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_KMSCONFIG,
      new ResourceProperty(
        'NetApp Volumes always encrypts your data at rest using volume-specific keys.  A CMEK policy (customer-managed encryption key) warps such volume-specific keys in a key stored in Cloud Key Management Service (KMS).   To get more information about kmsconfig, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.kmsConfigs) - How-to Guides     - [Documentation](https://cloud.google.com/netapp/volumes/docs/configure-and-use/cmek/cmek-overview)',
        NETAPP_Kmsconfig.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_STORAGEPOOL,
      new ResourceProperty(
        'Storage pools act as containers for volumes. All volumes in a storage pool share the following information: - Location - Service level - Virtual Private Cloud (VPC) network - Active Directory policy - LDAP use for NFS volumes, if applicable - Customer-managed encryption key (CMEK) policy  The capacity of the pool can be split up and assigned to volumes within the pool. Storage pools are a billable component of NetApp Volumes. Billing is based on the location, service level, and capacity allocated to a pool independent of consumption at the volume level.   To get more information about storagePool, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.storagePools) - How-to Guides     - [QUICKSTART_TITLE](https://cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool)',
        NETAPP_StoragePool.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_VOLUME,
      new ResourceProperty(
        "A volume is a file system container in a storage pool that stores application, database, and user data.  You can create a volume's capacity using the available capacity in the storage pool and you can define and resize the capacity without disruption to any processes.  Storage pool settings apply to the volumes contained within them automatically.   To get more information about Volume, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.volumes) - How-to Guides     - [Quickstart](https://cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume)     - [Documentation](https://cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/overview)",
        NETAPP_Volume.GetTypes(),
      ),
    ],
    [
      ResourceType.NETAPP_VOLUMEREPLICATION,
      new ResourceProperty('', NETAPP_VolumeReplication.GetTypes()),
    ],
    [
      ResourceType.NETAPP_VOLUMESNAPSHOT,
      new ResourceProperty(
        "NetApp Volumes helps you manage your data usage with snapshots that can quickly restore lost data. Snapshots are point-in-time versions of your volume's content. They are resources of volumes and are instant captures of your data that consume space only for modified data. Because data changes over time, snapshots usually consume more space as they get older. NetApp Volumes volumes use just-in-time copy-on-write so that unmodified files in snapshots don't consume any of the volume's capacity.   To get more information about VolumeSnapshot, see:  - [API documentation](https://cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.volumes.snapshots) - How-to Guides     - [Documentation](https://cloud.google.com/netapp/volumes/docs/configure-and-use/volume-snapshots/overview)",
        NETAPP_VolumeSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_HUB,
      new ResourceProperty(
        'The NetworkConnectivity Hub resource',
        NETWORKCONNECTIVITY_Hub.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_POLICYBASEDROUTE,
      new ResourceProperty(
        'Policy-based Routes are more powerful routes that route L4 network traffic based on not just destination IP, but also source IP, protocol and more. A Policy-based Route always take precedence when it conflicts with other types of routes.   To get more information about PolicyBasedRoute, see:  - [API documentation](https://cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest/v1/projects.locations.global.policyBasedRoutes) - How-to Guides     - [Use policy-based routes](https://cloud.google.com/vpc/docs/use-policy-based-routes#api)',
        NETWORKCONNECTIVITY_PolicyBasedRoute.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SERVICECONNECTIONPOLICY,
      new ResourceProperty(
        'Manage Service Connection Policies.   To get more information about ServiceConnectionPolicy, see:  - [API documentation](https://cloud.google.com/secure-web-proxy/docs/reference/networkconnectivity/rest/v1/projects.locations.networkConnectionPolicies) - How-to Guides     - [About Service Connection Policies](https://cloud.google.com/vpc/docs/about-service-connection-policies#service-policies)',
        NETWORKCONNECTIVITY_ServiceConnectionPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SPOKE,
      new ResourceProperty(
        'The NetworkConnectivity Spoke resource',
        NETWORKCONNECTIVITY_Spoke.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGEMENT_CONNECTIVITYTEST,
      new ResourceProperty(
        'A connectivity test are a static analysis of your resource configurations that enables you to evaluate connectivity to and from Google Cloud resources in your Virtual Private Cloud (VPC) network.   To get more information about ConnectivityTest, see:  - [API documentation](https://cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests) - How-to Guides     - [Official Documentation](https://cloud.google.com/network-intelligence-center/docs)',
        NETWORKMANAGEMENT_ConnectivityTest.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUP,
      new ResourceProperty(
        'AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy.   To get more information about AddressGroup, see:  - [API documentation](https://cloud.google.com/traffic-director/docs/reference/network-security/rest/v1beta1/organizations.locations.addressGroups) - How-to Guides     - [Use AddressGroups](https://cloud.google.com/vpc/docs/use-address-groups-firewall-policies)',
        NETWORKSECURITY_AddressGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMBINDING,
      new ResourceProperty(
        '',
        NETWORKSECURITY_AddressGroupIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMMEMBER,
      new ResourceProperty(
        '',
        NETWORKSECURITY_AddressGroupIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Network security ProjectAddressGroup. Each of these resources serves a different use case:',
        NETWORKSECURITY_AddressGroupIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_AUTHORIZATIONPOLICY,
      new ResourceProperty('', NETWORKSECURITY_AuthorizationPolicy.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_CLIENTTLSPOLICY,
      new ResourceProperty('', NETWORKSECURITY_ClientTlsPolicy.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_FIREWALLENDPOINT,
      new ResourceProperty('', NETWORKSECURITY_FirewallEndpoint.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICY,
      new ResourceProperty(
        'The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata.   To get more information about GatewaySecurityPolicy, see:  - [API documentation](https://cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies)',
        NETWORKSECURITY_GatewaySecurityPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICYRULE,
      new ResourceProperty(
        'The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.   To get more information about GatewaySecurityPolicyRule, see:  - [API documentation](https://cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies.rules)',
        NETWORKSECURITY_GatewaySecurityPolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILE,
      new ResourceProperty('', NETWORKSECURITY_SecurityProfile.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILEGROUP,
      new ResourceProperty('', NETWORKSECURITY_SecurityProfileGroup.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_SERVERTLSPOLICY,
      new ResourceProperty('', NETWORKSECURITY_ServerTlsPolicy.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_TLSINSPECTIONPOLICY,
      new ResourceProperty('', NETWORKSECURITY_TlsInspectionPolicy.GetTypes()),
    ],
    [
      ResourceType.NETWORKSECURITY_URLLIST,
      new ResourceProperty(
        'UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns.   To get more information about UrlLists, see:  - [API documentation](https://cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.urlLists) - How-to Guides     - Use UrlLists',
        NETWORKSECURITY_UrlList.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEKEYSET,
      new ResourceProperty(
        'EdgeCacheKeyset represents a collection of public keys used for validating signed requests.   To get more information about EdgeCacheKeyset, see:  - [API documentation](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets) - How-to Guides     - [Create keysets](https://cloud.google.com/media-cdn/docs/create-keyset)',
        NETWORKSERVICES_EdgeCacheKeyset.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEORIGIN,
      new ResourceProperty(
        'EdgeCacheOrigin represents a HTTP-reachable backend for an EdgeCacheService.   To get more information about EdgeCacheOrigin, see:  - [API documentation](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins)',
        NETWORKSERVICES_EdgeCacheOrigin.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHESERVICE,
      new ResourceProperty(
        'EdgeCacheService defines the IP addresses, protocols, security policies, cache policies and routing configuration.    > --Warning:-- These resources require allow-listing to use, and are not openly available to all Cloud customers. Engage with your Cloud account team to discuss how to onboard.',
        NETWORKSERVICES_EdgeCacheService.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSERVICES_ENDPOINTPOLICY,
      new ResourceProperty('', NETWORKSERVICES_EndpointPolicy.GetTypes()),
    ],
    [
      ResourceType.NETWORKSERVICES_GATEWAY,
      new ResourceProperty(
        'Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.   To get more information about Gateway, see:  - [API documentation](https://cloud.google.com/traffic-director/docs/reference/network-services/rest/v1/projects.locations.gateways)',
        NETWORKSERVICES_Gateway.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKSERVICES_GRPCROUTE,
      new ResourceProperty('', NETWORKSERVICES_GrpcRoute.GetTypes()),
    ],
    [
      ResourceType.NETWORKSERVICES_HTTPROUTE,
      new ResourceProperty('', NETWORKSERVICES_HttpRoute.GetTypes()),
    ],
    [
      ResourceType.NETWORKSERVICES_MESH,
      new ResourceProperty('', NETWORKSERVICES_Mesh.GetTypes()),
    ],
    [
      ResourceType.NETWORKSERVICES_SERVICEBINDING,
      new ResourceProperty('', NETWORKSERVICES_ServiceBinding.GetTypes()),
    ],
    [
      ResourceType.NETWORKSERVICES_TCPROUTE,
      new ResourceProperty('', NETWORKSERVICES_TcpRoute.GetTypes()),
    ],
    [
      ResourceType.NETWORKSERVICES_TLSROUTE,
      new ResourceProperty('', NETWORKSERVICES_TlsRoute.GetTypes()),
    ],
    [
      ResourceType.NOTEBOOKS_ENVIRONMENT,
      new ResourceProperty(
        'A Cloud AI Platform Notebook environment.   To get more information about Environment, see:  - [API documentation](https://cloud.google.com/ai-platform/notebooks/docs/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/ai-platform-notebooks)',
        NOTEBOOKS_Environment.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCE,
      new ResourceProperty(
        '> --Warning:-- `google_notebook_instance` is deprecated and will be removed in a future major release. Use `gcp.workbench.Instance` instead.  A Cloud AI Platform Notebook instance.   > --Note:-- Due to limitations of the Notebooks Instance API, many fields in this resource do not properly detect drift. These fields will also not appear in state once imported.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/ai-platform/notebooks/docs/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/ai-platform-notebooks)',
        NOTEBOOKS_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud AI Notebooks Instance. Each of these resources serves a different use case:',
        NOTEBOOKS_InstanceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud AI Notebooks Instance. Each of these resources serves a different use case:',
        NOTEBOOKS_InstanceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud AI Notebooks Instance. Each of these resources serves a different use case:',
        NOTEBOOKS_InstanceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_LOCATION,
      new ResourceProperty(
        'Represents a Location resource.',
        NOTEBOOKS_Location.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIME,
      new ResourceProperty(
        'A Cloud AI Platform Notebook runtime.   > --Note:-- Due to limitations of the Notebooks Runtime API, many fields in this resource do not properly detect drift. These fields will also not appear in state once imported.   To get more information about Runtime, see:  - [API documentation](https://cloud.google.com/ai-platform/notebooks/docs/reference/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/ai-platform-notebooks)',
        NOTEBOOKS_Runtime.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud AI Notebooks Runtime. Each of these resources serves a different use case:',
        NOTEBOOKS_RuntimeIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud AI Notebooks Runtime. Each of these resources serves a different use case:',
        NOTEBOOKS_RuntimeIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud AI Notebooks Runtime. Each of these resources serves a different use case:',
        NOTEBOOKS_RuntimeIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_ACCESSAPPROVALSETTINGS,
      new ResourceProperty(
        'Access Approval enables you to require your explicit approval whenever Google support and engineering need to access your customer content.   To get more information about OrganizationSettings, see:  - [API documentation](https://cloud.google.com/access-approval/docs/reference/rest/v1/organizations)',
        ORGANIZATIONS_AccessApprovalSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_FOLDER,
      new ResourceProperty(
        'Allows management of a Google Cloud Platform folder. For more information see  [the official documentation](https://cloud.google.com/resource-manager/docs/creating-managing-folders) and  [API](https://cloud.google.com/resource-manager/reference/rest/v2/folders).  A folder can contain projects, other folders, or a combination of both. You can use folders to group projects under an organization in a hierarchy. For example, your organization might contain multiple departments, each with its own set of Cloud Platform resources. Folders allows you to group these resources on a per-department basis. Folders are used to group resources that share common IAM policies.  Folders created live inside an Organization. See the [Organization documentation](https://cloud.google.com/resource-manager/docs/quickstarts) for more details.  The service account used to run the provider when creating a `gcp.organizations.Folder` resource must have `roles/resourcemanager.folderCreator`. See the [Access Control for Folders Using IAM](https://cloud.google.com/resource-manager/docs/access-control-folders) doc for more information.',
        ORGANIZATIONS_Folder.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMAUDITCONFIG,
      new ResourceProperty(
        'Allows management of audit logging config for a given service for a Google Cloud Platform Organization.',
        ORGANIZATIONS_IamAuditConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMBINDING,
      new ResourceProperty(
        'Allows creation and management of a single binding within IAM policy for an existing Google Cloud Platform Organization.  > --Note:-- This resource __must not__ be used in conjunction with    `gcp.organizations.IAMMember` for the __same role__ or they will fight over    what your policy should be.  > --Note:-- On create, this resource will overwrite members of any existing roles.     Use `pulumi import` and inspect the `output to ensure     your existing members are preserved.',
        ORGANIZATIONS_IAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMCUSTOMROLE,
      new ResourceProperty(
        'Allows management of a customized Cloud IAM organization role. For more information see [the official documentation](https://cloud.google.com/iam/docs/understanding-custom-roles) and [API](https://cloud.google.com/iam/reference/rest/v1/organizations.roles).  > --Warning:-- Note that custom roles in GCP have the concept of a soft-delete. There are two issues that may arise  from this and how roles are propagated. 1) creating a role may involve undeleting and then updating a role with the  same name, possibly causing confusing behavior between undelete and update. 2) A deleted role is permanently deleted  after 7 days, but it can take up to 30 more days (i.e. between 7 and 37 days after deletion) before the role name is  made available again. This means a deleted role that has been deleted for more than 7 days cannot be changed at all  by the provider, and new roles cannot share that name.',
        ORGANIZATIONS_IAMCustomRole.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMMEMBER,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a organization. Each of these resources serves a different use case:',
        ORGANIZATIONS_IAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMPOLICY,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a organization. Each of these resources serves a different use case:',
        ORGANIZATIONS_IAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_POLICY,
      new ResourceProperty(
        'Allows management of Organization Policies for a Google Cloud Organization.   > --Warning:-- This resource has been superseded by `gcp.orgpolicy.Policy`. `gcp.orgpolicy.Policy` uses Organization Policy API V2 instead of Cloud Resource Manager API V1 and it supports additional features such as tags and conditions.  To get more information about Organization Policies, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v1/organizations/setOrgPolicy) - How-to Guides     - [Introduction to the Organization Policy Service](https://cloud.google.com/resource-manager/docs/organization-policy/overview)',
        ORGANIZATIONS_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_PROJECT,
      new ResourceProperty(
        'Allows creation and management of a Google Cloud Platform project.  Projects created with this resource must be associated with an Organization. See the [Organization documentation](https://cloud.google.com/resource-manager/docs/quickstarts) for more details.  The user or service account that is running this provider when creating a `gcp.organizations.Project` resource must have `roles/resourcemanager.projectCreator` on the specified organization. See the [Access Control for Organizations Using IAM](https://cloud.google.com/resource-manager/docs/access-control-org) doc for more information.  > This resource reads the specified billing account on every pulumi up and plan operation so you must have permissions on the specified billing account.  To get more information about projects, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v1/projects) - How-to Guides     - [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)',
        ORGANIZATIONS_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGPOLICY_CUSTOMCONSTRAINT,
      new ResourceProperty(
        'Custom constraints are created by administrators to provide more granular and customizable control over the specific fields that are restricted by your organization policies.   To get more information about CustomConstraint, see:  - [API documentation](https://cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.constraints) - How-to Guides     - [Official Documentation](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints)     - [Supported Services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services)',
        ORGPOLICY_CustomConstraint.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGPOLICY_POLICY,
      new ResourceProperty(
        "An organization policy gives you programmatic control over your organization's cloud resources.  Using Organization Policies, you will be able to configure constraints across your entire resource hierarchy.  For more information, see: - [Understanding Org Policy concepts](https://cloud.google.com/resource-manager/docs/organization-policy/overview) - [The resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy) - [All valid constraints](https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints)",
        ORGPOLICY_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.OSCONFIG_GUESTPOLICIES,
      new ResourceProperty(
        'An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.  To get more information about GuestPolicies, see:  - [API documentation](https://cloud.google.com/compute/docs/osconfig/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/os-config-management)',
        OSCONFIG_GuestPolicies.GetTypes(),
      ),
    ],
    [
      ResourceType.OSCONFIG_OSPOLICYASSIGNMENT,
      new ResourceProperty(
        'OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).  To get more information about OSPolicyAssignment, see:  -   [API documentation](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments) -   How-to Guides     -   [Official Documentation](https://cloud.google.com/compute/docs/os-configuration-management/create-os-policy-assignment)',
        OSCONFIG_OsPolicyAssignment.GetTypes(),
      ),
    ],
    [
      ResourceType.OSCONFIG_PATCHDEPLOYMENT,
      new ResourceProperty(
        'Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule.   To get more information about PatchDeployment, see:  - [API documentation](https://cloud.google.com/compute/docs/osconfig/rest) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/os-patch-management)',
        OSCONFIG_PatchDeployment.GetTypes(),
      ),
    ],
    [
      ResourceType.OSLOGIN_SSHPUBLICKEY,
      new ResourceProperty(
        'The SSH public key information associated with a Google account.   To get more information about SSHPublicKey, see:  - [API documentation](https://cloud.google.com/compute/docs/oslogin/rest/v1/users.sshPublicKeys) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/oslogin)',
        OSLOGIN_SshPublicKey.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_ACCESSAPPROVALSETTINGS,
      new ResourceProperty(
        'Access Approval enables you to require your explicit approval whenever Google support and engineering need to access your customer content.   To get more information about ProjectSettings, see:  - [API documentation](https://cloud.google.com/access-approval/docs/reference/rest/v1/projects)',
        PROJECTS_AccessApprovalSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_APIKEY,
      new ResourceProperty(
        'The Apikeys Key resource',
        PROJECTS_ApiKey.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_DEFAULTSERVICEACCOUNTS,
      new ResourceProperty(
        "Allows management of Google Cloud Platform project default service accounts.  When certain service APIs are enabled, Google Cloud Platform automatically creates service accounts to help get started, but this is not recommended for production environments as per [Google's documentation](https://cloud.google.com/iam/docs/service-accounts#default). See the [Organization documentation](https://cloud.google.com/resource-manager/docs/quickstarts) for more details.  > --WARNING-- Some Google Cloud products do not work if the default service accounts are deleted so it is better to `DEPRIVILEGE` as Google --CAN NOT-- recover service accounts that have been deleted for more than 30 days. Also Google recommends using the `constraints/iam.automaticIamGrantsForDefaultServiceAccounts` [constraint](https://www.terraform.io/docs/providers/google/r/google_organization_policy.html) to disable automatic IAM Grants to default service accounts.  > This resource works on a best-effort basis, as no API formally describes the default service accounts and it is for users who are unable to use constraints. If the default service accounts change their name or additional service accounts are added, this resource will need to be updated.",
        PROJECTS_DefaultServiceAccounts.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_IAMAUDITCONFIG,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a project. Each of these resources serves a different use case:',
        PROJECTS_IAMAuditConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_IAMBINDING,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a project. Each of these resources serves a different use case:',
        PROJECTS_IAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_IAMCUSTOMROLE,
      new ResourceProperty(
        'Allows management of a customized Cloud IAM project role. For more information see [the official documentation](https://cloud.google.com/iam/docs/understanding-custom-roles) and [API](https://cloud.google.com/iam/reference/rest/v1/projects.roles).  > --Warning:-- Note that custom roles in GCP have the concept of a soft-delete. There are two issues that may arise  from this and how roles are propagated. 1) creating a role may involve undeleting and then updating a role with the  same name, possibly causing confusing behavior between undelete and update. 2) A deleted role is permanently deleted  after 7 days, but it can take up to 30 more days (i.e. between 7 and 37 days after deletion) before the role name is  made available again. This means a deleted role that has been deleted for more than 7 days cannot be changed at all  by the provider, and new roles cannot share that name.',
        PROJECTS_IAMCustomRole.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_IAMMEMBER,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a project. Each of these resources serves a different use case:',
        PROJECTS_IAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_IAMPOLICY,
      new ResourceProperty(
        'Four different resources help you manage your IAM policy for a project. Each of these resources serves a different use case:',
        PROJECTS_IAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_ORGANIZATIONPOLICY,
      new ResourceProperty(
        'Allows management of Organization Policies for a Google Cloud Project.  > --Warning:-- This resource has been superseded by `gcp.orgpolicy.Policy`. `gcp.orgpolicy.Policy` uses Organization Policy API V2 instead of Cloud Resource Manager API V1 and it supports additional features such as tags and conditions.  To get more information about Organization Policies, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v1/projects/setOrgPolicy) - How-to Guides     - [Introduction to the Organization Policy Service](https://cloud.google.com/resource-manager/docs/organization-policy/overview)',
        PROJECTS_OrganizationPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_SERVICE,
      new ResourceProperty(
        'Allows management of a single API service for a Google Cloud Platform project.   For a list of services available, visit the [API library page](https://console.cloud.google.com/apis/library) or run `gcloud services list --available`.  This resource requires the [Service Usage API](https://console.cloud.google.com/apis/library/serviceusage.googleapis.com) to use.  To get more information about `gcp.projects.Service`, see:  - [API documentation](https://cloud.google.com/service-usage/docs/reference/rest/v1/services) - How-to Guides     - [Enabling and Disabling Services](https://cloud.google.com/service-usage/docs/enable-disable)',
        PROJECTS_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_SERVICEIDENTITY,
      new ResourceProperty(
        'Generate service identity for a service.  > --Note:-- Once created, this resource cannot be updated or destroyed. These actions are a no-op.  > --Note:-- This resource can be used to retrieve the emails of the [Google-managed service accounts](https://cloud.google.com/iam/docs/service-agents)  of the APIs that Google has configured with a Service Identity. You can run `gcloud beta services identity create --service SERVICE_NAME.googleapis.com` to verify if an API supports this.  To get more information about Service Identity, see:  - [API documentation](https://cloud.google.com/service-usage/docs/reference/rest/v1beta1/services/generateServiceIdentity)',
        PROJECTS_ServiceIdentity.GetTypes(),
      ),
    ],
    [
      ResourceType.PROJECTS_USAGEEXPORTBUCKET,
      new ResourceProperty(
        'Allows creation and management of a Google Cloud Platform project.  Projects created with this resource must be associated with an Organization. See the [Organization documentation](https://cloud.google.com/resource-manager/docs/quickstarts) for more details.  The user or service account that is running this provider when creating a `gcp.organizations.Project` resource must have `roles/resourcemanager.projectCreator` on the specified organization. See the [Access Control for Organizations Using IAM](https://cloud.google.com/resource-manager/docs/access-control-org) doc for more information.  > This resource reads the specified billing account on every pulumi up and plan operation so you must have permissions on the specified billing account.  To get more information about projects, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v1/projects) - How-to Guides     - [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)',
        PROJECTS_UsageExportBucket.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_LITERESERVATION,
      new ResourceProperty(
        'A named resource representing a shared pool of capacity.   To get more information about Reservation, see:  - [API documentation](https://cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations) - How-to Guides     - [Managing Reservations](https://cloud.google.com/pubsub/lite/docs/reservations)',
        PUBSUB_LiteReservation.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_LITESUBSCRIPTION,
      new ResourceProperty(
        'A named resource representing the stream of messages from a single, specific topic, to be delivered to the subscribing application.   To get more information about Subscription, see:  - [API documentation](https://cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.subscriptions) - How-to Guides     - [Managing Subscriptions](https://cloud.google.com/pubsub/lite/docs/subscriptions)',
        PUBSUB_LiteSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_LITETOPIC,
      new ResourceProperty(
        'A named resource to which messages are sent by publishers.   To get more information about Topic, see:  - [API documentation](https://cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.topics) - How-to Guides     - [Managing Topics](https://cloud.google.com/pubsub/lite/docs/topics)',
        PUBSUB_LiteTopic.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SCHEMA,
      new ResourceProperty(
        'A schema is a format that messages must follow, creating a contract between publisher and subscriber that Pub/Sub will enforce.   To get more information about Schema, see:  - [API documentation](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.schemas) - How-to Guides     - [Creating and managing schemas](https://cloud.google.com/pubsub/docs/schemas)',
        PUBSUB_Schema.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SCHEMAIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Schema. Each of these resources serves a different use case:',
        PUBSUB_SchemaIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SCHEMAIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Schema. Each of these resources serves a different use case:',
        PUBSUB_SchemaIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SCHEMAIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Schema. Each of these resources serves a different use case:',
        PUBSUB_SchemaIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTION,
      new ResourceProperty(
        'A named resource representing the stream of messages from a single, specific topic, to be delivered to the subscribing application.   To get more information about Subscription, see:  - [API documentation](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions) - How-to Guides     - [Managing Subscriptions](https://cloud.google.com/pubsub/docs/admin#managing_subscriptions)  > --Note:-- You can retrieve the email of the Google Managed Pub/Sub Service Account used for forwarding by using the `gcp.projects.ServiceIdentity` resource.',
        PUBSUB_Subscription.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for pubsub subscription. Each of these resources serves a different use case:',
        PUBSUB_SubscriptionIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for pubsub subscription. Each of these resources serves a different use case:',
        PUBSUB_SubscriptionIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for pubsub subscription. Each of these resources serves a different use case:',
        PUBSUB_SubscriptionIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_TOPIC,
      new ResourceProperty(
        'A named resource to which messages are sent by publishers.   To get more information about Topic, see:  - [API documentation](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics) - How-to Guides     - [Managing Topics](https://cloud.google.com/pubsub/docs/admin#managing_topics)  > --Note:-- You can retrieve the email of the Google Managed Pub/Sub Service Account used for forwarding by using the `gcp.projects.ServiceIdentity` resource.',
        PUBSUB_Topic.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_TOPICIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Topic. Each of these resources serves a different use case:',
        PUBSUB_TopicIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_TOPICIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Topic. Each of these resources serves a different use case:',
        PUBSUB_TopicIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.PUBSUB_TOPICIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Topic. Each of these resources serves a different use case:',
        PUBSUB_TopicIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.RECAPTCHA_ENTERPRISEKEY,
      new ResourceProperty(
        'The RecaptchaEnterprise Key resource',
        RECAPTCHA_EnterpriseKey.GetTypes(),
      ),
    ],
    [
      ResourceType.REDIS_CLUSTER,
      new ResourceProperty(
        'A Google Cloud Redis Cluster instance.   To get more information about Cluster, see:  - [API documentation](https://cloud.google.com/memorystore/docs/cluster/reference/rest/v1/projects.locations.clusters) - How-to Guides     - [Official Documentation](https://cloud.google.com/memorystore/docs/cluster/)',
        REDIS_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.REDIS_INSTANCE,
      new ResourceProperty(
        'A Google Cloud Redis instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/memorystore/docs/redis/)',
        REDIS_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.RESOURCEMANAGER_LIEN,
      new ResourceProperty(
        'A Lien represents an encumbrance on the actions that can be performed on a resource.',
        RESOURCEMANAGER_Lien.GetTypes(),
      ),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIG,
      new ResourceProperty('', RUNTIMECONFIG_Config.GetTypes()),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMBINDING,
      new ResourceProperty('', RUNTIMECONFIG_ConfigIamBinding.GetTypes()),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMMEMBER,
      new ResourceProperty('', RUNTIMECONFIG_ConfigIamMember.GetTypes()),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMPOLICY,
      new ResourceProperty('', RUNTIMECONFIG_ConfigIamPolicy.GetTypes()),
    ],
    [
      ResourceType.RUNTIMECONFIG_VARIABLE,
      new ResourceProperty('', RUNTIMECONFIG_Variable.GetTypes()),
    ],
    [
      ResourceType.SECRETMANAGER_SECRET,
      new ResourceProperty(
        'A Secret is a logical secret whose value and versions can be accessed.   To get more information about Secret, see:  - [API documentation](https://cloud.google.com/secret-manager/docs/reference/rest/v1/projects.secrets)',
        SECRETMANAGER_Secret.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Secret Manager Secret. Each of these resources serves a different use case:',
        SECRETMANAGER_SecretIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Secret Manager Secret. Each of these resources serves a different use case:',
        SECRETMANAGER_SecretIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Secret Manager Secret. Each of these resources serves a different use case:',
        SECRETMANAGER_SecretIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETVERSION,
      new ResourceProperty(
        'A secret version resource.',
        SECRETMANAGER_SecretVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCE,
      new ResourceProperty(
        'Instances are deployed to an available Google Cloud region and are accessible via their web interface.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/secure-source-manager/docs/create-instance)',
        SECURESOURCEMANAGER_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMBINDING,
      new ResourceProperty(
        '',
        SECURESOURCEMANAGER_InstanceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMMEMBER,
      new ResourceProperty(
        '',
        SECURESOURCEMANAGER_InstanceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMPOLICY,
      new ResourceProperty(
        '',
        SECURESOURCEMANAGER_InstanceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_EVENTTHREATDETECTIONCUSTOMMODULE,
      new ResourceProperty(
        'Represents an instance of an Event Threat Detection custom module, including its full module name, display name, enablement state, andlast updated time. You can create a custom module at the organization level only.   To get more information about EventThreatDetectionCustomModule, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.eventThreatDetectionSettings.customModules) - How-to Guides     - [Overview of custom modules for Event Threat Detection](https://cloud.google.com/security-command-center/docs/custom-modules-etd-overview)',
        SECURITYCENTER_EventThreatDetectionCustomModule.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_FOLDERCUSTOMMODULE,
      new ResourceProperty(
        'Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.   To get more information about FolderCustomModule, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/folders.securityHealthAnalyticsSettings.customModules) - How-to Guides     - [Overview of custom modules for Security Health Analytics](https://cloud.google.com/security-command-center/docs/custom-modules-sha-overview)',
        SECURITYCENTER_FolderCustomModule.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMBINDING,
      new ResourceProperty(
        'Represents a Data Fusion instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/data-fusion/docs/reference/rest/v1beta1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-fusion/docs/)',
        SECURITYCENTER_InstanceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMMEMBER,
      new ResourceProperty(
        'Represents a Data Fusion instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/data-fusion/docs/reference/rest/v1beta1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-fusion/docs/)',
        SECURITYCENTER_InstanceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMPOLICY,
      new ResourceProperty(
        'Represents a Data Fusion instance.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/data-fusion/docs/reference/rest/v1beta1/projects.locations.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/data-fusion/docs/)',
        SECURITYCENTER_InstanceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_MUTECONFIG,
      new ResourceProperty(
        'Mute Findings is a volume management feature in Security Command Center that lets you manually or programmatically hide irrelevant findings, and create filters to automatically silence existing and future findings based on criteria you specify.   To get more information about MuteConfig, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.muteConfigs)',
        SECURITYCENTER_MuteConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_NOTIFICATIONCONFIG,
      new ResourceProperty(
        'A Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc. > --Note:-- In order to use Cloud SCC resources, your organization must be enrolled in [SCC Standard/Premium](https://cloud.google.com/security-command-center/docs/quickstart-security-command-center). Without doing so, you may run into errors during resource creation.   To get more information about NotificationConfig, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.notificationConfigs) - How-to Guides     - [Official Documentation](https://cloud.google.com/security-command-center/docs)',
        SECURITYCENTER_NotificationConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_ORGANIZATIONCUSTOMMODULE,
      new ResourceProperty(
        'Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.   To get more information about OrganizationCustomModule, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.securityHealthAnalyticsSettings.customModules) - How-to Guides     - [Overview of custom modules for Security Health Analytics](https://cloud.google.com/security-command-center/docs/custom-modules-sha-overview)',
        SECURITYCENTER_OrganizationCustomModule.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_PROJECTCUSTOMMODULE,
      new ResourceProperty(
        'Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.   To get more information about ProjectCustomModule, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/projects.securityHealthAnalyticsSettings.customModules) - How-to Guides     - [Overview of custom modules for Security Health Analytics](https://cloud.google.com/security-command-center/docs/custom-modules-sha-overview)',
        SECURITYCENTER_ProjectCustomModule.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCE,
      new ResourceProperty(
        "A Cloud Security Command Center's (Cloud SCC) finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.   To get more information about Source, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.sources) - How-to Guides     - [Official Documentation](https://cloud.google.com/security-command-center/docs)",
        SECURITYCENTER_Source.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMBINDING,
      new ResourceProperty(
        "A Cloud Security Command Center's (Cloud SCC) finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.   To get more information about Source, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.sources) - How-to Guides     - [Official Documentation](https://cloud.google.com/security-command-center/docs)",
        SECURITYCENTER_SourceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMMEMBER,
      new ResourceProperty(
        "A Cloud Security Command Center's (Cloud SCC) finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.   To get more information about Source, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.sources) - How-to Guides     - [Official Documentation](https://cloud.google.com/security-command-center/docs)",
        SECURITYCENTER_SourceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMPOLICY,
      new ResourceProperty(
        "A Cloud Security Command Center's (Cloud SCC) finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.   To get more information about Source, see:  - [API documentation](https://cloud.google.com/security-command-center/docs/reference/rest/v1/organizations.sources) - How-to Guides     - [Official Documentation](https://cloud.google.com/security-command-center/docs)",
        SECURITYCENTER_SourceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYPOSTURE_POSTURE,
      new ResourceProperty(
        'A Posture represents a collection of policy set including its name, state, description and policy sets. A policy set includes set of policies along with their definition. A posture can be created at the organization level. Every update to a deployed posture creates a new posture revision with an updated revision_id.   To get more information about Posture, see:  - How-to Guides     - [Create and deploy a posture](https://cloud.google.com/security-command-center/docs/how-to-use-security-posture)',
        SECURITYPOSTURE_Posture.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYPOSTURE_POSTUREDEPLOYMENT,
      new ResourceProperty(
        "Represents a deployment of a security posture on a resource. A posture contains user curated policy sets. A posture can be deployed on a project or on a folder or on an organization. To deploy a posture we need to populate the posture's name and its revision_id in the posture deployment configuration. Every update to a deployed posture generates a new revision_id. Thus, the updated revision_id should be used in the respective posture deployment's configuration to deploy that posture on a resource.   To get more information about PostureDeployment, see:  - How-to Guides     - [Create and deploy a posture](https://cloud.google.com/security-command-center/docs/how-to-use-security-posture)",
        SECURITYPOSTURE_PostureDeployment.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEACCOUNT_ACCOUNT,
      new ResourceProperty(
        'Allows management of a Google Cloud service account.  - [API documentation](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts) - How-to Guides     - [Official Documentation](https://cloud.google.com/compute/docs/access/service-accounts)  > --Warning:--  If you delete and recreate a service account, you must reapply any IAM roles that it had before.  > Creation of service accounts is eventually consistent, and that can lead to errors when you try to apply ACLs to service accounts immediately after creation.',
        SERVICEACCOUNT_Account.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMBINDING,
      new ResourceProperty(
        'When managing IAM roles, you can treat a service account either as a resource or as an identity. This resource is to add iam policy bindings to a service account resource, such as allowing the members to run operations as or modify the service account. To configure permissions for a service account on other GCP resources, use the google_project_iam set of resources.  Three different resources help you manage your IAM policy for a service account. Each of these resources serves a different use case:  - `gcp.serviceaccount.IAMPolicy`: Authoritative. Sets the IAM policy for the service account and replaces any existing policy already attached. - `gcp.serviceaccount.IAMBinding`: Authoritative for a given role. Updates the IAM policy to grant a role to a list of members. Other roles within the IAM policy for the service account are preserved. - `gcp.serviceaccount.IAMMember`: Non-authoritative. Updates the IAM policy to grant a role to a new member. Other members for the role for the service account are preserved.  > --Note:-- `gcp.serviceaccount.IAMPolicy` --cannot-- be used in conjunction with `gcp.serviceaccount.IAMBinding` and `gcp.serviceaccount.IAMMember` or they will fight over what your policy should be.  > --Note:-- `gcp.serviceaccount.IAMBinding` resources --can be-- used in conjunction with `gcp.serviceaccount.IAMMember` resources --only if-- they do not grant privilege to the same role.',
        SERVICEACCOUNT_IAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMMEMBER,
      new ResourceProperty(
        'When managing IAM roles, you can treat a service account either as a resource or as an identity. This resource is to add iam policy bindings to a service account resource, such as allowing the members to run operations as or modify the service account. To configure permissions for a service account on other GCP resources, use the google_project_iam set of resources.  Three different resources help you manage your IAM policy for a service account. Each of these resources serves a different use case:  - `gcp.serviceaccount.IAMPolicy`: Authoritative. Sets the IAM policy for the service account and replaces any existing policy already attached. - `gcp.serviceaccount.IAMBinding`: Authoritative for a given role. Updates the IAM policy to grant a role to a list of members. Other roles within the IAM policy for the service account are preserved. - `gcp.serviceaccount.IAMMember`: Non-authoritative. Updates the IAM policy to grant a role to a new member. Other members for the role for the service account are preserved.  > --Note:-- `gcp.serviceaccount.IAMPolicy` --cannot-- be used in conjunction with `gcp.serviceaccount.IAMBinding` and `gcp.serviceaccount.IAMMember` or they will fight over what your policy should be.  > --Note:-- `gcp.serviceaccount.IAMBinding` resources --can be-- used in conjunction with `gcp.serviceaccount.IAMMember` resources --only if-- they do not grant privilege to the same role.',
        SERVICEACCOUNT_IAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMPOLICY,
      new ResourceProperty(
        'When managing IAM roles, you can treat a service account either as a resource or as an identity. This resource is to add iam policy bindings to a service account resource, such as allowing the members to run operations as or modify the service account. To configure permissions for a service account on other GCP resources, use the google_project_iam set of resources.  Three different resources help you manage your IAM policy for a service account. Each of these resources serves a different use case:  - `gcp.serviceaccount.IAMPolicy`: Authoritative. Sets the IAM policy for the service account and replaces any existing policy already attached. - `gcp.serviceaccount.IAMBinding`: Authoritative for a given role. Updates the IAM policy to grant a role to a list of members. Other roles within the IAM policy for the service account are preserved. - `gcp.serviceaccount.IAMMember`: Non-authoritative. Updates the IAM policy to grant a role to a new member. Other members for the role for the service account are preserved.  > --Note:-- `gcp.serviceaccount.IAMPolicy` --cannot-- be used in conjunction with `gcp.serviceaccount.IAMBinding` and `gcp.serviceaccount.IAMMember` or they will fight over what your policy should be.  > --Note:-- `gcp.serviceaccount.IAMBinding` resources --can be-- used in conjunction with `gcp.serviceaccount.IAMMember` resources --only if-- they do not grant privilege to the same role.',
        SERVICEACCOUNT_IAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEACCOUNT_KEY,
      new ResourceProperty('', SERVICEACCOUNT_Key.GetTypes()),
    ],
    [
      ResourceType.SERVICEDIRECTORY_ENDPOINT,
      new ResourceProperty(
        'An individual endpoint that provides a service.  To get more information about Endpoint, see:  - [API documentation](https://cloud.google.com/service-directory/docs/reference/rest/v1beta1/projects.locations.namespaces.services.endpoints) - How-to Guides     - [Configuring an endpoint](https://cloud.google.com/service-directory/docs/configuring-service-directory#configuring_an_endpoint)',
        SERVICEDIRECTORY_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACE,
      new ResourceProperty(
        'A container for `services`. Namespaces allow administrators to group services together and define permissions for a collection of services.  To get more information about Namespace, see:  - [API documentation](https://cloud.google.com/service-directory/docs/reference/rest/v1beta1/projects.locations.namespaces) - How-to Guides     - [Configuring a namespace](https://cloud.google.com/service-directory/docs/configuring-service-directory#configuring_a_namespace)',
        SERVICEDIRECTORY_Namespace.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Service Directory Namespace. Each of these resources serves a different use case:',
        SERVICEDIRECTORY_NamespaceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Service Directory Namespace. Each of these resources serves a different use case:',
        SERVICEDIRECTORY_NamespaceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Service Directory Namespace. Each of these resources serves a different use case:',
        SERVICEDIRECTORY_NamespaceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICE,
      new ResourceProperty(
        'An individual service. A service contains a name and optional metadata.  To get more information about Service, see:  - [API documentation](https://cloud.google.com/service-directory/docs/reference/rest/v1beta1/projects.locations.namespaces.services) - How-to Guides     - [Configuring a service](https://cloud.google.com/service-directory/docs/configuring-service-directory#configuring_a_service)',
        SERVICEDIRECTORY_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Service Directory Service. Each of these resources serves a different use case:',
        SERVICEDIRECTORY_ServiceIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Service Directory Service. Each of these resources serves a different use case:',
        SERVICEDIRECTORY_ServiceIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Service Directory Service. Each of these resources serves a different use case:',
        SERVICEDIRECTORY_ServiceIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICENETWORKING_CONNECTION,
      new ResourceProperty(
        'Manages a private VPC connection with a GCP service provider. For more information see [the official documentation](https://cloud.google.com/vpc/docs/configure-private-services-access#creating-connection) and [API](https://cloud.google.com/service-infrastructure/docs/service-networking/reference/rest/v1/services.connections).',
        SERVICENETWORKING_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICENETWORKING_PEEREDDNSDOMAIN,
      new ResourceProperty(
        'Allows management of a single peered DNS domain for an existing Google Cloud Platform project.  When using Google Cloud DNS to manage internal DNS, create peered DNS domains to make your DNS available to services like Google Cloud Build.',
        SERVICENETWORKING_PeeredDnsDomain.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEUSAGE_CONSUMERQUOTAOVERRIDE,
      new ResourceProperty(
        'A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.  To get more information about ConsumerQuotaOverride, see:  - How-to Guides     - [Managing Service Quota](https://cloud.google.com/service-usage/docs/manage-quota )     - [REST API documentation](https://cloud.google.com/service-usage/docs/reference/rest/v1beta1/services.consumerQuotaMetrics.limits.consumerOverrides)',
        SERVICEUSAGE_ConsumerQuotaOverride.GetTypes(),
      ),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORY,
      new ResourceProperty(
        'A repository (or repo) is a Git repository storing versioned source content.   To get more information about Repository, see:  - [API documentation](https://cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos) - How-to Guides     - [Official Documentation](https://cloud.google.com/source-repositories/)',
        SOURCEREPO_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Topic. Each of these resources serves a different use case:',
        SOURCEREPO_RepositoryIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Topic. Each of these resources serves a different use case:',
        SOURCEREPO_RepositoryIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Pub/Sub Topic. Each of these resources serves a different use case:',
        SOURCEREPO_RepositoryIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_DATABASE,
      new ResourceProperty(
        "A Cloud Spanner Database which is hosted on a Spanner instance.   To get more information about Database, see:  - [API documentation](https://cloud.google.com/spanner/docs/reference/rest/v1/projects.instances.databases) - How-to Guides     - [Official Documentation](https://cloud.google.com/spanner/)  > --Warning:-- On newer versions of the provider, you must explicitly set `deletion_protection=false` (and run `pulumi up` to write the field to state) in order to destroy an instance. It is recommended to not set this field (or set it to true) until you're ready to destroy. On older versions, it is strongly recommended to set `lifecycle { prevent_destroy = true }` on databases in order to prevent accidental data loss.",
        SPANNER_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for a Spanner database. Each of these resources serves a different use case:',
        SPANNER_DatabaseIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for a Spanner database. Each of these resources serves a different use case:',
        SPANNER_DatabaseIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for a Spanner database. Each of these resources serves a different use case:',
        SPANNER_DatabaseIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_INSTANCE,
      new ResourceProperty(
        'An isolated set of Cloud Spanner resources on which databases can be hosted.   To get more information about Instance, see:  - [API documentation](https://cloud.google.com/spanner/docs/reference/rest/v1/projects.instances) - How-to Guides     - [Official Documentation](https://cloud.google.com/spanner/)',
        SPANNER_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for a Spanner instance. Each of these resources serves a different use case:',
        SPANNER_InstanceIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for a Spanner instance. Each of these resources serves a different use case:',
        SPANNER_InstanceIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for a Spanner instance. Each of these resources serves a different use case:',
        SPANNER_InstanceIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SQL_DATABASE,
      new ResourceProperty(
        "Represents a SQL database inside the Cloud SQL instance, hosted in Google's cloud.",
        SQL_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.SQL_DATABASEINSTANCE,
      new ResourceProperty(
        "Creates a new Google SQL Database Instance. For more information, see the [official documentation](https://cloud.google.com/sql/), or the [JSON API](https://cloud.google.com/sql/docs/admin-api/v1beta4/instances).  > --NOTE on `gcp.sql.DatabaseInstance`:-- - Second-generation instances include a default 'root'@'%!'(MISSING) user with no password. This user will be deleted by the provider on instance creation. You should use `gcp.sql.User` to define a custom user with a restricted host and strong password.  > --Note--: On newer versions of the provider, you must explicitly set `deletion_protection=false` (and run `pulumi update` to write the field to state) in order to destroy an instance. It is recommended to not set this field (or set it to true) until you're ready to destroy the instance and its databases.",
        SQL_DatabaseInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.SQL_SOURCEREPRESENTATIONINSTANCE,
      new ResourceProperty(
        'A source representation instance is a Cloud SQL instance that represents the source database server to the Cloud SQL replica. It is visible in the Cloud Console and appears the same as a regular Cloud SQL instance, but it contains no data, requires no configuration or maintenance, and does not affect billing. You cannot update the source representation instance.',
        SQL_SourceRepresentationInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.SQL_SSLCERT,
      new ResourceProperty(
        'Creates a new Google SQL SSL Cert on a Google SQL Instance. For more information, see the [official documentation](https://cloud.google.com/sql/), or the [JSON API](https://cloud.google.com/sql/docs/mysql/admin-api/v1beta4/sslCerts).',
        SQL_SslCert.GetTypes(),
      ),
    ],
    [
      ResourceType.SQL_USER,
      new ResourceProperty(
        'Creates a new Google SQL User on a Google SQL User Instance. For more information, see the [official documentation](https://cloud.google.com/sql/), or the [JSON API](https://cloud.google.com/sql/docs/admin-api/v1beta4/users).',
        SQL_User.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKET,
      new ResourceProperty(
        "Creates a new bucket in Google cloud storage service (GCS). Once a bucket has been created, its location can't be changed.  For more information see [the official documentation](https://cloud.google.com/storage/docs/overview) and [API](https://cloud.google.com/storage/docs/json_api/v1/buckets).  --Note--: If the project id is not set on the resource or in the provider block it will be dynamically determined which will require enabling the compute api.",
        STORAGE_Bucket.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKETACCESSCONTROL,
      new ResourceProperty(
        "Bucket ACLs can be managed authoritatively using the `storage_bucket_acl` resource. Do not use these two resources in conjunction to manage the same bucket.  The BucketAccessControls resource manages the Access Control List (ACLs) for a single entity/role pairing on a bucket. ACLs let you specify who has access to your data and to what extent.  There are three roles that can be assigned to an entity:  READERs can get the bucket, though no acl property will be returned, and list the bucket's objects.  WRITERs are READERs, and they can insert objects into the bucket and delete the bucket's objects.  OWNERs are WRITERs, and they can get the acl property of a bucket, update a bucket, and call all BucketAccessControls methods on the bucket.  For more information, see Access Control, with the caveat that this API uses READER, WRITER, and OWNER instead of READ, WRITE, and FULL_CONTROL.   To get more information about BucketAccessControl, see:  - [API documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls) - How-to Guides     - [Official Documentation](https://cloud.google.com/storage/docs/access-control/lists)",
        STORAGE_BucketAccessControl.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKETACL,
      new ResourceProperty(
        "Authoritatively manages a bucket's ACLs in Google cloud storage service (GCS). For more information see [the official documentation](https://cloud.google.com/storage/docs/access-control/lists) and [API](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls).  Bucket ACLs can be managed non authoritatively using the `storage_bucket_access_control` resource. Do not use these two resources in conjunction to manage the same bucket.  Permissions can be granted either by ACLs or Cloud IAM policies. In general, permissions granted by Cloud IAM policies do not appear in ACLs, and permissions granted by ACLs do not appear in Cloud IAM policies. The only exception is for ACLs applied directly on a bucket and certain bucket-level Cloud IAM policies, as described in [Cloud IAM relation to ACLs](https://cloud.google.com/storage/docs/access-control/iam#acls).  --NOTE-- This resource will not remove the `project-owners-<project_id>` entity from the `OWNER` role.",
        STORAGE_BucketACL.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKETIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Storage Bucket. Each of these resources serves a different use case:',
        STORAGE_BucketIAMBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKETIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Storage Bucket. Each of these resources serves a different use case:',
        STORAGE_BucketIAMMember.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKETIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Cloud Storage Bucket. Each of these resources serves a different use case:',
        STORAGE_BucketIAMPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_BUCKETOBJECT,
      new ResourceProperty(
        'Creates a new object inside an existing bucket in Google cloud storage service (GCS).  [ACLs](https://cloud.google.com/storage/docs/access-control/lists) can be applied using the `gcp.storage.ObjectACL` resource.  For more information see  [the official documentation](https://cloud.google.com/storage/docs/key-terms#objects)  and  [API](https://cloud.google.com/storage/docs/json_api/v1/objects).',
        STORAGE_BucketObject.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACCESSCONTROL,
      new ResourceProperty(
        'The DefaultObjectAccessControls resources represent the Access Control Lists (ACLs) applied to a new object within a Google Cloud Storage bucket when no ACL was provided for that object. ACLs let you specify who has access to your bucket contents and to what extent.  There are two roles that can be assigned to an entity:  READERs can get an object, though the acl property will not be revealed. OWNERs are READERs, and they can get the acl property, update an object, and call all objectAccessControls methods on the object. The owner of an object is always an OWNER. For more information, see Access Control, with the caveat that this API uses READER and OWNER instead of READ and FULL_CONTROL.   To get more information about DefaultObjectAccessControl, see:  - [API documentation](https://cloud.google.com/storage/docs/json_api/v1/defaultObjectAccessControls) - How-to Guides     - [Official Documentation](https://cloud.google.com/storage/docs/access-control/create-manage-lists)',
        STORAGE_DefaultObjectAccessControl.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACL,
      new ResourceProperty(
        'Authoritatively manages the default object ACLs for a Google Cloud Storage bucket without managing the bucket itself.  > Note that for each object, its creator will have the `"OWNER"` role in addition to the default ACL that has been defined.  For more information see [the official documentation](https://cloud.google.com/storage/docs/access-control/lists)  and  [API](https://cloud.google.com/storage/docs/json_api/v1/defaultObjectAccessControls).  > Want fine-grained control over default object ACLs? Use `gcp.storage.DefaultObjectAccessControl` to control individual role entity pairs.',
        STORAGE_DefaultObjectACL.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_HMACKEY,
      new ResourceProperty(
        'The hmacKeys resource represents an HMAC key within Cloud Storage. The resource consists of a secret and HMAC key metadata. HMAC keys can be used as credentials for service accounts.   To get more information about HmacKey, see:  - [API documentation](https://cloud.google.com/storage/docs/json_api/v1/projects/hmacKeys) - How-to Guides     - [Official Documentation](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)',
        STORAGE_HmacKey.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_INSIGHTSREPORTCONFIG,
      new ResourceProperty(
        'Represents an inventory report configuration.   To get more information about ReportConfig, see:  - [API documentation](https://cloud.google.com/storage/docs/json_api/v1/reportConfig) - How-to Guides     - [Official Documentation](https://cloud.google.com/storage/docs/insights/using-storage-insights)',
        STORAGE_InsightsReportConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_NOTIFICATION,
      new ResourceProperty(
        'Creates a new notification configuration on a specified bucket, establishing a flow of event notifications from GCS to a Cloud Pub/Sub topic.  For more information see [the official documentation](https://cloud.google.com/storage/docs/pubsub-notifications) and [API](https://cloud.google.com/storage/docs/json_api/v1/notifications).  In order to enable notifications, a special Google Cloud Storage service account unique to the project must exist and have the IAM permission "projects.topics.publish" for a Cloud Pub/Sub topic in the project. This service account is not created automatically when a project is created. To ensure the service account exists and obtain its email address for use in granting the correct IAM permission, use the [`gcp.storage.getProjectServiceAccount`](https://www.terraform.io/docs/providers/google/d/storage_project_service_account.html) datasource\'s `email_address` value, and see below for an example of enabling notifications by granting the correct IAM permission. See [the notifications documentation](https://cloud.google.com/storage/docs/gsutil/commands/notification) for more details.  >--NOTE--: This resource can affect your storage IAM policy. If you are using this in the same config as your storage IAM policy resources, consider making this resource dependent on those IAM resources via `depends_on`. This will safeguard against errors due to IAM race conditions.',
        STORAGE_Notification.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_OBJECTACCESSCONTROL,
      new ResourceProperty(
        'The ObjectAccessControls resources represent the Access Control Lists (ACLs) for objects within Google Cloud Storage. ACLs let you specify who has access to your data and to what extent.  There are two roles that can be assigned to an entity:  READERs can get an object, though the acl property will not be revealed. OWNERs are READERs, and they can get the acl property, update an object, and call all objectAccessControls methods on the object. The owner of an object is always an OWNER. For more information, see Access Control, with the caveat that this API uses READER and OWNER instead of READ and FULL_CONTROL.   To get more information about ObjectAccessControl, see:  - [API documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) - How-to Guides     - [Official Documentation](https://cloud.google.com/storage/docs/access-control/create-manage-lists)',
        STORAGE_ObjectAccessControl.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_OBJECTACL,
      new ResourceProperty(
        'Authoritatively manages the access control list (ACL) for an object in a Google Cloud Storage (GCS) bucket. Removing a `gcp.storage.ObjectACL` sets the acl to the `private` [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl).  For more information see [the official documentation](https://cloud.google.com/storage/docs/access-control/lists)  and  [API](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls).  > Want fine-grained control over object ACLs? Use `gcp.storage.ObjectAccessControl` to control individual role entity pairs.',
        STORAGE_ObjectACL.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_TRANSFERAGENTPOOL,
      new ResourceProperty(
        'Represents an On-Premises Agent pool.   To get more information about AgentPool, see:  - [API documentation](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools) - How-to Guides     - [Official Documentation](https://cloud.google.com/storage-transfer/docs/on-prem-agent-pools)',
        STORAGE_TransferAgentPool.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGE_TRANSFERJOB,
      new ResourceProperty(
        'Creates a new Transfer Job in Google Cloud Storage Transfer.  To get more information about Google Cloud Storage Transfer, see:  - [Overview](https://cloud.google.com/storage-transfer/docs/overview) - [API documentation](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs) - How-to Guides     - [Configuring Access to Data Sources and Sinks](https://cloud.google.com/storage-transfer/docs/configure-access)',
        STORAGE_TransferJob.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_LOCATIONTAGBINDING,
      new ResourceProperty(
        'A LocationTagBinding represents a connection between a TagValue and a non-global target such as a Cloud Run Service or Compute Instance. Once a LocationTagBinding is created, the TagValue is applied to all the descendants of the cloud resource.  To get more information about LocationTagBinding, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v3/tagBindings) - How-to Guides     - [Official Documentation](https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)',
        TAGS_LocationTagBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGBINDING,
      new ResourceProperty(
        'A TagBinding represents a connection between a TagValue and a cloud resource (currently project, folder, or organization). Once a TagBinding is created, the TagValue is applied to all the descendants of the cloud resource.   To get more information about TagBinding, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v3/tagBindings) - How-to Guides     - [Official Documentation](https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)',
        TAGS_TagBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGKEY,
      new ResourceProperty(
        'A TagKey, used to group a set of TagValues.   To get more information about TagKey, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys) - How-to Guides     - [Official Documentation](https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)',
        TAGS_TagKey.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGKEYIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Tags TagKey. Each of these resources serves a different use case:',
        TAGS_TagKeyIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGKEYIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Tags TagKey. Each of these resources serves a different use case:',
        TAGS_TagKeyIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGKEYIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Tags TagKey. Each of these resources serves a different use case:',
        TAGS_TagKeyIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGVALUE,
      new ResourceProperty(
        'A TagValue is a child of a particular TagKey. TagValues are used to group cloud resources for the purpose of controlling them using policies.   To get more information about TagValue, see:  - [API documentation](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues) - How-to Guides     - [Official Documentation](https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)',
        TAGS_TagValue.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGVALUEIAMBINDING,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Tags TagValue. Each of these resources serves a different use case:',
        TAGS_TagValueIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGVALUEIAMMEMBER,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Tags TagValue. Each of these resources serves a different use case:',
        TAGS_TagValueIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.TAGS_TAGVALUEIAMPOLICY,
      new ResourceProperty(
        'Three different resources help you manage your IAM policy for Tags TagValue. Each of these resources serves a different use case:',
        TAGS_TagValueIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.TPU_NODE,
      new ResourceProperty(
        'A Cloud TPU instance.   To get more information about Node, see:  - [API documentation](https://cloud.google.com/tpu/docs/reference/rest/v1/projects.locations.nodes) - How-to Guides     - [Official Documentation](https://cloud.google.com/tpu/docs/)',
        TPU_Node.GetTypes(),
      ),
    ],
    [ResourceType.TPU_V2VM, new ResourceProperty('', TPU_V2Vm.GetTypes())],
    [
      ResourceType.VERTEX_AIDATASET,
      new ResourceProperty(
        'A collection of DataItems and Annotations on them.   To get more information about Dataset, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.datasets) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiDataset.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIENDPOINT,
      new ResourceProperty(
        'Models are deployed into it, and afterwards Endpoint is called to obtain predictions and explanations.   To get more information about Endpoint, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.endpoints) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMBINDING,
      new ResourceProperty('', VERTEX_AiEndpointIamBinding.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMMEMBER,
      new ResourceProperty('', VERTEX_AiEndpointIamMember.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMPOLICY,
      new ResourceProperty('', VERTEX_AiEndpointIamPolicy.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AIFEATUREGROUP,
      new ResourceProperty(
        'Vertex AI Feature Group.   To get more information about FeatureGroup, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featureGroups) - How-to Guides     - [Creating a Feature Group](https://cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup)',
        VERTEX_AiFeatureGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATUREGROUPFEATURE,
      new ResourceProperty(
        'Vertex AI Feature Group Feature is feature metadata information.   To get more information about FeatureGroupFeature, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureGroups.features) - How-to Guides     - [Creating a Feature](https://cloud.google.com/vertex-ai/docs/featurestore/latest/create-feature)',
        VERTEX_AiFeatureGroupFeature.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTORE,
      new ResourceProperty(
        'Vertex AI Feature Online Store provides a centralized repository for serving ML features and embedding indexes at low latency. The Feature Online Store is a top-level container.   To get more information about FeatureOnlineStore, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featureOnlineStores) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiFeatureOnlineStore.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTOREFEATUREVIEW,
      new ResourceProperty(
        'FeatureView is representation of values that the FeatureOnlineStore will serve based on its syncConfig.   To get more information about FeatureOnlineStoreFeatureview, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featureOnlineStores.featureViews) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiFeatureOnlineStoreFeatureview.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTORE,
      new ResourceProperty(
        'A collection of DataItems and Annotations on them.   To get more information about Featurestore, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiFeatureStore.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPE,
      new ResourceProperty(
        'An entity type is a type of object in a system that needs to be modeled and have stored information about. For example, driver is an entity type, and driver0 is an instance of an entity type driver.   To get more information about FeaturestoreEntitytype, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiFeatureStoreEntityType.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEFEATURE,
      new ResourceProperty(
        'Feature Metadata information that describes an attribute of an entity type. For example, apple is an entity type, and color is a feature that describes apple.   To get more information about FeaturestoreEntitytypeFeature, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)',
        VERTEX_AiFeatureStoreEntityTypeFeature.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMBINDING,
      new ResourceProperty(
        '',
        VERTEX_AiFeatureStoreEntityTypeIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMMEMBER,
      new ResourceProperty(
        '',
        VERTEX_AiFeatureStoreEntityTypeIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMPOLICY,
      new ResourceProperty(
        '',
        VERTEX_AiFeatureStoreEntityTypeIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMBINDING,
      new ResourceProperty('', VERTEX_AiFeatureStoreIamBinding.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMMEMBER,
      new ResourceProperty('', VERTEX_AiFeatureStoreIamMember.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMPOLICY,
      new ResourceProperty('', VERTEX_AiFeatureStoreIamPolicy.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AIINDEX,
      new ResourceProperty(
        'A representation of a collection of database items organized in a way that allows for approximate nearest neighbor (a.k.a ANN) algorithms search.   To get more information about Index, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexes/)',
        VERTEX_AiIndex.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIINDEXENDPOINT,
      new ResourceProperty(
        'An endpoint indexes are deployed into. An index endpoint can have multiple deployed indexes.   To get more information about IndexEndpoint, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints/)',
        VERTEX_AiIndexEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.VERTEX_AIMETADATASTORE,
      new ResourceProperty('', VERTEX_AiMetadataStore.GetTypes()),
    ],
    [
      ResourceType.VERTEX_AITENSORBOARD,
      new ResourceProperty(
        "Tensorboard is a physical database that stores users' training metrics. A default Tensorboard is provided in each region of a GCP project. If needed users can also create extra Tensorboards in their projects.   To get more information about Tensorboard, see:  - [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.tensorboards) - How-to Guides     - [Official Documentation](https://cloud.google.com/vertex-ai/docs)",
        VERTEX_AiTensorboard.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_CLUSTER,
      new ResourceProperty(
        'A cluster in a private cloud.   To get more information about Cluster, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.privateClouds.clusters)',
        VMWAREENGINE_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_EXTERNALACCESSRULE,
      new ResourceProperty(
        'External access firewall rules for filtering incoming traffic destined to `ExternalAddress` resources.   To get more information about ExternalAccessRule, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.networkPolicies.externalAccessRules)',
        VMWAREENGINE_ExternalAccessRule.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_EXTERNALADDRESS,
      new ResourceProperty(
        'An allocated external IP address and its corresponding internal IP address in a private cloud.   To get more information about ExternalAddress, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.privateClouds.externalAddresses)',
        VMWAREENGINE_ExternalAddress.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORK,
      new ResourceProperty(
        'Provides connectivity for VMware Engine private clouds.   To get more information about Network, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.vmwareEngineNetworks)',
        VMWAREENGINE_Network.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORKPEERING,
      new ResourceProperty(
        'Represents a network peering resource. Network peerings are global resources.   To get more information about NetworkPeering, see:  - [API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/networks/addPeering)',
        VMWAREENGINE_NetworkPeering.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORKPOLICY,
      new ResourceProperty(
        'Represents a network policy resource. Network policies are regional resources.   To get more information about NetworkPolicy, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.networkPolicies)',
        VMWAREENGINE_NetworkPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_PRIVATECLOUD,
      new ResourceProperty(
        'Represents a private cloud resource. Private clouds are zonal resources.   To get more information about PrivateCloud, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.privateClouds)',
        VMWAREENGINE_PrivateCloud.GetTypes(),
      ),
    ],
    [
      ResourceType.VMWAREENGINE_SUBNET,
      new ResourceProperty(
        'Subnet in a private cloud. A Private Cloud contains two types of subnets: `management` subnets (such as vMotion) that are read-only,and `userDefined`, which can also be updated. This resource should be used to read and update `userDefined` subnets. To read `management` subnets, please utilize the subnet data source.   To get more information about Subnet, see:  - [API documentation](https://cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.privateClouds.subnets)',
        VMWAREENGINE_Subnet.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCACCESS_CONNECTOR,
      new ResourceProperty(
        'Serverless VPC Access connector resource.   To get more information about Connector, see:  - [API documentation](https://cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors) - How-to Guides     - [Configuring Serverless VPC Access](https://cloud.google.com/vpc/docs/configure-serverless-vpc-access)',
        VPCACCESS_Connector.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKBENCH_INSTANCE,
      new ResourceProperty(
        'A Workbench instance.',
        WORKBENCH_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMBINDING,
      new ResourceProperty('', WORKBENCH_InstanceIamBinding.GetTypes()),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMMEMBER,
      new ResourceProperty('', WORKBENCH_InstanceIamMember.GetTypes()),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMPOLICY,
      new ResourceProperty('', WORKBENCH_InstanceIamPolicy.GetTypes()),
    ],
    [
      ResourceType.WORKFLOWS_WORKFLOW,
      new ResourceProperty(
        'Workflow program to be executed by Workflows.   To get more information about Workflow, see:  - [API documentation](https://cloud.google.com/workflows/docs/reference/rest/v1/projects.locations.workflows) - How-to Guides     - [Managing Workflows](https://cloud.google.com/workflows/docs/creating-updating-workflow)',
        WORKFLOWS_Workflow.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATION,
      new ResourceProperty('', WORKSTATIONS_Workstation.GetTypes()),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCLUSTER,
      new ResourceProperty('', WORKSTATIONS_WorkstationCluster.GetTypes()),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIG,
      new ResourceProperty('', WORKSTATIONS_WorkstationConfig.GetTypes()),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMBINDING,
      new ResourceProperty(
        '',
        WORKSTATIONS_WorkstationConfigIamBinding.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMMEMBER,
      new ResourceProperty(
        '',
        WORKSTATIONS_WorkstationConfigIamMember.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMPOLICY,
      new ResourceProperty(
        '',
        WORKSTATIONS_WorkstationConfigIamPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMBINDING,
      new ResourceProperty('', WORKSTATIONS_WorkstationIamBinding.GetTypes()),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMMEMBER,
      new ResourceProperty('', WORKSTATIONS_WorkstationIamMember.GetTypes()),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMPOLICY,
      new ResourceProperty('', WORKSTATIONS_WorkstationIamPolicy.GetTypes()),
    ],
  ]);
}
