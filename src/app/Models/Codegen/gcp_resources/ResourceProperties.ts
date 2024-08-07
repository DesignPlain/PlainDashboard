import { GCP_ResourceType as ResourceType } from './ResourceType';
import { Resource } from 'src/app/Models/CloudResource';
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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

export class GCP_ResourceProperties {
  static readonly ResourceFactoryMap = new Map<ResourceType, () => Resource>([
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
  public static GetResourceObject(resType: ResourceType): Resource {
    return (this.ResourceFactoryMap.get(resType) as () => Resource)();
  }
  public static propertiesMap: Map<ResourceType, DynamicUIProps[]> = new Map([
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVEL,
      ACCESSCONTEXTMANAGER_AccessLevel.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELCONDITION,
      ACCESSCONTEXTMANAGER_AccessLevelCondition.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELS,
      ACCESSCONTEXTMANAGER_AccessLevels.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICY,
      ACCESSCONTEXTMANAGER_AccessPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMBINDING,
      ACCESSCONTEXTMANAGER_AccessPolicyIamBinding.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMMEMBER,
      ACCESSCONTEXTMANAGER_AccessPolicyIamMember.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMPOLICY,
      ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_AUTHORIZEDORGSDESC,
      ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_EGRESSPOLICY,
      ACCESSCONTEXTMANAGER_EgressPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_GCPUSERACCESSBINDING,
      ACCESSCONTEXTMANAGER_GcpUserAccessBinding.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_INGRESSPOLICY,
      ACCESSCONTEXTMANAGER_IngressPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETER,
      ACCESSCONTEXTMANAGER_ServicePerimeter.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETEREGRESSPOLICY,
      ACCESSCONTEXTMANAGER_ServicePerimeterEgressPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERINGRESSPOLICY,
      ACCESSCONTEXTMANAGER_ServicePerimeterIngressPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERRESOURCE,
      ACCESSCONTEXTMANAGER_ServicePerimeterResource.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERS,
      ACCESSCONTEXTMANAGER_ServicePerimeters.GetTypes(),
    ],
    [ResourceType.ACTIVEDIRECTORY_DOMAIN, ACTIVEDIRECTORY_Domain.GetTypes()],
    [
      ResourceType.ACTIVEDIRECTORY_DOMAINTRUST,
      ACTIVEDIRECTORY_DomainTrust.GetTypes(),
    ],
    [ResourceType.ACTIVEDIRECTORY_PEERING, ACTIVEDIRECTORY_Peering.GetTypes()],
    [ResourceType.ALLOYDB_BACKUP, ALLOYDB_Backup.GetTypes()],
    [ResourceType.ALLOYDB_CLUSTER, ALLOYDB_Cluster.GetTypes()],
    [ResourceType.ALLOYDB_INSTANCE, ALLOYDB_Instance.GetTypes()],
    [ResourceType.ALLOYDB_USER, ALLOYDB_User.GetTypes()],
    [ResourceType.APIGATEWAY_API, APIGATEWAY_Api.GetTypes()],
    [ResourceType.APIGATEWAY_APICONFIG, APIGATEWAY_ApiConfig.GetTypes()],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMBINDING,
      APIGATEWAY_ApiConfigIamBinding.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMMEMBER,
      APIGATEWAY_ApiConfigIamMember.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMPOLICY,
      APIGATEWAY_ApiConfigIamPolicy.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMBINDING,
      APIGATEWAY_ApiIamBinding.GetTypes(),
    ],
    [ResourceType.APIGATEWAY_APIIAMMEMBER, APIGATEWAY_ApiIamMember.GetTypes()],
    [ResourceType.APIGATEWAY_APIIAMPOLICY, APIGATEWAY_ApiIamPolicy.GetTypes()],
    [ResourceType.APIGATEWAY_GATEWAY, APIGATEWAY_Gateway.GetTypes()],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMBINDING,
      APIGATEWAY_GatewayIamBinding.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMMEMBER,
      APIGATEWAY_GatewayIamMember.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMPOLICY,
      APIGATEWAY_GatewayIamPolicy.GetTypes(),
    ],
    [ResourceType.APIGEE_ADDONSCONFIG, APIGEE_AddonsConfig.GetTypes()],
    [
      ResourceType.APIGEE_ENDPOINTATTACHMENT,
      APIGEE_EndpointAttachment.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVGROUP, APIGEE_EnvGroup.GetTypes()],
    [
      ResourceType.APIGEE_ENVGROUPATTACHMENT,
      APIGEE_EnvGroupAttachment.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVIRONMENT, APIGEE_Environment.GetTypes()],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMBINDING,
      APIGEE_EnvironmentIamBinding.GetTypes(),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMMEMBER,
      APIGEE_EnvironmentIamMember.GetTypes(),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMPOLICY,
      APIGEE_EnvironmentIamPolicy.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVKEYSTORE, APIGEE_EnvKeystore.GetTypes()],
    [ResourceType.APIGEE_ENVREFERENCES, APIGEE_EnvReferences.GetTypes()],
    [ResourceType.APIGEE_FLOWHOOK, APIGEE_Flowhook.GetTypes()],
    [ResourceType.APIGEE_INSTANCE, APIGEE_Instance.GetTypes()],
    [
      ResourceType.APIGEE_INSTANCEATTACHMENT,
      APIGEE_InstanceAttachment.GetTypes(),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESKEYCERTFILE,
      APIGEE_KeystoresAliasesKeyCertFile.GetTypes(),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESPKCS12,
      APIGEE_KeystoresAliasesPkcs12.GetTypes(),
    ],
    [
      ResourceType.APIGEE_KEYSTORESALIASESSELFSIGNEDCERT,
      APIGEE_KeystoresAliasesSelfSignedCert.GetTypes(),
    ],
    [ResourceType.APIGEE_NATADDRESS, APIGEE_NatAddress.GetTypes()],
    [ResourceType.APIGEE_ORGANIZATION, APIGEE_Organization.GetTypes()],
    [ResourceType.APIGEE_SHAREDFLOW, APIGEE_Sharedflow.GetTypes()],
    [
      ResourceType.APIGEE_SHAREDFLOWDEPLOYMENT,
      APIGEE_SharedflowDeployment.GetTypes(),
    ],
    [
      ResourceType.APIGEE_SYNCAUTHORIZATION,
      APIGEE_SyncAuthorization.GetTypes(),
    ],
    [ResourceType.APIGEE_TARGETSERVER, APIGEE_TargetServer.GetTypes()],
    [ResourceType.APPENGINE_APPLICATION, APPENGINE_Application.GetTypes()],
    [
      ResourceType.APPENGINE_APPLICATIONURLDISPATCHRULES,
      APPENGINE_ApplicationUrlDispatchRules.GetTypes(),
    ],
    [ResourceType.APPENGINE_DOMAINMAPPING, APPENGINE_DomainMapping.GetTypes()],
    [
      ResourceType.APPENGINE_ENGINESPLITTRAFFIC,
      APPENGINE_EngineSplitTraffic.GetTypes(),
    ],
    [ResourceType.APPENGINE_FIREWALLRULE, APPENGINE_FirewallRule.GetTypes()],
    [
      ResourceType.APPENGINE_FLEXIBLEAPPVERSION,
      APPENGINE_FlexibleAppVersion.GetTypes(),
    ],
    [
      ResourceType.APPENGINE_SERVICENETWORKSETTINGS,
      APPENGINE_ServiceNetworkSettings.GetTypes(),
    ],
    [
      ResourceType.APPENGINE_STANDARDAPPVERSION,
      APPENGINE_StandardAppVersion.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORY,
      ARTIFACTREGISTRY_Repository.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMBINDING,
      ARTIFACTREGISTRY_RepositoryIamBinding.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMMEMBER,
      ARTIFACTREGISTRY_RepositoryIamMember.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMPOLICY,
      ARTIFACTREGISTRY_RepositoryIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_VPCSCCONFIG,
      ARTIFACTREGISTRY_VpcscConfig.GetTypes(),
    ],
    [
      ResourceType.ASSUREDWORKLOADS_WORKLOAD,
      ASSUREDWORKLOADS_Workload.GetTypes(),
    ],
    [
      ResourceType.BACKUPDISASTERRECOVERY_MANAGEMENTSERVER,
      BACKUPDISASTERRECOVERY_ManagementServer.GetTypes(),
    ],
    [
      ResourceType.BEYONDCORP_APPCONNECTION,
      BEYONDCORP_AppConnection.GetTypes(),
    ],
    [ResourceType.BEYONDCORP_APPCONNECTOR, BEYONDCORP_AppConnector.GetTypes()],
    [ResourceType.BEYONDCORP_APPGATEWAY, BEYONDCORP_AppGateway.GetTypes()],
    [ResourceType.BIGLAKE_CATALOG, BIGLAKE_Catalog.GetTypes()],
    [ResourceType.BIGLAKE_DATABASE, BIGLAKE_Database.GetTypes()],
    [ResourceType.BIGLAKE_TABLE, BIGLAKE_Table.GetTypes()],
    [ResourceType.BIGQUERY_APPPROFILE, BIGQUERY_AppProfile.GetTypes()],
    [ResourceType.BIGQUERY_BIRESERVATION, BIGQUERY_BiReservation.GetTypes()],
    [
      ResourceType.BIGQUERY_CAPACITYCOMMITMENT,
      BIGQUERY_CapacityCommitment.GetTypes(),
    ],
    [ResourceType.BIGQUERY_CONNECTION, BIGQUERY_Connection.GetTypes()],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMBINDING,
      BIGQUERY_ConnectionIamBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMMEMBER,
      BIGQUERY_ConnectionIamMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMPOLICY,
      BIGQUERY_ConnectionIamPolicy.GetTypes(),
    ],
    [ResourceType.BIGQUERY_DATASET, BIGQUERY_Dataset.GetTypes()],
    [ResourceType.BIGQUERY_DATASETACCESS, BIGQUERY_DatasetAccess.GetTypes()],
    [
      ResourceType.BIGQUERY_DATASETIAMBINDING,
      BIGQUERY_DatasetIamBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMMEMBER,
      BIGQUERY_DatasetIamMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_DATASETIAMPOLICY,
      BIGQUERY_DatasetIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_DATATRANSFERCONFIG,
      BIGQUERY_DataTransferConfig.GetTypes(),
    ],
    [ResourceType.BIGQUERY_IAMBINDING, BIGQUERY_IamBinding.GetTypes()],
    [ResourceType.BIGQUERY_IAMMEMBER, BIGQUERY_IamMember.GetTypes()],
    [ResourceType.BIGQUERY_IAMPOLICY, BIGQUERY_IamPolicy.GetTypes()],
    [ResourceType.BIGQUERY_JOB, BIGQUERY_Job.GetTypes()],
    [ResourceType.BIGQUERY_RESERVATION, BIGQUERY_Reservation.GetTypes()],
    [
      ResourceType.BIGQUERY_RESERVATIONASSIGNMENT,
      BIGQUERY_ReservationAssignment.GetTypes(),
    ],
    [ResourceType.BIGQUERY_ROUTINE, BIGQUERY_Routine.GetTypes()],
    [ResourceType.BIGQUERY_TABLE, BIGQUERY_Table.GetTypes()],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGE,
      BIGQUERYANALYTICSHUB_DataExchange.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMBINDING,
      BIGQUERYANALYTICSHUB_DataExchangeIamBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMMEMBER,
      BIGQUERYANALYTICSHUB_DataExchangeIamMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMPOLICY,
      BIGQUERYANALYTICSHUB_DataExchangeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTING,
      BIGQUERYANALYTICSHUB_Listing.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMBINDING,
      BIGQUERYANALYTICSHUB_ListingIamBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMMEMBER,
      BIGQUERYANALYTICSHUB_ListingIamMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMPOLICY,
      BIGQUERYANALYTICSHUB_ListingIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICY,
      BIGQUERYDATAPOLICY_DataPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMBINDING,
      BIGQUERYDATAPOLICY_DataPolicyIamBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMMEMBER,
      BIGQUERYDATAPOLICY_DataPolicyIamMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMPOLICY,
      BIGQUERYDATAPOLICY_DataPolicyIamPolicy.GetTypes(),
    ],
    [ResourceType.BIGTABLE_GCPOLICY, BIGTABLE_GCPolicy.GetTypes()],
    [ResourceType.BIGTABLE_INSTANCE, BIGTABLE_Instance.GetTypes()],
    [
      ResourceType.BIGTABLE_INSTANCEIAMBINDING,
      BIGTABLE_InstanceIamBinding.GetTypes(),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMMEMBER,
      BIGTABLE_InstanceIamMember.GetTypes(),
    ],
    [
      ResourceType.BIGTABLE_INSTANCEIAMPOLICY,
      BIGTABLE_InstanceIamPolicy.GetTypes(),
    ],
    [ResourceType.BIGTABLE_TABLE, BIGTABLE_Table.GetTypes()],
    [
      ResourceType.BIGTABLE_TABLEIAMBINDING,
      BIGTABLE_TableIamBinding.GetTypes(),
    ],
    [ResourceType.BIGTABLE_TABLEIAMMEMBER, BIGTABLE_TableIamMember.GetTypes()],
    [ResourceType.BIGTABLE_TABLEIAMPOLICY, BIGTABLE_TableIamPolicy.GetTypes()],
    [
      ResourceType.BILLING_ACCOUNTIAMBINDING,
      BILLING_AccountIamBinding.GetTypes(),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMMEMBER,
      BILLING_AccountIamMember.GetTypes(),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMPOLICY,
      BILLING_AccountIamPolicy.GetTypes(),
    ],
    [ResourceType.BILLING_BUDGET, BILLING_Budget.GetTypes()],
    [ResourceType.BILLING_PROJECTINFO, BILLING_ProjectInfo.GetTypes()],
    [ResourceType.BILLING_SUBACCOUNT, BILLING_SubAccount.GetTypes()],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTOR,
      BINARYAUTHORIZATION_Attestor.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMBINDING,
      BINARYAUTHORIZATION_AttestorIamBinding.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMMEMBER,
      BINARYAUTHORIZATION_AttestorIamMember.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMPOLICY,
      BINARYAUTHORIZATION_AttestorIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_POLICY,
      BINARYAUTHORIZATION_Policy.GetTypes(),
    ],
    [
      ResourceType.BLOCKCHAINNODEENGINE_BLOCKCHAINNODES,
      BLOCKCHAINNODEENGINE_BlockchainNodes.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_AUTHORITY,
      CERTIFICATEAUTHORITY_Authority.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOL,
      CERTIFICATEAUTHORITY_CaPool.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMBINDING,
      CERTIFICATEAUTHORITY_CaPoolIamBinding.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMMEMBER,
      CERTIFICATEAUTHORITY_CaPoolIamMember.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMPOLICY,
      CERTIFICATEAUTHORITY_CaPoolIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATE,
      CERTIFICATEAUTHORITY_Certificate.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATE,
      CERTIFICATEAUTHORITY_CertificateTemplate.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMBINDING,
      CERTIFICATEAUTHORITY_CertificateTemplateIamBinding.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMMEMBER,
      CERTIFICATEAUTHORITY_CertificateTemplateIamMember.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMPOLICY,
      CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATE,
      CERTIFICATEMANAGER_Certificate.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEISSUANCECONFIG,
      CERTIFICATEMANAGER_CertificateIssuanceConfig.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAP,
      CERTIFICATEMANAGER_CertificateMap.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAPENTRY,
      CERTIFICATEMANAGER_CertificateMapEntry.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_DNSAUTHORIZATION,
      CERTIFICATEMANAGER_DnsAuthorization.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_TRUSTCONFIG,
      CERTIFICATEMANAGER_TrustConfig.GetTypes(),
    ],
    [ResourceType.CLOUDASSET_FOLDERFEED, CLOUDASSET_FolderFeed.GetTypes()],
    [
      ResourceType.CLOUDASSET_ORGANIZATIONFEED,
      CLOUDASSET_OrganizationFeed.GetTypes(),
    ],
    [ResourceType.CLOUDASSET_PROJECTFEED, CLOUDASSET_ProjectFeed.GetTypes()],
    [
      ResourceType.CLOUDBUILD_BITBUCKETSERVERCONFIG,
      CLOUDBUILD_BitbucketServerConfig.GetTypes(),
    ],
    [ResourceType.CLOUDBUILD_TRIGGER, CLOUDBUILD_Trigger.GetTypes()],
    [ResourceType.CLOUDBUILD_WORKERPOOL, CLOUDBUILD_WorkerPool.GetTypes()],
    [ResourceType.CLOUDBUILDV2_CONNECTION, CLOUDBUILDV2_Connection.GetTypes()],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMBINDING,
      CLOUDBUILDV2_ConnectionIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMMEMBER,
      CLOUDBUILDV2_ConnectionIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMPOLICY,
      CLOUDBUILDV2_ConnectionIAMPolicy.GetTypes(),
    ],
    [ResourceType.CLOUDBUILDV2_REPOSITORY, CLOUDBUILDV2_Repository.GetTypes()],
    [ResourceType.CLOUDDEPLOY_AUTOMATION, CLOUDDEPLOY_Automation.GetTypes()],
    [
      ResourceType.CLOUDDEPLOY_CUSTOMTARGETTYPE,
      CLOUDDEPLOY_CustomTargetType.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINE,
      CLOUDDEPLOY_DeliveryPipeline.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMBINDING,
      CLOUDDEPLOY_DeliveryPipelineIamBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMMEMBER,
      CLOUDDEPLOY_DeliveryPipelineIamMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMPOLICY,
      CLOUDDEPLOY_DeliveryPipelineIamPolicy.GetTypes(),
    ],
    [ResourceType.CLOUDDEPLOY_TARGET, CLOUDDEPLOY_Target.GetTypes()],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMBINDING,
      CLOUDDEPLOY_TargetIamBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMMEMBER,
      CLOUDDEPLOY_TargetIamMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMPOLICY,
      CLOUDDEPLOY_TargetIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CLOUDDOMAINS_REGISTRATION,
      CLOUDDOMAINS_Registration.GetTypes(),
    ],
    [ResourceType.CLOUDFUNCTIONS_FUNCTION, CLOUDFUNCTIONS_Function.GetTypes()],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMBINDING,
      CLOUDFUNCTIONS_FunctionIamBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMMEMBER,
      CLOUDFUNCTIONS_FunctionIamMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMPOLICY,
      CLOUDFUNCTIONS_FunctionIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTION,
      CLOUDFUNCTIONSV2_Function.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMBINDING,
      CLOUDFUNCTIONSV2_FunctionIamBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMMEMBER,
      CLOUDFUNCTIONSV2_FunctionIamMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMPOLICY,
      CLOUDFUNCTIONSV2_FunctionIamPolicy.GetTypes(),
    ],
    [ResourceType.CLOUDIDENTITY_GROUP, CLOUDIDENTITY_Group.GetTypes()],
    [
      ResourceType.CLOUDIDENTITY_GROUPMEMBERSHIP,
      CLOUDIDENTITY_GroupMembership.GetTypes(),
    ],
    [ResourceType.CLOUDIDS_ENDPOINT, CLOUDIDS_Endpoint.GetTypes()],
    [ResourceType.CLOUDRUN_DOMAINMAPPING, CLOUDRUN_DomainMapping.GetTypes()],
    [ResourceType.CLOUDRUN_IAMBINDING, CLOUDRUN_IamBinding.GetTypes()],
    [ResourceType.CLOUDRUN_IAMMEMBER, CLOUDRUN_IamMember.GetTypes()],
    [ResourceType.CLOUDRUN_IAMPOLICY, CLOUDRUN_IamPolicy.GetTypes()],
    [ResourceType.CLOUDRUN_SERVICE, CLOUDRUN_Service.GetTypes()],
    [ResourceType.CLOUDRUNV2_JOB, CLOUDRUNV2_Job.GetTypes()],
    [
      ResourceType.CLOUDRUNV2_JOBIAMBINDING,
      CLOUDRUNV2_JobIamBinding.GetTypes(),
    ],
    [ResourceType.CLOUDRUNV2_JOBIAMMEMBER, CLOUDRUNV2_JobIamMember.GetTypes()],
    [ResourceType.CLOUDRUNV2_JOBIAMPOLICY, CLOUDRUNV2_JobIamPolicy.GetTypes()],
    [ResourceType.CLOUDRUNV2_SERVICE, CLOUDRUNV2_Service.GetTypes()],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMBINDING,
      CLOUDRUNV2_ServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMMEMBER,
      CLOUDRUNV2_ServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMPOLICY,
      CLOUDRUNV2_ServiceIamPolicy.GetTypes(),
    ],
    [ResourceType.CLOUDSCHEDULER_JOB, CLOUDSCHEDULER_Job.GetTypes()],
    [ResourceType.CLOUDTASKS_QUEUE, CLOUDTASKS_Queue.GetTypes()],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMBINDING,
      CLOUDTASKS_QueueIamBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMMEMBER,
      CLOUDTASKS_QueueIamMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMPOLICY,
      CLOUDTASKS_QueueIamPolicy.GetTypes(),
    ],
    [ResourceType.COMPOSER_ENVIRONMENT, COMPOSER_Environment.GetTypes()],
    [ResourceType.COMPUTE_ADDRESS, COMPUTE_Address.GetTypes()],
    [ResourceType.COMPUTE_ATTACHEDDISK, COMPUTE_AttachedDisk.GetTypes()],
    [ResourceType.COMPUTE_AUTOSCALER, COMPUTE_Autoscaler.GetTypes()],
    [ResourceType.COMPUTE_BACKENDBUCKET, COMPUTE_BackendBucket.GetTypes()],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMBINDING,
      COMPUTE_BackendBucketIamBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMMEMBER,
      COMPUTE_BackendBucketIamMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMPOLICY,
      COMPUTE_BackendBucketIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETSIGNEDURLKEY,
      COMPUTE_BackendBucketSignedUrlKey.GetTypes(),
    ],
    [ResourceType.COMPUTE_BACKENDSERVICE, COMPUTE_BackendService.GetTypes()],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMBINDING,
      COMPUTE_BackendServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMMEMBER,
      COMPUTE_BackendServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMPOLICY,
      COMPUTE_BackendServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICESIGNEDURLKEY,
      COMPUTE_BackendServiceSignedUrlKey.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_CAEXTERNALACCOUNTKEY,
      COMPUTE_CaExternalAccountKey.GetTypes(),
    ],
    [ResourceType.COMPUTE_DISK, COMPUTE_Disk.GetTypes()],
    [
      ResourceType.COMPUTE_DISKASYNCREPLICATION,
      COMPUTE_DiskAsyncReplication.GetTypes(),
    ],
    [ResourceType.COMPUTE_DISKIAMBINDING, COMPUTE_DiskIamBinding.GetTypes()],
    [ResourceType.COMPUTE_DISKIAMMEMBER, COMPUTE_DiskIamMember.GetTypes()],
    [ResourceType.COMPUTE_DISKIAMPOLICY, COMPUTE_DiskIamPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_DISKRESOURCEPOLICYATTACHMENT,
      COMPUTE_DiskResourcePolicyAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_EXTERNALVPNGATEWAY,
      COMPUTE_ExternalVpnGateway.GetTypes(),
    ],
    [ResourceType.COMPUTE_FIREWALL, COMPUTE_Firewall.GetTypes()],
    [ResourceType.COMPUTE_FIREWALLPOLICY, COMPUTE_FirewallPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYASSOCIATION,
      COMPUTE_FirewallPolicyAssociation.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYRULE,
      COMPUTE_FirewallPolicyRule.GetTypes(),
    ],
    [ResourceType.COMPUTE_FORWARDINGRULE, COMPUTE_ForwardingRule.GetTypes()],
    [ResourceType.COMPUTE_GLOBALADDRESS, COMPUTE_GlobalAddress.GetTypes()],
    [
      ResourceType.COMPUTE_GLOBALFORWARDINGRULE,
      COMPUTE_GlobalForwardingRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINT,
      COMPUTE_GlobalNetworkEndpoint.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINTGROUP,
      COMPUTE_GlobalNetworkEndpointGroup.GetTypes(),
    ],
    [ResourceType.COMPUTE_HAVPNGATEWAY, COMPUTE_HaVpnGateway.GetTypes()],
    [ResourceType.COMPUTE_HEALTHCHECK, COMPUTE_HealthCheck.GetTypes()],
    [ResourceType.COMPUTE_HTTPHEALTHCHECK, COMPUTE_HttpHealthCheck.GetTypes()],
    [
      ResourceType.COMPUTE_HTTPSHEALTHCHECK,
      COMPUTE_HttpsHealthCheck.GetTypes(),
    ],
    [ResourceType.COMPUTE_IMAGE, COMPUTE_Image.GetTypes()],
    [ResourceType.COMPUTE_IMAGEIAMBINDING, COMPUTE_ImageIamBinding.GetTypes()],
    [ResourceType.COMPUTE_IMAGEIAMMEMBER, COMPUTE_ImageIamMember.GetTypes()],
    [ResourceType.COMPUTE_IMAGEIAMPOLICY, COMPUTE_ImageIamPolicy.GetTypes()],
    [ResourceType.COMPUTE_INSTANCE, COMPUTE_Instance.GetTypes()],
    [
      ResourceType.COMPUTE_INSTANCEFROMMACHINEIMAGE,
      COMPUTE_InstanceFromMachineImage.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEFROMTEMPLATE,
      COMPUTE_InstanceFromTemplate.GetTypes(),
    ],
    [ResourceType.COMPUTE_INSTANCEGROUP, COMPUTE_InstanceGroup.GetTypes()],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMANAGER,
      COMPUTE_InstanceGroupManager.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMEMBERSHIP,
      COMPUTE_InstanceGroupMembership.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPNAMEDPORT,
      COMPUTE_InstanceGroupNamedPort.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMBINDING,
      COMPUTE_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMMEMBER,
      COMPUTE_InstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEIAMPOLICY,
      COMPUTE_InstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCESETTINGS,
      COMPUTE_InstanceSettings.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCETEMPLATE,
      COMPUTE_InstanceTemplate.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INTERCONNECTATTACHMENT,
      COMPUTE_InterconnectAttachment.GetTypes(),
    ],
    [ResourceType.COMPUTE_MACHINEIMAGE, COMPUTE_MachineImage.GetTypes()],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMBINDING,
      COMPUTE_MachineImageIamBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMMEMBER,
      COMPUTE_MachineImageIamMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMPOLICY,
      COMPUTE_MachineImageIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MANAGEDSSLCERTIFICATE,
      COMPUTE_ManagedSslCertificate.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MANGEDSSLCERTIFICATE,
      COMPUTE_MangedSslCertificate.GetTypes(),
    ],
    [ResourceType.COMPUTE_NETWORK, COMPUTE_Network.GetTypes()],
    [
      ResourceType.COMPUTE_NETWORKATTACHMENT,
      COMPUTE_NetworkAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKEDGESECURITYSERVICE,
      COMPUTE_NetworkEdgeSecurityService.GetTypes(),
    ],
    [ResourceType.COMPUTE_NETWORKENDPOINT, COMPUTE_NetworkEndpoint.GetTypes()],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTGROUP,
      COMPUTE_NetworkEndpointGroup.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTLIST,
      COMPUTE_NetworkEndpointList.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICY,
      COMPUTE_NetworkFirewallPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYASSOCIATION,
      COMPUTE_NetworkFirewallPolicyAssociation.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYRULE,
      COMPUTE_NetworkFirewallPolicyRule.GetTypes(),
    ],
    [ResourceType.COMPUTE_NETWORKPEERING, COMPUTE_NetworkPeering.GetTypes()],
    [
      ResourceType.COMPUTE_NETWORKPEERINGROUTESCONFIG,
      COMPUTE_NetworkPeeringRoutesConfig.GetTypes(),
    ],
    [ResourceType.COMPUTE_NODEGROUP, COMPUTE_NodeGroup.GetTypes()],
    [ResourceType.COMPUTE_NODETEMPLATE, COMPUTE_NodeTemplate.GetTypes()],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICY,
      COMPUTE_OrganizationSecurityPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYASSOCIATION,
      COMPUTE_OrganizationSecurityPolicyAssociation.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYRULE,
      COMPUTE_OrganizationSecurityPolicyRule.GetTypes(),
    ],
    [ResourceType.COMPUTE_PACKETMIRRORING, COMPUTE_PacketMirroring.GetTypes()],
    [
      ResourceType.COMPUTE_PERINSTANCECONFIG,
      COMPUTE_PerInstanceConfig.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_PROJECTDEFAULTNETWORKTIER,
      COMPUTE_ProjectDefaultNetworkTier.GetTypes(),
    ],
    [ResourceType.COMPUTE_PROJECTMETADATA, COMPUTE_ProjectMetadata.GetTypes()],
    [
      ResourceType.COMPUTE_PROJECTMETADATAITEM,
      COMPUTE_ProjectMetadataItem.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_PUBLICADVERTISEDPREFIX,
      COMPUTE_PublicAdvertisedPrefix.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_PUBLICDELEGATEDPREFIX,
      COMPUTE_PublicDelegatedPrefix.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONAUTOSCALER,
      COMPUTE_RegionAutoscaler.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICE,
      COMPUTE_RegionBackendService.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMBINDING,
      COMPUTE_RegionBackendServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMMEMBER,
      COMPUTE_RegionBackendServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMPOLICY,
      COMPUTE_RegionBackendServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONCOMMITMENT,
      COMPUTE_RegionCommitment.GetTypes(),
    ],
    [ResourceType.COMPUTE_REGIONDISK, COMPUTE_RegionDisk.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONDISKIAMBINDING,
      COMPUTE_RegionDiskIamBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMMEMBER,
      COMPUTE_RegionDiskIamMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMPOLICY,
      COMPUTE_RegionDiskIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKRESOURCEPOLICYATTACHMENT,
      COMPUTE_RegionDiskResourcePolicyAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONHEALTHCHECK,
      COMPUTE_RegionHealthCheck.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONINSTANCEGROUPMANAGER,
      COMPUTE_RegionInstanceGroupManager.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONINSTANCETEMPLATE,
      COMPUTE_RegionInstanceTemplate.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINT,
      COMPUTE_RegionNetworkEndpoint.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINTGROUP,
      COMPUTE_RegionNetworkEndpointGroup.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICY,
      COMPUTE_RegionNetworkFirewallPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYASSOCIATION,
      COMPUTE_RegionNetworkFirewallPolicyAssociation.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYRULE,
      COMPUTE_RegionNetworkFirewallPolicyRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONPERINSTANCECONFIG,
      COMPUTE_RegionPerInstanceConfig.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICY,
      COMPUTE_RegionSecurityPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICYRULE,
      COMPUTE_RegionSecurityPolicyRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONSSLCERTIFICATE,
      COMPUTE_RegionSslCertificate.GetTypes(),
    ],
    [ResourceType.COMPUTE_REGIONSSLPOLICY, COMPUTE_RegionSslPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPPROXY,
      COMPUTE_RegionTargetHttpProxy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPSPROXY,
      COMPUTE_RegionTargetHttpsProxy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETTCPPROXY,
      COMPUTE_RegionTargetTcpProxy.GetTypes(),
    ],
    [ResourceType.COMPUTE_REGIONURLMAP, COMPUTE_RegionUrlMap.GetTypes()],
    [ResourceType.COMPUTE_RESERVATION, COMPUTE_Reservation.GetTypes()],
    [ResourceType.COMPUTE_RESOURCEPOLICY, COMPUTE_ResourcePolicy.GetTypes()],
    [ResourceType.COMPUTE_ROUTE, COMPUTE_Route.GetTypes()],
    [ResourceType.COMPUTE_ROUTER, COMPUTE_Router.GetTypes()],
    [ResourceType.COMPUTE_ROUTERINTERFACE, COMPUTE_RouterInterface.GetTypes()],
    [ResourceType.COMPUTE_ROUTERNAT, COMPUTE_RouterNat.GetTypes()],
    [ResourceType.COMPUTE_ROUTERPEER, COMPUTE_RouterPeer.GetTypes()],
    [ResourceType.COMPUTE_SECURITYPOLICY, COMPUTE_SecurityPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_SECURITYSCANCONFIG,
      COMPUTE_SecurityScanConfig.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SERVICEATTACHMENT,
      COMPUTE_ServiceAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCHOSTPROJECT,
      COMPUTE_SharedVPCHostProject.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCSERVICEPROJECT,
      COMPUTE_SharedVPCServiceProject.GetTypes(),
    ],
    [ResourceType.COMPUTE_SNAPSHOT, COMPUTE_Snapshot.GetTypes()],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMBINDING,
      COMPUTE_SnapshotIamBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMMEMBER,
      COMPUTE_SnapshotIamMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMPOLICY,
      COMPUTE_SnapshotIamPolicy.GetTypes(),
    ],
    [ResourceType.COMPUTE_SSLCERTIFICATE, COMPUTE_SSLCertificate.GetTypes()],
    [ResourceType.COMPUTE_SSLPOLICY, COMPUTE_SSLPolicy.GetTypes()],
    [ResourceType.COMPUTE_SUBNETWORK, COMPUTE_Subnetwork.GetTypes()],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMBINDING,
      COMPUTE_SubnetworkIAMBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMMEMBER,
      COMPUTE_SubnetworkIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMPOLICY,
      COMPUTE_SubnetworkIAMPolicy.GetTypes(),
    ],
    [ResourceType.COMPUTE_TARGETGRPCPROXY, COMPUTE_TargetGrpcProxy.GetTypes()],
    [ResourceType.COMPUTE_TARGETHTTPPROXY, COMPUTE_TargetHttpProxy.GetTypes()],
    [
      ResourceType.COMPUTE_TARGETHTTPSPROXY,
      COMPUTE_TargetHttpsProxy.GetTypes(),
    ],
    [ResourceType.COMPUTE_TARGETINSTANCE, COMPUTE_TargetInstance.GetTypes()],
    [ResourceType.COMPUTE_TARGETPOOL, COMPUTE_TargetPool.GetTypes()],
    [ResourceType.COMPUTE_TARGETSSLPROXY, COMPUTE_TargetSSLProxy.GetTypes()],
    [ResourceType.COMPUTE_TARGETTCPPROXY, COMPUTE_TargetTCPProxy.GetTypes()],
    [ResourceType.COMPUTE_URLMAP, COMPUTE_URLMap.GetTypes()],
    [ResourceType.COMPUTE_VPNGATEWAY, COMPUTE_VPNGateway.GetTypes()],
    [ResourceType.COMPUTE_VPNTUNNEL, COMPUTE_VPNTunnel.GetTypes()],
    [
      ResourceType.CONTAINER_ATTACHEDCLUSTER,
      CONTAINER_AttachedCluster.GetTypes(),
    ],
    [ResourceType.CONTAINER_AWSCLUSTER, CONTAINER_AwsCluster.GetTypes()],
    [ResourceType.CONTAINER_AWSNODEPOOL, CONTAINER_AwsNodePool.GetTypes()],
    [ResourceType.CONTAINER_AZURECLIENT, CONTAINER_AzureClient.GetTypes()],
    [ResourceType.CONTAINER_AZURECLUSTER, CONTAINER_AzureCluster.GetTypes()],
    [ResourceType.CONTAINER_AZURENODEPOOL, CONTAINER_AzureNodePool.GetTypes()],
    [ResourceType.CONTAINER_CLUSTER, CONTAINER_Cluster.GetTypes()],
    [ResourceType.CONTAINER_NODEPOOL, CONTAINER_NodePool.GetTypes()],
    [ResourceType.CONTAINER_REGISTRY, CONTAINER_Registry.GetTypes()],
    [ResourceType.CONTAINERANALYSIS_NOTE, CONTAINERANALYSIS_Note.GetTypes()],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMBINDING,
      CONTAINERANALYSIS_NoteIamBinding.GetTypes(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMMEMBER,
      CONTAINERANALYSIS_NoteIamMember.GetTypes(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMPOLICY,
      CONTAINERANALYSIS_NoteIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_OCCURENCE,
      CONTAINERANALYSIS_Occurence.GetTypes(),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_CONNECTIONPROFILE,
      DATABASEMIGRATIONSERVICE_ConnectionProfile.GetTypes(),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_PRIVATECONNECTION,
      DATABASEMIGRATIONSERVICE_PrivateConnection.GetTypes(),
    ],
    [ResourceType.DATACATALOG_ENTRY, DATACATALOG_Entry.GetTypes()],
    [ResourceType.DATACATALOG_ENTRYGROUP, DATACATALOG_EntryGroup.GetTypes()],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMBINDING,
      DATACATALOG_EntryGroupIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMMEMBER,
      DATACATALOG_EntryGroupIamMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMPOLICY,
      DATACATALOG_EntryGroupIamPolicy.GetTypes(),
    ],
    [ResourceType.DATACATALOG_POLICYTAG, DATACATALOG_PolicyTag.GetTypes()],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMBINDING,
      DATACATALOG_PolicyTagIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMMEMBER,
      DATACATALOG_PolicyTagIamMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMPOLICY,
      DATACATALOG_PolicyTagIamPolicy.GetTypes(),
    ],
    [ResourceType.DATACATALOG_TAG, DATACATALOG_Tag.GetTypes()],
    [ResourceType.DATACATALOG_TAGTEMPLATE, DATACATALOG_TagTemplate.GetTypes()],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMBINDING,
      DATACATALOG_TagTemplateIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMMEMBER,
      DATACATALOG_TagTemplateIamMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMPOLICY,
      DATACATALOG_TagTemplateIamPolicy.GetTypes(),
    ],
    [ResourceType.DATACATALOG_TAXONOMY, DATACATALOG_Taxonomy.GetTypes()],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMBINDING,
      DATACATALOG_TaxonomyIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMMEMBER,
      DATACATALOG_TaxonomyIamMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMPOLICY,
      DATACATALOG_TaxonomyIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAFLOW_FLEXTEMPLATEJOB,
      DATAFLOW_FlexTemplateJob.GetTypes(),
    ],
    [ResourceType.DATAFLOW_JOB, DATAFLOW_Job.GetTypes()],
    [ResourceType.DATAFLOW_PIPELINE, DATAFLOW_Pipeline.GetTypes()],
    [ResourceType.DATAFORM_REPOSITORY, DATAFORM_Repository.GetTypes()],
    [
      ResourceType.DATAFORM_REPOSITORYIAMBINDING,
      DATAFORM_RepositoryIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMMEMBER,
      DATAFORM_RepositoryIamMember.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMPOLICY,
      DATAFORM_RepositoryIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYRELEASECONFIG,
      DATAFORM_RepositoryReleaseConfig.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYWORKFLOWCONFIG,
      DATAFORM_RepositoryWorkflowConfig.GetTypes(),
    ],
    [ResourceType.DATAFUSION_INSTANCE, DATAFUSION_Instance.GetTypes()],
    [
      ResourceType.DATALOSS_PREVENTIONDEIDENTIFYTEMPLATE,
      DATALOSS_PreventionDeidentifyTemplate.GetTypes(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONINSPECTTEMPLATE,
      DATALOSS_PreventionInspectTemplate.GetTypes(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONJOBTRIGGER,
      DATALOSS_PreventionJobTrigger.GetTypes(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONSTOREDINFOTYPE,
      DATALOSS_PreventionStoredInfoType.GetTypes(),
    ],
    [ResourceType.DATAPLEX_ASSET, DATAPLEX_Asset.GetTypes()],
    [
      ResourceType.DATAPLEX_ASSETIAMBINDING,
      DATAPLEX_AssetIamBinding.GetTypes(),
    ],
    [ResourceType.DATAPLEX_ASSETIAMMEMBER, DATAPLEX_AssetIamMember.GetTypes()],
    [ResourceType.DATAPLEX_ASSETIAMPOLICY, DATAPLEX_AssetIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_DATASCAN, DATAPLEX_Datascan.GetTypes()],
    [
      ResourceType.DATAPLEX_DATASCANIAMBINDING,
      DATAPLEX_DatascanIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMMEMBER,
      DATAPLEX_DatascanIamMember.GetTypes(),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMPOLICY,
      DATAPLEX_DatascanIamPolicy.GetTypes(),
    ],
    [ResourceType.DATAPLEX_LAKE, DATAPLEX_Lake.GetTypes()],
    [ResourceType.DATAPLEX_LAKEIAMBINDING, DATAPLEX_LakeIamBinding.GetTypes()],
    [ResourceType.DATAPLEX_LAKEIAMMEMBER, DATAPLEX_LakeIamMember.GetTypes()],
    [ResourceType.DATAPLEX_LAKEIAMPOLICY, DATAPLEX_LakeIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_TASK, DATAPLEX_Task.GetTypes()],
    [ResourceType.DATAPLEX_TASKIAMBINDING, DATAPLEX_TaskIamBinding.GetTypes()],
    [ResourceType.DATAPLEX_TASKIAMMEMBER, DATAPLEX_TaskIamMember.GetTypes()],
    [ResourceType.DATAPLEX_TASKIAMPOLICY, DATAPLEX_TaskIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_ZONE, DATAPLEX_Zone.GetTypes()],
    [ResourceType.DATAPLEX_ZONEIAMBINDING, DATAPLEX_ZoneIamBinding.GetTypes()],
    [ResourceType.DATAPLEX_ZONEIAMMEMBER, DATAPLEX_ZoneIamMember.GetTypes()],
    [ResourceType.DATAPLEX_ZONEIAMPOLICY, DATAPLEX_ZoneIamPolicy.GetTypes()],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICY,
      DATAPROC_AutoscalingPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMBINDING,
      DATAPROC_AutoscalingPolicyIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMMEMBER,
      DATAPROC_AutoscalingPolicyIamMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMPOLICY,
      DATAPROC_AutoscalingPolicyIamPolicy.GetTypes(),
    ],
    [ResourceType.DATAPROC_CLUSTER, DATAPROC_Cluster.GetTypes()],
    [
      ResourceType.DATAPROC_CLUSTERIAMBINDING,
      DATAPROC_ClusterIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMMEMBER,
      DATAPROC_ClusterIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMPOLICY,
      DATAPROC_ClusterIAMPolicy.GetTypes(),
    ],
    [ResourceType.DATAPROC_JOB, DATAPROC_Job.GetTypes()],
    [ResourceType.DATAPROC_JOBIAMBINDING, DATAPROC_JobIAMBinding.GetTypes()],
    [ResourceType.DATAPROC_JOBIAMMEMBER, DATAPROC_JobIAMMember.GetTypes()],
    [ResourceType.DATAPROC_JOBIAMPOLICY, DATAPROC_JobIAMPolicy.GetTypes()],
    [
      ResourceType.DATAPROC_METASTOREFEDERATION,
      DATAPROC_MetastoreFederation.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMBINDING,
      DATAPROC_MetastoreFederationIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMMEMBER,
      DATAPROC_MetastoreFederationIamMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMPOLICY,
      DATAPROC_MetastoreFederationIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICE,
      DATAPROC_MetastoreService.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMBINDING,
      DATAPROC_MetastoreServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMMEMBER,
      DATAPROC_MetastoreServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMPOLICY,
      DATAPROC_MetastoreServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_WORKFLOWTEMPLATE,
      DATAPROC_WorkflowTemplate.GetTypes(),
    ],
    [
      ResourceType.DATASTORE_DATASTOREINDEX,
      DATASTORE_DataStoreIndex.GetTypes(),
    ],
    [
      ResourceType.DATASTREAM_CONNECTIONPROFILE,
      DATASTREAM_ConnectionProfile.GetTypes(),
    ],
    [
      ResourceType.DATASTREAM_PRIVATECONNECTION,
      DATASTREAM_PrivateConnection.GetTypes(),
    ],
    [ResourceType.DATASTREAM_STREAM, DATASTREAM_Stream.GetTypes()],
    [
      ResourceType.DEPLOYMENTMANAGER_DEPLOYMENT,
      DEPLOYMENTMANAGER_Deployment.GetTypes(),
    ],
    [ResourceType.DIAGFLOW_AGENT, DIAGFLOW_Agent.GetTypes()],
    [ResourceType.DIAGFLOW_CXAGENT, DIAGFLOW_CxAgent.GetTypes()],
    [ResourceType.DIAGFLOW_CXENTITYTYPE, DIAGFLOW_CxEntityType.GetTypes()],
    [ResourceType.DIAGFLOW_CXENVIRONMENT, DIAGFLOW_CxEnvironment.GetTypes()],
    [ResourceType.DIAGFLOW_CXFLOW, DIAGFLOW_CxFlow.GetTypes()],
    [ResourceType.DIAGFLOW_CXINTENT, DIAGFLOW_CxIntent.GetTypes()],
    [ResourceType.DIAGFLOW_CXPAGE, DIAGFLOW_CxPage.GetTypes()],
    [
      ResourceType.DIAGFLOW_CXSECURITYSETTINGS,
      DIAGFLOW_CxSecuritySettings.GetTypes(),
    ],
    [ResourceType.DIAGFLOW_CXTESTCASE, DIAGFLOW_CxTestCase.GetTypes()],
    [ResourceType.DIAGFLOW_CXVERSION, DIAGFLOW_CxVersion.GetTypes()],
    [ResourceType.DIAGFLOW_CXWEBHOOK, DIAGFLOW_CxWebhook.GetTypes()],
    [ResourceType.DIAGFLOW_ENTITYTYPE, DIAGFLOW_EntityType.GetTypes()],
    [ResourceType.DIAGFLOW_FULFILLMENT, DIAGFLOW_Fulfillment.GetTypes()],
    [ResourceType.DIAGFLOW_INTENT, DIAGFLOW_Intent.GetTypes()],
    [
      ResourceType.DISCOVERYENGINE_CHATENGINE,
      DISCOVERYENGINE_ChatEngine.GetTypes(),
    ],
    [
      ResourceType.DISCOVERYENGINE_DATASTORE,
      DISCOVERYENGINE_DataStore.GetTypes(),
    ],
    [
      ResourceType.DISCOVERYENGINE_SEARCHENGINE,
      DISCOVERYENGINE_SearchEngine.GetTypes(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMBINDING,
      DNS_DnsManagedZoneIamBinding.GetTypes(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMMEMBER,
      DNS_DnsManagedZoneIamMember.GetTypes(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMPOLICY,
      DNS_DnsManagedZoneIamPolicy.GetTypes(),
    ],
    [ResourceType.DNS_MANAGEDZONE, DNS_ManagedZone.GetTypes()],
    [ResourceType.DNS_POLICY, DNS_Policy.GetTypes()],
    [ResourceType.DNS_RECORDSET, DNS_RecordSet.GetTypes()],
    [ResourceType.DNS_RESPONSEPOLICY, DNS_ResponsePolicy.GetTypes()],
    [ResourceType.DNS_RESPONSEPOLICYRULE, DNS_ResponsePolicyRule.GetTypes()],
    [ResourceType.EDGECONTAINER_CLUSTER, EDGECONTAINER_Cluster.GetTypes()],
    [ResourceType.EDGECONTAINER_NODEPOOL, EDGECONTAINER_NodePool.GetTypes()],
    [
      ResourceType.EDGECONTAINER_VPNCONNECTION,
      EDGECONTAINER_VpnConnection.GetTypes(),
    ],
    [ResourceType.EDGENETWORK_NETWORK, EDGENETWORK_Network.GetTypes()],
    [ResourceType.EDGENETWORK_SUBNET, EDGENETWORK_Subnet.GetTypes()],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMBINDING,
      ENDPOINTS_ConsumersIamBinding.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMMEMBER,
      ENDPOINTS_ConsumersIamMember.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMPOLICY,
      ENDPOINTS_ConsumersIamPolicy.GetTypes(),
    ],
    [ResourceType.ENDPOINTS_SERVICE, ENDPOINTS_Service.GetTypes()],
    [
      ResourceType.ENDPOINTS_SERVICEIAMBINDING,
      ENDPOINTS_ServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMMEMBER,
      ENDPOINTS_ServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMPOLICY,
      ENDPOINTS_ServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_CONTACT,
      ESSENTIALCONTACTS_Contact.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSOR,
      ESSENTIALCONTACTS_DocumentAiProcessor.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSORDEFAULTVERSION,
      ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSEDOCUMENTSCHEMA,
      ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSELOCATION,
      ESSENTIALCONTACTS_DocumentAiWarehouseLocation.GetTypes(),
    ],
    [ResourceType.EVENTARC_CHANNEL, EVENTARC_Channel.GetTypes()],
    [
      ResourceType.EVENTARC_GOOGLECHANNELCONFIG,
      EVENTARC_GoogleChannelConfig.GetTypes(),
    ],
    [ResourceType.EVENTARC_TRIGGER, EVENTARC_Trigger.GetTypes()],
    [ResourceType.FILESTORE_BACKUP, FILESTORE_Backup.GetTypes()],
    [ResourceType.FILESTORE_INSTANCE, FILESTORE_Instance.GetTypes()],
    [ResourceType.FILESTORE_SNAPSHOT, FILESTORE_Snapshot.GetTypes()],
    [ResourceType.FIREBASE_ANDROIDAPP, FIREBASE_AndroidApp.GetTypes()],
    [
      ResourceType.FIREBASE_APPCHECKAPPATTESTCONFIG,
      FIREBASE_AppCheckAppAttestConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKDEBUGTOKEN,
      FIREBASE_AppCheckDebugToken.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKPLAYINTEGRITYCONFIG,
      FIREBASE_AppCheckPlayIntegrityConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAENTERPRISECONFIG,
      FIREBASE_AppCheckRecaptchaEnterpriseConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAV3CONFIG,
      FIREBASE_AppCheckRecaptchaV3Config.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKSERVICECONFIG,
      FIREBASE_AppCheckServiceConfig.GetTypes(),
    ],
    [ResourceType.FIREBASE_APPLEAPP, FIREBASE_AppleApp.GetTypes()],
    [
      ResourceType.FIREBASE_DATABASEINSTANCE,
      FIREBASE_DatabaseInstance.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_EXTENSIONSINSTANCE,
      FIREBASE_ExtensionsInstance.GetTypes(),
    ],
    [ResourceType.FIREBASE_HOSTINGCHANNEL, FIREBASE_HostingChannel.GetTypes()],
    [
      ResourceType.FIREBASE_HOSTINGCUSTOMDOMAIN,
      FIREBASE_HostingCustomDomain.GetTypes(),
    ],
    [ResourceType.FIREBASE_HOSTINGRELEASE, FIREBASE_HostingRelease.GetTypes()],
    [ResourceType.FIREBASE_HOSTINGSITE, FIREBASE_HostingSite.GetTypes()],
    [ResourceType.FIREBASE_HOSTINGVERSION, FIREBASE_HostingVersion.GetTypes()],
    [ResourceType.FIREBASE_PROJECT, FIREBASE_Project.GetTypes()],
    [ResourceType.FIREBASE_STORAGEBUCKET, FIREBASE_StorageBucket.GetTypes()],
    [ResourceType.FIREBASE_WEBAPP, FIREBASE_WebApp.GetTypes()],
    [ResourceType.FIREBASERULES_RELEASE, FIREBASERULES_Release.GetTypes()],
    [ResourceType.FIREBASERULES_RULESET, FIREBASERULES_Ruleset.GetTypes()],
    [
      ResourceType.FIRESTORE_BACKUPSCHEDULE,
      FIRESTORE_BackupSchedule.GetTypes(),
    ],
    [ResourceType.FIRESTORE_DATABASE, FIRESTORE_Database.GetTypes()],
    [ResourceType.FIRESTORE_DOCUMENT, FIRESTORE_Document.GetTypes()],
    [ResourceType.FIRESTORE_FIELD, FIRESTORE_Field.GetTypes()],
    [ResourceType.FIRESTORE_INDEX, FIRESTORE_Index.GetTypes()],
    [
      ResourceType.FOLDER_ACCESSAPPROVALSETTINGS,
      FOLDER_AccessApprovalSettings.GetTypes(),
    ],
    [ResourceType.FOLDER_IAMAUDITCONFIG, FOLDER_IamAuditConfig.GetTypes()],
    [ResourceType.FOLDER_IAMBINDING, FOLDER_IAMBinding.GetTypes()],
    [ResourceType.FOLDER_IAMMEMBER, FOLDER_IAMMember.GetTypes()],
    [ResourceType.FOLDER_IAMPOLICY, FOLDER_IAMPolicy.GetTypes()],
    [
      ResourceType.FOLDER_ORGANIZATIONPOLICY,
      FOLDER_OrganizationPolicy.GetTypes(),
    ],
    [ResourceType.GKEBACKUP_BACKUPPLAN, GKEBACKUP_BackupPlan.GetTypes()],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMBINDING,
      GKEBACKUP_BackupPlanIamBinding.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMMEMBER,
      GKEBACKUP_BackupPlanIamMember.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMPOLICY,
      GKEBACKUP_BackupPlanIamPolicy.GetTypes(),
    ],
    [ResourceType.GKEBACKUP_RESTOREPLAN, GKEBACKUP_RestorePlan.GetTypes()],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMBINDING,
      GKEBACKUP_RestorePlanIamBinding.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMMEMBER,
      GKEBACKUP_RestorePlanIamMember.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMPOLICY,
      GKEBACKUP_RestorePlanIamPolicy.GetTypes(),
    ],
    [ResourceType.GKEHUB_FEATURE, GKEHUB_Feature.GetTypes()],
    [
      ResourceType.GKEHUB_FEATUREIAMBINDING,
      GKEHUB_FeatureIamBinding.GetTypes(),
    ],
    [ResourceType.GKEHUB_FEATUREIAMMEMBER, GKEHUB_FeatureIamMember.GetTypes()],
    [ResourceType.GKEHUB_FEATUREIAMPOLICY, GKEHUB_FeatureIamPolicy.GetTypes()],
    [
      ResourceType.GKEHUB_FEATUREMEMBERSHIP,
      GKEHUB_FeatureMembership.GetTypes(),
    ],
    [ResourceType.GKEHUB_FLEET, GKEHUB_Fleet.GetTypes()],
    [ResourceType.GKEHUB_MEMBERSHIP, GKEHUB_Membership.GetTypes()],
    [
      ResourceType.GKEHUB_MEMBERSHIPBINDING,
      GKEHUB_MembershipBinding.GetTypes(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMBINDING,
      GKEHUB_MembershipIamBinding.GetTypes(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMMEMBER,
      GKEHUB_MembershipIamMember.GetTypes(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMPOLICY,
      GKEHUB_MembershipIamPolicy.GetTypes(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPRBACROLEBINDING,
      GKEHUB_MembershipRbacRoleBinding.GetTypes(),
    ],
    [ResourceType.GKEHUB_NAMESPACE, GKEHUB_Namespace.GetTypes()],
    [ResourceType.GKEHUB_SCOPE, GKEHUB_Scope.GetTypes()],
    [ResourceType.GKEHUB_SCOPEIAMBINDING, GKEHUB_ScopeIamBinding.GetTypes()],
    [ResourceType.GKEHUB_SCOPEIAMMEMBER, GKEHUB_ScopeIamMember.GetTypes()],
    [ResourceType.GKEHUB_SCOPEIAMPOLICY, GKEHUB_ScopeIamPolicy.GetTypes()],
    [
      ResourceType.GKEHUB_SCOPERBACROLEBINDING,
      GKEHUB_ScopeRbacRoleBinding.GetTypes(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALADMINCLUSTER,
      GKEONPREM_BareMetalAdminCluster.GetTypes(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALCLUSTER,
      GKEONPREM_BareMetalCluster.GetTypes(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALNODEPOOL,
      GKEONPREM_BareMetalNodePool.GetTypes(),
    ],
    [ResourceType.GKEONPREM_VMWARECLUSTER, GKEONPREM_VMwareCluster.GetTypes()],
    [
      ResourceType.GKEONPREM_VMWARENODEPOOL,
      GKEONPREM_VMwareNodePool.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_CONSENTSTORE, HEALTHCARE_ConsentStore.GetTypes()],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMBINDING,
      HEALTHCARE_ConsentStoreIamBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMMEMBER,
      HEALTHCARE_ConsentStoreIamMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMPOLICY,
      HEALTHCARE_ConsentStoreIamPolicy.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_DATASET, HEALTHCARE_Dataset.GetTypes()],
    [
      ResourceType.HEALTHCARE_DATASETIAMBINDING,
      HEALTHCARE_DatasetIamBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMMEMBER,
      HEALTHCARE_DatasetIamMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMPOLICY,
      HEALTHCARE_DatasetIamPolicy.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_DICOMSTORE, HEALTHCARE_DicomStore.GetTypes()],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMBINDING,
      HEALTHCARE_DicomStoreIamBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMMEMBER,
      HEALTHCARE_DicomStoreIamMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMPOLICY,
      HEALTHCARE_DicomStoreIamPolicy.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_FHIRSTORE, HEALTHCARE_FhirStore.GetTypes()],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMBINDING,
      HEALTHCARE_FhirStoreIamBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMMEMBER,
      HEALTHCARE_FhirStoreIamMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMPOLICY,
      HEALTHCARE_FhirStoreIamPolicy.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_HL7STORE, HEALTHCARE_Hl7Store.GetTypes()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMBINDING,
      HEALTHCARE_Hl7StoreIamBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMMEMBER,
      HEALTHCARE_Hl7StoreIamMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMPOLICY,
      HEALTHCARE_Hl7StoreIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAM_ACCESSBOUNDARYPOLICY,
      IAM_AccessBoundaryPolicy.GetTypes(),
    ],
    [ResourceType.IAM_DENYPOLICY, IAM_DenyPolicy.GetTypes()],
    [ResourceType.IAM_WORKFORCEPOOL, IAM_WorkforcePool.GetTypes()],
    [
      ResourceType.IAM_WORKFORCEPOOLPROVIDER,
      IAM_WorkforcePoolProvider.GetTypes(),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOL,
      IAM_WorkloadIdentityPool.GetTypes(),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOLPROVIDER,
      IAM_WorkloadIdentityPoolProvider.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMBINDING,
      IAP_AppEngineServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMMEMBER,
      IAP_AppEngineServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMPOLICY,
      IAP_AppEngineServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMBINDING,
      IAP_AppEngineVersionIamBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMMEMBER,
      IAP_AppEngineVersionIamMember.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMPOLICY,
      IAP_AppEngineVersionIamPolicy.GetTypes(),
    ],
    [ResourceType.IAP_BRAND, IAP_Brand.GetTypes()],
    [ResourceType.IAP_CLIENT, IAP_Client.GetTypes()],
    [ResourceType.IAP_TUNNELIAMBINDING, IAP_TunnelIamBinding.GetTypes()],
    [ResourceType.IAP_TUNNELIAMMEMBER, IAP_TunnelIamMember.GetTypes()],
    [ResourceType.IAP_TUNNELIAMPOLICY, IAP_TunnelIamPolicy.GetTypes()],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMBINDING,
      IAP_TunnelInstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMMEMBER,
      IAP_TunnelInstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.IAP_TUNNELINSTANCEIAMPOLICY,
      IAP_TunnelInstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMBINDING,
      IAP_WebBackendServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMMEMBER,
      IAP_WebBackendServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMPOLICY,
      IAP_WebBackendServiceIamPolicy.GetTypes(),
    ],
    [ResourceType.IAP_WEBIAMBINDING, IAP_WebIamBinding.GetTypes()],
    [ResourceType.IAP_WEBIAMMEMBER, IAP_WebIamMember.GetTypes()],
    [ResourceType.IAP_WEBIAMPOLICY, IAP_WebIamPolicy.GetTypes()],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMBINDING,
      IAP_WebRegionBackendServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMMEMBER,
      IAP_WebRegionBackendServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMPOLICY,
      IAP_WebRegionBackendServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMBINDING,
      IAP_WebTypeAppEngingIamBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMMEMBER,
      IAP_WebTypeAppEngingIamMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMPOLICY,
      IAP_WebTypeAppEngingIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMBINDING,
      IAP_WebTypeComputeIamBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMMEMBER,
      IAP_WebTypeComputeIamMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMPOLICY,
      IAP_WebTypeComputeIamPolicy.GetTypes(),
    ],
    [ResourceType.IDENTITYPLATFORM_CONFIG, IDENTITYPLATFORM_Config.GetTypes()],
    [
      ResourceType.IDENTITYPLATFORM_DEFAULTSUPPORTEDIDPCONFIG,
      IDENTITYPLATFORM_DefaultSupportedIdpConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_INBOUNDSAMLCONFIG,
      IDENTITYPLATFORM_InboundSamlConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_OAUTHIDPCONFIG,
      IDENTITYPLATFORM_OauthIdpConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_PROJECTDEFAULTCONFIG,
      IDENTITYPLATFORM_ProjectDefaultConfig.GetTypes(),
    ],
    [ResourceType.IDENTITYPLATFORM_TENANT, IDENTITYPLATFORM_Tenant.GetTypes()],
    [
      ResourceType.IDENTITYPLATFORM_TENANTDEFAULTSUPPORTEDIDPCONFIG,
      IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTINBOUNDSAMLCONFIG,
      IDENTITYPLATFORM_TenantInboundSamlConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTOAUTHIDPCONFIG,
      IDENTITYPLATFORM_TenantOauthIdpConfig.GetTypes(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_CONNECTION,
      INTEGRATIONCONNECTORS_Connection.GetTypes(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_ENDPOINTATTACHMENT,
      INTEGRATIONCONNECTORS_EndpointAttachment.GetTypes(),
    ],
    [ResourceType.KMS_CRYPTOKEY, KMS_CryptoKey.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYIAMBINDING, KMS_CryptoKeyIAMBinding.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYIAMMEMBER, KMS_CryptoKeyIAMMember.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYIAMPOLICY, KMS_CryptoKeyIAMPolicy.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYVERSION, KMS_CryptoKeyVersion.GetTypes()],
    [ResourceType.KMS_KEYRING, KMS_KeyRing.GetTypes()],
    [ResourceType.KMS_KEYRINGIAMBINDING, KMS_KeyRingIAMBinding.GetTypes()],
    [ResourceType.KMS_KEYRINGIAMMEMBER, KMS_KeyRingIAMMember.GetTypes()],
    [ResourceType.KMS_KEYRINGIAMPOLICY, KMS_KeyRingIAMPolicy.GetTypes()],
    [ResourceType.KMS_KEYRINGIMPORTJOB, KMS_KeyRingImportJob.GetTypes()],
    [ResourceType.KMS_SECRETCIPHERTEXT, KMS_SecretCiphertext.GetTypes()],
    [
      ResourceType.LOGGING_BILLINGACCOUNTBUCKETCONFIG,
      LOGGING_BillingAccountBucketConfig.GetTypes(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTEXCLUSION,
      LOGGING_BillingAccountExclusion.GetTypes(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTSINK,
      LOGGING_BillingAccountSink.GetTypes(),
    ],
    [
      ResourceType.LOGGING_FOLDERBUCKETCONFIG,
      LOGGING_FolderBucketConfig.GetTypes(),
    ],
    [ResourceType.LOGGING_FOLDEREXCLUSION, LOGGING_FolderExclusion.GetTypes()],
    [ResourceType.LOGGING_FOLDERSETTINGS, LOGGING_FolderSettings.GetTypes()],
    [ResourceType.LOGGING_FOLDERSINK, LOGGING_FolderSink.GetTypes()],
    [ResourceType.LOGGING_LINKEDDATASET, LOGGING_LinkedDataset.GetTypes()],
    [ResourceType.LOGGING_LOGVIEW, LOGGING_LogView.GetTypes()],
    [ResourceType.LOGGING_METRIC, LOGGING_Metric.GetTypes()],
    [
      ResourceType.LOGGING_ORGANIZATIONBUCKETCONFIG,
      LOGGING_OrganizationBucketConfig.GetTypes(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONEXCLUSION,
      LOGGING_OrganizationExclusion.GetTypes(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSETTINGS,
      LOGGING_OrganizationSettings.GetTypes(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSINK,
      LOGGING_OrganizationSink.GetTypes(),
    ],
    [
      ResourceType.LOGGING_PROJECTBUCKETCONFIG,
      LOGGING_ProjectBucketConfig.GetTypes(),
    ],
    [
      ResourceType.LOGGING_PROJECTEXCLUSION,
      LOGGING_ProjectExclusion.GetTypes(),
    ],
    [ResourceType.LOGGING_PROJECTSINK, LOGGING_ProjectSink.GetTypes()],
    [ResourceType.LOOKER_INSTANCE, LOOKER_Instance.GetTypes()],
    [ResourceType.MEMCACHE_INSTANCE, MEMCACHE_Instance.GetTypes()],
    [ResourceType.MIGRATIONCENTER_GROUP, MIGRATIONCENTER_Group.GetTypes()],
    [
      ResourceType.MIGRATIONCENTER_PREFERENCESET,
      MIGRATIONCENTER_PreferenceSet.GetTypes(),
    ],
    [ResourceType.ML_ENGINEMODEL, ML_EngineModel.GetTypes()],
    [ResourceType.MONITORING_ALERTPOLICY, MONITORING_AlertPolicy.GetTypes()],
    [
      ResourceType.MONITORING_CUSTOMSERVICE,
      MONITORING_CustomService.GetTypes(),
    ],
    [ResourceType.MONITORING_DASHBOARD, MONITORING_Dashboard.GetTypes()],
    [
      ResourceType.MONITORING_GENERICSERVICE,
      MONITORING_GenericService.GetTypes(),
    ],
    [ResourceType.MONITORING_GROUP, MONITORING_Group.GetTypes()],
    [
      ResourceType.MONITORING_METRICDESCRIPTOR,
      MONITORING_MetricDescriptor.GetTypes(),
    ],
    [
      ResourceType.MONITORING_MONITOREDPROJECT,
      MONITORING_MonitoredProject.GetTypes(),
    ],
    [
      ResourceType.MONITORING_NOTIFICATIONCHANNEL,
      MONITORING_NotificationChannel.GetTypes(),
    ],
    [ResourceType.MONITORING_SLO, MONITORING_Slo.GetTypes()],
    [
      ResourceType.MONITORING_UPTIMECHECKCONFIG,
      MONITORING_UptimeCheckConfig.GetTypes(),
    ],
    [ResourceType.NETAPP_ACTIVEDIRECTORY, NETAPP_ActiveDirectory.GetTypes()],
    [ResourceType.NETAPP_BACKUPPOLICY, NETAPP_BackupPolicy.GetTypes()],
    [ResourceType.NETAPP_BACKUPVAULT, NETAPP_BackupVault.GetTypes()],
    [ResourceType.NETAPP_KMSCONFIG, NETAPP_Kmsconfig.GetTypes()],
    [ResourceType.NETAPP_STORAGEPOOL, NETAPP_StoragePool.GetTypes()],
    [ResourceType.NETAPP_VOLUME, NETAPP_Volume.GetTypes()],
    [
      ResourceType.NETAPP_VOLUMEREPLICATION,
      NETAPP_VolumeReplication.GetTypes(),
    ],
    [ResourceType.NETAPP_VOLUMESNAPSHOT, NETAPP_VolumeSnapshot.GetTypes()],
    [ResourceType.NETWORKCONNECTIVITY_HUB, NETWORKCONNECTIVITY_Hub.GetTypes()],
    [
      ResourceType.NETWORKCONNECTIVITY_POLICYBASEDROUTE,
      NETWORKCONNECTIVITY_PolicyBasedRoute.GetTypes(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SERVICECONNECTIONPOLICY,
      NETWORKCONNECTIVITY_ServiceConnectionPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SPOKE,
      NETWORKCONNECTIVITY_Spoke.GetTypes(),
    ],
    [
      ResourceType.NETWORKMANAGEMENT_CONNECTIVITYTEST,
      NETWORKMANAGEMENT_ConnectivityTest.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUP,
      NETWORKSECURITY_AddressGroup.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMBINDING,
      NETWORKSECURITY_AddressGroupIamBinding.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMMEMBER,
      NETWORKSECURITY_AddressGroupIamMember.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMPOLICY,
      NETWORKSECURITY_AddressGroupIamPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_AUTHORIZATIONPOLICY,
      NETWORKSECURITY_AuthorizationPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_CLIENTTLSPOLICY,
      NETWORKSECURITY_ClientTlsPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_FIREWALLENDPOINT,
      NETWORKSECURITY_FirewallEndpoint.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICY,
      NETWORKSECURITY_GatewaySecurityPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICYRULE,
      NETWORKSECURITY_GatewaySecurityPolicyRule.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILE,
      NETWORKSECURITY_SecurityProfile.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILEGROUP,
      NETWORKSECURITY_SecurityProfileGroup.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_SERVERTLSPOLICY,
      NETWORKSECURITY_ServerTlsPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_TLSINSPECTIONPOLICY,
      NETWORKSECURITY_TlsInspectionPolicy.GetTypes(),
    ],
    [ResourceType.NETWORKSECURITY_URLLIST, NETWORKSECURITY_UrlList.GetTypes()],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEKEYSET,
      NETWORKSERVICES_EdgeCacheKeyset.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEORIGIN,
      NETWORKSERVICES_EdgeCacheOrigin.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHESERVICE,
      NETWORKSERVICES_EdgeCacheService.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_ENDPOINTPOLICY,
      NETWORKSERVICES_EndpointPolicy.GetTypes(),
    ],
    [ResourceType.NETWORKSERVICES_GATEWAY, NETWORKSERVICES_Gateway.GetTypes()],
    [
      ResourceType.NETWORKSERVICES_GRPCROUTE,
      NETWORKSERVICES_GrpcRoute.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_HTTPROUTE,
      NETWORKSERVICES_HttpRoute.GetTypes(),
    ],
    [ResourceType.NETWORKSERVICES_MESH, NETWORKSERVICES_Mesh.GetTypes()],
    [
      ResourceType.NETWORKSERVICES_SERVICEBINDING,
      NETWORKSERVICES_ServiceBinding.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_TCPROUTE,
      NETWORKSERVICES_TcpRoute.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_TLSROUTE,
      NETWORKSERVICES_TlsRoute.GetTypes(),
    ],
    [ResourceType.NOTEBOOKS_ENVIRONMENT, NOTEBOOKS_Environment.GetTypes()],
    [ResourceType.NOTEBOOKS_INSTANCE, NOTEBOOKS_Instance.GetTypes()],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMBINDING,
      NOTEBOOKS_InstanceIamBinding.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMMEMBER,
      NOTEBOOKS_InstanceIamMember.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_INSTANCEIAMPOLICY,
      NOTEBOOKS_InstanceIamPolicy.GetTypes(),
    ],
    [ResourceType.NOTEBOOKS_LOCATION, NOTEBOOKS_Location.GetTypes()],
    [ResourceType.NOTEBOOKS_RUNTIME, NOTEBOOKS_Runtime.GetTypes()],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMBINDING,
      NOTEBOOKS_RuntimeIamBinding.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMMEMBER,
      NOTEBOOKS_RuntimeIamMember.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMPOLICY,
      NOTEBOOKS_RuntimeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ORGANIZATIONS_ACCESSAPPROVALSETTINGS,
      ORGANIZATIONS_AccessApprovalSettings.GetTypes(),
    ],
    [ResourceType.ORGANIZATIONS_FOLDER, ORGANIZATIONS_Folder.GetTypes()],
    [
      ResourceType.ORGANIZATIONS_IAMAUDITCONFIG,
      ORGANIZATIONS_IamAuditConfig.GetTypes(),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMBINDING,
      ORGANIZATIONS_IAMBinding.GetTypes(),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMCUSTOMROLE,
      ORGANIZATIONS_IAMCustomRole.GetTypes(),
    ],
    [ResourceType.ORGANIZATIONS_IAMMEMBER, ORGANIZATIONS_IAMMember.GetTypes()],
    [ResourceType.ORGANIZATIONS_IAMPOLICY, ORGANIZATIONS_IAMPolicy.GetTypes()],
    [ResourceType.ORGANIZATIONS_POLICY, ORGANIZATIONS_Policy.GetTypes()],
    [ResourceType.ORGANIZATIONS_PROJECT, ORGANIZATIONS_Project.GetTypes()],
    [
      ResourceType.ORGPOLICY_CUSTOMCONSTRAINT,
      ORGPOLICY_CustomConstraint.GetTypes(),
    ],
    [ResourceType.ORGPOLICY_POLICY, ORGPOLICY_Policy.GetTypes()],
    [ResourceType.OSCONFIG_GUESTPOLICIES, OSCONFIG_GuestPolicies.GetTypes()],
    [
      ResourceType.OSCONFIG_OSPOLICYASSIGNMENT,
      OSCONFIG_OsPolicyAssignment.GetTypes(),
    ],
    [
      ResourceType.OSCONFIG_PATCHDEPLOYMENT,
      OSCONFIG_PatchDeployment.GetTypes(),
    ],
    [ResourceType.OSLOGIN_SSHPUBLICKEY, OSLOGIN_SshPublicKey.GetTypes()],
    [
      ResourceType.PROJECTS_ACCESSAPPROVALSETTINGS,
      PROJECTS_AccessApprovalSettings.GetTypes(),
    ],
    [ResourceType.PROJECTS_APIKEY, PROJECTS_ApiKey.GetTypes()],
    [
      ResourceType.PROJECTS_DEFAULTSERVICEACCOUNTS,
      PROJECTS_DefaultServiceAccounts.GetTypes(),
    ],
    [ResourceType.PROJECTS_IAMAUDITCONFIG, PROJECTS_IAMAuditConfig.GetTypes()],
    [ResourceType.PROJECTS_IAMBINDING, PROJECTS_IAMBinding.GetTypes()],
    [ResourceType.PROJECTS_IAMCUSTOMROLE, PROJECTS_IAMCustomRole.GetTypes()],
    [ResourceType.PROJECTS_IAMMEMBER, PROJECTS_IAMMember.GetTypes()],
    [ResourceType.PROJECTS_IAMPOLICY, PROJECTS_IAMPolicy.GetTypes()],
    [
      ResourceType.PROJECTS_ORGANIZATIONPOLICY,
      PROJECTS_OrganizationPolicy.GetTypes(),
    ],
    [ResourceType.PROJECTS_SERVICE, PROJECTS_Service.GetTypes()],
    [
      ResourceType.PROJECTS_SERVICEIDENTITY,
      PROJECTS_ServiceIdentity.GetTypes(),
    ],
    [
      ResourceType.PROJECTS_USAGEEXPORTBUCKET,
      PROJECTS_UsageExportBucket.GetTypes(),
    ],
    [ResourceType.PUBSUB_LITERESERVATION, PUBSUB_LiteReservation.GetTypes()],
    [ResourceType.PUBSUB_LITESUBSCRIPTION, PUBSUB_LiteSubscription.GetTypes()],
    [ResourceType.PUBSUB_LITETOPIC, PUBSUB_LiteTopic.GetTypes()],
    [ResourceType.PUBSUB_SCHEMA, PUBSUB_Schema.GetTypes()],
    [ResourceType.PUBSUB_SCHEMAIAMBINDING, PUBSUB_SchemaIamBinding.GetTypes()],
    [ResourceType.PUBSUB_SCHEMAIAMMEMBER, PUBSUB_SchemaIamMember.GetTypes()],
    [ResourceType.PUBSUB_SCHEMAIAMPOLICY, PUBSUB_SchemaIamPolicy.GetTypes()],
    [ResourceType.PUBSUB_SUBSCRIPTION, PUBSUB_Subscription.GetTypes()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMBINDING,
      PUBSUB_SubscriptionIAMBinding.GetTypes(),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMMEMBER,
      PUBSUB_SubscriptionIAMMember.GetTypes(),
    ],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMPOLICY,
      PUBSUB_SubscriptionIAMPolicy.GetTypes(),
    ],
    [ResourceType.PUBSUB_TOPIC, PUBSUB_Topic.GetTypes()],
    [ResourceType.PUBSUB_TOPICIAMBINDING, PUBSUB_TopicIAMBinding.GetTypes()],
    [ResourceType.PUBSUB_TOPICIAMMEMBER, PUBSUB_TopicIAMMember.GetTypes()],
    [ResourceType.PUBSUB_TOPICIAMPOLICY, PUBSUB_TopicIAMPolicy.GetTypes()],
    [ResourceType.RECAPTCHA_ENTERPRISEKEY, RECAPTCHA_EnterpriseKey.GetTypes()],
    [ResourceType.REDIS_CLUSTER, REDIS_Cluster.GetTypes()],
    [ResourceType.REDIS_INSTANCE, REDIS_Instance.GetTypes()],
    [ResourceType.RESOURCEMANAGER_LIEN, RESOURCEMANAGER_Lien.GetTypes()],
    [ResourceType.RUNTIMECONFIG_CONFIG, RUNTIMECONFIG_Config.GetTypes()],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMBINDING,
      RUNTIMECONFIG_ConfigIamBinding.GetTypes(),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMMEMBER,
      RUNTIMECONFIG_ConfigIamMember.GetTypes(),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMPOLICY,
      RUNTIMECONFIG_ConfigIamPolicy.GetTypes(),
    ],
    [ResourceType.RUNTIMECONFIG_VARIABLE, RUNTIMECONFIG_Variable.GetTypes()],
    [ResourceType.SECRETMANAGER_SECRET, SECRETMANAGER_Secret.GetTypes()],
    [
      ResourceType.SECRETMANAGER_SECRETIAMBINDING,
      SECRETMANAGER_SecretIamBinding.GetTypes(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMMEMBER,
      SECRETMANAGER_SecretIamMember.GetTypes(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMPOLICY,
      SECRETMANAGER_SecretIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETVERSION,
      SECRETMANAGER_SecretVersion.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCE,
      SECURESOURCEMANAGER_Instance.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMBINDING,
      SECURESOURCEMANAGER_InstanceIamBinding.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMMEMBER,
      SECURESOURCEMANAGER_InstanceIamMember.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCEIAMPOLICY,
      SECURESOURCEMANAGER_InstanceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_EVENTTHREATDETECTIONCUSTOMMODULE,
      SECURITYCENTER_EventThreatDetectionCustomModule.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_FOLDERCUSTOMMODULE,
      SECURITYCENTER_FolderCustomModule.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMBINDING,
      SECURITYCENTER_InstanceIamBinding.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMMEMBER,
      SECURITYCENTER_InstanceIamMember.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_INSTANCEIAMPOLICY,
      SECURITYCENTER_InstanceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_MUTECONFIG,
      SECURITYCENTER_MuteConfig.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_NOTIFICATIONCONFIG,
      SECURITYCENTER_NotificationConfig.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_ORGANIZATIONCUSTOMMODULE,
      SECURITYCENTER_OrganizationCustomModule.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_PROJECTCUSTOMMODULE,
      SECURITYCENTER_ProjectCustomModule.GetTypes(),
    ],
    [ResourceType.SECURITYCENTER_SOURCE, SECURITYCENTER_Source.GetTypes()],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMBINDING,
      SECURITYCENTER_SourceIamBinding.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMMEMBER,
      SECURITYCENTER_SourceIamMember.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMPOLICY,
      SECURITYCENTER_SourceIamPolicy.GetTypes(),
    ],
    [ResourceType.SECURITYPOSTURE_POSTURE, SECURITYPOSTURE_Posture.GetTypes()],
    [
      ResourceType.SECURITYPOSTURE_POSTUREDEPLOYMENT,
      SECURITYPOSTURE_PostureDeployment.GetTypes(),
    ],
    [ResourceType.SERVICEACCOUNT_ACCOUNT, SERVICEACCOUNT_Account.GetTypes()],
    [
      ResourceType.SERVICEACCOUNT_IAMBINDING,
      SERVICEACCOUNT_IAMBinding.GetTypes(),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMMEMBER,
      SERVICEACCOUNT_IAMMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMPOLICY,
      SERVICEACCOUNT_IAMPolicy.GetTypes(),
    ],
    [ResourceType.SERVICEACCOUNT_KEY, SERVICEACCOUNT_Key.GetTypes()],
    [
      ResourceType.SERVICEDIRECTORY_ENDPOINT,
      SERVICEDIRECTORY_Endpoint.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACE,
      SERVICEDIRECTORY_Namespace.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMBINDING,
      SERVICEDIRECTORY_NamespaceIamBinding.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMMEMBER,
      SERVICEDIRECTORY_NamespaceIamMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMPOLICY,
      SERVICEDIRECTORY_NamespaceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICE,
      SERVICEDIRECTORY_Service.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMBINDING,
      SERVICEDIRECTORY_ServiceIamBinding.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMMEMBER,
      SERVICEDIRECTORY_ServiceIamMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMPOLICY,
      SERVICEDIRECTORY_ServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SERVICENETWORKING_CONNECTION,
      SERVICENETWORKING_Connection.GetTypes(),
    ],
    [
      ResourceType.SERVICENETWORKING_PEEREDDNSDOMAIN,
      SERVICENETWORKING_PeeredDnsDomain.GetTypes(),
    ],
    [
      ResourceType.SERVICEUSAGE_CONSUMERQUOTAOVERRIDE,
      SERVICEUSAGE_ConsumerQuotaOverride.GetTypes(),
    ],
    [ResourceType.SOURCEREPO_REPOSITORY, SOURCEREPO_Repository.GetTypes()],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMBINDING,
      SOURCEREPO_RepositoryIamBinding.GetTypes(),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMMEMBER,
      SOURCEREPO_RepositoryIamMember.GetTypes(),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMPOLICY,
      SOURCEREPO_RepositoryIamPolicy.GetTypes(),
    ],
    [ResourceType.SPANNER_DATABASE, SPANNER_Database.GetTypes()],
    [
      ResourceType.SPANNER_DATABASEIAMBINDING,
      SPANNER_DatabaseIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMMEMBER,
      SPANNER_DatabaseIAMMember.GetTypes(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMPOLICY,
      SPANNER_DatabaseIAMPolicy.GetTypes(),
    ],
    [ResourceType.SPANNER_INSTANCE, SPANNER_Instance.GetTypes()],
    [
      ResourceType.SPANNER_INSTANCEIAMBINDING,
      SPANNER_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMMEMBER,
      SPANNER_InstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.SPANNER_INSTANCEIAMPOLICY,
      SPANNER_InstanceIAMPolicy.GetTypes(),
    ],
    [ResourceType.SQL_DATABASE, SQL_Database.GetTypes()],
    [ResourceType.SQL_DATABASEINSTANCE, SQL_DatabaseInstance.GetTypes()],
    [
      ResourceType.SQL_SOURCEREPRESENTATIONINSTANCE,
      SQL_SourceRepresentationInstance.GetTypes(),
    ],
    [ResourceType.SQL_SSLCERT, SQL_SslCert.GetTypes()],
    [ResourceType.SQL_USER, SQL_User.GetTypes()],
    [ResourceType.STORAGE_BUCKET, STORAGE_Bucket.GetTypes()],
    [
      ResourceType.STORAGE_BUCKETACCESSCONTROL,
      STORAGE_BucketAccessControl.GetTypes(),
    ],
    [ResourceType.STORAGE_BUCKETACL, STORAGE_BucketACL.GetTypes()],
    [
      ResourceType.STORAGE_BUCKETIAMBINDING,
      STORAGE_BucketIAMBinding.GetTypes(),
    ],
    [ResourceType.STORAGE_BUCKETIAMMEMBER, STORAGE_BucketIAMMember.GetTypes()],
    [ResourceType.STORAGE_BUCKETIAMPOLICY, STORAGE_BucketIAMPolicy.GetTypes()],
    [ResourceType.STORAGE_BUCKETOBJECT, STORAGE_BucketObject.GetTypes()],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACCESSCONTROL,
      STORAGE_DefaultObjectAccessControl.GetTypes(),
    ],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACL,
      STORAGE_DefaultObjectACL.GetTypes(),
    ],
    [ResourceType.STORAGE_HMACKEY, STORAGE_HmacKey.GetTypes()],
    [
      ResourceType.STORAGE_INSIGHTSREPORTCONFIG,
      STORAGE_InsightsReportConfig.GetTypes(),
    ],
    [ResourceType.STORAGE_NOTIFICATION, STORAGE_Notification.GetTypes()],
    [
      ResourceType.STORAGE_OBJECTACCESSCONTROL,
      STORAGE_ObjectAccessControl.GetTypes(),
    ],
    [ResourceType.STORAGE_OBJECTACL, STORAGE_ObjectACL.GetTypes()],
    [
      ResourceType.STORAGE_TRANSFERAGENTPOOL,
      STORAGE_TransferAgentPool.GetTypes(),
    ],
    [ResourceType.STORAGE_TRANSFERJOB, STORAGE_TransferJob.GetTypes()],
    [ResourceType.TAGS_LOCATIONTAGBINDING, TAGS_LocationTagBinding.GetTypes()],
    [ResourceType.TAGS_TAGBINDING, TAGS_TagBinding.GetTypes()],
    [ResourceType.TAGS_TAGKEY, TAGS_TagKey.GetTypes()],
    [ResourceType.TAGS_TAGKEYIAMBINDING, TAGS_TagKeyIamBinding.GetTypes()],
    [ResourceType.TAGS_TAGKEYIAMMEMBER, TAGS_TagKeyIamMember.GetTypes()],
    [ResourceType.TAGS_TAGKEYIAMPOLICY, TAGS_TagKeyIamPolicy.GetTypes()],
    [ResourceType.TAGS_TAGVALUE, TAGS_TagValue.GetTypes()],
    [ResourceType.TAGS_TAGVALUEIAMBINDING, TAGS_TagValueIamBinding.GetTypes()],
    [ResourceType.TAGS_TAGVALUEIAMMEMBER, TAGS_TagValueIamMember.GetTypes()],
    [ResourceType.TAGS_TAGVALUEIAMPOLICY, TAGS_TagValueIamPolicy.GetTypes()],
    [ResourceType.TPU_NODE, TPU_Node.GetTypes()],
    [ResourceType.TPU_V2VM, TPU_V2Vm.GetTypes()],
    [ResourceType.VERTEX_AIDATASET, VERTEX_AiDataset.GetTypes()],
    [ResourceType.VERTEX_AIENDPOINT, VERTEX_AiEndpoint.GetTypes()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMBINDING,
      VERTEX_AiEndpointIamBinding.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMMEMBER,
      VERTEX_AiEndpointIamMember.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIENDPOINTIAMPOLICY,
      VERTEX_AiEndpointIamPolicy.GetTypes(),
    ],
    [ResourceType.VERTEX_AIFEATUREGROUP, VERTEX_AiFeatureGroup.GetTypes()],
    [
      ResourceType.VERTEX_AIFEATUREGROUPFEATURE,
      VERTEX_AiFeatureGroupFeature.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTORE,
      VERTEX_AiFeatureOnlineStore.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTOREFEATUREVIEW,
      VERTEX_AiFeatureOnlineStoreFeatureview.GetTypes(),
    ],
    [ResourceType.VERTEX_AIFEATURESTORE, VERTEX_AiFeatureStore.GetTypes()],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPE,
      VERTEX_AiFeatureStoreEntityType.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEFEATURE,
      VERTEX_AiFeatureStoreEntityTypeFeature.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMBINDING,
      VERTEX_AiFeatureStoreEntityTypeIamBinding.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMMEMBER,
      VERTEX_AiFeatureStoreEntityTypeIamMember.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMPOLICY,
      VERTEX_AiFeatureStoreEntityTypeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMBINDING,
      VERTEX_AiFeatureStoreIamBinding.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMMEMBER,
      VERTEX_AiFeatureStoreIamMember.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMPOLICY,
      VERTEX_AiFeatureStoreIamPolicy.GetTypes(),
    ],
    [ResourceType.VERTEX_AIINDEX, VERTEX_AiIndex.GetTypes()],
    [ResourceType.VERTEX_AIINDEXENDPOINT, VERTEX_AiIndexEndpoint.GetTypes()],
    [ResourceType.VERTEX_AIMETADATASTORE, VERTEX_AiMetadataStore.GetTypes()],
    [ResourceType.VERTEX_AITENSORBOARD, VERTEX_AiTensorboard.GetTypes()],
    [ResourceType.VMWAREENGINE_CLUSTER, VMWAREENGINE_Cluster.GetTypes()],
    [
      ResourceType.VMWAREENGINE_EXTERNALACCESSRULE,
      VMWAREENGINE_ExternalAccessRule.GetTypes(),
    ],
    [
      ResourceType.VMWAREENGINE_EXTERNALADDRESS,
      VMWAREENGINE_ExternalAddress.GetTypes(),
    ],
    [ResourceType.VMWAREENGINE_NETWORK, VMWAREENGINE_Network.GetTypes()],
    [
      ResourceType.VMWAREENGINE_NETWORKPEERING,
      VMWAREENGINE_NetworkPeering.GetTypes(),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORKPOLICY,
      VMWAREENGINE_NetworkPolicy.GetTypes(),
    ],
    [
      ResourceType.VMWAREENGINE_PRIVATECLOUD,
      VMWAREENGINE_PrivateCloud.GetTypes(),
    ],
    [ResourceType.VMWAREENGINE_SUBNET, VMWAREENGINE_Subnet.GetTypes()],
    [ResourceType.VPCACCESS_CONNECTOR, VPCACCESS_Connector.GetTypes()],
    [ResourceType.WORKBENCH_INSTANCE, WORKBENCH_Instance.GetTypes()],
    [
      ResourceType.WORKBENCH_INSTANCEIAMBINDING,
      WORKBENCH_InstanceIamBinding.GetTypes(),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMMEMBER,
      WORKBENCH_InstanceIamMember.GetTypes(),
    ],
    [
      ResourceType.WORKBENCH_INSTANCEIAMPOLICY,
      WORKBENCH_InstanceIamPolicy.GetTypes(),
    ],
    [ResourceType.WORKFLOWS_WORKFLOW, WORKFLOWS_Workflow.GetTypes()],
    [
      ResourceType.WORKSTATIONS_WORKSTATION,
      WORKSTATIONS_Workstation.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCLUSTER,
      WORKSTATIONS_WorkstationCluster.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIG,
      WORKSTATIONS_WorkstationConfig.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMBINDING,
      WORKSTATIONS_WorkstationConfigIamBinding.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMMEMBER,
      WORKSTATIONS_WorkstationConfigIamMember.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMPOLICY,
      WORKSTATIONS_WorkstationConfigIamPolicy.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMBINDING,
      WORKSTATIONS_WorkstationIamBinding.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMMEMBER,
      WORKSTATIONS_WorkstationIamMember.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMPOLICY,
      WORKSTATIONS_WorkstationIamPolicy.GetTypes(),
    ],
  ]);
}
