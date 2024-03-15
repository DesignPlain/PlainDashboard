import { ResourceType } from "./ResourceType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CxWebhook as DIAGFLOW_CxWebhook } from "./diagflow/CxWebhook";
import { CxPage as DIAGFLOW_CxPage } from "./diagflow/CxPage";
import { EntityType as DIAGFLOW_EntityType } from "./diagflow/EntityType";
import { Fulfillment as DIAGFLOW_Fulfillment } from "./diagflow/Fulfillment";
import { CxVersion as DIAGFLOW_CxVersion } from "./diagflow/CxVersion";
import { CxSecuritySettings as DIAGFLOW_CxSecuritySettings } from "./diagflow/CxSecuritySettings";
import { CxEntityType as DIAGFLOW_CxEntityType } from "./diagflow/CxEntityType";
import { CxFlow as DIAGFLOW_CxFlow } from "./diagflow/CxFlow";
import { CxTestCase as DIAGFLOW_CxTestCase } from "./diagflow/CxTestCase";
import { Intent as DIAGFLOW_Intent } from "./diagflow/Intent";
import { CxIntent as DIAGFLOW_CxIntent } from "./diagflow/CxIntent";
import { CxAgent as DIAGFLOW_CxAgent } from "./diagflow/CxAgent";
import { Agent as DIAGFLOW_Agent } from "./diagflow/Agent";
import { CxEnvironment as DIAGFLOW_CxEnvironment } from "./diagflow/CxEnvironment";
import { DataStoreIndex as DATASTORE_DataStoreIndex } from "./datastore/DataStoreIndex";
import { Deployment as DEPLOYMENTMANAGER_Deployment } from "./deploymentmanager/Deployment";
import { GatewayIAMMember as APIGATEWAY_GatewayIAMMember } from "./apigateway/GatewayIAMMember";
import { Gateway as APIGATEWAY_Gateway } from "./apigateway/Gateway";
import { GatewayIamPolicy as APIGATEWAY_GatewayIamPolicy } from "./apigateway/GatewayIamPolicy";
import { Api as APIGATEWAY_Api } from "./apigateway/Api";
import { ApiIAMMember as APIGATEWAY_ApiIAMMember } from "./apigateway/ApiIAMMember";
import { ApiConfigIamPolicy as APIGATEWAY_ApiConfigIamPolicy } from "./apigateway/ApiConfigIamPolicy";
import { ApiConfigIAMMember as APIGATEWAY_ApiConfigIAMMember } from "./apigateway/ApiConfigIAMMember";
import { GatewayIAMBinding as APIGATEWAY_GatewayIAMBinding } from "./apigateway/GatewayIAMBinding";
import { ApiConfigIAMBinding as APIGATEWAY_ApiConfigIAMBinding } from "./apigateway/ApiConfigIAMBinding";
import { ApiIAMBinding as APIGATEWAY_ApiIAMBinding } from "./apigateway/ApiIAMBinding";
import { ApiIamPolicy as APIGATEWAY_ApiIamPolicy } from "./apigateway/ApiIamPolicy";
import { ApiConfig as APIGATEWAY_ApiConfig } from "./apigateway/ApiConfig";
import { CaPoolIamPolicy as CERTIFICATEAUTHORITY_CaPoolIamPolicy } from "./certificateauthority/CaPoolIamPolicy";
import { CaPoolIAMMember as CERTIFICATEAUTHORITY_CaPoolIAMMember } from "./certificateauthority/CaPoolIAMMember";
import { CertificateTemplateIAMBinding as CERTIFICATEAUTHORITY_CertificateTemplateIAMBinding } from "./certificateauthority/CertificateTemplateIAMBinding";
import { CertificateTemplateIamPolicy as CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy } from "./certificateauthority/CertificateTemplateIamPolicy";
import { Certificate as CERTIFICATEAUTHORITY_Certificate } from "./certificateauthority/Certificate";
import { CaPoolIAMBinding as CERTIFICATEAUTHORITY_CaPoolIAMBinding } from "./certificateauthority/CaPoolIAMBinding";
import { Authority as CERTIFICATEAUTHORITY_Authority } from "./certificateauthority/Authority";
import { CertificateTemplate as CERTIFICATEAUTHORITY_CertificateTemplate } from "./certificateauthority/CertificateTemplate";
import { CaPool as CERTIFICATEAUTHORITY_CaPool } from "./certificateauthority/CaPool";
import { CertificateTemplateIAMMember as CERTIFICATEAUTHORITY_CertificateTemplateIAMMember } from "./certificateauthority/CertificateTemplateIAMMember";
import { DeliveryPipelineIAMBinding as CLOUDDEPLOY_DeliveryPipelineIAMBinding } from "./clouddeploy/DeliveryPipelineIAMBinding";
import { Target as CLOUDDEPLOY_Target } from "./clouddeploy/Target";
import { Automation as CLOUDDEPLOY_Automation } from "./clouddeploy/Automation";
import { DeliveryPipelineIamPolicy as CLOUDDEPLOY_DeliveryPipelineIamPolicy } from "./clouddeploy/DeliveryPipelineIamPolicy";
import { DeliveryPipeline as CLOUDDEPLOY_DeliveryPipeline } from "./clouddeploy/DeliveryPipeline";
import { TargetIamPolicy as CLOUDDEPLOY_TargetIamPolicy } from "./clouddeploy/TargetIamPolicy";
import { TargetIAMMember as CLOUDDEPLOY_TargetIAMMember } from "./clouddeploy/TargetIAMMember";
import { CustomTargetType as CLOUDDEPLOY_CustomTargetType } from "./clouddeploy/CustomTargetType";
import { DeliveryPipelineIAMMember as CLOUDDEPLOY_DeliveryPipelineIAMMember } from "./clouddeploy/DeliveryPipelineIAMMember";
import { TargetIAMBinding as CLOUDDEPLOY_TargetIAMBinding } from "./clouddeploy/TargetIAMBinding";
import { Registry as CONTAINER_Registry } from "./container/Registry";
import { NodePool as CONTAINER_NodePool } from "./container/NodePool";
import { AzureClient as CONTAINER_AzureClient } from "./container/AzureClient";
import { AzureCluster as CONTAINER_AzureCluster } from "./container/AzureCluster";
import { AzureNodePool as CONTAINER_AzureNodePool } from "./container/AzureNodePool";
import { AwsNodePool as CONTAINER_AwsNodePool } from "./container/AwsNodePool";
import { Cluster as CONTAINER_Cluster } from "./container/Cluster";
import { AwsCluster as CONTAINER_AwsCluster } from "./container/AwsCluster";
import { AttachedCluster as CONTAINER_AttachedCluster } from "./container/AttachedCluster";
import { EndpointAttachment as INTEGRATIONCONNECTORS_EndpointAttachment } from "./integrationconnectors/EndpointAttachment";
import { Connection as INTEGRATIONCONNECTORS_Connection } from "./integrationconnectors/Connection";
import { Instance as FILESTORE_Instance } from "./filestore/Instance";
import { Snapshot as FILESTORE_Snapshot } from "./filestore/Snapshot";
import { Backup as FILESTORE_Backup } from "./filestore/Backup";
import { TcpRoute as NETWORKSERVICES_TcpRoute } from "./networkservices/TcpRoute";
import { Mesh as NETWORKSERVICES_Mesh } from "./networkservices/Mesh";
import { EdgeCacheOrigin as NETWORKSERVICES_EdgeCacheOrigin } from "./networkservices/EdgeCacheOrigin";
import { TlsRoute as NETWORKSERVICES_TlsRoute } from "./networkservices/TlsRoute";
import { ServiceBinding as NETWORKSERVICES_ServiceBinding } from "./networkservices/ServiceBinding";
import { GrpcRoute as NETWORKSERVICES_GrpcRoute } from "./networkservices/GrpcRoute";
import { EndpointPolicy as NETWORKSERVICES_EndpointPolicy } from "./networkservices/EndpointPolicy";
import { EdgeCacheService as NETWORKSERVICES_EdgeCacheService } from "./networkservices/EdgeCacheService";
import { HttpRoute as NETWORKSERVICES_HttpRoute } from "./networkservices/HttpRoute";
import { Gateway as NETWORKSERVICES_Gateway } from "./networkservices/Gateway";
import { EdgeCacheKeyset as NETWORKSERVICES_EdgeCacheKeyset } from "./networkservices/EdgeCacheKeyset";
import { Group as CLOUDIDENTITY_Group } from "./cloudidentity/Group";
import { GroupMembership as CLOUDIDENTITY_GroupMembership } from "./cloudidentity/GroupMembership";
import { EngineModel as ML_EngineModel } from "./ml/EngineModel";
import { Job as CLOUDSCHEDULER_Job } from "./cloudscheduler/Job";
import { QueueIamPolicy as CLOUDTASKS_QueueIamPolicy } from "./cloudtasks/QueueIamPolicy";
import { QueueIAMBinding as CLOUDTASKS_QueueIAMBinding } from "./cloudtasks/QueueIAMBinding";
import { QueueIAMMember as CLOUDTASKS_QueueIAMMember } from "./cloudtasks/QueueIAMMember";
import { Queue as CLOUDTASKS_Queue } from "./cloudtasks/Queue";
import { DataPolicyIamPolicy as BIGQUERYDATAPOLICY_DataPolicyIamPolicy } from "./bigquerydatapolicy/DataPolicyIamPolicy";
import { DataPolicyIAMMember as BIGQUERYDATAPOLICY_DataPolicyIAMMember } from "./bigquerydatapolicy/DataPolicyIAMMember";
import { DataPolicyIAMBinding as BIGQUERYDATAPOLICY_DataPolicyIAMBinding } from "./bigquerydatapolicy/DataPolicyIAMBinding";
import { DataPolicy as BIGQUERYDATAPOLICY_DataPolicy } from "./bigquerydatapolicy/DataPolicy";
import { Instance as MEMCACHE_Instance } from "./memcache/Instance";
import { Document as FIRESTORE_Document } from "./firestore/Document";
import { Field as FIRESTORE_Field } from "./firestore/Field";
import { BackupSchedule as FIRESTORE_BackupSchedule } from "./firestore/BackupSchedule";
import { Database as FIRESTORE_Database } from "./firestore/Database";
import { Index as FIRESTORE_Index } from "./firestore/Index";
import { InstanceIAMPolicy as WORKBENCH_InstanceIAMPolicy } from "./workbench/InstanceIAMPolicy";
import { InstanceIAMBinding as WORKBENCH_InstanceIAMBinding } from "./workbench/InstanceIAMBinding";
import { Instance as WORKBENCH_Instance } from "./workbench/Instance";
import { InstanceIAMMember as WORKBENCH_InstanceIAMMember } from "./workbench/InstanceIAMMember";
import { Policy as ORGPOLICY_Policy } from "./orgpolicy/Policy";
import { CustomConstraint as ORGPOLICY_CustomConstraint } from "./orgpolicy/CustomConstraint";
import { TaxonomyIAMMember as DATACATALOG_TaxonomyIAMMember } from "./datacatalog/TaxonomyIAMMember";
import { PolicyTagIamPolicy as DATACATALOG_PolicyTagIamPolicy } from "./datacatalog/PolicyTagIamPolicy";
import { PolicyTagIAMBinding as DATACATALOG_PolicyTagIAMBinding } from "./datacatalog/PolicyTagIAMBinding";
import { TaxonomyIamPolicy as DATACATALOG_TaxonomyIamPolicy } from "./datacatalog/TaxonomyIamPolicy";
import { TagTemplateIamPolicy as DATACATALOG_TagTemplateIamPolicy } from "./datacatalog/TagTemplateIamPolicy";
import { Entry as DATACATALOG_Entry } from "./datacatalog/Entry";
import { TagTemplate as DATACATALOG_TagTemplate } from "./datacatalog/TagTemplate";
import { EntryGroupIamPolicy as DATACATALOG_EntryGroupIamPolicy } from "./datacatalog/EntryGroupIamPolicy";
import { PolicyTagIAMMember as DATACATALOG_PolicyTagIAMMember } from "./datacatalog/PolicyTagIAMMember";
import { EntryGroupIAMMember as DATACATALOG_EntryGroupIAMMember } from "./datacatalog/EntryGroupIAMMember";
import { TagTemplateIAMMember as DATACATALOG_TagTemplateIAMMember } from "./datacatalog/TagTemplateIAMMember";
import { Tag as DATACATALOG_Tag } from "./datacatalog/Tag";
import { TagTemplateIAMBinding as DATACATALOG_TagTemplateIAMBinding } from "./datacatalog/TagTemplateIAMBinding";
import { EntryGroupIAMBinding as DATACATALOG_EntryGroupIAMBinding } from "./datacatalog/EntryGroupIAMBinding";
import { EntryGroup as DATACATALOG_EntryGroup } from "./datacatalog/EntryGroup";
import { PolicyTag as DATACATALOG_PolicyTag } from "./datacatalog/PolicyTag";
import { TaxonomyIAMBinding as DATACATALOG_TaxonomyIAMBinding } from "./datacatalog/TaxonomyIAMBinding";
import { Taxonomy as DATACATALOG_Taxonomy } from "./datacatalog/Taxonomy";
import { DocumentAiProcessor as ESSENTIALCONTACTS_DocumentAiProcessor } from "./essentialcontacts/DocumentAiProcessor";
import { DocumentAiProcessorDefaultVersion as ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion } from "./essentialcontacts/DocumentAiProcessorDefaultVersion";
import { DocumentAiWarehouseLocation as ESSENTIALCONTACTS_DocumentAiWarehouseLocation } from "./essentialcontacts/DocumentAiWarehouseLocation";
import { Contact as ESSENTIALCONTACTS_Contact } from "./essentialcontacts/Contact";
import { DocumentAiWarehouseDocumentSchema as ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema } from "./essentialcontacts/DocumentAiWarehouseDocumentSchema";
import { AiIndexEndpoint as VERTEX_AiIndexEndpoint } from "./vertex/AiIndexEndpoint";
import { AiFeatureStoreIAMBinding as VERTEX_AiFeatureStoreIAMBinding } from "./vertex/AiFeatureStoreIAMBinding";
import { AiFeatureStoreEntityType as VERTEX_AiFeatureStoreEntityType } from "./vertex/AiFeatureStoreEntityType";
import { AiFeatureStoreEntityTypeIAMBinding as VERTEX_AiFeatureStoreEntityTypeIAMBinding } from "./vertex/AiFeatureStoreEntityTypeIAMBinding";
import { AiMetadataStore as VERTEX_AiMetadataStore } from "./vertex/AiMetadataStore";
import { AiFeatureStoreEntityTypeFeature as VERTEX_AiFeatureStoreEntityTypeFeature } from "./vertex/AiFeatureStoreEntityTypeFeature";
import { AiFeatureGroup as VERTEX_AiFeatureGroup } from "./vertex/AiFeatureGroup";
import { AiEndpointIamPolicy as VERTEX_AiEndpointIamPolicy } from "./vertex/AiEndpointIamPolicy";
import { AiDataset as VERTEX_AiDataset } from "./vertex/AiDataset";
import { AiFeatureStore as VERTEX_AiFeatureStore } from "./vertex/AiFeatureStore";
import { AiFeatureOnlineStoreFeatureview as VERTEX_AiFeatureOnlineStoreFeatureview } from "./vertex/AiFeatureOnlineStoreFeatureview";
import { AiEndpoint as VERTEX_AiEndpoint } from "./vertex/AiEndpoint";
import { AiEndpointIAMBinding as VERTEX_AiEndpointIAMBinding } from "./vertex/AiEndpointIAMBinding";
import { AiFeatureStoreIAMMember as VERTEX_AiFeatureStoreIAMMember } from "./vertex/AiFeatureStoreIAMMember";
import { AiFeatureStoreEntityTypeIamPolicy as VERTEX_AiFeatureStoreEntityTypeIamPolicy } from "./vertex/AiFeatureStoreEntityTypeIamPolicy";
import { AiFeatureStoreEntityTypeIAMMember as VERTEX_AiFeatureStoreEntityTypeIAMMember } from "./vertex/AiFeatureStoreEntityTypeIAMMember";
import { AiFeatureOnlineStore as VERTEX_AiFeatureOnlineStore } from "./vertex/AiFeatureOnlineStore";
import { AiIndex as VERTEX_AiIndex } from "./vertex/AiIndex";
import { AiEndpointIAMMember as VERTEX_AiEndpointIAMMember } from "./vertex/AiEndpointIAMMember";
import { AiFeatureStoreIamPolicy as VERTEX_AiFeatureStoreIamPolicy } from "./vertex/AiFeatureStoreIamPolicy";
import { AiTensorboard as VERTEX_AiTensorboard } from "./vertex/AiTensorboard";
import { AiFeatureGroupFeature as VERTEX_AiFeatureGroupFeature } from "./vertex/AiFeatureGroupFeature";
import { ManagementServer as BACKUPDISASTERRECOVERY_ManagementServer } from "./backupdisasterrecovery/ManagementServer";
import { NotificationChannel as MONITORING_NotificationChannel } from "./monitoring/NotificationChannel";
import { Slo as MONITORING_Slo } from "./monitoring/Slo";
import { MonitoredProject as MONITORING_MonitoredProject } from "./monitoring/MonitoredProject";
import { AlertPolicy as MONITORING_AlertPolicy } from "./monitoring/AlertPolicy";
import { Group as MONITORING_Group } from "./monitoring/Group";
import { MetricDescriptor as MONITORING_MetricDescriptor } from "./monitoring/MetricDescriptor";
import { GenericService as MONITORING_GenericService } from "./monitoring/GenericService";
import { Dashboard as MONITORING_Dashboard } from "./monitoring/Dashboard";
import { UptimeCheckConfig as MONITORING_UptimeCheckConfig } from "./monitoring/UptimeCheckConfig";
import { CustomService as MONITORING_CustomService } from "./monitoring/CustomService";
import { DatabaseIAMMember as SPANNER_DatabaseIAMMember } from "./spanner/DatabaseIAMMember";
import { DatabaseIAMPolicy as SPANNER_DatabaseIAMPolicy } from "./spanner/DatabaseIAMPolicy";
import { Instance as SPANNER_Instance } from "./spanner/Instance";
import { InstanceIAMBinding as SPANNER_InstanceIAMBinding } from "./spanner/InstanceIAMBinding";
import { InstanceIAMMember as SPANNER_InstanceIAMMember } from "./spanner/InstanceIAMMember";
import { Database as SPANNER_Database } from "./spanner/Database";
import { DatabaseIAMBinding as SPANNER_DatabaseIAMBinding } from "./spanner/DatabaseIAMBinding";
import { InstanceIAMPolicy as SPANNER_InstanceIAMPolicy } from "./spanner/InstanceIAMPolicy";
import { NodePool as EDGECONTAINER_NodePool } from "./edgecontainer/NodePool";
import { Cluster as EDGECONTAINER_Cluster } from "./edgecontainer/Cluster";
import { VpnConnection as EDGECONTAINER_VpnConnection } from "./edgecontainer/VpnConnection";
import { Connector as VPCACCESS_Connector } from "./vpcaccess/Connector";
import { BlockchainNodes as BLOCKCHAINNODEENGINE_BlockchainNodes } from "./blockchainnodeengine/BlockchainNodes";
import { BackupPlanIamPolicy as GKEBACKUP_BackupPlanIamPolicy } from "./gkebackup/BackupPlanIamPolicy";
import { RestorePlanIamPolicy as GKEBACKUP_RestorePlanIamPolicy } from "./gkebackup/RestorePlanIamPolicy";
import { RestorePlan as GKEBACKUP_RestorePlan } from "./gkebackup/RestorePlan";
import { BackupPlanIAMMember as GKEBACKUP_BackupPlanIAMMember } from "./gkebackup/BackupPlanIAMMember";
import { BackupPlanIAMBinding as GKEBACKUP_BackupPlanIAMBinding } from "./gkebackup/BackupPlanIAMBinding";
import { BackupPlan as GKEBACKUP_BackupPlan } from "./gkebackup/BackupPlan";
import { RestorePlanIAMBinding as GKEBACKUP_RestorePlanIAMBinding } from "./gkebackup/RestorePlanIAMBinding";
import { RestorePlanIAMMember as GKEBACKUP_RestorePlanIAMMember } from "./gkebackup/RestorePlanIAMMember";
import { MetastoreFederationIamPolicy as DATAPROC_MetastoreFederationIamPolicy } from "./dataproc/MetastoreFederationIamPolicy";
import { ClusterIAMBinding as DATAPROC_ClusterIAMBinding } from "./dataproc/ClusterIAMBinding";
import { AutoscalingPolicyIamPolicy as DATAPROC_AutoscalingPolicyIamPolicy } from "./dataproc/AutoscalingPolicyIamPolicy";
import { WorkflowTemplate as DATAPROC_WorkflowTemplate } from "./dataproc/WorkflowTemplate";
import { MetastoreService as DATAPROC_MetastoreService } from "./dataproc/MetastoreService";
import { JobIAMMember as DATAPROC_JobIAMMember } from "./dataproc/JobIAMMember";
import { ClusterIAMMember as DATAPROC_ClusterIAMMember } from "./dataproc/ClusterIAMMember";
import { ClusterIAMPolicy as DATAPROC_ClusterIAMPolicy } from "./dataproc/ClusterIAMPolicy";
import { MetastoreServiceIAMBinding as DATAPROC_MetastoreServiceIAMBinding } from "./dataproc/MetastoreServiceIAMBinding";
import { MetastoreFederationIAMBinding as DATAPROC_MetastoreFederationIAMBinding } from "./dataproc/MetastoreFederationIAMBinding";
import { AutoscalingPolicyIAMMember as DATAPROC_AutoscalingPolicyIAMMember } from "./dataproc/AutoscalingPolicyIAMMember";
import { MetastoreServiceIamPolicy as DATAPROC_MetastoreServiceIamPolicy } from "./dataproc/MetastoreServiceIamPolicy";
import { AutoscalingPolicyIAMBinding as DATAPROC_AutoscalingPolicyIAMBinding } from "./dataproc/AutoscalingPolicyIAMBinding";
import { Cluster as DATAPROC_Cluster } from "./dataproc/Cluster";
import { Job as DATAPROC_Job } from "./dataproc/Job";
import { MetastoreServiceIAMMember as DATAPROC_MetastoreServiceIAMMember } from "./dataproc/MetastoreServiceIAMMember";
import { JobIAMPolicy as DATAPROC_JobIAMPolicy } from "./dataproc/JobIAMPolicy";
import { JobIAMBinding as DATAPROC_JobIAMBinding } from "./dataproc/JobIAMBinding";
import { MetastoreFederation as DATAPROC_MetastoreFederation } from "./dataproc/MetastoreFederation";
import { AutoscalingPolicy as DATAPROC_AutoscalingPolicy } from "./dataproc/AutoscalingPolicy";
import { MetastoreFederationIAMMember as DATAPROC_MetastoreFederationIAMMember } from "./dataproc/MetastoreFederationIAMMember";
import { DomainMapping as CLOUDRUN_DomainMapping } from "./cloudrun/DomainMapping";
import { IAMMember as CLOUDRUN_IAMMember } from "./cloudrun/IAMMember";
import { Service as CLOUDRUN_Service } from "./cloudrun/Service";
import { IamPolicy as CLOUDRUN_IamPolicy } from "./cloudrun/IamPolicy";
import { IAMBinding as CLOUDRUN_IAMBinding } from "./cloudrun/IAMBinding";
import { Note as CONTAINERANALYSIS_Note } from "./containeranalysis/Note";
import { NoteIamPolicy as CONTAINERANALYSIS_NoteIamPolicy } from "./containeranalysis/NoteIamPolicy";
import { NoteIAMBinding as CONTAINERANALYSIS_NoteIAMBinding } from "./containeranalysis/NoteIAMBinding";
import { Occurence as CONTAINERANALYSIS_Occurence } from "./containeranalysis/Occurence";
import { NoteIAMMember as CONTAINERANALYSIS_NoteIAMMember } from "./containeranalysis/NoteIAMMember";
import { PeeredDnsDomain as SERVICENETWORKING_PeeredDnsDomain } from "./servicenetworking/PeeredDnsDomain";
import { Connection as SERVICENETWORKING_Connection } from "./servicenetworking/Connection";
import { Workflow as WORKFLOWS_Workflow } from "./workflows/Workflow";
import { ListingIAMBinding as BIGQUERYANALYTICSHUB_ListingIAMBinding } from "./bigqueryanalyticshub/ListingIAMBinding";
import { DataExchangeIamPolicy as BIGQUERYANALYTICSHUB_DataExchangeIamPolicy } from "./bigqueryanalyticshub/DataExchangeIamPolicy";
import { DataExchangeIAMMember as BIGQUERYANALYTICSHUB_DataExchangeIAMMember } from "./bigqueryanalyticshub/DataExchangeIAMMember";
import { Listing as BIGQUERYANALYTICSHUB_Listing } from "./bigqueryanalyticshub/Listing";
import { ListingIAMMember as BIGQUERYANALYTICSHUB_ListingIAMMember } from "./bigqueryanalyticshub/ListingIAMMember";
import { ListingIamPolicy as BIGQUERYANALYTICSHUB_ListingIamPolicy } from "./bigqueryanalyticshub/ListingIamPolicy";
import { DataExchange as BIGQUERYANALYTICSHUB_DataExchange } from "./bigqueryanalyticshub/DataExchange";
import { DataExchangeIAMBinding as BIGQUERYANALYTICSHUB_DataExchangeIAMBinding } from "./bigqueryanalyticshub/DataExchangeIAMBinding";
import { CertificateIssuanceConfig as CERTIFICATEMANAGER_CertificateIssuanceConfig } from "./certificatemanager/CertificateIssuanceConfig";
import { Certificate as CERTIFICATEMANAGER_Certificate } from "./certificatemanager/Certificate";
import { TrustConfig as CERTIFICATEMANAGER_TrustConfig } from "./certificatemanager/TrustConfig";
import { DnsAuthorization as CERTIFICATEMANAGER_DnsAuthorization } from "./certificatemanager/DnsAuthorization";
import { CertificateMap as CERTIFICATEMANAGER_CertificateMap } from "./certificatemanager/CertificateMap";
import { CertificateMapEntry as CERTIFICATEMANAGER_CertificateMapEntry } from "./certificatemanager/CertificateMapEntry";
import { User as ALLOYDB_User } from "./alloydb/User";
import { Backup as ALLOYDB_Backup } from "./alloydb/Backup";
import { Instance as ALLOYDB_Instance } from "./alloydb/Instance";
import { Cluster as ALLOYDB_Cluster } from "./alloydb/Cluster";
import { NetworkPeering as VMWAREENGINE_NetworkPeering } from "./vmwareengine/NetworkPeering";
import { Subnet as VMWAREENGINE_Subnet } from "./vmwareengine/Subnet";
import { ExternalAddress as VMWAREENGINE_ExternalAddress } from "./vmwareengine/ExternalAddress";
import { NetworkPolicy as VMWAREENGINE_NetworkPolicy } from "./vmwareengine/NetworkPolicy";
import { Cluster as VMWAREENGINE_Cluster } from "./vmwareengine/Cluster";
import { Network as VMWAREENGINE_Network } from "./vmwareengine/Network";
import { PrivateCloud as VMWAREENGINE_PrivateCloud } from "./vmwareengine/PrivateCloud";
import { ExternalAccessRule as VMWAREENGINE_ExternalAccessRule } from "./vmwareengine/ExternalAccessRule";
import { DatasetIAMBinding as HEALTHCARE_DatasetIAMBinding } from "./healthcare/DatasetIAMBinding";
import { ConsentStoreIAMBinding as HEALTHCARE_ConsentStoreIAMBinding } from "./healthcare/ConsentStoreIAMBinding";
import { FhirStore as HEALTHCARE_FhirStore } from "./healthcare/FhirStore";
import { Hl7StoreIamPolicy as HEALTHCARE_Hl7StoreIamPolicy } from "./healthcare/Hl7StoreIamPolicy";
import { FhirStoreIAMBinding as HEALTHCARE_FhirStoreIAMBinding } from "./healthcare/FhirStoreIAMBinding";
import { DicomStoreIAMMember as HEALTHCARE_DicomStoreIAMMember } from "./healthcare/DicomStoreIAMMember";
import { DatasetIAMMember as HEALTHCARE_DatasetIAMMember } from "./healthcare/DatasetIAMMember";
import { DicomStoreIAMBinding as HEALTHCARE_DicomStoreIAMBinding } from "./healthcare/DicomStoreIAMBinding";
import { DicomStoreIamPolicy as HEALTHCARE_DicomStoreIamPolicy } from "./healthcare/DicomStoreIamPolicy";
import { ConsentStoreIAMMember as HEALTHCARE_ConsentStoreIAMMember } from "./healthcare/ConsentStoreIAMMember";
import { DatasetIamPolicy as HEALTHCARE_DatasetIamPolicy } from "./healthcare/DatasetIamPolicy";
import { FhirStoreIAMMember as HEALTHCARE_FhirStoreIAMMember } from "./healthcare/FhirStoreIAMMember";
import { Dataset as HEALTHCARE_Dataset } from "./healthcare/Dataset";
import { Hl7StoreIAMMember as HEALTHCARE_Hl7StoreIAMMember } from "./healthcare/Hl7StoreIAMMember";
import { FhirStoreIamPolicy as HEALTHCARE_FhirStoreIamPolicy } from "./healthcare/FhirStoreIamPolicy";
import { ConsentStoreIamPolicy as HEALTHCARE_ConsentStoreIamPolicy } from "./healthcare/ConsentStoreIamPolicy";
import { Hl7Store as HEALTHCARE_Hl7Store } from "./healthcare/Hl7Store";
import { Hl7StoreIAMBinding as HEALTHCARE_Hl7StoreIAMBinding } from "./healthcare/Hl7StoreIAMBinding";
import { ConsentStore as HEALTHCARE_ConsentStore } from "./healthcare/ConsentStore";
import { DicomStore as HEALTHCARE_DicomStore } from "./healthcare/DicomStore";
import { Group as MIGRATIONCENTER_Group } from "./migrationcenter/Group";
import { PreferenceSet as MIGRATIONCENTER_PreferenceSet } from "./migrationcenter/PreferenceSet";
import { Table as BIGLAKE_Table } from "./biglake/Table";
import { Database as BIGLAKE_Database } from "./biglake/Database";
import { Catalog as BIGLAKE_Catalog } from "./biglake/Catalog";
import { ProjectFeed as CLOUDASSET_ProjectFeed } from "./cloudasset/ProjectFeed";
import { OrganizationFeed as CLOUDASSET_OrganizationFeed } from "./cloudasset/OrganizationFeed";
import { FolderFeed as CLOUDASSET_FolderFeed } from "./cloudasset/FolderFeed";
import { PrivateConnection as DATASTREAM_PrivateConnection } from "./datastream/PrivateConnection";
import { ConnectionProfile as DATASTREAM_ConnectionProfile } from "./datastream/ConnectionProfile";
import { Stream as DATASTREAM_Stream } from "./datastream/Stream";
import { TargetGrpcProxy as COMPUTE_TargetGrpcProxy } from "./compute/TargetGrpcProxy";
import { MachineImageIamPolicy as COMPUTE_MachineImageIamPolicy } from "./compute/MachineImageIamPolicy";
import { RouterInterface as COMPUTE_RouterInterface } from "./compute/RouterInterface";
import { BackendBucketIamPolicy as COMPUTE_BackendBucketIamPolicy } from "./compute/BackendBucketIamPolicy";
import { SharedVPCServiceProject as COMPUTE_SharedVPCServiceProject } from "./compute/SharedVPCServiceProject";
import { MangedSslCertificate as COMPUTE_MangedSslCertificate } from "./compute/MangedSslCertificate";
import { PacketMirroring as COMPUTE_PacketMirroring } from "./compute/PacketMirroring";
import { RouterNat as COMPUTE_RouterNat } from "./compute/RouterNat";
import { BackendBucketIAMMember as COMPUTE_BackendBucketIAMMember } from "./compute/BackendBucketIAMMember";
import { DiskAsyncReplication as COMPUTE_DiskAsyncReplication } from "./compute/DiskAsyncReplication";
import { NodeGroup as COMPUTE_NodeGroup } from "./compute/NodeGroup";
import { RegionUrlMap as COMPUTE_RegionUrlMap } from "./compute/RegionUrlMap";
import { RegionBackendService as COMPUTE_RegionBackendService } from "./compute/RegionBackendService";
import { DiskResourcePolicyAttachment as COMPUTE_DiskResourcePolicyAttachment } from "./compute/DiskResourcePolicyAttachment";
import { RegionTargetTcpProxy as COMPUTE_RegionTargetTcpProxy } from "./compute/RegionTargetTcpProxy";
import { BackendService as COMPUTE_BackendService } from "./compute/BackendService";
import { Reservation as COMPUTE_Reservation } from "./compute/Reservation";
import { ProjectDefaultNetworkTier as COMPUTE_ProjectDefaultNetworkTier } from "./compute/ProjectDefaultNetworkTier";
import { RegionHealthCheck as COMPUTE_RegionHealthCheck } from "./compute/RegionHealthCheck";
import { RegionTargetHttpProxy as COMPUTE_RegionTargetHttpProxy } from "./compute/RegionTargetHttpProxy";
import { RegionSecurityPolicy as COMPUTE_RegionSecurityPolicy } from "./compute/RegionSecurityPolicy";
import { RegionDiskIAMBinding as COMPUTE_RegionDiskIAMBinding } from "./compute/RegionDiskIAMBinding";
import { ForwardingRule as COMPUTE_ForwardingRule } from "./compute/ForwardingRule";
import { RegionInstanceTemplate as COMPUTE_RegionInstanceTemplate } from "./compute/RegionInstanceTemplate";
import { InstanceGroupNamedPort as COMPUTE_InstanceGroupNamedPort } from "./compute/InstanceGroupNamedPort";
import { NetworkEndpointList as COMPUTE_NetworkEndpointList } from "./compute/NetworkEndpointList";
import { BackendServiceIAMMember as COMPUTE_BackendServiceIAMMember } from "./compute/BackendServiceIAMMember";
import { InstanceSettings as COMPUTE_InstanceSettings } from "./compute/InstanceSettings";
import { ResourcePolicy as COMPUTE_ResourcePolicy } from "./compute/ResourcePolicy";
import { RegionBackendServiceIamPolicy as COMPUTE_RegionBackendServiceIamPolicy } from "./compute/RegionBackendServiceIamPolicy";
import { PublicDelegatedPrefix as COMPUTE_PublicDelegatedPrefix } from "./compute/PublicDelegatedPrefix";
import { NetworkEndpointGroup as COMPUTE_NetworkEndpointGroup } from "./compute/NetworkEndpointGroup";
import { GlobalNetworkEndpoint as COMPUTE_GlobalNetworkEndpoint } from "./compute/GlobalNetworkEndpoint";
import { ProjectMetadataItem as COMPUTE_ProjectMetadataItem } from "./compute/ProjectMetadataItem";
import { AttachedDisk as COMPUTE_AttachedDisk } from "./compute/AttachedDisk";
import { TargetPool as COMPUTE_TargetPool } from "./compute/TargetPool";
import { NetworkAttachment as COMPUTE_NetworkAttachment } from "./compute/NetworkAttachment";
import { RegionTargetHttpsProxy as COMPUTE_RegionTargetHttpsProxy } from "./compute/RegionTargetHttpsProxy";
import { ExternalVpnGateway as COMPUTE_ExternalVpnGateway } from "./compute/ExternalVpnGateway";
import { RegionDiskIamPolicy as COMPUTE_RegionDiskIamPolicy } from "./compute/RegionDiskIamPolicy";
import { GlobalNetworkEndpointGroup as COMPUTE_GlobalNetworkEndpointGroup } from "./compute/GlobalNetworkEndpointGroup";
import { SecurityScanConfig as COMPUTE_SecurityScanConfig } from "./compute/SecurityScanConfig";
import { Autoscaler as COMPUTE_Autoscaler } from "./compute/Autoscaler";
import { RegionNetworkFirewallPolicyAssociation as COMPUTE_RegionNetworkFirewallPolicyAssociation } from "./compute/RegionNetworkFirewallPolicyAssociation";
import { URLMap as COMPUTE_URLMap } from "./compute/URLMap";
import { BackendServiceSignedUrlKey as COMPUTE_BackendServiceSignedUrlKey } from "./compute/BackendServiceSignedUrlKey";
import { FirewallPolicyRule as COMPUTE_FirewallPolicyRule } from "./compute/FirewallPolicyRule";
import { ManagedSslCertificate as COMPUTE_ManagedSslCertificate } from "./compute/ManagedSslCertificate";
import { TargetTCPProxy as COMPUTE_TargetTCPProxy } from "./compute/TargetTCPProxy";
import { InterconnectAttachment as COMPUTE_InterconnectAttachment } from "./compute/InterconnectAttachment";
import { NetworkEndpoint as COMPUTE_NetworkEndpoint } from "./compute/NetworkEndpoint";
import { InstanceGroupMembership as COMPUTE_InstanceGroupMembership } from "./compute/InstanceGroupMembership";
import { NetworkFirewallPolicy as COMPUTE_NetworkFirewallPolicy } from "./compute/NetworkFirewallPolicy";
import { FirewallPolicy as COMPUTE_FirewallPolicy } from "./compute/FirewallPolicy";
import { MachineImageIAMBinding as COMPUTE_MachineImageIAMBinding } from "./compute/MachineImageIAMBinding";
import { RegionCommitment as COMPUTE_RegionCommitment } from "./compute/RegionCommitment";
import { DiskIAMBinding as COMPUTE_DiskIAMBinding } from "./compute/DiskIAMBinding";
import { HealthCheck as COMPUTE_HealthCheck } from "./compute/HealthCheck";
import { CaExternalAccountKey as COMPUTE_CaExternalAccountKey } from "./compute/CaExternalAccountKey";
import { RegionDisk as COMPUTE_RegionDisk } from "./compute/RegionDisk";
import { InstanceFromMachineImage as COMPUTE_InstanceFromMachineImage } from "./compute/InstanceFromMachineImage";
import { RegionSslPolicy as COMPUTE_RegionSslPolicy } from "./compute/RegionSslPolicy";
import { ImageIAMMember as COMPUTE_ImageIAMMember } from "./compute/ImageIAMMember";
import { NetworkFirewallPolicyRule as COMPUTE_NetworkFirewallPolicyRule } from "./compute/NetworkFirewallPolicyRule";
import { TargetHttpsProxy as COMPUTE_TargetHttpsProxy } from "./compute/TargetHttpsProxy";
import { RegionBackendServiceIAMMember as COMPUTE_RegionBackendServiceIAMMember } from "./compute/RegionBackendServiceIAMMember";
import { BackendBucket as COMPUTE_BackendBucket } from "./compute/BackendBucket";
import { PublicAdvertisedPrefix as COMPUTE_PublicAdvertisedPrefix } from "./compute/PublicAdvertisedPrefix";
import { NetworkEdgeSecurityService as COMPUTE_NetworkEdgeSecurityService } from "./compute/NetworkEdgeSecurityService";
import { SubnetworkIAMMember as COMPUTE_SubnetworkIAMMember } from "./compute/SubnetworkIAMMember";
import { InstanceGroup as COMPUTE_InstanceGroup } from "./compute/InstanceGroup";
import { Firewall as COMPUTE_Firewall } from "./compute/Firewall";
import { RegionSslCertificate as COMPUTE_RegionSslCertificate } from "./compute/RegionSslCertificate";
import { ServiceAttachment as COMPUTE_ServiceAttachment } from "./compute/ServiceAttachment";
import { SSLCertificate as COMPUTE_SSLCertificate } from "./compute/SSLCertificate";
import { SSLPolicy as COMPUTE_SSLPolicy } from "./compute/SSLPolicy";
import { RegionNetworkEndpoint as COMPUTE_RegionNetworkEndpoint } from "./compute/RegionNetworkEndpoint";
import { NetworkFirewallPolicyAssociation as COMPUTE_NetworkFirewallPolicyAssociation } from "./compute/NetworkFirewallPolicyAssociation";
import { Instance as COMPUTE_Instance } from "./compute/Instance";
import { HaVpnGateway as COMPUTE_HaVpnGateway } from "./compute/HaVpnGateway";
import { InstanceGroupManager as COMPUTE_InstanceGroupManager } from "./compute/InstanceGroupManager";
import { RegionNetworkEndpointGroup as COMPUTE_RegionNetworkEndpointGroup } from "./compute/RegionNetworkEndpointGroup";
import { InstanceTemplate as COMPUTE_InstanceTemplate } from "./compute/InstanceTemplate";
import { NodeTemplate as COMPUTE_NodeTemplate } from "./compute/NodeTemplate";
import { NetworkPeering as COMPUTE_NetworkPeering } from "./compute/NetworkPeering";
import { SecurityPolicy as COMPUTE_SecurityPolicy } from "./compute/SecurityPolicy";
import { Route as COMPUTE_Route } from "./compute/Route";
import { Network as COMPUTE_Network } from "./compute/Network";
import { SharedVPCHostProject as COMPUTE_SharedVPCHostProject } from "./compute/SharedVPCHostProject";
import { Address as COMPUTE_Address } from "./compute/Address";
import { DiskIamPolicy as COMPUTE_DiskIamPolicy } from "./compute/DiskIamPolicy";
import { ImageIamPolicy as COMPUTE_ImageIamPolicy } from "./compute/ImageIamPolicy";
import { RegionNetworkFirewallPolicy as COMPUTE_RegionNetworkFirewallPolicy } from "./compute/RegionNetworkFirewallPolicy";
import { RegionDiskIAMMember as COMPUTE_RegionDiskIAMMember } from "./compute/RegionDiskIAMMember";
import { SnapshotIAMBinding as COMPUTE_SnapshotIAMBinding } from "./compute/SnapshotIAMBinding";
import { PerInstanceConfig as COMPUTE_PerInstanceConfig } from "./compute/PerInstanceConfig";
import { Subnetwork as COMPUTE_Subnetwork } from "./compute/Subnetwork";
import { Image as COMPUTE_Image } from "./compute/Image";
import { InstanceIAMPolicy as COMPUTE_InstanceIAMPolicy } from "./compute/InstanceIAMPolicy";
import { SnapshotIAMMember as COMPUTE_SnapshotIAMMember } from "./compute/SnapshotIAMMember";
import { TargetSSLProxy as COMPUTE_TargetSSLProxy } from "./compute/TargetSSLProxy";
import { VPNTunnel as COMPUTE_VPNTunnel } from "./compute/VPNTunnel";
import { FirewallPolicyAssociation as COMPUTE_FirewallPolicyAssociation } from "./compute/FirewallPolicyAssociation";
import { RegionNetworkFirewallPolicyRule as COMPUTE_RegionNetworkFirewallPolicyRule } from "./compute/RegionNetworkFirewallPolicyRule";
import { Router as COMPUTE_Router } from "./compute/Router";
import { BackendServiceIamPolicy as COMPUTE_BackendServiceIamPolicy } from "./compute/BackendServiceIamPolicy";
import { Disk as COMPUTE_Disk } from "./compute/Disk";
import { VPNGateway as COMPUTE_VPNGateway } from "./compute/VPNGateway";
import { InstanceFromTemplate as COMPUTE_InstanceFromTemplate } from "./compute/InstanceFromTemplate";
import { ImageIAMBinding as COMPUTE_ImageIAMBinding } from "./compute/ImageIAMBinding";
import { SnapshotIamPolicy as COMPUTE_SnapshotIamPolicy } from "./compute/SnapshotIamPolicy";
import { Snapshot as COMPUTE_Snapshot } from "./compute/Snapshot";
import { DiskIAMMember as COMPUTE_DiskIAMMember } from "./compute/DiskIAMMember";
import { NetworkPeeringRoutesConfig as COMPUTE_NetworkPeeringRoutesConfig } from "./compute/NetworkPeeringRoutesConfig";
import { TargetHttpProxy as COMPUTE_TargetHttpProxy } from "./compute/TargetHttpProxy";
import { RegionInstanceGroupManager as COMPUTE_RegionInstanceGroupManager } from "./compute/RegionInstanceGroupManager";
import { RegionSecurityPolicyRule as COMPUTE_RegionSecurityPolicyRule } from "./compute/RegionSecurityPolicyRule";
import { GlobalAddress as COMPUTE_GlobalAddress } from "./compute/GlobalAddress";
import { RegionDiskResourcePolicyAttachment as COMPUTE_RegionDiskResourcePolicyAttachment } from "./compute/RegionDiskResourcePolicyAttachment";
import { BackendServiceIAMBinding as COMPUTE_BackendServiceIAMBinding } from "./compute/BackendServiceIAMBinding";
import { BackendBucketIAMBinding as COMPUTE_BackendBucketIAMBinding } from "./compute/BackendBucketIAMBinding";
import { ProjectMetadata as COMPUTE_ProjectMetadata } from "./compute/ProjectMetadata";
import { RegionPerInstanceConfig as COMPUTE_RegionPerInstanceConfig } from "./compute/RegionPerInstanceConfig";
import { HttpsHealthCheck as COMPUTE_HttpsHealthCheck } from "./compute/HttpsHealthCheck";
import { MachineImageIAMMember as COMPUTE_MachineImageIAMMember } from "./compute/MachineImageIAMMember";
import { RegionBackendServiceIAMBinding as COMPUTE_RegionBackendServiceIAMBinding } from "./compute/RegionBackendServiceIAMBinding";
import { MachineImage as COMPUTE_MachineImage } from "./compute/MachineImage";
import { RouterPeer as COMPUTE_RouterPeer } from "./compute/RouterPeer";
import { OrganizationSecurityPolicyRule as COMPUTE_OrganizationSecurityPolicyRule } from "./compute/OrganizationSecurityPolicyRule";
import { SubnetworkIAMPolicy as COMPUTE_SubnetworkIAMPolicy } from "./compute/SubnetworkIAMPolicy";
import { BackendBucketSignedUrlKey as COMPUTE_BackendBucketSignedUrlKey } from "./compute/BackendBucketSignedUrlKey";
import { OrganizationSecurityPolicyAssociation as COMPUTE_OrganizationSecurityPolicyAssociation } from "./compute/OrganizationSecurityPolicyAssociation";
import { RegionAutoscaler as COMPUTE_RegionAutoscaler } from "./compute/RegionAutoscaler";
import { GlobalForwardingRule as COMPUTE_GlobalForwardingRule } from "./compute/GlobalForwardingRule";
import { SubnetworkIAMBinding as COMPUTE_SubnetworkIAMBinding } from "./compute/SubnetworkIAMBinding";
import { TargetInstance as COMPUTE_TargetInstance } from "./compute/TargetInstance";
import { HttpHealthCheck as COMPUTE_HttpHealthCheck } from "./compute/HttpHealthCheck";
import { InstanceIAMMember as COMPUTE_InstanceIAMMember } from "./compute/InstanceIAMMember";
import { InstanceIAMBinding as COMPUTE_InstanceIAMBinding } from "./compute/InstanceIAMBinding";
import { OrganizationSecurityPolicy as COMPUTE_OrganizationSecurityPolicy } from "./compute/OrganizationSecurityPolicy";
import { AuthorizationPolicy as NETWORKSECURITY_AuthorizationPolicy } from "./networksecurity/AuthorizationPolicy";
import { ClientTlsPolicy as NETWORKSECURITY_ClientTlsPolicy } from "./networksecurity/ClientTlsPolicy";
import { AddressGroup as NETWORKSECURITY_AddressGroup } from "./networksecurity/AddressGroup";
import { ServerTlsPolicy as NETWORKSECURITY_ServerTlsPolicy } from "./networksecurity/ServerTlsPolicy";
import { AddressGroupIamPolicy as NETWORKSECURITY_AddressGroupIamPolicy } from "./networksecurity/AddressGroupIamPolicy";
import { FirewallEndpoint as NETWORKSECURITY_FirewallEndpoint } from "./networksecurity/FirewallEndpoint";
import { SecurityProfileGroup as NETWORKSECURITY_SecurityProfileGroup } from "./networksecurity/SecurityProfileGroup";
import { SecurityProfile as NETWORKSECURITY_SecurityProfile } from "./networksecurity/SecurityProfile";
import { AddressGroupIAMMember as NETWORKSECURITY_AddressGroupIAMMember } from "./networksecurity/AddressGroupIAMMember";
import { GatewaySecurityPolicyRule as NETWORKSECURITY_GatewaySecurityPolicyRule } from "./networksecurity/GatewaySecurityPolicyRule";
import { UrlList as NETWORKSECURITY_UrlList } from "./networksecurity/UrlList";
import { AddressGroupIAMBinding as NETWORKSECURITY_AddressGroupIAMBinding } from "./networksecurity/AddressGroupIAMBinding";
import { GatewaySecurityPolicy as NETWORKSECURITY_GatewaySecurityPolicy } from "./networksecurity/GatewaySecurityPolicy";
import { TlsInspectionPolicy as NETWORKSECURITY_TlsInspectionPolicy } from "./networksecurity/TlsInspectionPolicy";
import { Instance as LOOKER_Instance } from "./looker/Instance";
import { IAMPolicy as FOLDER_IAMPolicy } from "./folder/IAMPolicy";
import { IAMBinding as FOLDER_IAMBinding } from "./folder/IAMBinding";
import { AccessApprovalSettings as FOLDER_AccessApprovalSettings } from "./folder/AccessApprovalSettings";
import { IAMMember as FOLDER_IAMMember } from "./folder/IAMMember";
import { OrganizationPolicy as FOLDER_OrganizationPolicy } from "./folder/OrganizationPolicy";
import { IAMAuditConfig as FOLDER_IAMAuditConfig } from "./folder/IAMAuditConfig";
import { AssetIamPolicy as DATAPLEX_AssetIamPolicy } from "./dataplex/AssetIamPolicy";
import { AssetIAMMember as DATAPLEX_AssetIAMMember } from "./dataplex/AssetIAMMember";
import { Asset as DATAPLEX_Asset } from "./dataplex/Asset";
import { TaskIAMMember as DATAPLEX_TaskIAMMember } from "./dataplex/TaskIAMMember";
import { Task as DATAPLEX_Task } from "./dataplex/Task";
import { Datascan as DATAPLEX_Datascan } from "./dataplex/Datascan";
import { AssetIAMBinding as DATAPLEX_AssetIAMBinding } from "./dataplex/AssetIAMBinding";
import { LakeIAMMember as DATAPLEX_LakeIAMMember } from "./dataplex/LakeIAMMember";
import { DatascanIamPolicy as DATAPLEX_DatascanIamPolicy } from "./dataplex/DatascanIamPolicy";
import { DatascanIAMBinding as DATAPLEX_DatascanIAMBinding } from "./dataplex/DatascanIAMBinding";
import { TaskIamPolicy as DATAPLEX_TaskIamPolicy } from "./dataplex/TaskIamPolicy";
import { LakeIAMBinding as DATAPLEX_LakeIAMBinding } from "./dataplex/LakeIAMBinding";
import { TaskIAMBinding as DATAPLEX_TaskIAMBinding } from "./dataplex/TaskIAMBinding";
import { Zone as DATAPLEX_Zone } from "./dataplex/Zone";
import { LakeIamPolicy as DATAPLEX_LakeIamPolicy } from "./dataplex/LakeIamPolicy";
import { Lake as DATAPLEX_Lake } from "./dataplex/Lake";
import { ZoneIamPolicy as DATAPLEX_ZoneIamPolicy } from "./dataplex/ZoneIamPolicy";
import { ZoneIAMBinding as DATAPLEX_ZoneIAMBinding } from "./dataplex/ZoneIAMBinding";
import { ZoneIAMMember as DATAPLEX_ZoneIAMMember } from "./dataplex/ZoneIAMMember";
import { DatascanIAMMember as DATAPLEX_DatascanIAMMember } from "./dataplex/DatascanIAMMember";
import { SecretIAMBinding as SECRETMANAGER_SecretIAMBinding } from "./secretmanager/SecretIAMBinding";
import { SecretIamPolicy as SECRETMANAGER_SecretIamPolicy } from "./secretmanager/SecretIamPolicy";
import { Secret as SECRETMANAGER_Secret } from "./secretmanager/Secret";
import { SecretIAMMember as SECRETMANAGER_SecretIAMMember } from "./secretmanager/SecretIAMMember";
import { SecretVersion as SECRETMANAGER_SecretVersion } from "./secretmanager/SecretVersion";
import { FirewallRule as APPENGINE_FirewallRule } from "./appengine/FirewallRule";
import { ApplicationUrlDispatchRules as APPENGINE_ApplicationUrlDispatchRules } from "./appengine/ApplicationUrlDispatchRules";
import { Application as APPENGINE_Application } from "./appengine/Application";
import { StandardAppVersion as APPENGINE_StandardAppVersion } from "./appengine/StandardAppVersion";
import { FlexibleAppVersion as APPENGINE_FlexibleAppVersion } from "./appengine/FlexibleAppVersion";
import { ServiceNetworkSettings as APPENGINE_ServiceNetworkSettings } from "./appengine/ServiceNetworkSettings";
import { DomainMapping as APPENGINE_DomainMapping } from "./appengine/DomainMapping";
import { EngineSplitTraffic as APPENGINE_EngineSplitTraffic } from "./appengine/EngineSplitTraffic";
import { Pipeline as DATAFLOW_Pipeline } from "./dataflow/Pipeline";
import { Job as DATAFLOW_Job } from "./dataflow/Job";
import { FlexTemplateJob as DATAFLOW_FlexTemplateJob } from "./dataflow/FlexTemplateJob";
import { IAMMember as PROJECTS_IAMMember } from "./projects/IAMMember";
import { OrganizationPolicy as PROJECTS_OrganizationPolicy } from "./projects/OrganizationPolicy";
import { UsageExportBucket as PROJECTS_UsageExportBucket } from "./projects/UsageExportBucket";
import { IAMPolicy as PROJECTS_IAMPolicy } from "./projects/IAMPolicy";
import { IAMBinding as PROJECTS_IAMBinding } from "./projects/IAMBinding";
import { ApiKey as PROJECTS_ApiKey } from "./projects/ApiKey";
import { ServiceIdentity as PROJECTS_ServiceIdentity } from "./projects/ServiceIdentity";
import { AccessApprovalSettings as PROJECTS_AccessApprovalSettings } from "./projects/AccessApprovalSettings";
import { IAMAuditConfig as PROJECTS_IAMAuditConfig } from "./projects/IAMAuditConfig";
import { DefaultServiceAccounts as PROJECTS_DefaultServiceAccounts } from "./projects/DefaultServiceAccounts";
import { Service as PROJECTS_Service } from "./projects/Service";
import { IAMCustomRole as PROJECTS_IAMCustomRole } from "./projects/IAMCustomRole";
import { Instance as DATAFUSION_Instance } from "./datafusion/Instance";
import { FunctionIamPolicy as CLOUDFUNCTIONSV2_FunctionIamPolicy } from "./cloudfunctionsv2/FunctionIamPolicy";
import { FunctionIAMBinding as CLOUDFUNCTIONSV2_FunctionIAMBinding } from "./cloudfunctionsv2/FunctionIAMBinding";
import { FunctionIAMMember as CLOUDFUNCTIONSV2_FunctionIAMMember } from "./cloudfunctionsv2/FunctionIAMMember";
import { Function as CLOUDFUNCTIONSV2_Function } from "./cloudfunctionsv2/Function";
import { RepositoryIAMMember as ARTIFACTREGISTRY_RepositoryIAMMember } from "./artifactregistry/RepositoryIAMMember";
import { VpcscConfig as ARTIFACTREGISTRY_VpcscConfig } from "./artifactregistry/VpcscConfig";
import { RepositoryIamPolicy as ARTIFACTREGISTRY_RepositoryIamPolicy } from "./artifactregistry/RepositoryIamPolicy";
import { RepositoryIAMBinding as ARTIFACTREGISTRY_RepositoryIAMBinding } from "./artifactregistry/RepositoryIAMBinding";
import { Repository as ARTIFACTREGISTRY_Repository } from "./artifactregistry/Repository";
import { ServicePerimeters as ACCESSCONTEXTMANAGER_ServicePerimeters } from "./accesscontextmanager/ServicePerimeters";
import { ServicePerimeterResource as ACCESSCONTEXTMANAGER_ServicePerimeterResource } from "./accesscontextmanager/ServicePerimeterResource";
import { AccessPolicyIAMMember as ACCESSCONTEXTMANAGER_AccessPolicyIAMMember } from "./accesscontextmanager/AccessPolicyIAMMember";
import { AccessPolicy as ACCESSCONTEXTMANAGER_AccessPolicy } from "./accesscontextmanager/AccessPolicy";
import { AccessLevelCondition as ACCESSCONTEXTMANAGER_AccessLevelCondition } from "./accesscontextmanager/AccessLevelCondition";
import { ServicePerimeter as ACCESSCONTEXTMANAGER_ServicePerimeter } from "./accesscontextmanager/ServicePerimeter";
import { AuthorizedOrgsDesc as ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc } from "./accesscontextmanager/AuthorizedOrgsDesc";
import { GcpUserAccessBinding as ACCESSCONTEXTMANAGER_GcpUserAccessBinding } from "./accesscontextmanager/GcpUserAccessBinding";
import { AccessPolicyIamPolicy as ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy } from "./accesscontextmanager/AccessPolicyIamPolicy";
import { AccessPolicyIAMBinding as ACCESSCONTEXTMANAGER_AccessPolicyIAMBinding } from "./accesscontextmanager/AccessPolicyIAMBinding";
import { IngressPolicy as ACCESSCONTEXTMANAGER_IngressPolicy } from "./accesscontextmanager/IngressPolicy";
import { ServicePerimeterEgressPolicy as ACCESSCONTEXTMANAGER_ServicePerimeterEgressPolicy } from "./accesscontextmanager/ServicePerimeterEgressPolicy";
import { ServicePerimeterIngressPolicy as ACCESSCONTEXTMANAGER_ServicePerimeterIngressPolicy } from "./accesscontextmanager/ServicePerimeterIngressPolicy";
import { AccessLevel as ACCESSCONTEXTMANAGER_AccessLevel } from "./accesscontextmanager/AccessLevel";
import { AccessLevels as ACCESSCONTEXTMANAGER_AccessLevels } from "./accesscontextmanager/AccessLevels";
import { EgressPolicy as ACCESSCONTEXTMANAGER_EgressPolicy } from "./accesscontextmanager/EgressPolicy";
import { HmacKey as STORAGE_HmacKey } from "./storage/HmacKey";
import { BucketObject as STORAGE_BucketObject } from "./storage/BucketObject";
import { TransferJob as STORAGE_TransferJob } from "./storage/TransferJob";
import { BucketIAMBinding as STORAGE_BucketIAMBinding } from "./storage/BucketIAMBinding";
import { Notification as STORAGE_Notification } from "./storage/Notification";
import { InsightsReportConfig as STORAGE_InsightsReportConfig } from "./storage/InsightsReportConfig";
import { Bucket as STORAGE_Bucket } from "./storage/Bucket";
import { DefaultObjectACL as STORAGE_DefaultObjectACL } from "./storage/DefaultObjectACL";
import { BucketAccessControl as STORAGE_BucketAccessControl } from "./storage/BucketAccessControl";
import { BucketIAMPolicy as STORAGE_BucketIAMPolicy } from "./storage/BucketIAMPolicy";
import { BucketIAMMember as STORAGE_BucketIAMMember } from "./storage/BucketIAMMember";
import { ObjectACL as STORAGE_ObjectACL } from "./storage/ObjectACL";
import { ObjectAccessControl as STORAGE_ObjectAccessControl } from "./storage/ObjectAccessControl";
import { TransferAgentPool as STORAGE_TransferAgentPool } from "./storage/TransferAgentPool";
import { DefaultObjectAccessControl as STORAGE_DefaultObjectAccessControl } from "./storage/DefaultObjectAccessControl";
import { BucketACL as STORAGE_BucketACL } from "./storage/BucketACL";
import { PrivateConnection as DATABASEMIGRATIONSERVICE_PrivateConnection } from "./databasemigrationservice/PrivateConnection";
import { ConnectionProfile as DATABASEMIGRATIONSERVICE_ConnectionProfile } from "./databasemigrationservice/ConnectionProfile";
import { ProjectCustomModule as SECURITYCENTER_ProjectCustomModule } from "./securitycenter/ProjectCustomModule";
import { InstanceIAMMember as SECURITYCENTER_InstanceIAMMember } from "./securitycenter/InstanceIAMMember";
import { InstanceIAMBinding as SECURITYCENTER_InstanceIAMBinding } from "./securitycenter/InstanceIAMBinding";
import { SourceIamPolicy as SECURITYCENTER_SourceIamPolicy } from "./securitycenter/SourceIamPolicy";
import { InstanceIAMPolicy as SECURITYCENTER_InstanceIAMPolicy } from "./securitycenter/InstanceIAMPolicy";
import { EventThreatDetectionCustomModule as SECURITYCENTER_EventThreatDetectionCustomModule } from "./securitycenter/EventThreatDetectionCustomModule";
import { NotificationConfig as SECURITYCENTER_NotificationConfig } from "./securitycenter/NotificationConfig";
import { Source as SECURITYCENTER_Source } from "./securitycenter/Source";
import { SourceIAMBinding as SECURITYCENTER_SourceIAMBinding } from "./securitycenter/SourceIAMBinding";
import { FolderCustomModule as SECURITYCENTER_FolderCustomModule } from "./securitycenter/FolderCustomModule";
import { SourceIAMMember as SECURITYCENTER_SourceIAMMember } from "./securitycenter/SourceIAMMember";
import { MuteConfig as SECURITYCENTER_MuteConfig } from "./securitycenter/MuteConfig";
import { OrganizationCustomModule as SECURITYCENTER_OrganizationCustomModule } from "./securitycenter/OrganizationCustomModule";
import { PolicyBasedRoute as NETWORKCONNECTIVITY_PolicyBasedRoute } from "./networkconnectivity/PolicyBasedRoute";
import { Hub as NETWORKCONNECTIVITY_Hub } from "./networkconnectivity/Hub";
import { Spoke as NETWORKCONNECTIVITY_Spoke } from "./networkconnectivity/Spoke";
import { ServiceConnectionPolicy as NETWORKCONNECTIVITY_ServiceConnectionPolicy } from "./networkconnectivity/ServiceConnectionPolicy";
import { Trigger as EVENTARC_Trigger } from "./eventarc/Trigger";
import { Channel as EVENTARC_Channel } from "./eventarc/Channel";
import { GoogleChannelConfig as EVENTARC_GoogleChannelConfig } from "./eventarc/GoogleChannelConfig";
import { AppCheckAppAttestConfig as FIREBASE_AppCheckAppAttestConfig } from "./firebase/AppCheckAppAttestConfig";
import { AppCheckPlayIntegrityConfig as FIREBASE_AppCheckPlayIntegrityConfig } from "./firebase/AppCheckPlayIntegrityConfig";
import { AppCheckServiceConfig as FIREBASE_AppCheckServiceConfig } from "./firebase/AppCheckServiceConfig";
import { ExtensionsInstance as FIREBASE_ExtensionsInstance } from "./firebase/ExtensionsInstance";
import { AppCheckDebugToken as FIREBASE_AppCheckDebugToken } from "./firebase/AppCheckDebugToken";
import { HostingSite as FIREBASE_HostingSite } from "./firebase/HostingSite";
import { StorageBucket as FIREBASE_StorageBucket } from "./firebase/StorageBucket";
import { AndroidApp as FIREBASE_AndroidApp } from "./firebase/AndroidApp";
import { Project as FIREBASE_Project } from "./firebase/Project";
import { HostingCustomDomain as FIREBASE_HostingCustomDomain } from "./firebase/HostingCustomDomain";
import { DatabaseInstance as FIREBASE_DatabaseInstance } from "./firebase/DatabaseInstance";
import { AppCheckRecaptchaV3Config as FIREBASE_AppCheckRecaptchaV3Config } from "./firebase/AppCheckRecaptchaV3Config";
import { HostingRelease as FIREBASE_HostingRelease } from "./firebase/HostingRelease";
import { AppleApp as FIREBASE_AppleApp } from "./firebase/AppleApp";
import { HostingVersion as FIREBASE_HostingVersion } from "./firebase/HostingVersion";
import { AppCheckRecaptchaEnterpriseConfig as FIREBASE_AppCheckRecaptchaEnterpriseConfig } from "./firebase/AppCheckRecaptchaEnterpriseConfig";
import { WebApp as FIREBASE_WebApp } from "./firebase/WebApp";
import { HostingChannel as FIREBASE_HostingChannel } from "./firebase/HostingChannel";
import { Lien as RESOURCEMANAGER_Lien } from "./resourcemanager/Lien";
import { PreventionInspectTemplate as DATALOSS_PreventionInspectTemplate } from "./dataloss/PreventionInspectTemplate";
import { PreventionDeidentifyTemplate as DATALOSS_PreventionDeidentifyTemplate } from "./dataloss/PreventionDeidentifyTemplate";
import { PreventionJobTrigger as DATALOSS_PreventionJobTrigger } from "./dataloss/PreventionJobTrigger";
import { PreventionStoredInfoType as DATALOSS_PreventionStoredInfoType } from "./dataloss/PreventionStoredInfoType";
import { ServiceIamPolicy as CLOUDRUNV2_ServiceIamPolicy } from "./cloudrunv2/ServiceIamPolicy";
import { JobIAMMember as CLOUDRUNV2_JobIAMMember } from "./cloudrunv2/JobIAMMember";
import { ServiceIAMBinding as CLOUDRUNV2_ServiceIAMBinding } from "./cloudrunv2/ServiceIAMBinding";
import { JobIAMBinding as CLOUDRUNV2_JobIAMBinding } from "./cloudrunv2/JobIAMBinding";
import { Service as CLOUDRUNV2_Service } from "./cloudrunv2/Service";
import { JobIamPolicy as CLOUDRUNV2_JobIamPolicy } from "./cloudrunv2/JobIamPolicy";
import { ServiceIAMMember as CLOUDRUNV2_ServiceIAMMember } from "./cloudrunv2/ServiceIAMMember";
import { Job as CLOUDRUNV2_Job } from "./cloudrunv2/Job";
import { Subnet as EDGENETWORK_Subnet } from "./edgenetwork/Subnet";
import { Network as EDGENETWORK_Network } from "./edgenetwork/Network";
import { RepositoryIAMMember as SOURCEREPO_RepositoryIAMMember } from "./sourcerepo/RepositoryIAMMember";
import { Repository as SOURCEREPO_Repository } from "./sourcerepo/Repository";
import { RepositoryIAMBinding as SOURCEREPO_RepositoryIAMBinding } from "./sourcerepo/RepositoryIAMBinding";
import { RepositoryIamPolicy as SOURCEREPO_RepositoryIamPolicy } from "./sourcerepo/RepositoryIamPolicy";
import { TunnelIAMBinding as IAP_TunnelIAMBinding } from "./iap/TunnelIAMBinding";
import { TunnelIamPolicy as IAP_TunnelIamPolicy } from "./iap/TunnelIamPolicy";
import { WebBackendServiceIamPolicy as IAP_WebBackendServiceIamPolicy } from "./iap/WebBackendServiceIamPolicy";
import { WebTypeComputeIAMMember as IAP_WebTypeComputeIAMMember } from "./iap/WebTypeComputeIAMMember";
import { WebTypeComputeIAMBinding as IAP_WebTypeComputeIAMBinding } from "./iap/WebTypeComputeIAMBinding";
import { WebTypeComputeIamPolicy as IAP_WebTypeComputeIamPolicy } from "./iap/WebTypeComputeIamPolicy";
import { WebRegionBackendServiceIAMMember as IAP_WebRegionBackendServiceIAMMember } from "./iap/WebRegionBackendServiceIAMMember";
import { WebIAMBinding as IAP_WebIAMBinding } from "./iap/WebIAMBinding";
import { TunnelIAMMember as IAP_TunnelIAMMember } from "./iap/TunnelIAMMember";
import { TunnelInstanceIAMPolicy as IAP_TunnelInstanceIAMPolicy } from "./iap/TunnelInstanceIAMPolicy";
import { AppEngineVersionIAMMember as IAP_AppEngineVersionIAMMember } from "./iap/AppEngineVersionIAMMember";
import { WebBackendServiceIAMBinding as IAP_WebBackendServiceIAMBinding } from "./iap/WebBackendServiceIAMBinding";
import { Brand as IAP_Brand } from "./iap/Brand";
import { WebIAMMember as IAP_WebIAMMember } from "./iap/WebIAMMember";
import { AppEngineVersionIamPolicy as IAP_AppEngineVersionIamPolicy } from "./iap/AppEngineVersionIamPolicy";
import { WebBackendServiceIAMMember as IAP_WebBackendServiceIAMMember } from "./iap/WebBackendServiceIAMMember";
import { AppEngineVersionIAMBinding as IAP_AppEngineVersionIAMBinding } from "./iap/AppEngineVersionIAMBinding";
import { AppEngineServiceIAMMember as IAP_AppEngineServiceIAMMember } from "./iap/AppEngineServiceIAMMember";
import { WebIamPolicy as IAP_WebIamPolicy } from "./iap/WebIamPolicy";
import { AppEngineServiceIamPolicy as IAP_AppEngineServiceIamPolicy } from "./iap/AppEngineServiceIamPolicy";
import { AppEngineServiceIAMBinding as IAP_AppEngineServiceIAMBinding } from "./iap/AppEngineServiceIAMBinding";
import { WebTypeAppEngingIAMMember as IAP_WebTypeAppEngingIAMMember } from "./iap/WebTypeAppEngingIAMMember";
import { WebRegionBackendServiceIamPolicy as IAP_WebRegionBackendServiceIamPolicy } from "./iap/WebRegionBackendServiceIamPolicy";
import { WebTypeAppEngingIamPolicy as IAP_WebTypeAppEngingIamPolicy } from "./iap/WebTypeAppEngingIamPolicy";
import { TunnelInstanceIAMMember as IAP_TunnelInstanceIAMMember } from "./iap/TunnelInstanceIAMMember";
import { WebRegionBackendServiceIAMBinding as IAP_WebRegionBackendServiceIAMBinding } from "./iap/WebRegionBackendServiceIAMBinding";
import { TunnelInstanceIAMBinding as IAP_TunnelInstanceIAMBinding } from "./iap/TunnelInstanceIAMBinding";
import { Client as IAP_Client } from "./iap/Client";
import { WebTypeAppEngingIAMBinding as IAP_WebTypeAppEngingIAMBinding } from "./iap/WebTypeAppEngingIAMBinding";
import { OrganizationBucketConfig as LOGGING_OrganizationBucketConfig } from "./logging/OrganizationBucketConfig";
import { BillingAccountBucketConfig as LOGGING_BillingAccountBucketConfig } from "./logging/BillingAccountBucketConfig";
import { Metric as LOGGING_Metric } from "./logging/Metric";
import { OrganizationExclusion as LOGGING_OrganizationExclusion } from "./logging/OrganizationExclusion";
import { OrganizationSettings as LOGGING_OrganizationSettings } from "./logging/OrganizationSettings";
import { ProjectSink as LOGGING_ProjectSink } from "./logging/ProjectSink";
import { LinkedDataset as LOGGING_LinkedDataset } from "./logging/LinkedDataset";
import { BillingAccountExclusion as LOGGING_BillingAccountExclusion } from "./logging/BillingAccountExclusion";
import { ProjectExclusion as LOGGING_ProjectExclusion } from "./logging/ProjectExclusion";
import { OrganizationSink as LOGGING_OrganizationSink } from "./logging/OrganizationSink";
import { FolderBucketConfig as LOGGING_FolderBucketConfig } from "./logging/FolderBucketConfig";
import { FolderSink as LOGGING_FolderSink } from "./logging/FolderSink";
import { FolderSettings as LOGGING_FolderSettings } from "./logging/FolderSettings";
import { ProjectBucketConfig as LOGGING_ProjectBucketConfig } from "./logging/ProjectBucketConfig";
import { BillingAccountSink as LOGGING_BillingAccountSink } from "./logging/BillingAccountSink";
import { LogView as LOGGING_LogView } from "./logging/LogView";
import { FolderExclusion as LOGGING_FolderExclusion } from "./logging/FolderExclusion";
import { OsPolicyAssignment as OSCONFIG_OsPolicyAssignment } from "./osconfig/OsPolicyAssignment";
import { PatchDeployment as OSCONFIG_PatchDeployment } from "./osconfig/PatchDeployment";
import { GuestPolicies as OSCONFIG_GuestPolicies } from "./osconfig/GuestPolicies";
import { InstanceIAMBinding as SECURESOURCEMANAGER_InstanceIAMBinding } from "./securesourcemanager/InstanceIAMBinding";
import { Instance as SECURESOURCEMANAGER_Instance } from "./securesourcemanager/Instance";
import { InstanceIAMPolicy as SECURESOURCEMANAGER_InstanceIAMPolicy } from "./securesourcemanager/InstanceIAMPolicy";
import { InstanceIAMMember as SECURESOURCEMANAGER_InstanceIAMMember } from "./securesourcemanager/InstanceIAMMember";
import { ConsumerQuotaOverride as SERVICEUSAGE_ConsumerQuotaOverride } from "./serviceusage/ConsumerQuotaOverride";
import { Registration as CLOUDDOMAINS_Registration } from "./clouddomains/Registration";
import { Ruleset as FIREBASERULES_Ruleset } from "./firebaserules/Ruleset";
import { Release as FIREBASERULES_Release } from "./firebaserules/Release";
import { Namespace as GKEHUB_Namespace } from "./gkehub/Namespace";
import { ScopeIAMMember as GKEHUB_ScopeIAMMember } from "./gkehub/ScopeIAMMember";
import { MembershipRbacRoleBinding as GKEHUB_MembershipRbacRoleBinding } from "./gkehub/MembershipRbacRoleBinding";
import { Feature as GKEHUB_Feature } from "./gkehub/Feature";
import { MembershipIAMMember as GKEHUB_MembershipIAMMember } from "./gkehub/MembershipIAMMember";
import { Membership as GKEHUB_Membership } from "./gkehub/Membership";
import { FeatureIAMBinding as GKEHUB_FeatureIAMBinding } from "./gkehub/FeatureIAMBinding";
import { MembershipIamPolicy as GKEHUB_MembershipIamPolicy } from "./gkehub/MembershipIamPolicy";
import { MembershipIAMBinding as GKEHUB_MembershipIAMBinding } from "./gkehub/MembershipIAMBinding";
import { ScopeIamPolicy as GKEHUB_ScopeIamPolicy } from "./gkehub/ScopeIamPolicy";
import { ScopeRbacRoleBinding as GKEHUB_ScopeRbacRoleBinding } from "./gkehub/ScopeRbacRoleBinding";
import { Scope as GKEHUB_Scope } from "./gkehub/Scope";
import { MembershipBinding as GKEHUB_MembershipBinding } from "./gkehub/MembershipBinding";
import { FeatureIamPolicy as GKEHUB_FeatureIamPolicy } from "./gkehub/FeatureIamPolicy";
import { ScopeIAMBinding as GKEHUB_ScopeIAMBinding } from "./gkehub/ScopeIAMBinding";
import { FeatureIAMMember as GKEHUB_FeatureIAMMember } from "./gkehub/FeatureIAMMember";
import { FeatureMembership as GKEHUB_FeatureMembership } from "./gkehub/FeatureMembership";
import { Fleet as GKEHUB_Fleet } from "./gkehub/Fleet";
import { RuntimeIamPolicy as NOTEBOOKS_RuntimeIamPolicy } from "./notebooks/RuntimeIamPolicy";
import { RuntimeIAMBinding as NOTEBOOKS_RuntimeIAMBinding } from "./notebooks/RuntimeIAMBinding";
import { Environment as NOTEBOOKS_Environment } from "./notebooks/Environment";
import { InstanceIAMBinding as NOTEBOOKS_InstanceIAMBinding } from "./notebooks/InstanceIAMBinding";
import { RuntimeIAMMember as NOTEBOOKS_RuntimeIAMMember } from "./notebooks/RuntimeIAMMember";
import { InstanceIAMPolicy as NOTEBOOKS_InstanceIAMPolicy } from "./notebooks/InstanceIAMPolicy";
import { Runtime as NOTEBOOKS_Runtime } from "./notebooks/Runtime";
import { Location as NOTEBOOKS_Location } from "./notebooks/Location";
import { Instance as NOTEBOOKS_Instance } from "./notebooks/Instance";
import { InstanceIAMMember as NOTEBOOKS_InstanceIAMMember } from "./notebooks/InstanceIAMMember";
import { FunctionIAMMember as CLOUDFUNCTIONS_FunctionIAMMember } from "./cloudfunctions/FunctionIAMMember";
import { FunctionIAMBinding as CLOUDFUNCTIONS_FunctionIAMBinding } from "./cloudfunctions/FunctionIAMBinding";
import { Function as CLOUDFUNCTIONS_Function } from "./cloudfunctions/Function";
import { FunctionIamPolicy as CLOUDFUNCTIONS_FunctionIamPolicy } from "./cloudfunctions/FunctionIamPolicy";
import { Workstation as WORKSTATIONS_Workstation } from "./workstations/Workstation";
import { WorkstationIamPolicy as WORKSTATIONS_WorkstationIamPolicy } from "./workstations/WorkstationIamPolicy";
import { WorkstationConfigIamPolicy as WORKSTATIONS_WorkstationConfigIamPolicy } from "./workstations/WorkstationConfigIamPolicy";
import { WorkstationConfig as WORKSTATIONS_WorkstationConfig } from "./workstations/WorkstationConfig";
import { WorkstationConfigIAMBinding as WORKSTATIONS_WorkstationConfigIAMBinding } from "./workstations/WorkstationConfigIAMBinding";
import { WorkstationIAMMember as WORKSTATIONS_WorkstationIAMMember } from "./workstations/WorkstationIAMMember";
import { WorkstationCluster as WORKSTATIONS_WorkstationCluster } from "./workstations/WorkstationCluster";
import { WorkstationIAMBinding as WORKSTATIONS_WorkstationIAMBinding } from "./workstations/WorkstationIAMBinding";
import { WorkstationConfigIAMMember as WORKSTATIONS_WorkstationConfigIAMMember } from "./workstations/WorkstationConfigIAMMember";
import { BareMetalCluster as GKEONPREM_BareMetalCluster } from "./gkeonprem/BareMetalCluster";
import { VMwareNodePool as GKEONPREM_VMwareNodePool } from "./gkeonprem/VMwareNodePool";
import { BareMetalAdminCluster as GKEONPREM_BareMetalAdminCluster } from "./gkeonprem/BareMetalAdminCluster";
import { VMwareCluster as GKEONPREM_VMwareCluster } from "./gkeonprem/VMwareCluster";
import { BareMetalNodePool as GKEONPREM_BareMetalNodePool } from "./gkeonprem/BareMetalNodePool";
import { IAMCustomRole as ORGANIZATIONS_IAMCustomRole } from "./organizations/IAMCustomRole";
import { Folder as ORGANIZATIONS_Folder } from "./organizations/Folder";
import { AccessApprovalSettings as ORGANIZATIONS_AccessApprovalSettings } from "./organizations/AccessApprovalSettings";
import { Policy as ORGANIZATIONS_Policy } from "./organizations/Policy";
import { IAMAuditConfig as ORGANIZATIONS_IAMAuditConfig } from "./organizations/IAMAuditConfig";
import { IAMPolicy as ORGANIZATIONS_IAMPolicy } from "./organizations/IAMPolicy";
import { IAMBinding as ORGANIZATIONS_IAMBinding } from "./organizations/IAMBinding";
import { IAMMember as ORGANIZATIONS_IAMMember } from "./organizations/IAMMember";
import { Project as ORGANIZATIONS_Project } from "./organizations/Project";
import { ChatEngine as DISCOVERYENGINE_ChatEngine } from "./discoveryengine/ChatEngine";
import { SearchEngine as DISCOVERYENGINE_SearchEngine } from "./discoveryengine/SearchEngine";
import { DataStore as DISCOVERYENGINE_DataStore } from "./discoveryengine/DataStore";
import { TagValueIAMMember as TAGS_TagValueIAMMember } from "./tags/TagValueIAMMember";
import { TagBinding as TAGS_TagBinding } from "./tags/TagBinding";
import { LocationTagBinding as TAGS_LocationTagBinding } from "./tags/LocationTagBinding";
import { TagKeyIAMBinding as TAGS_TagKeyIAMBinding } from "./tags/TagKeyIAMBinding";
import { TagKey as TAGS_TagKey } from "./tags/TagKey";
import { TagValueIamPolicy as TAGS_TagValueIamPolicy } from "./tags/TagValueIamPolicy";
import { TagKeyIAMMember as TAGS_TagKeyIAMMember } from "./tags/TagKeyIAMMember";
import { TagKeyIamPolicy as TAGS_TagKeyIamPolicy } from "./tags/TagKeyIamPolicy";
import { TagValue as TAGS_TagValue } from "./tags/TagValue";
import { TagValueIAMBinding as TAGS_TagValueIAMBinding } from "./tags/TagValueIAMBinding";
import { Workload as ASSUREDWORKLOADS_Workload } from "./assuredworkloads/Workload";
import { SshPublicKey as OSLOGIN_SshPublicKey } from "./oslogin/SshPublicKey";
import { NamespaceIamPolicy as SERVICEDIRECTORY_NamespaceIamPolicy } from "./servicedirectory/NamespaceIamPolicy";
import { Service as SERVICEDIRECTORY_Service } from "./servicedirectory/Service";
import { ServiceIAMMember as SERVICEDIRECTORY_ServiceIAMMember } from "./servicedirectory/ServiceIAMMember";
import { ServiceIAMBinding as SERVICEDIRECTORY_ServiceIAMBinding } from "./servicedirectory/ServiceIAMBinding";
import { Namespace as SERVICEDIRECTORY_Namespace } from "./servicedirectory/Namespace";
import { Endpoint as SERVICEDIRECTORY_Endpoint } from "./servicedirectory/Endpoint";
import { NamespaceIAMBinding as SERVICEDIRECTORY_NamespaceIAMBinding } from "./servicedirectory/NamespaceIAMBinding";
import { NamespaceIAMMember as SERVICEDIRECTORY_NamespaceIAMMember } from "./servicedirectory/NamespaceIAMMember";
import { ServiceIamPolicy as SERVICEDIRECTORY_ServiceIamPolicy } from "./servicedirectory/ServiceIamPolicy";
import { AppConnection as BEYONDCORP_AppConnection } from "./beyondcorp/AppConnection";
import { AppConnector as BEYONDCORP_AppConnector } from "./beyondcorp/AppConnector";
import { AppGateway as BEYONDCORP_AppGateway } from "./beyondcorp/AppGateway";
import { IAMBinding as SERVICEACCOUNT_IAMBinding } from "./serviceaccount/IAMBinding";
import { Account as SERVICEACCOUNT_Account } from "./serviceaccount/Account";
import { IAMMember as SERVICEACCOUNT_IAMMember } from "./serviceaccount/IAMMember";
import { IAMPolicy as SERVICEACCOUNT_IAMPolicy } from "./serviceaccount/IAMPolicy";
import { Key as SERVICEACCOUNT_Key } from "./serviceaccount/Key";
import { LiteTopic as PUBSUB_LiteTopic } from "./pubsub/LiteTopic";
import { Topic as PUBSUB_Topic } from "./pubsub/Topic";
import { SchemaIAMMember as PUBSUB_SchemaIAMMember } from "./pubsub/SchemaIAMMember";
import { Schema as PUBSUB_Schema } from "./pubsub/Schema";
import { TopicIAMBinding as PUBSUB_TopicIAMBinding } from "./pubsub/TopicIAMBinding";
import { LiteReservation as PUBSUB_LiteReservation } from "./pubsub/LiteReservation";
import { SubscriptionIAMPolicy as PUBSUB_SubscriptionIAMPolicy } from "./pubsub/SubscriptionIAMPolicy";
import { SchemaIamPolicy as PUBSUB_SchemaIamPolicy } from "./pubsub/SchemaIamPolicy";
import { TopicIAMPolicy as PUBSUB_TopicIAMPolicy } from "./pubsub/TopicIAMPolicy";
import { SubscriptionIAMBinding as PUBSUB_SubscriptionIAMBinding } from "./pubsub/SubscriptionIAMBinding";
import { LiteSubscription as PUBSUB_LiteSubscription } from "./pubsub/LiteSubscription";
import { Subscription as PUBSUB_Subscription } from "./pubsub/Subscription";
import { TopicIAMMember as PUBSUB_TopicIAMMember } from "./pubsub/TopicIAMMember";
import { SubscriptionIAMMember as PUBSUB_SubscriptionIAMMember } from "./pubsub/SubscriptionIAMMember";
import { SchemaIAMBinding as PUBSUB_SchemaIAMBinding } from "./pubsub/SchemaIAMBinding";
import { WorkforcePool as IAM_WorkforcePool } from "./iam/WorkforcePool";
import { DenyPolicy as IAM_DenyPolicy } from "./iam/DenyPolicy";
import { WorkloadIdentityPoolProvider as IAM_WorkloadIdentityPoolProvider } from "./iam/WorkloadIdentityPoolProvider";
import { AccessBoundaryPolicy as IAM_AccessBoundaryPolicy } from "./iam/AccessBoundaryPolicy";
import { WorkloadIdentityPool as IAM_WorkloadIdentityPool } from "./iam/WorkloadIdentityPool";
import { WorkforcePoolProvider as IAM_WorkforcePoolProvider } from "./iam/WorkforcePoolProvider";
import { Domain as ACTIVEDIRECTORY_Domain } from "./activedirectory/Domain";
import { Peering as ACTIVEDIRECTORY_Peering } from "./activedirectory/Peering";
import { DomainTrust as ACTIVEDIRECTORY_DomainTrust } from "./activedirectory/DomainTrust";
import { Job as BIGQUERY_Job } from "./bigquery/Job";
import { DatasetIamPolicy as BIGQUERY_DatasetIamPolicy } from "./bigquery/DatasetIamPolicy";
import { DatasetAccess as BIGQUERY_DatasetAccess } from "./bigquery/DatasetAccess";
import { Reservation as BIGQUERY_Reservation } from "./bigquery/Reservation";
import { IAMMember as BIGQUERY_IAMMember } from "./bigquery/IAMMember";
import { DatasetIAMBinding as BIGQUERY_DatasetIAMBinding } from "./bigquery/DatasetIAMBinding";
import { IamPolicy as BIGQUERY_IamPolicy } from "./bigquery/IamPolicy";
import { ReservationAssignment as BIGQUERY_ReservationAssignment } from "./bigquery/ReservationAssignment";
import { Table as BIGQUERY_Table } from "./bigquery/Table";
import { AppProfile as BIGQUERY_AppProfile } from "./bigquery/AppProfile";
import { ConnectionIamPolicy as BIGQUERY_ConnectionIamPolicy } from "./bigquery/ConnectionIamPolicy";
import { ConnectionIAMBinding as BIGQUERY_ConnectionIAMBinding } from "./bigquery/ConnectionIAMBinding";
import { CapacityCommitment as BIGQUERY_CapacityCommitment } from "./bigquery/CapacityCommitment";
import { Connection as BIGQUERY_Connection } from "./bigquery/Connection";
import { IAMBinding as BIGQUERY_IAMBinding } from "./bigquery/IAMBinding";
import { DatasetIAMMember as BIGQUERY_DatasetIAMMember } from "./bigquery/DatasetIAMMember";
import { DataTransferConfig as BIGQUERY_DataTransferConfig } from "./bigquery/DataTransferConfig";
import { Routine as BIGQUERY_Routine } from "./bigquery/Routine";
import { Dataset as BIGQUERY_Dataset } from "./bigquery/Dataset";
import { BiReservation as BIGQUERY_BiReservation } from "./bigquery/BiReservation";
import { ConnectionIAMMember as BIGQUERY_ConnectionIAMMember } from "./bigquery/ConnectionIAMMember";
import { CryptoKey as KMS_CryptoKey } from "./kms/CryptoKey";
import { CryptoKeyIAMBinding as KMS_CryptoKeyIAMBinding } from "./kms/CryptoKeyIAMBinding";
import { CryptoKeyVersion as KMS_CryptoKeyVersion } from "./kms/CryptoKeyVersion";
import { KeyRingImportJob as KMS_KeyRingImportJob } from "./kms/KeyRingImportJob";
import { KeyRingIAMPolicy as KMS_KeyRingIAMPolicy } from "./kms/KeyRingIAMPolicy";
import { KeyRingIAMMember as KMS_KeyRingIAMMember } from "./kms/KeyRingIAMMember";
import { KeyRing as KMS_KeyRing } from "./kms/KeyRing";
import { SecretCiphertext as KMS_SecretCiphertext } from "./kms/SecretCiphertext";
import { CryptoKeyIAMPolicy as KMS_CryptoKeyIAMPolicy } from "./kms/CryptoKeyIAMPolicy";
import { KeyRingIAMBinding as KMS_KeyRingIAMBinding } from "./kms/KeyRingIAMBinding";
import { CryptoKeyIAMMember as KMS_CryptoKeyIAMMember } from "./kms/CryptoKeyIAMMember";
import { TenantOauthIdpConfig as IDENTITYPLATFORM_TenantOauthIdpConfig } from "./identityplatform/TenantOauthIdpConfig";
import { TenantInboundSamlConfig as IDENTITYPLATFORM_TenantInboundSamlConfig } from "./identityplatform/TenantInboundSamlConfig";
import { Tenant as IDENTITYPLATFORM_Tenant } from "./identityplatform/Tenant";
import { DefaultSupportedIdpConfig as IDENTITYPLATFORM_DefaultSupportedIdpConfig } from "./identityplatform/DefaultSupportedIdpConfig";
import { OauthIdpConfig as IDENTITYPLATFORM_OauthIdpConfig } from "./identityplatform/OauthIdpConfig";
import { InboundSamlConfig as IDENTITYPLATFORM_InboundSamlConfig } from "./identityplatform/InboundSamlConfig";
import { TenantDefaultSupportedIdpConfig as IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig } from "./identityplatform/TenantDefaultSupportedIdpConfig";
import { Config as IDENTITYPLATFORM_Config } from "./identityplatform/Config";
import { ProjectDefaultConfig as IDENTITYPLATFORM_ProjectDefaultConfig } from "./identityplatform/ProjectDefaultConfig";
import { Posture as SECURITYPOSTURE_Posture } from "./securityposture/Posture";
import { PostureDeployment as SECURITYPOSTURE_PostureDeployment } from "./securityposture/PostureDeployment";
import { ConnectivityTest as NETWORKMANAGEMENT_ConnectivityTest } from "./networkmanagement/ConnectivityTest";
import { ConnectionIAMBinding as CLOUDBUILDV2_ConnectionIAMBinding } from "./cloudbuildv2/ConnectionIAMBinding";
import { Repository as CLOUDBUILDV2_Repository } from "./cloudbuildv2/Repository";
import { ConnectionIAMPolicy as CLOUDBUILDV2_ConnectionIAMPolicy } from "./cloudbuildv2/ConnectionIAMPolicy";
import { Connection as CLOUDBUILDV2_Connection } from "./cloudbuildv2/Connection";
import { ConnectionIAMMember as CLOUDBUILDV2_ConnectionIAMMember } from "./cloudbuildv2/ConnectionIAMMember";
import { Instance as REDIS_Instance } from "./redis/Instance";
import { Cluster as REDIS_Cluster } from "./redis/Cluster";
import { ConsumersIamPolicy as ENDPOINTS_ConsumersIamPolicy } from "./endpoints/ConsumersIamPolicy";
import { ServiceIAMMember as ENDPOINTS_ServiceIAMMember } from "./endpoints/ServiceIAMMember";
import { ConsumersIAMBinding as ENDPOINTS_ConsumersIAMBinding } from "./endpoints/ConsumersIAMBinding";
import { ConsumersIAMMember as ENDPOINTS_ConsumersIAMMember } from "./endpoints/ConsumersIAMMember";
import { Service as ENDPOINTS_Service } from "./endpoints/Service";
import { ServiceIAMBinding as ENDPOINTS_ServiceIAMBinding } from "./endpoints/ServiceIAMBinding";
import { ServiceIamPolicy as ENDPOINTS_ServiceIamPolicy } from "./endpoints/ServiceIamPolicy";
import { StoragePool as NETAPP_StoragePool } from "./netapp/StoragePool";
import { VolumeReplication as NETAPP_VolumeReplication } from "./netapp/VolumeReplication";
import { BackupPolicy as NETAPP_BackupPolicy } from "./netapp/BackupPolicy";
import { VolumeSnapshot as NETAPP_VolumeSnapshot } from "./netapp/VolumeSnapshot";
import { BackupVault as NETAPP_BackupVault } from "./netapp/BackupVault";
import { Volume as NETAPP_Volume } from "./netapp/Volume";
import { ActiveDirectory as NETAPP_ActiveDirectory } from "./netapp/ActiveDirectory";
import { Kmsconfig as NETAPP_Kmsconfig } from "./netapp/Kmsconfig";
import { AttestorIAMMember as BINARYAUTHORIZATION_AttestorIAMMember } from "./binaryauthorization/AttestorIAMMember";
import { Policy as BINARYAUTHORIZATION_Policy } from "./binaryauthorization/Policy";
import { AttestorIamPolicy as BINARYAUTHORIZATION_AttestorIamPolicy } from "./binaryauthorization/AttestorIamPolicy";
import { Attestor as BINARYAUTHORIZATION_Attestor } from "./binaryauthorization/Attestor";
import { AttestorIAMBinding as BINARYAUTHORIZATION_AttestorIAMBinding } from "./binaryauthorization/AttestorIAMBinding";
import { Environment as COMPOSER_Environment } from "./composer/Environment";
import { AccountIamPolicy as BILLING_AccountIamPolicy } from "./billing/AccountIamPolicy";
import { AccountIAMBinding as BILLING_AccountIAMBinding } from "./billing/AccountIAMBinding";
import { Budget as BILLING_Budget } from "./billing/Budget";
import { AccountIAMMember as BILLING_AccountIAMMember } from "./billing/AccountIAMMember";
import { ProjectInfo as BILLING_ProjectInfo } from "./billing/ProjectInfo";
import { SubAccount as BILLING_SubAccount } from "./billing/SubAccount";
import { Instance as BIGTABLE_Instance } from "./bigtable/Instance";
import { TableIAMBinding as BIGTABLE_TableIAMBinding } from "./bigtable/TableIAMBinding";
import { GCPolicy as BIGTABLE_GCPolicy } from "./bigtable/GCPolicy";
import { InstanceIAMMember as BIGTABLE_InstanceIAMMember } from "./bigtable/InstanceIAMMember";
import { Table as BIGTABLE_Table } from "./bigtable/Table";
import { InstanceIAMPolicy as BIGTABLE_InstanceIAMPolicy } from "./bigtable/InstanceIAMPolicy";
import { TableIamPolicy as BIGTABLE_TableIamPolicy } from "./bigtable/TableIamPolicy";
import { TableIAMMember as BIGTABLE_TableIAMMember } from "./bigtable/TableIAMMember";
import { InstanceIAMBinding as BIGTABLE_InstanceIAMBinding } from "./bigtable/InstanceIAMBinding";
import { ResponsePolicy as DNS_ResponsePolicy } from "./dns/ResponsePolicy";
import { ResponsePolicyRule as DNS_ResponsePolicyRule } from "./dns/ResponsePolicyRule";
import { ManagedZone as DNS_ManagedZone } from "./dns/ManagedZone";
import { Policy as DNS_Policy } from "./dns/Policy";
import { DnsManagedZoneIAMBinding as DNS_DnsManagedZoneIAMBinding } from "./dns/DnsManagedZoneIAMBinding";
import { DnsManagedZoneIamPolicy as DNS_DnsManagedZoneIamPolicy } from "./dns/DnsManagedZoneIamPolicy";
import { DnsManagedZoneIAMMember as DNS_DnsManagedZoneIAMMember } from "./dns/DnsManagedZoneIAMMember";
import { RecordSet as DNS_RecordSet } from "./dns/RecordSet";
import { Endpoint as CLOUDIDS_Endpoint } from "./cloudids/Endpoint";
import { EnterpriseKey as RECAPTCHA_EnterpriseKey } from "./recaptcha/EnterpriseKey";
import { RepositoryWorkflowConfig as DATAFORM_RepositoryWorkflowConfig } from "./dataform/RepositoryWorkflowConfig";
import { RepositoryIamPolicy as DATAFORM_RepositoryIamPolicy } from "./dataform/RepositoryIamPolicy";
import { RepositoryIAMBinding as DATAFORM_RepositoryIAMBinding } from "./dataform/RepositoryIAMBinding";
import { RepositoryIAMMember as DATAFORM_RepositoryIAMMember } from "./dataform/RepositoryIAMMember";
import { Repository as DATAFORM_Repository } from "./dataform/Repository";
import { RepositoryReleaseConfig as DATAFORM_RepositoryReleaseConfig } from "./dataform/RepositoryReleaseConfig";
import { Environment as APIGEE_Environment } from "./apigee/Environment";
import { EnvironmentIAMMember as APIGEE_EnvironmentIAMMember } from "./apigee/EnvironmentIAMMember";
import { AddonsConfig as APIGEE_AddonsConfig } from "./apigee/AddonsConfig";
import { KeystoresAliasesPkcs12 as APIGEE_KeystoresAliasesPkcs12 } from "./apigee/KeystoresAliasesPkcs12";
import { EnvKeystore as APIGEE_EnvKeystore } from "./apigee/EnvKeystore";
import { EndpointAttachment as APIGEE_EndpointAttachment } from "./apigee/EndpointAttachment";
import { TargetServer as APIGEE_TargetServer } from "./apigee/TargetServer";
import { EnvGroupAttachment as APIGEE_EnvGroupAttachment } from "./apigee/EnvGroupAttachment";
import { EnvironmentIamPolicy as APIGEE_EnvironmentIamPolicy } from "./apigee/EnvironmentIamPolicy";
import { Organization as APIGEE_Organization } from "./apigee/Organization";
import { KeystoresAliasesKeyCertFile as APIGEE_KeystoresAliasesKeyCertFile } from "./apigee/KeystoresAliasesKeyCertFile";
import { EnvReferences as APIGEE_EnvReferences } from "./apigee/EnvReferences";
import { InstanceAttachment as APIGEE_InstanceAttachment } from "./apigee/InstanceAttachment";
import { EnvGroup as APIGEE_EnvGroup } from "./apigee/EnvGroup";
import { Flowhook as APIGEE_Flowhook } from "./apigee/Flowhook";
import { SharedflowDeployment as APIGEE_SharedflowDeployment } from "./apigee/SharedflowDeployment";
import { Instance as APIGEE_Instance } from "./apigee/Instance";
import { KeystoresAliasesSelfSignedCert as APIGEE_KeystoresAliasesSelfSignedCert } from "./apigee/KeystoresAliasesSelfSignedCert";
import { NatAddress as APIGEE_NatAddress } from "./apigee/NatAddress";
import { EnvironmentIAMBinding as APIGEE_EnvironmentIAMBinding } from "./apigee/EnvironmentIAMBinding";
import { Sharedflow as APIGEE_Sharedflow } from "./apigee/Sharedflow";
import { SyncAuthorization as APIGEE_SyncAuthorization } from "./apigee/SyncAuthorization";
import { V2Vm as TPU_V2Vm } from "./tpu/V2Vm";
import { Node as TPU_Node } from "./tpu/Node";
import { Config as RUNTIMECONFIG_Config } from "./runtimeconfig/Config";
import { ConfigIAMMember as RUNTIMECONFIG_ConfigIAMMember } from "./runtimeconfig/ConfigIAMMember";
import { Variable as RUNTIMECONFIG_Variable } from "./runtimeconfig/Variable";
import { ConfigIAMBinding as RUNTIMECONFIG_ConfigIAMBinding } from "./runtimeconfig/ConfigIAMBinding";
import { ConfigIamPolicy as RUNTIMECONFIG_ConfigIamPolicy } from "./runtimeconfig/ConfigIamPolicy";
import { Database as SQL_Database } from "./sql/Database";
import { SslCert as SQL_SslCert } from "./sql/SslCert";
import { DatabaseInstance as SQL_DatabaseInstance } from "./sql/DatabaseInstance";
import { SourceRepresentationInstance as SQL_SourceRepresentationInstance } from "./sql/SourceRepresentationInstance";
import { User as SQL_User } from "./sql/User";
import { Trigger as CLOUDBUILD_Trigger } from "./cloudbuild/Trigger";
import { BitbucketServerConfig as CLOUDBUILD_BitbucketServerConfig } from "./cloudbuild/BitbucketServerConfig";
import { WorkerPool as CLOUDBUILD_WorkerPool } from "./cloudbuild/WorkerPool";

export class ResourceProperties {
  static readonly ResourceFactoryMap = new Map<ResourceType, () => Resource>([
    [ResourceType.DIAGFLOW_CXWEBHOOK, () => new DIAGFLOW_CxWebhook()],
    [ResourceType.DIAGFLOW_CXPAGE, () => new DIAGFLOW_CxPage()],
    [ResourceType.DIAGFLOW_ENTITYTYPE, () => new DIAGFLOW_EntityType()],
    [ResourceType.DIAGFLOW_FULFILLMENT, () => new DIAGFLOW_Fulfillment()],
    [ResourceType.DIAGFLOW_CXVERSION, () => new DIAGFLOW_CxVersion()],
    [
      ResourceType.DIAGFLOW_CXSECURITYSETTINGS,
      () => new DIAGFLOW_CxSecuritySettings(),
    ],
    [ResourceType.DIAGFLOW_CXENTITYTYPE, () => new DIAGFLOW_CxEntityType()],
    [ResourceType.DIAGFLOW_CXFLOW, () => new DIAGFLOW_CxFlow()],
    [ResourceType.DIAGFLOW_CXTESTCASE, () => new DIAGFLOW_CxTestCase()],
    [ResourceType.DIAGFLOW_INTENT, () => new DIAGFLOW_Intent()],
    [ResourceType.DIAGFLOW_CXINTENT, () => new DIAGFLOW_CxIntent()],
    [ResourceType.DIAGFLOW_CXAGENT, () => new DIAGFLOW_CxAgent()],
    [ResourceType.DIAGFLOW_AGENT, () => new DIAGFLOW_Agent()],
    [ResourceType.DIAGFLOW_CXENVIRONMENT, () => new DIAGFLOW_CxEnvironment()],
    [
      ResourceType.DATASTORE_DATASTOREINDEX,
      () => new DATASTORE_DataStoreIndex(),
    ],
    [
      ResourceType.DEPLOYMENTMANAGER_DEPLOYMENT,
      () => new DEPLOYMENTMANAGER_Deployment(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMMember,
      () => new APIGATEWAY_GatewayIAMMember(),
    ],
    [ResourceType.APIGATEWAY_GATEWAY, () => new APIGATEWAY_Gateway()],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMPOLICY,
      () => new APIGATEWAY_GatewayIamPolicy(),
    ],
    [ResourceType.APIGATEWAY_API, () => new APIGATEWAY_Api()],
    [ResourceType.APIGATEWAY_APIIAMMember, () => new APIGATEWAY_ApiIAMMember()],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMPOLICY,
      () => new APIGATEWAY_ApiConfigIamPolicy(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMMember,
      () => new APIGATEWAY_ApiConfigIAMMember(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMBinding,
      () => new APIGATEWAY_GatewayIAMBinding(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMBinding,
      () => new APIGATEWAY_ApiConfigIAMBinding(),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMBinding,
      () => new APIGATEWAY_ApiIAMBinding(),
    ],
    [ResourceType.APIGATEWAY_APIIAMPOLICY, () => new APIGATEWAY_ApiIamPolicy()],
    [ResourceType.APIGATEWAY_APICONFIG, () => new APIGATEWAY_ApiConfig()],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMPOLICY,
      () => new CERTIFICATEAUTHORITY_CaPoolIamPolicy(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMMember,
      () => new CERTIFICATEAUTHORITY_CaPoolIAMMember(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMBinding,
      () => new CERTIFICATEAUTHORITY_CertificateTemplateIAMBinding(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMPOLICY,
      () => new CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATE,
      () => new CERTIFICATEAUTHORITY_Certificate(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMBinding,
      () => new CERTIFICATEAUTHORITY_CaPoolIAMBinding(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_AUTHORITY,
      () => new CERTIFICATEAUTHORITY_Authority(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATE,
      () => new CERTIFICATEAUTHORITY_CertificateTemplate(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOL,
      () => new CERTIFICATEAUTHORITY_CaPool(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMMember,
      () => new CERTIFICATEAUTHORITY_CertificateTemplateIAMMember(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMBinding,
      () => new CLOUDDEPLOY_DeliveryPipelineIAMBinding(),
    ],
    [ResourceType.CLOUDDEPLOY_TARGET, () => new CLOUDDEPLOY_Target()],
    [ResourceType.CLOUDDEPLOY_AUTOMATION, () => new CLOUDDEPLOY_Automation()],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMPOLICY,
      () => new CLOUDDEPLOY_DeliveryPipelineIamPolicy(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINE,
      () => new CLOUDDEPLOY_DeliveryPipeline(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMPOLICY,
      () => new CLOUDDEPLOY_TargetIamPolicy(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMMember,
      () => new CLOUDDEPLOY_TargetIAMMember(),
    ],
    [
      ResourceType.CLOUDDEPLOY_CUSTOMTARGETTYPE,
      () => new CLOUDDEPLOY_CustomTargetType(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMMember,
      () => new CLOUDDEPLOY_DeliveryPipelineIAMMember(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMBinding,
      () => new CLOUDDEPLOY_TargetIAMBinding(),
    ],
    [ResourceType.CONTAINER_REGISTRY, () => new CONTAINER_Registry()],
    [ResourceType.CONTAINER_NODEPOOL, () => new CONTAINER_NodePool()],
    [ResourceType.CONTAINER_AZURECLIENT, () => new CONTAINER_AzureClient()],
    [ResourceType.CONTAINER_AZURECLUSTER, () => new CONTAINER_AzureCluster()],
    [ResourceType.CONTAINER_AZURENODEPOOL, () => new CONTAINER_AzureNodePool()],
    [ResourceType.CONTAINER_AWSNODEPOOL, () => new CONTAINER_AwsNodePool()],
    [ResourceType.CONTAINER_CLUSTER, () => new CONTAINER_Cluster()],
    [ResourceType.CONTAINER_AWSCLUSTER, () => new CONTAINER_AwsCluster()],
    [
      ResourceType.CONTAINER_ATTACHEDCLUSTER,
      () => new CONTAINER_AttachedCluster(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_ENDPOINTATTACHMENT,
      () => new INTEGRATIONCONNECTORS_EndpointAttachment(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_CONNECTION,
      () => new INTEGRATIONCONNECTORS_Connection(),
    ],
    [ResourceType.FILESTORE_INSTANCE, () => new FILESTORE_Instance()],
    [ResourceType.FILESTORE_SNAPSHOT, () => new FILESTORE_Snapshot()],
    [ResourceType.FILESTORE_BACKUP, () => new FILESTORE_Backup()],
    [
      ResourceType.NETWORKSERVICES_TCPROUTE,
      () => new NETWORKSERVICES_TcpRoute(),
    ],
    [ResourceType.NETWORKSERVICES_MESH, () => new NETWORKSERVICES_Mesh()],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEORIGIN,
      () => new NETWORKSERVICES_EdgeCacheOrigin(),
    ],
    [
      ResourceType.NETWORKSERVICES_TLSROUTE,
      () => new NETWORKSERVICES_TlsRoute(),
    ],
    [
      ResourceType.NETWORKSERVICES_SERVICEBINDING,
      () => new NETWORKSERVICES_ServiceBinding(),
    ],
    [
      ResourceType.NETWORKSERVICES_GRPCROUTE,
      () => new NETWORKSERVICES_GrpcRoute(),
    ],
    [
      ResourceType.NETWORKSERVICES_ENDPOINTPOLICY,
      () => new NETWORKSERVICES_EndpointPolicy(),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHESERVICE,
      () => new NETWORKSERVICES_EdgeCacheService(),
    ],
    [
      ResourceType.NETWORKSERVICES_HTTPROUTE,
      () => new NETWORKSERVICES_HttpRoute(),
    ],
    [ResourceType.NETWORKSERVICES_GATEWAY, () => new NETWORKSERVICES_Gateway()],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEKEYSET,
      () => new NETWORKSERVICES_EdgeCacheKeyset(),
    ],
    [ResourceType.CLOUDIDENTITY_GROUP, () => new CLOUDIDENTITY_Group()],
    [
      ResourceType.CLOUDIDENTITY_GROUPMEMBERSHIP,
      () => new CLOUDIDENTITY_GroupMembership(),
    ],
    [ResourceType.ML_ENGINEMODEL, () => new ML_EngineModel()],
    [ResourceType.CLOUDSCHEDULER_JOB, () => new CLOUDSCHEDULER_Job()],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMPOLICY,
      () => new CLOUDTASKS_QueueIamPolicy(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMBinding,
      () => new CLOUDTASKS_QueueIAMBinding(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMMember,
      () => new CLOUDTASKS_QueueIAMMember(),
    ],
    [ResourceType.CLOUDTASKS_QUEUE, () => new CLOUDTASKS_Queue()],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMPOLICY,
      () => new BIGQUERYDATAPOLICY_DataPolicyIamPolicy(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMMember,
      () => new BIGQUERYDATAPOLICY_DataPolicyIAMMember(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMBinding,
      () => new BIGQUERYDATAPOLICY_DataPolicyIAMBinding(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICY,
      () => new BIGQUERYDATAPOLICY_DataPolicy(),
    ],
    [ResourceType.MEMCACHE_INSTANCE, () => new MEMCACHE_Instance()],
    [ResourceType.FIRESTORE_DOCUMENT, () => new FIRESTORE_Document()],
    [ResourceType.FIRESTORE_FIELD, () => new FIRESTORE_Field()],
    [
      ResourceType.FIRESTORE_BACKUPSCHEDULE,
      () => new FIRESTORE_BackupSchedule(),
    ],
    [ResourceType.FIRESTORE_DATABASE, () => new FIRESTORE_Database()],
    [ResourceType.FIRESTORE_INDEX, () => new FIRESTORE_Index()],
    [
      ResourceType.WORKBENCH_InstanceIAMPOLICY,
      () => new WORKBENCH_InstanceIAMPolicy(),
    ],
    [
      ResourceType.WORKBENCH_InstanceIAMBinding,
      () => new WORKBENCH_InstanceIAMBinding(),
    ],
    [ResourceType.WORKBENCH_INSTANCE, () => new WORKBENCH_Instance()],
    [
      ResourceType.WORKBENCH_InstanceIAMMember,
      () => new WORKBENCH_InstanceIAMMember(),
    ],
    [ResourceType.ORGPOLICY_POLICY, () => new ORGPOLICY_Policy()],
    [
      ResourceType.ORGPOLICY_CUSTOMCONSTRAINT,
      () => new ORGPOLICY_CustomConstraint(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMMember,
      () => new DATACATALOG_TaxonomyIAMMember(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMPOLICY,
      () => new DATACATALOG_PolicyTagIamPolicy(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMBinding,
      () => new DATACATALOG_PolicyTagIAMBinding(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMPOLICY,
      () => new DATACATALOG_TaxonomyIamPolicy(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMPOLICY,
      () => new DATACATALOG_TagTemplateIamPolicy(),
    ],
    [ResourceType.DATACATALOG_ENTRY, () => new DATACATALOG_Entry()],
    [ResourceType.DATACATALOG_TAGTEMPLATE, () => new DATACATALOG_TagTemplate()],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMPOLICY,
      () => new DATACATALOG_EntryGroupIamPolicy(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMMember,
      () => new DATACATALOG_PolicyTagIAMMember(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMMember,
      () => new DATACATALOG_EntryGroupIAMMember(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMMember,
      () => new DATACATALOG_TagTemplateIAMMember(),
    ],
    [ResourceType.DATACATALOG_TAG, () => new DATACATALOG_Tag()],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMBinding,
      () => new DATACATALOG_TagTemplateIAMBinding(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMBinding,
      () => new DATACATALOG_EntryGroupIAMBinding(),
    ],
    [ResourceType.DATACATALOG_ENTRYGROUP, () => new DATACATALOG_EntryGroup()],
    [ResourceType.DATACATALOG_POLICYTAG, () => new DATACATALOG_PolicyTag()],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMBinding,
      () => new DATACATALOG_TaxonomyIAMBinding(),
    ],
    [ResourceType.DATACATALOG_TAXONOMY, () => new DATACATALOG_Taxonomy()],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSOR,
      () => new ESSENTIALCONTACTS_DocumentAiProcessor(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSORDEFAULTVERSION,
      () => new ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSELOCATION,
      () => new ESSENTIALCONTACTS_DocumentAiWarehouseLocation(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_CONTACT,
      () => new ESSENTIALCONTACTS_Contact(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSEDOCUMENTSCHEMA,
      () => new ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema(),
    ],
    [ResourceType.VERTEX_AIINDEXENDPOINT, () => new VERTEX_AiIndexEndpoint()],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMBinding,
      () => new VERTEX_AiFeatureStoreIAMBinding(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPE,
      () => new VERTEX_AiFeatureStoreEntityType(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMBinding,
      () => new VERTEX_AiFeatureStoreEntityTypeIAMBinding(),
    ],
    [ResourceType.VERTEX_AIMETADATASTORE, () => new VERTEX_AiMetadataStore()],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEFEATURE,
      () => new VERTEX_AiFeatureStoreEntityTypeFeature(),
    ],
    [ResourceType.VERTEX_AIFEATUREGROUP, () => new VERTEX_AiFeatureGroup()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMPOLICY,
      () => new VERTEX_AiEndpointIamPolicy(),
    ],
    [ResourceType.VERTEX_AIDATASET, () => new VERTEX_AiDataset()],
    [ResourceType.VERTEX_AIFEATURESTORE, () => new VERTEX_AiFeatureStore()],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTOREFEATUREVIEW,
      () => new VERTEX_AiFeatureOnlineStoreFeatureview(),
    ],
    [ResourceType.VERTEX_AIENDPOINT, () => new VERTEX_AiEndpoint()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMBinding,
      () => new VERTEX_AiEndpointIAMBinding(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMMember,
      () => new VERTEX_AiFeatureStoreIAMMember(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMPOLICY,
      () => new VERTEX_AiFeatureStoreEntityTypeIamPolicy(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMMember,
      () => new VERTEX_AiFeatureStoreEntityTypeIAMMember(),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTORE,
      () => new VERTEX_AiFeatureOnlineStore(),
    ],
    [ResourceType.VERTEX_AIINDEX, () => new VERTEX_AiIndex()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMMember,
      () => new VERTEX_AiEndpointIAMMember(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMPOLICY,
      () => new VERTEX_AiFeatureStoreIamPolicy(),
    ],
    [ResourceType.VERTEX_AITENSORBOARD, () => new VERTEX_AiTensorboard()],
    [
      ResourceType.VERTEX_AIFEATUREGROUPFEATURE,
      () => new VERTEX_AiFeatureGroupFeature(),
    ],
    [
      ResourceType.BACKUPDISASTERRECOVERY_MANAGEMENTSERVER,
      () => new BACKUPDISASTERRECOVERY_ManagementServer(),
    ],
    [
      ResourceType.MONITORING_NOTIFICATIONCHANNEL,
      () => new MONITORING_NotificationChannel(),
    ],
    [ResourceType.MONITORING_SLO, () => new MONITORING_Slo()],
    [
      ResourceType.MONITORING_MONITOREDPROJECT,
      () => new MONITORING_MonitoredProject(),
    ],
    [ResourceType.MONITORING_ALERTPOLICY, () => new MONITORING_AlertPolicy()],
    [ResourceType.MONITORING_GROUP, () => new MONITORING_Group()],
    [
      ResourceType.MONITORING_METRICDESCRIPTOR,
      () => new MONITORING_MetricDescriptor(),
    ],
    [
      ResourceType.MONITORING_GENERICSERVICE,
      () => new MONITORING_GenericService(),
    ],
    [ResourceType.MONITORING_DASHBOARD, () => new MONITORING_Dashboard()],
    [
      ResourceType.MONITORING_UPTIMECHECKCONFIG,
      () => new MONITORING_UptimeCheckConfig(),
    ],
    [
      ResourceType.MONITORING_CUSTOMSERVICE,
      () => new MONITORING_CustomService(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMMember,
      () => new SPANNER_DatabaseIAMMember(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMPOLICY,
      () => new SPANNER_DatabaseIAMPolicy(),
    ],
    [ResourceType.SPANNER_INSTANCE, () => new SPANNER_Instance()],
    [
      ResourceType.SPANNER_InstanceIAMBinding,
      () => new SPANNER_InstanceIAMBinding(),
    ],
    [
      ResourceType.SPANNER_InstanceIAMMember,
      () => new SPANNER_InstanceIAMMember(),
    ],
    [ResourceType.SPANNER_DATABASE, () => new SPANNER_Database()],
    [
      ResourceType.SPANNER_DATABASEIAMBinding,
      () => new SPANNER_DatabaseIAMBinding(),
    ],
    [
      ResourceType.SPANNER_InstanceIAMPOLICY,
      () => new SPANNER_InstanceIAMPolicy(),
    ],
    [ResourceType.EDGECONTAINER_NODEPOOL, () => new EDGECONTAINER_NodePool()],
    [ResourceType.EDGECONTAINER_CLUSTER, () => new EDGECONTAINER_Cluster()],
    [
      ResourceType.EDGECONTAINER_VPNCONNECTION,
      () => new EDGECONTAINER_VpnConnection(),
    ],
    [ResourceType.VPCACCESS_CONNECTOR, () => new VPCACCESS_Connector()],
    [
      ResourceType.BLOCKCHAINNODEENGINE_BLOCKCHAINNODES,
      () => new BLOCKCHAINNODEENGINE_BlockchainNodes(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMPOLICY,
      () => new GKEBACKUP_BackupPlanIamPolicy(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMPOLICY,
      () => new GKEBACKUP_RestorePlanIamPolicy(),
    ],
    [ResourceType.GKEBACKUP_RESTOREPLAN, () => new GKEBACKUP_RestorePlan()],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMMember,
      () => new GKEBACKUP_BackupPlanIAMMember(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMBinding,
      () => new GKEBACKUP_BackupPlanIAMBinding(),
    ],
    [ResourceType.GKEBACKUP_BACKUPPLAN, () => new GKEBACKUP_BackupPlan()],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMBinding,
      () => new GKEBACKUP_RestorePlanIAMBinding(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMMember,
      () => new GKEBACKUP_RestorePlanIAMMember(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMPOLICY,
      () => new DATAPROC_MetastoreFederationIamPolicy(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMBinding,
      () => new DATAPROC_ClusterIAMBinding(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMPOLICY,
      () => new DATAPROC_AutoscalingPolicyIamPolicy(),
    ],
    [
      ResourceType.DATAPROC_WORKFLOWTEMPLATE,
      () => new DATAPROC_WorkflowTemplate(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICE,
      () => new DATAPROC_MetastoreService(),
    ],
    [ResourceType.DATAPROC_JOBIAMMember, () => new DATAPROC_JobIAMMember()],
    [
      ResourceType.DATAPROC_CLUSTERIAMMember,
      () => new DATAPROC_ClusterIAMMember(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMPOLICY,
      () => new DATAPROC_ClusterIAMPolicy(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMBinding,
      () => new DATAPROC_MetastoreServiceIAMBinding(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMBinding,
      () => new DATAPROC_MetastoreFederationIAMBinding(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMMember,
      () => new DATAPROC_AutoscalingPolicyIAMMember(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMPOLICY,
      () => new DATAPROC_MetastoreServiceIamPolicy(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMBinding,
      () => new DATAPROC_AutoscalingPolicyIAMBinding(),
    ],
    [ResourceType.DATAPROC_CLUSTER, () => new DATAPROC_Cluster()],
    [ResourceType.DATAPROC_JOB, () => new DATAPROC_Job()],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMMember,
      () => new DATAPROC_MetastoreServiceIAMMember(),
    ],
    [ResourceType.DATAPROC_JOBIAMPOLICY, () => new DATAPROC_JobIAMPolicy()],
    [ResourceType.DATAPROC_JOBIAMBinding, () => new DATAPROC_JobIAMBinding()],
    [
      ResourceType.DATAPROC_METASTOREFEDERATION,
      () => new DATAPROC_MetastoreFederation(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICY,
      () => new DATAPROC_AutoscalingPolicy(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMMember,
      () => new DATAPROC_MetastoreFederationIAMMember(),
    ],
    [ResourceType.CLOUDRUN_DOMAINMAPPING, () => new CLOUDRUN_DomainMapping()],
    [ResourceType.CLOUDRUN_IAMMember, () => new CLOUDRUN_IAMMember()],
    [ResourceType.CLOUDRUN_SERVICE, () => new CLOUDRUN_Service()],
    [ResourceType.CLOUDRUN_IAMPOLICY, () => new CLOUDRUN_IamPolicy()],
    [ResourceType.CLOUDRUN_IAMBinding, () => new CLOUDRUN_IAMBinding()],
    [ResourceType.CONTAINERANALYSIS_NOTE, () => new CONTAINERANALYSIS_Note()],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMPOLICY,
      () => new CONTAINERANALYSIS_NoteIamPolicy(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMBinding,
      () => new CONTAINERANALYSIS_NoteIAMBinding(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_OCCURENCE,
      () => new CONTAINERANALYSIS_Occurence(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMMember,
      () => new CONTAINERANALYSIS_NoteIAMMember(),
    ],
    [
      ResourceType.SERVICENETWORKING_PEEREDDNSDOMAIN,
      () => new SERVICENETWORKING_PeeredDnsDomain(),
    ],
    [
      ResourceType.SERVICENETWORKING_CONNECTION,
      () => new SERVICENETWORKING_Connection(),
    ],
    [ResourceType.WORKFLOWS_WORKFLOW, () => new WORKFLOWS_Workflow()],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMBinding,
      () => new BIGQUERYANALYTICSHUB_ListingIAMBinding(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMPOLICY,
      () => new BIGQUERYANALYTICSHUB_DataExchangeIamPolicy(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMMember,
      () => new BIGQUERYANALYTICSHUB_DataExchangeIAMMember(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTING,
      () => new BIGQUERYANALYTICSHUB_Listing(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMMember,
      () => new BIGQUERYANALYTICSHUB_ListingIAMMember(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMPOLICY,
      () => new BIGQUERYANALYTICSHUB_ListingIamPolicy(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGE,
      () => new BIGQUERYANALYTICSHUB_DataExchange(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMBinding,
      () => new BIGQUERYANALYTICSHUB_DataExchangeIAMBinding(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEISSUANCECONFIG,
      () => new CERTIFICATEMANAGER_CertificateIssuanceConfig(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATE,
      () => new CERTIFICATEMANAGER_Certificate(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_TRUSTCONFIG,
      () => new CERTIFICATEMANAGER_TrustConfig(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_DNSAUTHORIZATION,
      () => new CERTIFICATEMANAGER_DnsAuthorization(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAP,
      () => new CERTIFICATEMANAGER_CertificateMap(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAPENTRY,
      () => new CERTIFICATEMANAGER_CertificateMapEntry(),
    ],
    [ResourceType.ALLOYDB_USER, () => new ALLOYDB_User()],
    [ResourceType.ALLOYDB_BACKUP, () => new ALLOYDB_Backup()],
    [ResourceType.ALLOYDB_INSTANCE, () => new ALLOYDB_Instance()],
    [ResourceType.ALLOYDB_CLUSTER, () => new ALLOYDB_Cluster()],
    [
      ResourceType.VMWAREENGINE_NETWORKPEERING,
      () => new VMWAREENGINE_NetworkPeering(),
    ],
    [ResourceType.VMWAREENGINE_SUBNET, () => new VMWAREENGINE_Subnet()],
    [
      ResourceType.VMWAREENGINE_EXTERNALADDRESS,
      () => new VMWAREENGINE_ExternalAddress(),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORKPOLICY,
      () => new VMWAREENGINE_NetworkPolicy(),
    ],
    [ResourceType.VMWAREENGINE_CLUSTER, () => new VMWAREENGINE_Cluster()],
    [ResourceType.VMWAREENGINE_NETWORK, () => new VMWAREENGINE_Network()],
    [
      ResourceType.VMWAREENGINE_PRIVATECLOUD,
      () => new VMWAREENGINE_PrivateCloud(),
    ],
    [
      ResourceType.VMWAREENGINE_EXTERNALACCESSRULE,
      () => new VMWAREENGINE_ExternalAccessRule(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMBinding,
      () => new HEALTHCARE_DatasetIAMBinding(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMBinding,
      () => new HEALTHCARE_ConsentStoreIAMBinding(),
    ],
    [ResourceType.HEALTHCARE_FHIRSTORE, () => new HEALTHCARE_FhirStore()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMPOLICY,
      () => new HEALTHCARE_Hl7StoreIamPolicy(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMBinding,
      () => new HEALTHCARE_FhirStoreIAMBinding(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMMember,
      () => new HEALTHCARE_DicomStoreIAMMember(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMMember,
      () => new HEALTHCARE_DatasetIAMMember(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMBinding,
      () => new HEALTHCARE_DicomStoreIAMBinding(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMPOLICY,
      () => new HEALTHCARE_DicomStoreIamPolicy(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMMember,
      () => new HEALTHCARE_ConsentStoreIAMMember(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMPOLICY,
      () => new HEALTHCARE_DatasetIamPolicy(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMMember,
      () => new HEALTHCARE_FhirStoreIAMMember(),
    ],
    [ResourceType.HEALTHCARE_DATASET, () => new HEALTHCARE_Dataset()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMMember,
      () => new HEALTHCARE_Hl7StoreIAMMember(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMPOLICY,
      () => new HEALTHCARE_FhirStoreIamPolicy(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMPOLICY,
      () => new HEALTHCARE_ConsentStoreIamPolicy(),
    ],
    [ResourceType.HEALTHCARE_HL7STORE, () => new HEALTHCARE_Hl7Store()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMBinding,
      () => new HEALTHCARE_Hl7StoreIAMBinding(),
    ],
    [ResourceType.HEALTHCARE_CONSENTSTORE, () => new HEALTHCARE_ConsentStore()],
    [ResourceType.HEALTHCARE_DICOMSTORE, () => new HEALTHCARE_DicomStore()],
    [ResourceType.MIGRATIONCENTER_GROUP, () => new MIGRATIONCENTER_Group()],
    [
      ResourceType.MIGRATIONCENTER_PREFERENCESET,
      () => new MIGRATIONCENTER_PreferenceSet(),
    ],
    [ResourceType.BIGLAKE_TABLE, () => new BIGLAKE_Table()],
    [ResourceType.BIGLAKE_DATABASE, () => new BIGLAKE_Database()],
    [ResourceType.BIGLAKE_CATALOG, () => new BIGLAKE_Catalog()],
    [ResourceType.CLOUDASSET_PROJECTFEED, () => new CLOUDASSET_ProjectFeed()],
    [
      ResourceType.CLOUDASSET_ORGANIZATIONFEED,
      () => new CLOUDASSET_OrganizationFeed(),
    ],
    [ResourceType.CLOUDASSET_FOLDERFEED, () => new CLOUDASSET_FolderFeed()],
    [
      ResourceType.DATASTREAM_PRIVATECONNECTION,
      () => new DATASTREAM_PrivateConnection(),
    ],
    [
      ResourceType.DATASTREAM_CONNECTIONPROFILE,
      () => new DATASTREAM_ConnectionProfile(),
    ],
    [ResourceType.DATASTREAM_STREAM, () => new DATASTREAM_Stream()],
    [ResourceType.COMPUTE_TARGETGRPCPROXY, () => new COMPUTE_TargetGrpcProxy()],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMPOLICY,
      () => new COMPUTE_MachineImageIamPolicy(),
    ],
    [ResourceType.COMPUTE_ROUTERINTERFACE, () => new COMPUTE_RouterInterface()],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMPOLICY,
      () => new COMPUTE_BackendBucketIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCSERVICEPROJECT,
      () => new COMPUTE_SharedVPCServiceProject(),
    ],
    [
      ResourceType.COMPUTE_MANGEDSSLCERTIFICATE,
      () => new COMPUTE_MangedSslCertificate(),
    ],
    [ResourceType.COMPUTE_PACKETMIRRORING, () => new COMPUTE_PacketMirroring()],
    [ResourceType.COMPUTE_ROUTERNAT, () => new COMPUTE_RouterNat()],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMMember,
      () => new COMPUTE_BackendBucketIAMMember(),
    ],
    [
      ResourceType.COMPUTE_DISKASYNCREPLICATION,
      () => new COMPUTE_DiskAsyncReplication(),
    ],
    [ResourceType.COMPUTE_NODEGROUP, () => new COMPUTE_NodeGroup()],
    [ResourceType.COMPUTE_REGIONURLMAP, () => new COMPUTE_RegionUrlMap()],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICE,
      () => new COMPUTE_RegionBackendService(),
    ],
    [
      ResourceType.COMPUTE_DISKRESOURCEPOLICYATTACHMENT,
      () => new COMPUTE_DiskResourcePolicyAttachment(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETTCPPROXY,
      () => new COMPUTE_RegionTargetTcpProxy(),
    ],
    [ResourceType.COMPUTE_BACKENDSERVICE, () => new COMPUTE_BackendService()],
    [ResourceType.COMPUTE_RESERVATION, () => new COMPUTE_Reservation()],
    [
      ResourceType.COMPUTE_PROJECTDEFAULTNETWORKTIER,
      () => new COMPUTE_ProjectDefaultNetworkTier(),
    ],
    [
      ResourceType.COMPUTE_REGIONHEALTHCHECK,
      () => new COMPUTE_RegionHealthCheck(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPPROXY,
      () => new COMPUTE_RegionTargetHttpProxy(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICY,
      () => new COMPUTE_RegionSecurityPolicy(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMBinding,
      () => new COMPUTE_RegionDiskIAMBinding(),
    ],
    [ResourceType.COMPUTE_FORWARDINGRULE, () => new COMPUTE_ForwardingRule()],
    [
      ResourceType.COMPUTE_REGIONINSTANCETEMPLATE,
      () => new COMPUTE_RegionInstanceTemplate(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPNAMEDPORT,
      () => new COMPUTE_InstanceGroupNamedPort(),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTLIST,
      () => new COMPUTE_NetworkEndpointList(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMMember,
      () => new COMPUTE_BackendServiceIAMMember(),
    ],
    [
      ResourceType.COMPUTE_INSTANCESETTINGS,
      () => new COMPUTE_InstanceSettings(),
    ],
    [ResourceType.COMPUTE_RESOURCEPOLICY, () => new COMPUTE_ResourcePolicy()],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMPOLICY,
      () => new COMPUTE_RegionBackendServiceIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_PUBLICDELEGATEDPREFIX,
      () => new COMPUTE_PublicDelegatedPrefix(),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTGROUP,
      () => new COMPUTE_NetworkEndpointGroup(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINT,
      () => new COMPUTE_GlobalNetworkEndpoint(),
    ],
    [
      ResourceType.COMPUTE_PROJECTMETADATAITEM,
      () => new COMPUTE_ProjectMetadataItem(),
    ],
    [ResourceType.COMPUTE_ATTACHEDDISK, () => new COMPUTE_AttachedDisk()],
    [ResourceType.COMPUTE_TARGETPOOL, () => new COMPUTE_TargetPool()],
    [
      ResourceType.COMPUTE_NETWORKATTACHMENT,
      () => new COMPUTE_NetworkAttachment(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPSPROXY,
      () => new COMPUTE_RegionTargetHttpsProxy(),
    ],
    [
      ResourceType.COMPUTE_EXTERNALVPNGATEWAY,
      () => new COMPUTE_ExternalVpnGateway(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMPOLICY,
      () => new COMPUTE_RegionDiskIamPolicy(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINTGROUP,
      () => new COMPUTE_GlobalNetworkEndpointGroup(),
    ],
    [
      ResourceType.COMPUTE_SECURITYSCANCONFIG,
      () => new COMPUTE_SecurityScanConfig(),
    ],
    [ResourceType.COMPUTE_AUTOSCALER, () => new COMPUTE_Autoscaler()],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYASSOCIATION,
      () => new COMPUTE_RegionNetworkFirewallPolicyAssociation(),
    ],
    [ResourceType.COMPUTE_URLMAP, () => new COMPUTE_URLMap()],
    [
      ResourceType.COMPUTE_BACKENDSERVICESIGNEDURLKEY,
      () => new COMPUTE_BackendServiceSignedUrlKey(),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYRULE,
      () => new COMPUTE_FirewallPolicyRule(),
    ],
    [
      ResourceType.COMPUTE_MANAGEDSSLCERTIFICATE,
      () => new COMPUTE_ManagedSslCertificate(),
    ],
    [ResourceType.COMPUTE_TARGETTCPPROXY, () => new COMPUTE_TargetTCPProxy()],
    [
      ResourceType.COMPUTE_INTERCONNECTATTACHMENT,
      () => new COMPUTE_InterconnectAttachment(),
    ],
    [ResourceType.COMPUTE_NETWORKENDPOINT, () => new COMPUTE_NetworkEndpoint()],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMEMBERSHIP,
      () => new COMPUTE_InstanceGroupMembership(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICY,
      () => new COMPUTE_NetworkFirewallPolicy(),
    ],
    [ResourceType.COMPUTE_FIREWALLPOLICY, () => new COMPUTE_FirewallPolicy()],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMBinding,
      () => new COMPUTE_MachineImageIAMBinding(),
    ],
    [
      ResourceType.COMPUTE_REGIONCOMMITMENT,
      () => new COMPUTE_RegionCommitment(),
    ],
    [ResourceType.COMPUTE_DISKIAMBinding, () => new COMPUTE_DiskIAMBinding()],
    [ResourceType.COMPUTE_HEALTHCHECK, () => new COMPUTE_HealthCheck()],
    [
      ResourceType.COMPUTE_CAEXTERNALACCOUNTKEY,
      () => new COMPUTE_CaExternalAccountKey(),
    ],
    [ResourceType.COMPUTE_REGIONDISK, () => new COMPUTE_RegionDisk()],
    [
      ResourceType.COMPUTE_INSTANCEFROMMACHINEIMAGE,
      () => new COMPUTE_InstanceFromMachineImage(),
    ],
    [ResourceType.COMPUTE_REGIONSSLPOLICY, () => new COMPUTE_RegionSslPolicy()],
    [ResourceType.COMPUTE_IMAGEIAMMember, () => new COMPUTE_ImageIAMMember()],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYRULE,
      () => new COMPUTE_NetworkFirewallPolicyRule(),
    ],
    [
      ResourceType.COMPUTE_TARGETHTTPSPROXY,
      () => new COMPUTE_TargetHttpsProxy(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMMember,
      () => new COMPUTE_RegionBackendServiceIAMMember(),
    ],
    [ResourceType.COMPUTE_BACKENDBUCKET, () => new COMPUTE_BackendBucket()],
    [
      ResourceType.COMPUTE_PUBLICADVERTISEDPREFIX,
      () => new COMPUTE_PublicAdvertisedPrefix(),
    ],
    [
      ResourceType.COMPUTE_NETWORKEDGESECURITYSERVICE,
      () => new COMPUTE_NetworkEdgeSecurityService(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMMember,
      () => new COMPUTE_SubnetworkIAMMember(),
    ],
    [ResourceType.COMPUTE_INSTANCEGROUP, () => new COMPUTE_InstanceGroup()],
    [ResourceType.COMPUTE_FIREWALL, () => new COMPUTE_Firewall()],
    [
      ResourceType.COMPUTE_REGIONSSLCERTIFICATE,
      () => new COMPUTE_RegionSslCertificate(),
    ],
    [
      ResourceType.COMPUTE_SERVICEATTACHMENT,
      () => new COMPUTE_ServiceAttachment(),
    ],
    [ResourceType.COMPUTE_SSLCERTIFICATE, () => new COMPUTE_SSLCertificate()],
    [ResourceType.COMPUTE_SSLPOLICY, () => new COMPUTE_SSLPolicy()],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINT,
      () => new COMPUTE_RegionNetworkEndpoint(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYASSOCIATION,
      () => new COMPUTE_NetworkFirewallPolicyAssociation(),
    ],
    [ResourceType.COMPUTE_INSTANCE, () => new COMPUTE_Instance()],
    [ResourceType.COMPUTE_HAVPNGATEWAY, () => new COMPUTE_HaVpnGateway()],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMANAGER,
      () => new COMPUTE_InstanceGroupManager(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINTGROUP,
      () => new COMPUTE_RegionNetworkEndpointGroup(),
    ],
    [
      ResourceType.COMPUTE_INSTANCETEMPLATE,
      () => new COMPUTE_InstanceTemplate(),
    ],
    [ResourceType.COMPUTE_NODETEMPLATE, () => new COMPUTE_NodeTemplate()],
    [ResourceType.COMPUTE_NETWORKPEERING, () => new COMPUTE_NetworkPeering()],
    [ResourceType.COMPUTE_SECURITYPOLICY, () => new COMPUTE_SecurityPolicy()],
    [ResourceType.COMPUTE_ROUTE, () => new COMPUTE_Route()],
    [ResourceType.COMPUTE_NETWORK, () => new COMPUTE_Network()],
    [
      ResourceType.COMPUTE_SHAREDVPCHOSTPROJECT,
      () => new COMPUTE_SharedVPCHostProject(),
    ],
    [ResourceType.COMPUTE_ADDRESS, () => new COMPUTE_Address()],
    [ResourceType.COMPUTE_DISKIAMPOLICY, () => new COMPUTE_DiskIamPolicy()],
    [ResourceType.COMPUTE_IMAGEIAMPOLICY, () => new COMPUTE_ImageIamPolicy()],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICY,
      () => new COMPUTE_RegionNetworkFirewallPolicy(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMMember,
      () => new COMPUTE_RegionDiskIAMMember(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMBinding,
      () => new COMPUTE_SnapshotIAMBinding(),
    ],
    [
      ResourceType.COMPUTE_PERINSTANCECONFIG,
      () => new COMPUTE_PerInstanceConfig(),
    ],
    [ResourceType.COMPUTE_SUBNETWORK, () => new COMPUTE_Subnetwork()],
    [ResourceType.COMPUTE_IMAGE, () => new COMPUTE_Image()],
    [
      ResourceType.COMPUTE_InstanceIAMPOLICY,
      () => new COMPUTE_InstanceIAMPolicy(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMMember,
      () => new COMPUTE_SnapshotIAMMember(),
    ],
    [ResourceType.COMPUTE_TARGETSSLPROXY, () => new COMPUTE_TargetSSLProxy()],
    [ResourceType.COMPUTE_VPNTUNNEL, () => new COMPUTE_VPNTunnel()],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYASSOCIATION,
      () => new COMPUTE_FirewallPolicyAssociation(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYRULE,
      () => new COMPUTE_RegionNetworkFirewallPolicyRule(),
    ],
    [ResourceType.COMPUTE_ROUTER, () => new COMPUTE_Router()],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMPOLICY,
      () => new COMPUTE_BackendServiceIamPolicy(),
    ],
    [ResourceType.COMPUTE_DISK, () => new COMPUTE_Disk()],
    [ResourceType.COMPUTE_VPNGATEWAY, () => new COMPUTE_VPNGateway()],
    [
      ResourceType.COMPUTE_INSTANCEFROMTEMPLATE,
      () => new COMPUTE_InstanceFromTemplate(),
    ],
    [ResourceType.COMPUTE_IMAGEIAMBinding, () => new COMPUTE_ImageIAMBinding()],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMPOLICY,
      () => new COMPUTE_SnapshotIamPolicy(),
    ],
    [ResourceType.COMPUTE_SNAPSHOT, () => new COMPUTE_Snapshot()],
    [ResourceType.COMPUTE_DISKIAMMember, () => new COMPUTE_DiskIAMMember()],
    [
      ResourceType.COMPUTE_NETWORKPEERINGROUTESCONFIG,
      () => new COMPUTE_NetworkPeeringRoutesConfig(),
    ],
    [ResourceType.COMPUTE_TARGETHTTPPROXY, () => new COMPUTE_TargetHttpProxy()],
    [
      ResourceType.COMPUTE_REGIONINSTANCEGROUPMANAGER,
      () => new COMPUTE_RegionInstanceGroupManager(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICYRULE,
      () => new COMPUTE_RegionSecurityPolicyRule(),
    ],
    [ResourceType.COMPUTE_GLOBALADDRESS, () => new COMPUTE_GlobalAddress()],
    [
      ResourceType.COMPUTE_REGIONDISKRESOURCEPOLICYATTACHMENT,
      () => new COMPUTE_RegionDiskResourcePolicyAttachment(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMBinding,
      () => new COMPUTE_BackendServiceIAMBinding(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMBinding,
      () => new COMPUTE_BackendBucketIAMBinding(),
    ],
    [ResourceType.COMPUTE_PROJECTMETADATA, () => new COMPUTE_ProjectMetadata()],
    [
      ResourceType.COMPUTE_REGIONPERINSTANCECONFIG,
      () => new COMPUTE_RegionPerInstanceConfig(),
    ],
    [
      ResourceType.COMPUTE_HTTPSHEALTHCHECK,
      () => new COMPUTE_HttpsHealthCheck(),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMMember,
      () => new COMPUTE_MachineImageIAMMember(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMBinding,
      () => new COMPUTE_RegionBackendServiceIAMBinding(),
    ],
    [ResourceType.COMPUTE_MACHINEIMAGE, () => new COMPUTE_MachineImage()],
    [ResourceType.COMPUTE_ROUTERPEER, () => new COMPUTE_RouterPeer()],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYRULE,
      () => new COMPUTE_OrganizationSecurityPolicyRule(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMPOLICY,
      () => new COMPUTE_SubnetworkIAMPolicy(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETSIGNEDURLKEY,
      () => new COMPUTE_BackendBucketSignedUrlKey(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYASSOCIATION,
      () => new COMPUTE_OrganizationSecurityPolicyAssociation(),
    ],
    [
      ResourceType.COMPUTE_REGIONAUTOSCALER,
      () => new COMPUTE_RegionAutoscaler(),
    ],
    [
      ResourceType.COMPUTE_GLOBALFORWARDINGRULE,
      () => new COMPUTE_GlobalForwardingRule(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMBinding,
      () => new COMPUTE_SubnetworkIAMBinding(),
    ],
    [ResourceType.COMPUTE_TARGETINSTANCE, () => new COMPUTE_TargetInstance()],
    [ResourceType.COMPUTE_HTTPHEALTHCHECK, () => new COMPUTE_HttpHealthCheck()],
    [
      ResourceType.COMPUTE_InstanceIAMMember,
      () => new COMPUTE_InstanceIAMMember(),
    ],
    [
      ResourceType.COMPUTE_InstanceIAMBinding,
      () => new COMPUTE_InstanceIAMBinding(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICY,
      () => new COMPUTE_OrganizationSecurityPolicy(),
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
      ResourceType.NETWORKSECURITY_ADDRESSGROUP,
      () => new NETWORKSECURITY_AddressGroup(),
    ],
    [
      ResourceType.NETWORKSECURITY_SERVERTLSPOLICY,
      () => new NETWORKSECURITY_ServerTlsPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMPOLICY,
      () => new NETWORKSECURITY_AddressGroupIamPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_FIREWALLENDPOINT,
      () => new NETWORKSECURITY_FirewallEndpoint(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILEGROUP,
      () => new NETWORKSECURITY_SecurityProfileGroup(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILE,
      () => new NETWORKSECURITY_SecurityProfile(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMMember,
      () => new NETWORKSECURITY_AddressGroupIAMMember(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICYRULE,
      () => new NETWORKSECURITY_GatewaySecurityPolicyRule(),
    ],
    [ResourceType.NETWORKSECURITY_URLLIST, () => new NETWORKSECURITY_UrlList()],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMBinding,
      () => new NETWORKSECURITY_AddressGroupIAMBinding(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICY,
      () => new NETWORKSECURITY_GatewaySecurityPolicy(),
    ],
    [
      ResourceType.NETWORKSECURITY_TLSINSPECTIONPOLICY,
      () => new NETWORKSECURITY_TlsInspectionPolicy(),
    ],
    [ResourceType.LOOKER_INSTANCE, () => new LOOKER_Instance()],
    [ResourceType.FOLDER_IAMPOLICY, () => new FOLDER_IAMPolicy()],
    [ResourceType.FOLDER_IAMBinding, () => new FOLDER_IAMBinding()],
    [
      ResourceType.FOLDER_ACCESSAPPROVALSETTINGS,
      () => new FOLDER_AccessApprovalSettings(),
    ],
    [ResourceType.FOLDER_IAMMember, () => new FOLDER_IAMMember()],
    [
      ResourceType.FOLDER_ORGANIZATIONPOLICY,
      () => new FOLDER_OrganizationPolicy(),
    ],
    [ResourceType.FOLDER_IAMAuditCONFIG, () => new FOLDER_IAMAuditConfig()],
    [ResourceType.DATAPLEX_ASSETIAMPOLICY, () => new DATAPLEX_AssetIamPolicy()],
    [ResourceType.DATAPLEX_ASSETIAMMember, () => new DATAPLEX_AssetIAMMember()],
    [ResourceType.DATAPLEX_ASSET, () => new DATAPLEX_Asset()],
    [ResourceType.DATAPLEX_TASKIAMMember, () => new DATAPLEX_TaskIAMMember()],
    [ResourceType.DATAPLEX_TASK, () => new DATAPLEX_Task()],
    [ResourceType.DATAPLEX_DATASCAN, () => new DATAPLEX_Datascan()],
    [
      ResourceType.DATAPLEX_ASSETIAMBinding,
      () => new DATAPLEX_AssetIAMBinding(),
    ],
    [ResourceType.DATAPLEX_LAKEIAMMember, () => new DATAPLEX_LakeIAMMember()],
    [
      ResourceType.DATAPLEX_DATASCANIAMPOLICY,
      () => new DATAPLEX_DatascanIamPolicy(),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMBinding,
      () => new DATAPLEX_DatascanIAMBinding(),
    ],
    [ResourceType.DATAPLEX_TASKIAMPOLICY, () => new DATAPLEX_TaskIamPolicy()],
    [ResourceType.DATAPLEX_LAKEIAMBinding, () => new DATAPLEX_LakeIAMBinding()],
    [ResourceType.DATAPLEX_TASKIAMBinding, () => new DATAPLEX_TaskIAMBinding()],
    [ResourceType.DATAPLEX_ZONE, () => new DATAPLEX_Zone()],
    [ResourceType.DATAPLEX_LAKEIAMPOLICY, () => new DATAPLEX_LakeIamPolicy()],
    [ResourceType.DATAPLEX_LAKE, () => new DATAPLEX_Lake()],
    [ResourceType.DATAPLEX_ZONEIAMPOLICY, () => new DATAPLEX_ZoneIamPolicy()],
    [ResourceType.DATAPLEX_ZONEIAMBinding, () => new DATAPLEX_ZoneIAMBinding()],
    [ResourceType.DATAPLEX_ZONEIAMMember, () => new DATAPLEX_ZoneIAMMember()],
    [
      ResourceType.DATAPLEX_DATASCANIAMMember,
      () => new DATAPLEX_DatascanIAMMember(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMBinding,
      () => new SECRETMANAGER_SecretIAMBinding(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMPOLICY,
      () => new SECRETMANAGER_SecretIamPolicy(),
    ],
    [ResourceType.SECRETMANAGER_SECRET, () => new SECRETMANAGER_Secret()],
    [
      ResourceType.SECRETMANAGER_SECRETIAMMember,
      () => new SECRETMANAGER_SecretIAMMember(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETVERSION,
      () => new SECRETMANAGER_SecretVersion(),
    ],
    [ResourceType.APPENGINE_FIREWALLRULE, () => new APPENGINE_FirewallRule()],
    [
      ResourceType.APPENGINE_APPLICATIONURLDISPATCHRULES,
      () => new APPENGINE_ApplicationUrlDispatchRules(),
    ],
    [ResourceType.APPENGINE_APPLICATION, () => new APPENGINE_Application()],
    [
      ResourceType.APPENGINE_STANDARDAPPVERSION,
      () => new APPENGINE_StandardAppVersion(),
    ],
    [
      ResourceType.APPENGINE_FLEXIBLEAPPVERSION,
      () => new APPENGINE_FlexibleAppVersion(),
    ],
    [
      ResourceType.APPENGINE_SERVICENETWORKSETTINGS,
      () => new APPENGINE_ServiceNetworkSettings(),
    ],
    [ResourceType.APPENGINE_DOMAINMAPPING, () => new APPENGINE_DomainMapping()],
    [
      ResourceType.APPENGINE_ENGINESPLITTRAFFIC,
      () => new APPENGINE_EngineSplitTraffic(),
    ],
    [ResourceType.DATAFLOW_PIPELINE, () => new DATAFLOW_Pipeline()],
    [ResourceType.DATAFLOW_JOB, () => new DATAFLOW_Job()],
    [
      ResourceType.DATAFLOW_FLEXTEMPLATEJOB,
      () => new DATAFLOW_FlexTemplateJob(),
    ],
    [ResourceType.PROJECTS_IAMMember, () => new PROJECTS_IAMMember()],
    [
      ResourceType.PROJECTS_ORGANIZATIONPOLICY,
      () => new PROJECTS_OrganizationPolicy(),
    ],
    [
      ResourceType.PROJECTS_USAGEEXPORTBUCKET,
      () => new PROJECTS_UsageExportBucket(),
    ],
    [ResourceType.PROJECTS_IAMPOLICY, () => new PROJECTS_IAMPolicy()],
    [ResourceType.PROJECTS_IAMBinding, () => new PROJECTS_IAMBinding()],
    [ResourceType.PROJECTS_APIKEY, () => new PROJECTS_ApiKey()],
    [
      ResourceType.PROJECTS_SERVICEIDENTITY,
      () => new PROJECTS_ServiceIdentity(),
    ],
    [
      ResourceType.PROJECTS_ACCESSAPPROVALSETTINGS,
      () => new PROJECTS_AccessApprovalSettings(),
    ],
    [ResourceType.PROJECTS_IAMAuditCONFIG, () => new PROJECTS_IAMAuditConfig()],
    [
      ResourceType.PROJECTS_DEFAULTSERVICEACCOUNTS,
      () => new PROJECTS_DefaultServiceAccounts(),
    ],
    [ResourceType.PROJECTS_SERVICE, () => new PROJECTS_Service()],
    [ResourceType.PROJECTS_IAMCUSTOMROLE, () => new PROJECTS_IAMCustomRole()],
    [ResourceType.DATAFUSION_INSTANCE, () => new DATAFUSION_Instance()],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMPOLICY,
      () => new CLOUDFUNCTIONSV2_FunctionIamPolicy(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMBinding,
      () => new CLOUDFUNCTIONSV2_FunctionIAMBinding(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMMember,
      () => new CLOUDFUNCTIONSV2_FunctionIAMMember(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTION,
      () => new CLOUDFUNCTIONSV2_Function(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMMember,
      () => new ARTIFACTREGISTRY_RepositoryIAMMember(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_VPCSCCONFIG,
      () => new ARTIFACTREGISTRY_VpcscConfig(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMPOLICY,
      () => new ARTIFACTREGISTRY_RepositoryIamPolicy(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMBinding,
      () => new ARTIFACTREGISTRY_RepositoryIAMBinding(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORY,
      () => new ARTIFACTREGISTRY_Repository(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERS,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeters(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERRESOURCE,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeterResource(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMMember,
      () => new ACCESSCONTEXTMANAGER_AccessPolicyIAMMember(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_AccessPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELCONDITION,
      () => new ACCESSCONTEXTMANAGER_AccessLevelCondition(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETER,
      () => new ACCESSCONTEXTMANAGER_ServicePerimeter(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_AUTHORIZEDORGSDESC,
      () => new ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_GCPUSERACCESSBINDING,
      () => new ACCESSCONTEXTMANAGER_GcpUserAccessBinding(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMPOLICY,
      () => new ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMBinding,
      () => new ACCESSCONTEXTMANAGER_AccessPolicyIAMBinding(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_INGRESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_IngressPolicy(),
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
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVEL,
      () => new ACCESSCONTEXTMANAGER_AccessLevel(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELS,
      () => new ACCESSCONTEXTMANAGER_AccessLevels(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_EGRESSPOLICY,
      () => new ACCESSCONTEXTMANAGER_EgressPolicy(),
    ],
    [ResourceType.STORAGE_HMACKEY, () => new STORAGE_HmacKey()],
    [ResourceType.STORAGE_BUCKETOBJECT, () => new STORAGE_BucketObject()],
    [ResourceType.STORAGE_TRANSFERJOB, () => new STORAGE_TransferJob()],
    [
      ResourceType.STORAGE_BUCKETIAMBinding,
      () => new STORAGE_BucketIAMBinding(),
    ],
    [ResourceType.STORAGE_NOTIFICATION, () => new STORAGE_Notification()],
    [
      ResourceType.STORAGE_INSIGHTSREPORTCONFIG,
      () => new STORAGE_InsightsReportConfig(),
    ],
    [ResourceType.STORAGE_BUCKET, () => new STORAGE_Bucket()],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACL,
      () => new STORAGE_DefaultObjectACL(),
    ],
    [
      ResourceType.STORAGE_BUCKETACCESSCONTROL,
      () => new STORAGE_BucketAccessControl(),
    ],
    [ResourceType.STORAGE_BUCKETIAMPOLICY, () => new STORAGE_BucketIAMPolicy()],
    [ResourceType.STORAGE_BUCKETIAMMember, () => new STORAGE_BucketIAMMember()],
    [ResourceType.STORAGE_OBJECTACL, () => new STORAGE_ObjectACL()],
    [
      ResourceType.STORAGE_OBJECTACCESSCONTROL,
      () => new STORAGE_ObjectAccessControl(),
    ],
    [
      ResourceType.STORAGE_TRANSFERAGENTPOOL,
      () => new STORAGE_TransferAgentPool(),
    ],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACCESSCONTROL,
      () => new STORAGE_DefaultObjectAccessControl(),
    ],
    [ResourceType.STORAGE_BUCKETACL, () => new STORAGE_BucketACL()],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_PRIVATECONNECTION,
      () => new DATABASEMIGRATIONSERVICE_PrivateConnection(),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_CONNECTIONPROFILE,
      () => new DATABASEMIGRATIONSERVICE_ConnectionProfile(),
    ],
    [
      ResourceType.SECURITYCENTER_PROJECTCUSTOMMODULE,
      () => new SECURITYCENTER_ProjectCustomModule(),
    ],
    [
      ResourceType.SECURITYCENTER_InstanceIAMMember,
      () => new SECURITYCENTER_InstanceIAMMember(),
    ],
    [
      ResourceType.SECURITYCENTER_InstanceIAMBinding,
      () => new SECURITYCENTER_InstanceIAMBinding(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMPOLICY,
      () => new SECURITYCENTER_SourceIamPolicy(),
    ],
    [
      ResourceType.SECURITYCENTER_InstanceIAMPOLICY,
      () => new SECURITYCENTER_InstanceIAMPolicy(),
    ],
    [
      ResourceType.SECURITYCENTER_EVENTTHREATDETECTIONCUSTOMMODULE,
      () => new SECURITYCENTER_EventThreatDetectionCustomModule(),
    ],
    [
      ResourceType.SECURITYCENTER_NOTIFICATIONCONFIG,
      () => new SECURITYCENTER_NotificationConfig(),
    ],
    [ResourceType.SECURITYCENTER_SOURCE, () => new SECURITYCENTER_Source()],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMBinding,
      () => new SECURITYCENTER_SourceIAMBinding(),
    ],
    [
      ResourceType.SECURITYCENTER_FOLDERCUSTOMMODULE,
      () => new SECURITYCENTER_FolderCustomModule(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMMember,
      () => new SECURITYCENTER_SourceIAMMember(),
    ],
    [
      ResourceType.SECURITYCENTER_MUTECONFIG,
      () => new SECURITYCENTER_MuteConfig(),
    ],
    [
      ResourceType.SECURITYCENTER_ORGANIZATIONCUSTOMMODULE,
      () => new SECURITYCENTER_OrganizationCustomModule(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_POLICYBASEDROUTE,
      () => new NETWORKCONNECTIVITY_PolicyBasedRoute(),
    ],
    [ResourceType.NETWORKCONNECTIVITY_HUB, () => new NETWORKCONNECTIVITY_Hub()],
    [
      ResourceType.NETWORKCONNECTIVITY_SPOKE,
      () => new NETWORKCONNECTIVITY_Spoke(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SERVICECONNECTIONPOLICY,
      () => new NETWORKCONNECTIVITY_ServiceConnectionPolicy(),
    ],
    [ResourceType.EVENTARC_TRIGGER, () => new EVENTARC_Trigger()],
    [ResourceType.EVENTARC_CHANNEL, () => new EVENTARC_Channel()],
    [
      ResourceType.EVENTARC_GOOGLECHANNELCONFIG,
      () => new EVENTARC_GoogleChannelConfig(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKAPPATTESTCONFIG,
      () => new FIREBASE_AppCheckAppAttestConfig(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKPLAYINTEGRITYCONFIG,
      () => new FIREBASE_AppCheckPlayIntegrityConfig(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKSERVICECONFIG,
      () => new FIREBASE_AppCheckServiceConfig(),
    ],
    [
      ResourceType.FIREBASE_EXTENSIONSINSTANCE,
      () => new FIREBASE_ExtensionsInstance(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKDEBUGTOKEN,
      () => new FIREBASE_AppCheckDebugToken(),
    ],
    [ResourceType.FIREBASE_HOSTINGSITE, () => new FIREBASE_HostingSite()],
    [ResourceType.FIREBASE_STORAGEBUCKET, () => new FIREBASE_StorageBucket()],
    [ResourceType.FIREBASE_ANDROIDAPP, () => new FIREBASE_AndroidApp()],
    [ResourceType.FIREBASE_PROJECT, () => new FIREBASE_Project()],
    [
      ResourceType.FIREBASE_HOSTINGCUSTOMDOMAIN,
      () => new FIREBASE_HostingCustomDomain(),
    ],
    [
      ResourceType.FIREBASE_DATABASEINSTANCE,
      () => new FIREBASE_DatabaseInstance(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAV3CONFIG,
      () => new FIREBASE_AppCheckRecaptchaV3Config(),
    ],
    [ResourceType.FIREBASE_HOSTINGRELEASE, () => new FIREBASE_HostingRelease()],
    [ResourceType.FIREBASE_APPLEAPP, () => new FIREBASE_AppleApp()],
    [ResourceType.FIREBASE_HOSTINGVERSION, () => new FIREBASE_HostingVersion()],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAENTERPRISECONFIG,
      () => new FIREBASE_AppCheckRecaptchaEnterpriseConfig(),
    ],
    [ResourceType.FIREBASE_WEBAPP, () => new FIREBASE_WebApp()],
    [ResourceType.FIREBASE_HOSTINGCHANNEL, () => new FIREBASE_HostingChannel()],
    [ResourceType.RESOURCEMANAGER_LIEN, () => new RESOURCEMANAGER_Lien()],
    [
      ResourceType.DATALOSS_PREVENTIONINSPECTTEMPLATE,
      () => new DATALOSS_PreventionInspectTemplate(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONDEIDENTIFYTEMPLATE,
      () => new DATALOSS_PreventionDeidentifyTemplate(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONJOBTRIGGER,
      () => new DATALOSS_PreventionJobTrigger(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONSTOREDINFOTYPE,
      () => new DATALOSS_PreventionStoredInfoType(),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMPOLICY,
      () => new CLOUDRUNV2_ServiceIamPolicy(),
    ],
    [ResourceType.CLOUDRUNV2_JOBIAMMember, () => new CLOUDRUNV2_JobIAMMember()],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMBinding,
      () => new CLOUDRUNV2_ServiceIAMBinding(),
    ],
    [
      ResourceType.CLOUDRUNV2_JOBIAMBinding,
      () => new CLOUDRUNV2_JobIAMBinding(),
    ],
    [ResourceType.CLOUDRUNV2_SERVICE, () => new CLOUDRUNV2_Service()],
    [ResourceType.CLOUDRUNV2_JOBIAMPOLICY, () => new CLOUDRUNV2_JobIamPolicy()],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMMember,
      () => new CLOUDRUNV2_ServiceIAMMember(),
    ],
    [ResourceType.CLOUDRUNV2_JOB, () => new CLOUDRUNV2_Job()],
    [ResourceType.EDGENETWORK_SUBNET, () => new EDGENETWORK_Subnet()],
    [ResourceType.EDGENETWORK_NETWORK, () => new EDGENETWORK_Network()],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMMember,
      () => new SOURCEREPO_RepositoryIAMMember(),
    ],
    [ResourceType.SOURCEREPO_REPOSITORY, () => new SOURCEREPO_Repository()],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMBinding,
      () => new SOURCEREPO_RepositoryIAMBinding(),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMPOLICY,
      () => new SOURCEREPO_RepositoryIamPolicy(),
    ],
    [ResourceType.IAP_TUNNELIAMBinding, () => new IAP_TunnelIAMBinding()],
    [ResourceType.IAP_TUNNELIAMPOLICY, () => new IAP_TunnelIamPolicy()],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMPOLICY,
      () => new IAP_WebBackendServiceIamPolicy(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMMember,
      () => new IAP_WebTypeComputeIAMMember(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMBinding,
      () => new IAP_WebTypeComputeIAMBinding(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMPOLICY,
      () => new IAP_WebTypeComputeIamPolicy(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMMember,
      () => new IAP_WebRegionBackendServiceIAMMember(),
    ],
    [ResourceType.IAP_WEBIAMBinding, () => new IAP_WebIAMBinding()],
    [ResourceType.IAP_TUNNELIAMMember, () => new IAP_TunnelIAMMember()],
    [
      ResourceType.IAP_TUNNELInstanceIAMPOLICY,
      () => new IAP_TunnelInstanceIAMPolicy(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMMember,
      () => new IAP_AppEngineVersionIAMMember(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMBinding,
      () => new IAP_WebBackendServiceIAMBinding(),
    ],
    [ResourceType.IAP_BRAND, () => new IAP_Brand()],
    [ResourceType.IAP_WEBIAMMember, () => new IAP_WebIAMMember()],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMPOLICY,
      () => new IAP_AppEngineVersionIamPolicy(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMMember,
      () => new IAP_WebBackendServiceIAMMember(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMBinding,
      () => new IAP_AppEngineVersionIAMBinding(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMMember,
      () => new IAP_AppEngineServiceIAMMember(),
    ],
    [ResourceType.IAP_WEBIAMPOLICY, () => new IAP_WebIamPolicy()],
    [
      ResourceType.IAP_APPENGINESERVICEIAMPOLICY,
      () => new IAP_AppEngineServiceIamPolicy(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMBinding,
      () => new IAP_AppEngineServiceIAMBinding(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMMember,
      () => new IAP_WebTypeAppEngingIAMMember(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMPOLICY,
      () => new IAP_WebRegionBackendServiceIamPolicy(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMPOLICY,
      () => new IAP_WebTypeAppEngingIamPolicy(),
    ],
    [
      ResourceType.IAP_TUNNELInstanceIAMMember,
      () => new IAP_TunnelInstanceIAMMember(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMBinding,
      () => new IAP_WebRegionBackendServiceIAMBinding(),
    ],
    [
      ResourceType.IAP_TUNNELInstanceIAMBinding,
      () => new IAP_TunnelInstanceIAMBinding(),
    ],
    [ResourceType.IAP_CLIENT, () => new IAP_Client()],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMBinding,
      () => new IAP_WebTypeAppEngingIAMBinding(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONBUCKETCONFIG,
      () => new LOGGING_OrganizationBucketConfig(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTBUCKETCONFIG,
      () => new LOGGING_BillingAccountBucketConfig(),
    ],
    [ResourceType.LOGGING_METRIC, () => new LOGGING_Metric()],
    [
      ResourceType.LOGGING_ORGANIZATIONEXCLUSION,
      () => new LOGGING_OrganizationExclusion(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSETTINGS,
      () => new LOGGING_OrganizationSettings(),
    ],
    [ResourceType.LOGGING_PROJECTSINK, () => new LOGGING_ProjectSink()],
    [ResourceType.LOGGING_LINKEDDATASET, () => new LOGGING_LinkedDataset()],
    [
      ResourceType.LOGGING_BILLINGACCOUNTEXCLUSION,
      () => new LOGGING_BillingAccountExclusion(),
    ],
    [
      ResourceType.LOGGING_PROJECTEXCLUSION,
      () => new LOGGING_ProjectExclusion(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSINK,
      () => new LOGGING_OrganizationSink(),
    ],
    [
      ResourceType.LOGGING_FOLDERBUCKETCONFIG,
      () => new LOGGING_FolderBucketConfig(),
    ],
    [ResourceType.LOGGING_FOLDERSINK, () => new LOGGING_FolderSink()],
    [ResourceType.LOGGING_FOLDERSETTINGS, () => new LOGGING_FolderSettings()],
    [
      ResourceType.LOGGING_PROJECTBUCKETCONFIG,
      () => new LOGGING_ProjectBucketConfig(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTSINK,
      () => new LOGGING_BillingAccountSink(),
    ],
    [ResourceType.LOGGING_LOGVIEW, () => new LOGGING_LogView()],
    [ResourceType.LOGGING_FOLDEREXCLUSION, () => new LOGGING_FolderExclusion()],
    [
      ResourceType.OSCONFIG_OSPOLICYASSIGNMENT,
      () => new OSCONFIG_OsPolicyAssignment(),
    ],
    [
      ResourceType.OSCONFIG_PATCHDEPLOYMENT,
      () => new OSCONFIG_PatchDeployment(),
    ],
    [ResourceType.OSCONFIG_GUESTPOLICIES, () => new OSCONFIG_GuestPolicies()],
    [
      ResourceType.SECURESOURCEMANAGER_InstanceIAMBinding,
      () => new SECURESOURCEMANAGER_InstanceIAMBinding(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCE,
      () => new SECURESOURCEMANAGER_Instance(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_InstanceIAMPOLICY,
      () => new SECURESOURCEMANAGER_InstanceIAMPolicy(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_InstanceIAMMember,
      () => new SECURESOURCEMANAGER_InstanceIAMMember(),
    ],
    [
      ResourceType.SERVICEUSAGE_CONSUMERQUOTAOVERRIDE,
      () => new SERVICEUSAGE_ConsumerQuotaOverride(),
    ],
    [
      ResourceType.CLOUDDOMAINS_REGISTRATION,
      () => new CLOUDDOMAINS_Registration(),
    ],
    [ResourceType.FIREBASERULES_RULESET, () => new FIREBASERULES_Ruleset()],
    [ResourceType.FIREBASERULES_RELEASE, () => new FIREBASERULES_Release()],
    [ResourceType.GKEHUB_NAMESPACE, () => new GKEHUB_Namespace()],
    [ResourceType.GKEHUB_SCOPEIAMMember, () => new GKEHUB_ScopeIAMMember()],
    [
      ResourceType.GKEHUB_MEMBERSHIPRBACROLEBINDING,
      () => new GKEHUB_MembershipRbacRoleBinding(),
    ],
    [ResourceType.GKEHUB_FEATURE, () => new GKEHUB_Feature()],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMMember,
      () => new GKEHUB_MembershipIAMMember(),
    ],
    [ResourceType.GKEHUB_MEMBERSHIP, () => new GKEHUB_Membership()],
    [
      ResourceType.GKEHUB_FEATUREIAMBinding,
      () => new GKEHUB_FeatureIAMBinding(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMPOLICY,
      () => new GKEHUB_MembershipIamPolicy(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMBinding,
      () => new GKEHUB_MembershipIAMBinding(),
    ],
    [ResourceType.GKEHUB_SCOPEIAMPOLICY, () => new GKEHUB_ScopeIamPolicy()],
    [
      ResourceType.GKEHUB_SCOPERBACROLEBINDING,
      () => new GKEHUB_ScopeRbacRoleBinding(),
    ],
    [ResourceType.GKEHUB_SCOPE, () => new GKEHUB_Scope()],
    [
      ResourceType.GKEHUB_MEMBERSHIPBINDING,
      () => new GKEHUB_MembershipBinding(),
    ],
    [ResourceType.GKEHUB_FEATUREIAMPOLICY, () => new GKEHUB_FeatureIamPolicy()],
    [ResourceType.GKEHUB_SCOPEIAMBinding, () => new GKEHUB_ScopeIAMBinding()],
    [ResourceType.GKEHUB_FEATUREIAMMember, () => new GKEHUB_FeatureIAMMember()],
    [
      ResourceType.GKEHUB_FEATUREMEMBERSHIP,
      () => new GKEHUB_FeatureMembership(),
    ],
    [ResourceType.GKEHUB_FLEET, () => new GKEHUB_Fleet()],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMPOLICY,
      () => new NOTEBOOKS_RuntimeIamPolicy(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMBinding,
      () => new NOTEBOOKS_RuntimeIAMBinding(),
    ],
    [ResourceType.NOTEBOOKS_ENVIRONMENT, () => new NOTEBOOKS_Environment()],
    [
      ResourceType.NOTEBOOKS_InstanceIAMBinding,
      () => new NOTEBOOKS_InstanceIAMBinding(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMMember,
      () => new NOTEBOOKS_RuntimeIAMMember(),
    ],
    [
      ResourceType.NOTEBOOKS_InstanceIAMPOLICY,
      () => new NOTEBOOKS_InstanceIAMPolicy(),
    ],
    [ResourceType.NOTEBOOKS_RUNTIME, () => new NOTEBOOKS_Runtime()],
    [ResourceType.NOTEBOOKS_LOCATION, () => new NOTEBOOKS_Location()],
    [ResourceType.NOTEBOOKS_INSTANCE, () => new NOTEBOOKS_Instance()],
    [
      ResourceType.NOTEBOOKS_InstanceIAMMember,
      () => new NOTEBOOKS_InstanceIAMMember(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMMember,
      () => new CLOUDFUNCTIONS_FunctionIAMMember(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMBinding,
      () => new CLOUDFUNCTIONS_FunctionIAMBinding(),
    ],
    [ResourceType.CLOUDFUNCTIONS_FUNCTION, () => new CLOUDFUNCTIONS_Function()],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMPOLICY,
      () => new CLOUDFUNCTIONS_FunctionIamPolicy(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATION,
      () => new WORKSTATIONS_Workstation(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMPOLICY,
      () => new WORKSTATIONS_WorkstationIamPolicy(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMPOLICY,
      () => new WORKSTATIONS_WorkstationConfigIamPolicy(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIG,
      () => new WORKSTATIONS_WorkstationConfig(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMBinding,
      () => new WORKSTATIONS_WorkstationConfigIAMBinding(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMMember,
      () => new WORKSTATIONS_WorkstationIAMMember(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCLUSTER,
      () => new WORKSTATIONS_WorkstationCluster(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMBinding,
      () => new WORKSTATIONS_WorkstationIAMBinding(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMMember,
      () => new WORKSTATIONS_WorkstationConfigIAMMember(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALCLUSTER,
      () => new GKEONPREM_BareMetalCluster(),
    ],
    [
      ResourceType.GKEONPREM_VMWARENODEPOOL,
      () => new GKEONPREM_VMwareNodePool(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALADMINCLUSTER,
      () => new GKEONPREM_BareMetalAdminCluster(),
    ],
    [ResourceType.GKEONPREM_VMWARECLUSTER, () => new GKEONPREM_VMwareCluster()],
    [
      ResourceType.GKEONPREM_BAREMETALNODEPOOL,
      () => new GKEONPREM_BareMetalNodePool(),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMCUSTOMROLE,
      () => new ORGANIZATIONS_IAMCustomRole(),
    ],
    [ResourceType.ORGANIZATIONS_FOLDER, () => new ORGANIZATIONS_Folder()],
    [
      ResourceType.ORGANIZATIONS_ACCESSAPPROVALSETTINGS,
      () => new ORGANIZATIONS_AccessApprovalSettings(),
    ],
    [ResourceType.ORGANIZATIONS_POLICY, () => new ORGANIZATIONS_Policy()],
    [
      ResourceType.ORGANIZATIONS_IAMAuditCONFIG,
      () => new ORGANIZATIONS_IAMAuditConfig(),
    ],
    [ResourceType.ORGANIZATIONS_IAMPOLICY, () => new ORGANIZATIONS_IAMPolicy()],
    [
      ResourceType.ORGANIZATIONS_IAMBinding,
      () => new ORGANIZATIONS_IAMBinding(),
    ],
    [ResourceType.ORGANIZATIONS_IAMMember, () => new ORGANIZATIONS_IAMMember()],
    [ResourceType.ORGANIZATIONS_PROJECT, () => new ORGANIZATIONS_Project()],
    [
      ResourceType.DISCOVERYENGINE_CHATENGINE,
      () => new DISCOVERYENGINE_ChatEngine(),
    ],
    [
      ResourceType.DISCOVERYENGINE_SEARCHENGINE,
      () => new DISCOVERYENGINE_SearchEngine(),
    ],
    [
      ResourceType.DISCOVERYENGINE_DATASTORE,
      () => new DISCOVERYENGINE_DataStore(),
    ],
    [ResourceType.TAGS_TAGVALUEIAMMember, () => new TAGS_TagValueIAMMember()],
    [ResourceType.TAGS_TAGBINDING, () => new TAGS_TagBinding()],
    [ResourceType.TAGS_LOCATIONTAGBINDING, () => new TAGS_LocationTagBinding()],
    [ResourceType.TAGS_TAGKEYIAMBinding, () => new TAGS_TagKeyIAMBinding()],
    [ResourceType.TAGS_TAGKEY, () => new TAGS_TagKey()],
    [ResourceType.TAGS_TAGVALUEIAMPOLICY, () => new TAGS_TagValueIamPolicy()],
    [ResourceType.TAGS_TAGKEYIAMMember, () => new TAGS_TagKeyIAMMember()],
    [ResourceType.TAGS_TAGKEYIAMPOLICY, () => new TAGS_TagKeyIamPolicy()],
    [ResourceType.TAGS_TAGVALUE, () => new TAGS_TagValue()],
    [ResourceType.TAGS_TAGVALUEIAMBinding, () => new TAGS_TagValueIAMBinding()],
    [
      ResourceType.ASSUREDWORKLOADS_WORKLOAD,
      () => new ASSUREDWORKLOADS_Workload(),
    ],
    [ResourceType.OSLOGIN_SSHPUBLICKEY, () => new OSLOGIN_SshPublicKey()],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMPOLICY,
      () => new SERVICEDIRECTORY_NamespaceIamPolicy(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICE,
      () => new SERVICEDIRECTORY_Service(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMMember,
      () => new SERVICEDIRECTORY_ServiceIAMMember(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMBinding,
      () => new SERVICEDIRECTORY_ServiceIAMBinding(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACE,
      () => new SERVICEDIRECTORY_Namespace(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_ENDPOINT,
      () => new SERVICEDIRECTORY_Endpoint(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMBinding,
      () => new SERVICEDIRECTORY_NamespaceIAMBinding(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMMember,
      () => new SERVICEDIRECTORY_NamespaceIAMMember(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMPOLICY,
      () => new SERVICEDIRECTORY_ServiceIamPolicy(),
    ],
    [
      ResourceType.BEYONDCORP_APPCONNECTION,
      () => new BEYONDCORP_AppConnection(),
    ],
    [ResourceType.BEYONDCORP_APPCONNECTOR, () => new BEYONDCORP_AppConnector()],
    [ResourceType.BEYONDCORP_APPGATEWAY, () => new BEYONDCORP_AppGateway()],
    [
      ResourceType.SERVICEACCOUNT_IAMBinding,
      () => new SERVICEACCOUNT_IAMBinding(),
    ],
    [ResourceType.SERVICEACCOUNT_ACCOUNT, () => new SERVICEACCOUNT_Account()],
    [
      ResourceType.SERVICEACCOUNT_IAMMember,
      () => new SERVICEACCOUNT_IAMMember(),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMPOLICY,
      () => new SERVICEACCOUNT_IAMPolicy(),
    ],
    [ResourceType.SERVICEACCOUNT_KEY, () => new SERVICEACCOUNT_Key()],
    [ResourceType.PUBSUB_LITETOPIC, () => new PUBSUB_LiteTopic()],
    [ResourceType.PUBSUB_TOPIC, () => new PUBSUB_Topic()],
    [ResourceType.PUBSUB_SCHEMAIAMMember, () => new PUBSUB_SchemaIAMMember()],
    [ResourceType.PUBSUB_SCHEMA, () => new PUBSUB_Schema()],
    [ResourceType.PUBSUB_TOPICIAMBinding, () => new PUBSUB_TopicIAMBinding()],
    [ResourceType.PUBSUB_LITERESERVATION, () => new PUBSUB_LiteReservation()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMPOLICY,
      () => new PUBSUB_SubscriptionIAMPolicy(),
    ],
    [ResourceType.PUBSUB_SCHEMAIAMPOLICY, () => new PUBSUB_SchemaIamPolicy()],
    [ResourceType.PUBSUB_TOPICIAMPOLICY, () => new PUBSUB_TopicIAMPolicy()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMBinding,
      () => new PUBSUB_SubscriptionIAMBinding(),
    ],
    [ResourceType.PUBSUB_LITESUBSCRIPTION, () => new PUBSUB_LiteSubscription()],
    [ResourceType.PUBSUB_SUBSCRIPTION, () => new PUBSUB_Subscription()],
    [ResourceType.PUBSUB_TOPICIAMMember, () => new PUBSUB_TopicIAMMember()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMMember,
      () => new PUBSUB_SubscriptionIAMMember(),
    ],
    [ResourceType.PUBSUB_SCHEMAIAMBinding, () => new PUBSUB_SchemaIAMBinding()],
    [ResourceType.IAM_WORKFORCEPOOL, () => new IAM_WorkforcePool()],
    [ResourceType.IAM_DENYPOLICY, () => new IAM_DenyPolicy()],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOLPROVIDER,
      () => new IAM_WorkloadIdentityPoolProvider(),
    ],
    [
      ResourceType.IAM_ACCESSBOUNDARYPOLICY,
      () => new IAM_AccessBoundaryPolicy(),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOL,
      () => new IAM_WorkloadIdentityPool(),
    ],
    [
      ResourceType.IAM_WORKFORCEPOOLPROVIDER,
      () => new IAM_WorkforcePoolProvider(),
    ],
    [ResourceType.ACTIVEDIRECTORY_DOMAIN, () => new ACTIVEDIRECTORY_Domain()],
    [ResourceType.ACTIVEDIRECTORY_PEERING, () => new ACTIVEDIRECTORY_Peering()],
    [
      ResourceType.ACTIVEDIRECTORY_DOMAINTRUST,
      () => new ACTIVEDIRECTORY_DomainTrust(),
    ],
    [ResourceType.BIGQUERY_JOB, () => new BIGQUERY_Job()],
    [
      ResourceType.BIGQUERY_DATASETIAMPOLICY,
      () => new BIGQUERY_DatasetIamPolicy(),
    ],
    [ResourceType.BIGQUERY_DATASETACCESS, () => new BIGQUERY_DatasetAccess()],
    [ResourceType.BIGQUERY_RESERVATION, () => new BIGQUERY_Reservation()],
    [ResourceType.BIGQUERY_IAMMember, () => new BIGQUERY_IAMMember()],
    [
      ResourceType.BIGQUERY_DATASETIAMBinding,
      () => new BIGQUERY_DatasetIAMBinding(),
    ],
    [ResourceType.BIGQUERY_IAMPOLICY, () => new BIGQUERY_IamPolicy()],
    [
      ResourceType.BIGQUERY_RESERVATIONASSIGNMENT,
      () => new BIGQUERY_ReservationAssignment(),
    ],
    [ResourceType.BIGQUERY_TABLE, () => new BIGQUERY_Table()],
    [ResourceType.BIGQUERY_APPPROFILE, () => new BIGQUERY_AppProfile()],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMPOLICY,
      () => new BIGQUERY_ConnectionIamPolicy(),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMBinding,
      () => new BIGQUERY_ConnectionIAMBinding(),
    ],
    [
      ResourceType.BIGQUERY_CAPACITYCOMMITMENT,
      () => new BIGQUERY_CapacityCommitment(),
    ],
    [ResourceType.BIGQUERY_CONNECTION, () => new BIGQUERY_Connection()],
    [ResourceType.BIGQUERY_IAMBinding, () => new BIGQUERY_IAMBinding()],
    [
      ResourceType.BIGQUERY_DATASETIAMMember,
      () => new BIGQUERY_DatasetIAMMember(),
    ],
    [
      ResourceType.BIGQUERY_DATATRANSFERCONFIG,
      () => new BIGQUERY_DataTransferConfig(),
    ],
    [ResourceType.BIGQUERY_ROUTINE, () => new BIGQUERY_Routine()],
    [ResourceType.BIGQUERY_DATASET, () => new BIGQUERY_Dataset()],
    [ResourceType.BIGQUERY_BIRESERVATION, () => new BIGQUERY_BiReservation()],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMMember,
      () => new BIGQUERY_ConnectionIAMMember(),
    ],
    [ResourceType.KMS_CRYPTOKEY, () => new KMS_CryptoKey()],
    [ResourceType.KMS_CRYPTOKEYIAMBinding, () => new KMS_CryptoKeyIAMBinding()],
    [ResourceType.KMS_CRYPTOKEYVERSION, () => new KMS_CryptoKeyVersion()],
    [ResourceType.KMS_KEYRINGIMPORTJOB, () => new KMS_KeyRingImportJob()],
    [ResourceType.KMS_KEYRINGIAMPOLICY, () => new KMS_KeyRingIAMPolicy()],
    [ResourceType.KMS_KEYRINGIAMMember, () => new KMS_KeyRingIAMMember()],
    [ResourceType.KMS_KEYRING, () => new KMS_KeyRing()],
    [ResourceType.KMS_SECRETCIPHERTEXT, () => new KMS_SecretCiphertext()],
    [ResourceType.KMS_CRYPTOKEYIAMPOLICY, () => new KMS_CryptoKeyIAMPolicy()],
    [ResourceType.KMS_KEYRINGIAMBinding, () => new KMS_KeyRingIAMBinding()],
    [ResourceType.KMS_CRYPTOKEYIAMMember, () => new KMS_CryptoKeyIAMMember()],
    [
      ResourceType.IDENTITYPLATFORM_TENANTOAUTHIDPCONFIG,
      () => new IDENTITYPLATFORM_TenantOauthIdpConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTINBOUNDSAMLCONFIG,
      () => new IDENTITYPLATFORM_TenantInboundSamlConfig(),
    ],
    [ResourceType.IDENTITYPLATFORM_TENANT, () => new IDENTITYPLATFORM_Tenant()],
    [
      ResourceType.IDENTITYPLATFORM_DEFAULTSUPPORTEDIDPCONFIG,
      () => new IDENTITYPLATFORM_DefaultSupportedIdpConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_OAUTHIDPCONFIG,
      () => new IDENTITYPLATFORM_OauthIdpConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_INBOUNDSAMLCONFIG,
      () => new IDENTITYPLATFORM_InboundSamlConfig(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTDEFAULTSUPPORTEDIDPCONFIG,
      () => new IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig(),
    ],
    [ResourceType.IDENTITYPLATFORM_CONFIG, () => new IDENTITYPLATFORM_Config()],
    [
      ResourceType.IDENTITYPLATFORM_PROJECTDEFAULTCONFIG,
      () => new IDENTITYPLATFORM_ProjectDefaultConfig(),
    ],
    [ResourceType.SECURITYPOSTURE_POSTURE, () => new SECURITYPOSTURE_Posture()],
    [
      ResourceType.SECURITYPOSTURE_POSTUREDEPLOYMENT,
      () => new SECURITYPOSTURE_PostureDeployment(),
    ],
    [
      ResourceType.NETWORKMANAGEMENT_CONNECTIVITYTEST,
      () => new NETWORKMANAGEMENT_ConnectivityTest(),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMBinding,
      () => new CLOUDBUILDV2_ConnectionIAMBinding(),
    ],
    [ResourceType.CLOUDBUILDV2_REPOSITORY, () => new CLOUDBUILDV2_Repository()],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMPOLICY,
      () => new CLOUDBUILDV2_ConnectionIAMPolicy(),
    ],
    [ResourceType.CLOUDBUILDV2_CONNECTION, () => new CLOUDBUILDV2_Connection()],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMMember,
      () => new CLOUDBUILDV2_ConnectionIAMMember(),
    ],
    [ResourceType.REDIS_INSTANCE, () => new REDIS_Instance()],
    [ResourceType.REDIS_CLUSTER, () => new REDIS_Cluster()],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMPOLICY,
      () => new ENDPOINTS_ConsumersIamPolicy(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMMember,
      () => new ENDPOINTS_ServiceIAMMember(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMBinding,
      () => new ENDPOINTS_ConsumersIAMBinding(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMMember,
      () => new ENDPOINTS_ConsumersIAMMember(),
    ],
    [ResourceType.ENDPOINTS_SERVICE, () => new ENDPOINTS_Service()],
    [
      ResourceType.ENDPOINTS_SERVICEIAMBinding,
      () => new ENDPOINTS_ServiceIAMBinding(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMPOLICY,
      () => new ENDPOINTS_ServiceIamPolicy(),
    ],
    [ResourceType.NETAPP_STORAGEPOOL, () => new NETAPP_StoragePool()],
    [
      ResourceType.NETAPP_VOLUMEREPLICATION,
      () => new NETAPP_VolumeReplication(),
    ],
    [ResourceType.NETAPP_BACKUPPOLICY, () => new NETAPP_BackupPolicy()],
    [ResourceType.NETAPP_VOLUMESNAPSHOT, () => new NETAPP_VolumeSnapshot()],
    [ResourceType.NETAPP_BACKUPVAULT, () => new NETAPP_BackupVault()],
    [ResourceType.NETAPP_VOLUME, () => new NETAPP_Volume()],
    [ResourceType.NETAPP_ACTIVEDIRECTORY, () => new NETAPP_ActiveDirectory()],
    [ResourceType.NETAPP_KMSCONFIG, () => new NETAPP_Kmsconfig()],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMMember,
      () => new BINARYAUTHORIZATION_AttestorIAMMember(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_POLICY,
      () => new BINARYAUTHORIZATION_Policy(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMPOLICY,
      () => new BINARYAUTHORIZATION_AttestorIamPolicy(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTOR,
      () => new BINARYAUTHORIZATION_Attestor(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMBinding,
      () => new BINARYAUTHORIZATION_AttestorIAMBinding(),
    ],
    [ResourceType.COMPOSER_ENVIRONMENT, () => new COMPOSER_Environment()],
    [
      ResourceType.BILLING_ACCOUNTIAMPOLICY,
      () => new BILLING_AccountIamPolicy(),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMBinding,
      () => new BILLING_AccountIAMBinding(),
    ],
    [ResourceType.BILLING_BUDGET, () => new BILLING_Budget()],
    [
      ResourceType.BILLING_ACCOUNTIAMMember,
      () => new BILLING_AccountIAMMember(),
    ],
    [ResourceType.BILLING_PROJECTINFO, () => new BILLING_ProjectInfo()],
    [ResourceType.BILLING_SUBACCOUNT, () => new BILLING_SubAccount()],
    [ResourceType.BIGTABLE_INSTANCE, () => new BIGTABLE_Instance()],
    [
      ResourceType.BIGTABLE_TABLEIAMBinding,
      () => new BIGTABLE_TableIAMBinding(),
    ],
    [ResourceType.BIGTABLE_GCPOLICY, () => new BIGTABLE_GCPolicy()],
    [
      ResourceType.BIGTABLE_InstanceIAMMember,
      () => new BIGTABLE_InstanceIAMMember(),
    ],
    [ResourceType.BIGTABLE_TABLE, () => new BIGTABLE_Table()],
    [
      ResourceType.BIGTABLE_InstanceIAMPOLICY,
      () => new BIGTABLE_InstanceIAMPolicy(),
    ],
    [ResourceType.BIGTABLE_TABLEIAMPOLICY, () => new BIGTABLE_TableIamPolicy()],
    [ResourceType.BIGTABLE_TABLEIAMMember, () => new BIGTABLE_TableIAMMember()],
    [
      ResourceType.BIGTABLE_InstanceIAMBinding,
      () => new BIGTABLE_InstanceIAMBinding(),
    ],
    [ResourceType.DNS_RESPONSEPOLICY, () => new DNS_ResponsePolicy()],
    [ResourceType.DNS_RESPONSEPOLICYRULE, () => new DNS_ResponsePolicyRule()],
    [ResourceType.DNS_MANAGEDZONE, () => new DNS_ManagedZone()],
    [ResourceType.DNS_POLICY, () => new DNS_Policy()],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMBinding,
      () => new DNS_DnsManagedZoneIAMBinding(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMPOLICY,
      () => new DNS_DnsManagedZoneIamPolicy(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMMember,
      () => new DNS_DnsManagedZoneIAMMember(),
    ],
    [ResourceType.DNS_RECORDSET, () => new DNS_RecordSet()],
    [ResourceType.CLOUDIDS_ENDPOINT, () => new CLOUDIDS_Endpoint()],
    [ResourceType.RECAPTCHA_ENTERPRISEKEY, () => new RECAPTCHA_EnterpriseKey()],
    [
      ResourceType.DATAFORM_REPOSITORYWORKFLOWCONFIG,
      () => new DATAFORM_RepositoryWorkflowConfig(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMPOLICY,
      () => new DATAFORM_RepositoryIamPolicy(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMBinding,
      () => new DATAFORM_RepositoryIAMBinding(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMMember,
      () => new DATAFORM_RepositoryIAMMember(),
    ],
    [ResourceType.DATAFORM_REPOSITORY, () => new DATAFORM_Repository()],
    [
      ResourceType.DATAFORM_REPOSITORYRELEASECONFIG,
      () => new DATAFORM_RepositoryReleaseConfig(),
    ],
    [ResourceType.APIGEE_ENVIRONMENT, () => new APIGEE_Environment()],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMMember,
      () => new APIGEE_EnvironmentIAMMember(),
    ],
    [ResourceType.APIGEE_ADDONSCONFIG, () => new APIGEE_AddonsConfig()],
    [
      ResourceType.APIGEE_KEYSTORESALIASESPKCS12,
      () => new APIGEE_KeystoresAliasesPkcs12(),
    ],
    [ResourceType.APIGEE_ENVKEYSTORE, () => new APIGEE_EnvKeystore()],
    [
      ResourceType.APIGEE_ENDPOINTATTACHMENT,
      () => new APIGEE_EndpointAttachment(),
    ],
    [ResourceType.APIGEE_TARGETSERVER, () => new APIGEE_TargetServer()],
    [
      ResourceType.APIGEE_ENVGROUPATTACHMENT,
      () => new APIGEE_EnvGroupAttachment(),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMPOLICY,
      () => new APIGEE_EnvironmentIamPolicy(),
    ],
    [ResourceType.APIGEE_ORGANIZATION, () => new APIGEE_Organization()],
    [
      ResourceType.APIGEE_KEYSTORESALIASESKEYCERTFILE,
      () => new APIGEE_KeystoresAliasesKeyCertFile(),
    ],
    [ResourceType.APIGEE_ENVREFERENCES, () => new APIGEE_EnvReferences()],
    [
      ResourceType.APIGEE_INSTANCEATTACHMENT,
      () => new APIGEE_InstanceAttachment(),
    ],
    [ResourceType.APIGEE_ENVGROUP, () => new APIGEE_EnvGroup()],
    [ResourceType.APIGEE_FLOWHOOK, () => new APIGEE_Flowhook()],
    [
      ResourceType.APIGEE_SHAREDFLOWDEPLOYMENT,
      () => new APIGEE_SharedflowDeployment(),
    ],
    [ResourceType.APIGEE_INSTANCE, () => new APIGEE_Instance()],
    [
      ResourceType.APIGEE_KEYSTORESALIASESSELFSIGNEDCERT,
      () => new APIGEE_KeystoresAliasesSelfSignedCert(),
    ],
    [ResourceType.APIGEE_NATADDRESS, () => new APIGEE_NatAddress()],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMBinding,
      () => new APIGEE_EnvironmentIAMBinding(),
    ],
    [ResourceType.APIGEE_SHAREDFLOW, () => new APIGEE_Sharedflow()],
    [
      ResourceType.APIGEE_SYNCAUTHORIZATION,
      () => new APIGEE_SyncAuthorization(),
    ],
    [ResourceType.TPU_V2VM, () => new TPU_V2Vm()],
    [ResourceType.TPU_NODE, () => new TPU_Node()],
    [ResourceType.RUNTIMECONFIG_CONFIG, () => new RUNTIMECONFIG_Config()],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMMember,
      () => new RUNTIMECONFIG_ConfigIAMMember(),
    ],
    [ResourceType.RUNTIMECONFIG_VARIABLE, () => new RUNTIMECONFIG_Variable()],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMBinding,
      () => new RUNTIMECONFIG_ConfigIAMBinding(),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMPOLICY,
      () => new RUNTIMECONFIG_ConfigIamPolicy(),
    ],
    [ResourceType.SQL_DATABASE, () => new SQL_Database()],
    [ResourceType.SQL_SSLCERT, () => new SQL_SslCert()],
    [ResourceType.SQL_DATABASEINSTANCE, () => new SQL_DatabaseInstance()],
    [
      ResourceType.SQL_SOURCEREPRESENTATIONINSTANCE,
      () => new SQL_SourceRepresentationInstance(),
    ],
    [ResourceType.SQL_USER, () => new SQL_User()],
    [ResourceType.CLOUDBUILD_TRIGGER, () => new CLOUDBUILD_Trigger()],
    [
      ResourceType.CLOUDBUILD_BITBUCKETSERVERCONFIG,
      () => new CLOUDBUILD_BitbucketServerConfig(),
    ],
    [ResourceType.CLOUDBUILD_WORKERPOOL, () => new CLOUDBUILD_WorkerPool()],
  ]);
  public static GetResourceObject(resType: ResourceType): Resource {
    return (this.ResourceFactoryMap.get(resType) as () => Resource)();
  }
  public static propertiesMap: Map<ResourceType, DynamicUIProps[]> = new Map([
    [ResourceType.DIAGFLOW_CXWEBHOOK, DIAGFLOW_CxWebhook.GetTypes()],
    [ResourceType.DIAGFLOW_CXPAGE, DIAGFLOW_CxPage.GetTypes()],
    [ResourceType.DIAGFLOW_ENTITYTYPE, DIAGFLOW_EntityType.GetTypes()],
    [ResourceType.DIAGFLOW_FULFILLMENT, DIAGFLOW_Fulfillment.GetTypes()],
    [ResourceType.DIAGFLOW_CXVERSION, DIAGFLOW_CxVersion.GetTypes()],
    [
      ResourceType.DIAGFLOW_CXSECURITYSETTINGS,
      DIAGFLOW_CxSecuritySettings.GetTypes(),
    ],
    [ResourceType.DIAGFLOW_CXENTITYTYPE, DIAGFLOW_CxEntityType.GetTypes()],
    [ResourceType.DIAGFLOW_CXFLOW, DIAGFLOW_CxFlow.GetTypes()],
    [ResourceType.DIAGFLOW_CXTESTCASE, DIAGFLOW_CxTestCase.GetTypes()],
    [ResourceType.DIAGFLOW_INTENT, DIAGFLOW_Intent.GetTypes()],
    [ResourceType.DIAGFLOW_CXINTENT, DIAGFLOW_CxIntent.GetTypes()],
    [ResourceType.DIAGFLOW_CXAGENT, DIAGFLOW_CxAgent.GetTypes()],
    [ResourceType.DIAGFLOW_AGENT, DIAGFLOW_Agent.GetTypes()],
    [ResourceType.DIAGFLOW_CXENVIRONMENT, DIAGFLOW_CxEnvironment.GetTypes()],
    [
      ResourceType.DATASTORE_DATASTOREINDEX,
      DATASTORE_DataStoreIndex.GetTypes(),
    ],
    [
      ResourceType.DEPLOYMENTMANAGER_DEPLOYMENT,
      DEPLOYMENTMANAGER_Deployment.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMMember,
      APIGATEWAY_GatewayIAMMember.GetTypes(),
    ],
    [ResourceType.APIGATEWAY_GATEWAY, APIGATEWAY_Gateway.GetTypes()],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMPOLICY,
      APIGATEWAY_GatewayIamPolicy.GetTypes(),
    ],
    [ResourceType.APIGATEWAY_API, APIGATEWAY_Api.GetTypes()],
    [ResourceType.APIGATEWAY_APIIAMMember, APIGATEWAY_ApiIAMMember.GetTypes()],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMPOLICY,
      APIGATEWAY_ApiConfigIamPolicy.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMMember,
      APIGATEWAY_ApiConfigIAMMember.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_GATEWAYIAMBinding,
      APIGATEWAY_GatewayIAMBinding.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_APICONFIGIAMBinding,
      APIGATEWAY_ApiConfigIAMBinding.GetTypes(),
    ],
    [
      ResourceType.APIGATEWAY_APIIAMBinding,
      APIGATEWAY_ApiIAMBinding.GetTypes(),
    ],
    [ResourceType.APIGATEWAY_APIIAMPOLICY, APIGATEWAY_ApiIamPolicy.GetTypes()],
    [ResourceType.APIGATEWAY_APICONFIG, APIGATEWAY_ApiConfig.GetTypes()],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMPOLICY,
      CERTIFICATEAUTHORITY_CaPoolIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMMember,
      CERTIFICATEAUTHORITY_CaPoolIAMMember.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMBinding,
      CERTIFICATEAUTHORITY_CertificateTemplateIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMPOLICY,
      CERTIFICATEAUTHORITY_CertificateTemplateIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATE,
      CERTIFICATEAUTHORITY_Certificate.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOLIAMBinding,
      CERTIFICATEAUTHORITY_CaPoolIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_AUTHORITY,
      CERTIFICATEAUTHORITY_Authority.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATE,
      CERTIFICATEAUTHORITY_CertificateTemplate.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CAPOOL,
      CERTIFICATEAUTHORITY_CaPool.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEAUTHORITY_CERTIFICATETEMPLATEIAMMember,
      CERTIFICATEAUTHORITY_CertificateTemplateIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMBinding,
      CLOUDDEPLOY_DeliveryPipelineIAMBinding.GetTypes(),
    ],
    [ResourceType.CLOUDDEPLOY_TARGET, CLOUDDEPLOY_Target.GetTypes()],
    [ResourceType.CLOUDDEPLOY_AUTOMATION, CLOUDDEPLOY_Automation.GetTypes()],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMPOLICY,
      CLOUDDEPLOY_DeliveryPipelineIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINE,
      CLOUDDEPLOY_DeliveryPipeline.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMPOLICY,
      CLOUDDEPLOY_TargetIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMMember,
      CLOUDDEPLOY_TargetIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_CUSTOMTARGETTYPE,
      CLOUDDEPLOY_CustomTargetType.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_DELIVERYPIPELINEIAMMember,
      CLOUDDEPLOY_DeliveryPipelineIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDDEPLOY_TARGETIAMBinding,
      CLOUDDEPLOY_TargetIAMBinding.GetTypes(),
    ],
    [ResourceType.CONTAINER_REGISTRY, CONTAINER_Registry.GetTypes()],
    [ResourceType.CONTAINER_NODEPOOL, CONTAINER_NodePool.GetTypes()],
    [ResourceType.CONTAINER_AZURECLIENT, CONTAINER_AzureClient.GetTypes()],
    [ResourceType.CONTAINER_AZURECLUSTER, CONTAINER_AzureCluster.GetTypes()],
    [ResourceType.CONTAINER_AZURENODEPOOL, CONTAINER_AzureNodePool.GetTypes()],
    [ResourceType.CONTAINER_AWSNODEPOOL, CONTAINER_AwsNodePool.GetTypes()],
    [ResourceType.CONTAINER_CLUSTER, CONTAINER_Cluster.GetTypes()],
    [ResourceType.CONTAINER_AWSCLUSTER, CONTAINER_AwsCluster.GetTypes()],
    [
      ResourceType.CONTAINER_ATTACHEDCLUSTER,
      CONTAINER_AttachedCluster.GetTypes(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_ENDPOINTATTACHMENT,
      INTEGRATIONCONNECTORS_EndpointAttachment.GetTypes(),
    ],
    [
      ResourceType.INTEGRATIONCONNECTORS_CONNECTION,
      INTEGRATIONCONNECTORS_Connection.GetTypes(),
    ],
    [ResourceType.FILESTORE_INSTANCE, FILESTORE_Instance.GetTypes()],
    [ResourceType.FILESTORE_SNAPSHOT, FILESTORE_Snapshot.GetTypes()],
    [ResourceType.FILESTORE_BACKUP, FILESTORE_Backup.GetTypes()],
    [
      ResourceType.NETWORKSERVICES_TCPROUTE,
      NETWORKSERVICES_TcpRoute.GetTypes(),
    ],
    [ResourceType.NETWORKSERVICES_MESH, NETWORKSERVICES_Mesh.GetTypes()],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEORIGIN,
      NETWORKSERVICES_EdgeCacheOrigin.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_TLSROUTE,
      NETWORKSERVICES_TlsRoute.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_SERVICEBINDING,
      NETWORKSERVICES_ServiceBinding.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_GRPCROUTE,
      NETWORKSERVICES_GrpcRoute.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_ENDPOINTPOLICY,
      NETWORKSERVICES_EndpointPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_EDGECACHESERVICE,
      NETWORKSERVICES_EdgeCacheService.GetTypes(),
    ],
    [
      ResourceType.NETWORKSERVICES_HTTPROUTE,
      NETWORKSERVICES_HttpRoute.GetTypes(),
    ],
    [ResourceType.NETWORKSERVICES_GATEWAY, NETWORKSERVICES_Gateway.GetTypes()],
    [
      ResourceType.NETWORKSERVICES_EDGECACHEKEYSET,
      NETWORKSERVICES_EdgeCacheKeyset.GetTypes(),
    ],
    [ResourceType.CLOUDIDENTITY_GROUP, CLOUDIDENTITY_Group.GetTypes()],
    [
      ResourceType.CLOUDIDENTITY_GROUPMEMBERSHIP,
      CLOUDIDENTITY_GroupMembership.GetTypes(),
    ],
    [ResourceType.ML_ENGINEMODEL, ML_EngineModel.GetTypes()],
    [ResourceType.CLOUDSCHEDULER_JOB, CLOUDSCHEDULER_Job.GetTypes()],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMPOLICY,
      CLOUDTASKS_QueueIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMBinding,
      CLOUDTASKS_QueueIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDTASKS_QUEUEIAMMember,
      CLOUDTASKS_QueueIAMMember.GetTypes(),
    ],
    [ResourceType.CLOUDTASKS_QUEUE, CLOUDTASKS_Queue.GetTypes()],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMPOLICY,
      BIGQUERYDATAPOLICY_DataPolicyIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMMember,
      BIGQUERYDATAPOLICY_DataPolicyIAMMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICYIAMBinding,
      BIGQUERYDATAPOLICY_DataPolicyIAMBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYDATAPOLICY_DATAPOLICY,
      BIGQUERYDATAPOLICY_DataPolicy.GetTypes(),
    ],
    [ResourceType.MEMCACHE_INSTANCE, MEMCACHE_Instance.GetTypes()],
    [ResourceType.FIRESTORE_DOCUMENT, FIRESTORE_Document.GetTypes()],
    [ResourceType.FIRESTORE_FIELD, FIRESTORE_Field.GetTypes()],
    [
      ResourceType.FIRESTORE_BACKUPSCHEDULE,
      FIRESTORE_BackupSchedule.GetTypes(),
    ],
    [ResourceType.FIRESTORE_DATABASE, FIRESTORE_Database.GetTypes()],
    [ResourceType.FIRESTORE_INDEX, FIRESTORE_Index.GetTypes()],
    [
      ResourceType.WORKBENCH_InstanceIAMPOLICY,
      WORKBENCH_InstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.WORKBENCH_InstanceIAMBinding,
      WORKBENCH_InstanceIAMBinding.GetTypes(),
    ],
    [ResourceType.WORKBENCH_INSTANCE, WORKBENCH_Instance.GetTypes()],
    [
      ResourceType.WORKBENCH_InstanceIAMMember,
      WORKBENCH_InstanceIAMMember.GetTypes(),
    ],
    [ResourceType.ORGPOLICY_POLICY, ORGPOLICY_Policy.GetTypes()],
    [
      ResourceType.ORGPOLICY_CUSTOMCONSTRAINT,
      ORGPOLICY_CustomConstraint.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMMember,
      DATACATALOG_TaxonomyIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMPOLICY,
      DATACATALOG_PolicyTagIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMBinding,
      DATACATALOG_PolicyTagIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMPOLICY,
      DATACATALOG_TaxonomyIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMPOLICY,
      DATACATALOG_TagTemplateIamPolicy.GetTypes(),
    ],
    [ResourceType.DATACATALOG_ENTRY, DATACATALOG_Entry.GetTypes()],
    [ResourceType.DATACATALOG_TAGTEMPLATE, DATACATALOG_TagTemplate.GetTypes()],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMPOLICY,
      DATACATALOG_EntryGroupIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_POLICYTAGIAMMember,
      DATACATALOG_PolicyTagIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMMember,
      DATACATALOG_EntryGroupIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMMember,
      DATACATALOG_TagTemplateIAMMember.GetTypes(),
    ],
    [ResourceType.DATACATALOG_TAG, DATACATALOG_Tag.GetTypes()],
    [
      ResourceType.DATACATALOG_TAGTEMPLATEIAMBinding,
      DATACATALOG_TagTemplateIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATACATALOG_ENTRYGROUPIAMBinding,
      DATACATALOG_EntryGroupIAMBinding.GetTypes(),
    ],
    [ResourceType.DATACATALOG_ENTRYGROUP, DATACATALOG_EntryGroup.GetTypes()],
    [ResourceType.DATACATALOG_POLICYTAG, DATACATALOG_PolicyTag.GetTypes()],
    [
      ResourceType.DATACATALOG_TAXONOMYIAMBinding,
      DATACATALOG_TaxonomyIAMBinding.GetTypes(),
    ],
    [ResourceType.DATACATALOG_TAXONOMY, DATACATALOG_Taxonomy.GetTypes()],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSOR,
      ESSENTIALCONTACTS_DocumentAiProcessor.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIPROCESSORDEFAULTVERSION,
      ESSENTIALCONTACTS_DocumentAiProcessorDefaultVersion.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSELOCATION,
      ESSENTIALCONTACTS_DocumentAiWarehouseLocation.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_CONTACT,
      ESSENTIALCONTACTS_Contact.GetTypes(),
    ],
    [
      ResourceType.ESSENTIALCONTACTS_DOCUMENTAIWAREHOUSEDOCUMENTSCHEMA,
      ESSENTIALCONTACTS_DocumentAiWarehouseDocumentSchema.GetTypes(),
    ],
    [ResourceType.VERTEX_AIINDEXENDPOINT, VERTEX_AiIndexEndpoint.GetTypes()],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMBinding,
      VERTEX_AiFeatureStoreIAMBinding.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPE,
      VERTEX_AiFeatureStoreEntityType.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMBinding,
      VERTEX_AiFeatureStoreEntityTypeIAMBinding.GetTypes(),
    ],
    [ResourceType.VERTEX_AIMETADATASTORE, VERTEX_AiMetadataStore.GetTypes()],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEFEATURE,
      VERTEX_AiFeatureStoreEntityTypeFeature.GetTypes(),
    ],
    [ResourceType.VERTEX_AIFEATUREGROUP, VERTEX_AiFeatureGroup.GetTypes()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMPOLICY,
      VERTEX_AiEndpointIamPolicy.GetTypes(),
    ],
    [ResourceType.VERTEX_AIDATASET, VERTEX_AiDataset.GetTypes()],
    [ResourceType.VERTEX_AIFEATURESTORE, VERTEX_AiFeatureStore.GetTypes()],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTOREFEATUREVIEW,
      VERTEX_AiFeatureOnlineStoreFeatureview.GetTypes(),
    ],
    [ResourceType.VERTEX_AIENDPOINT, VERTEX_AiEndpoint.GetTypes()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMBinding,
      VERTEX_AiEndpointIAMBinding.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMMember,
      VERTEX_AiFeatureStoreIAMMember.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMPOLICY,
      VERTEX_AiFeatureStoreEntityTypeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREENTITYTYPEIAMMember,
      VERTEX_AiFeatureStoreEntityTypeIAMMember.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATUREONLINESTORE,
      VERTEX_AiFeatureOnlineStore.GetTypes(),
    ],
    [ResourceType.VERTEX_AIINDEX, VERTEX_AiIndex.GetTypes()],
    [
      ResourceType.VERTEX_AIENDPOINTIAMMember,
      VERTEX_AiEndpointIAMMember.GetTypes(),
    ],
    [
      ResourceType.VERTEX_AIFEATURESTOREIAMPOLICY,
      VERTEX_AiFeatureStoreIamPolicy.GetTypes(),
    ],
    [ResourceType.VERTEX_AITENSORBOARD, VERTEX_AiTensorboard.GetTypes()],
    [
      ResourceType.VERTEX_AIFEATUREGROUPFEATURE,
      VERTEX_AiFeatureGroupFeature.GetTypes(),
    ],
    [
      ResourceType.BACKUPDISASTERRECOVERY_MANAGEMENTSERVER,
      BACKUPDISASTERRECOVERY_ManagementServer.GetTypes(),
    ],
    [
      ResourceType.MONITORING_NOTIFICATIONCHANNEL,
      MONITORING_NotificationChannel.GetTypes(),
    ],
    [ResourceType.MONITORING_SLO, MONITORING_Slo.GetTypes()],
    [
      ResourceType.MONITORING_MONITOREDPROJECT,
      MONITORING_MonitoredProject.GetTypes(),
    ],
    [ResourceType.MONITORING_ALERTPOLICY, MONITORING_AlertPolicy.GetTypes()],
    [ResourceType.MONITORING_GROUP, MONITORING_Group.GetTypes()],
    [
      ResourceType.MONITORING_METRICDESCRIPTOR,
      MONITORING_MetricDescriptor.GetTypes(),
    ],
    [
      ResourceType.MONITORING_GENERICSERVICE,
      MONITORING_GenericService.GetTypes(),
    ],
    [ResourceType.MONITORING_DASHBOARD, MONITORING_Dashboard.GetTypes()],
    [
      ResourceType.MONITORING_UPTIMECHECKCONFIG,
      MONITORING_UptimeCheckConfig.GetTypes(),
    ],
    [
      ResourceType.MONITORING_CUSTOMSERVICE,
      MONITORING_CustomService.GetTypes(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMMember,
      SPANNER_DatabaseIAMMember.GetTypes(),
    ],
    [
      ResourceType.SPANNER_DATABASEIAMPOLICY,
      SPANNER_DatabaseIAMPolicy.GetTypes(),
    ],
    [ResourceType.SPANNER_INSTANCE, SPANNER_Instance.GetTypes()],
    [
      ResourceType.SPANNER_InstanceIAMBinding,
      SPANNER_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SPANNER_InstanceIAMMember,
      SPANNER_InstanceIAMMember.GetTypes(),
    ],
    [ResourceType.SPANNER_DATABASE, SPANNER_Database.GetTypes()],
    [
      ResourceType.SPANNER_DATABASEIAMBinding,
      SPANNER_DatabaseIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SPANNER_InstanceIAMPOLICY,
      SPANNER_InstanceIAMPolicy.GetTypes(),
    ],
    [ResourceType.EDGECONTAINER_NODEPOOL, EDGECONTAINER_NodePool.GetTypes()],
    [ResourceType.EDGECONTAINER_CLUSTER, EDGECONTAINER_Cluster.GetTypes()],
    [
      ResourceType.EDGECONTAINER_VPNCONNECTION,
      EDGECONTAINER_VpnConnection.GetTypes(),
    ],
    [ResourceType.VPCACCESS_CONNECTOR, VPCACCESS_Connector.GetTypes()],
    [
      ResourceType.BLOCKCHAINNODEENGINE_BLOCKCHAINNODES,
      BLOCKCHAINNODEENGINE_BlockchainNodes.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMPOLICY,
      GKEBACKUP_BackupPlanIamPolicy.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMPOLICY,
      GKEBACKUP_RestorePlanIamPolicy.GetTypes(),
    ],
    [ResourceType.GKEBACKUP_RESTOREPLAN, GKEBACKUP_RestorePlan.GetTypes()],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMMember,
      GKEBACKUP_BackupPlanIAMMember.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_BACKUPPLANIAMBinding,
      GKEBACKUP_BackupPlanIAMBinding.GetTypes(),
    ],
    [ResourceType.GKEBACKUP_BACKUPPLAN, GKEBACKUP_BackupPlan.GetTypes()],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMBinding,
      GKEBACKUP_RestorePlanIAMBinding.GetTypes(),
    ],
    [
      ResourceType.GKEBACKUP_RESTOREPLANIAMMember,
      GKEBACKUP_RestorePlanIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMPOLICY,
      DATAPROC_MetastoreFederationIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMBinding,
      DATAPROC_ClusterIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMPOLICY,
      DATAPROC_AutoscalingPolicyIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_WORKFLOWTEMPLATE,
      DATAPROC_WorkflowTemplate.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICE,
      DATAPROC_MetastoreService.GetTypes(),
    ],
    [ResourceType.DATAPROC_JOBIAMMember, DATAPROC_JobIAMMember.GetTypes()],
    [
      ResourceType.DATAPROC_CLUSTERIAMMember,
      DATAPROC_ClusterIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_CLUSTERIAMPOLICY,
      DATAPROC_ClusterIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMBinding,
      DATAPROC_MetastoreServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMBinding,
      DATAPROC_MetastoreFederationIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMMember,
      DATAPROC_AutoscalingPolicyIAMMember.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMPOLICY,
      DATAPROC_MetastoreServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICYIAMBinding,
      DATAPROC_AutoscalingPolicyIAMBinding.GetTypes(),
    ],
    [ResourceType.DATAPROC_CLUSTER, DATAPROC_Cluster.GetTypes()],
    [ResourceType.DATAPROC_JOB, DATAPROC_Job.GetTypes()],
    [
      ResourceType.DATAPROC_METASTORESERVICEIAMMember,
      DATAPROC_MetastoreServiceIAMMember.GetTypes(),
    ],
    [ResourceType.DATAPROC_JOBIAMPOLICY, DATAPROC_JobIAMPolicy.GetTypes()],
    [ResourceType.DATAPROC_JOBIAMBinding, DATAPROC_JobIAMBinding.GetTypes()],
    [
      ResourceType.DATAPROC_METASTOREFEDERATION,
      DATAPROC_MetastoreFederation.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_AUTOSCALINGPOLICY,
      DATAPROC_AutoscalingPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPROC_METASTOREFEDERATIONIAMMember,
      DATAPROC_MetastoreFederationIAMMember.GetTypes(),
    ],
    [ResourceType.CLOUDRUN_DOMAINMAPPING, CLOUDRUN_DomainMapping.GetTypes()],
    [ResourceType.CLOUDRUN_IAMMember, CLOUDRUN_IAMMember.GetTypes()],
    [ResourceType.CLOUDRUN_SERVICE, CLOUDRUN_Service.GetTypes()],
    [ResourceType.CLOUDRUN_IAMPOLICY, CLOUDRUN_IamPolicy.GetTypes()],
    [ResourceType.CLOUDRUN_IAMBinding, CLOUDRUN_IAMBinding.GetTypes()],
    [ResourceType.CONTAINERANALYSIS_NOTE, CONTAINERANALYSIS_Note.GetTypes()],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMPOLICY,
      CONTAINERANALYSIS_NoteIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMBinding,
      CONTAINERANALYSIS_NoteIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_OCCURENCE,
      CONTAINERANALYSIS_Occurence.GetTypes(),
    ],
    [
      ResourceType.CONTAINERANALYSIS_NOTEIAMMember,
      CONTAINERANALYSIS_NoteIAMMember.GetTypes(),
    ],
    [
      ResourceType.SERVICENETWORKING_PEEREDDNSDOMAIN,
      SERVICENETWORKING_PeeredDnsDomain.GetTypes(),
    ],
    [
      ResourceType.SERVICENETWORKING_CONNECTION,
      SERVICENETWORKING_Connection.GetTypes(),
    ],
    [ResourceType.WORKFLOWS_WORKFLOW, WORKFLOWS_Workflow.GetTypes()],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMBinding,
      BIGQUERYANALYTICSHUB_ListingIAMBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMPOLICY,
      BIGQUERYANALYTICSHUB_DataExchangeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMMember,
      BIGQUERYANALYTICSHUB_DataExchangeIAMMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTING,
      BIGQUERYANALYTICSHUB_Listing.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMMember,
      BIGQUERYANALYTICSHUB_ListingIAMMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_LISTINGIAMPOLICY,
      BIGQUERYANALYTICSHUB_ListingIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGE,
      BIGQUERYANALYTICSHUB_DataExchange.GetTypes(),
    ],
    [
      ResourceType.BIGQUERYANALYTICSHUB_DATAEXCHANGEIAMBinding,
      BIGQUERYANALYTICSHUB_DataExchangeIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEISSUANCECONFIG,
      CERTIFICATEMANAGER_CertificateIssuanceConfig.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATE,
      CERTIFICATEMANAGER_Certificate.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_TRUSTCONFIG,
      CERTIFICATEMANAGER_TrustConfig.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_DNSAUTHORIZATION,
      CERTIFICATEMANAGER_DnsAuthorization.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAP,
      CERTIFICATEMANAGER_CertificateMap.GetTypes(),
    ],
    [
      ResourceType.CERTIFICATEMANAGER_CERTIFICATEMAPENTRY,
      CERTIFICATEMANAGER_CertificateMapEntry.GetTypes(),
    ],
    [ResourceType.ALLOYDB_USER, ALLOYDB_User.GetTypes()],
    [ResourceType.ALLOYDB_BACKUP, ALLOYDB_Backup.GetTypes()],
    [ResourceType.ALLOYDB_INSTANCE, ALLOYDB_Instance.GetTypes()],
    [ResourceType.ALLOYDB_CLUSTER, ALLOYDB_Cluster.GetTypes()],
    [
      ResourceType.VMWAREENGINE_NETWORKPEERING,
      VMWAREENGINE_NetworkPeering.GetTypes(),
    ],
    [ResourceType.VMWAREENGINE_SUBNET, VMWAREENGINE_Subnet.GetTypes()],
    [
      ResourceType.VMWAREENGINE_EXTERNALADDRESS,
      VMWAREENGINE_ExternalAddress.GetTypes(),
    ],
    [
      ResourceType.VMWAREENGINE_NETWORKPOLICY,
      VMWAREENGINE_NetworkPolicy.GetTypes(),
    ],
    [ResourceType.VMWAREENGINE_CLUSTER, VMWAREENGINE_Cluster.GetTypes()],
    [ResourceType.VMWAREENGINE_NETWORK, VMWAREENGINE_Network.GetTypes()],
    [
      ResourceType.VMWAREENGINE_PRIVATECLOUD,
      VMWAREENGINE_PrivateCloud.GetTypes(),
    ],
    [
      ResourceType.VMWAREENGINE_EXTERNALACCESSRULE,
      VMWAREENGINE_ExternalAccessRule.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMBinding,
      HEALTHCARE_DatasetIAMBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMBinding,
      HEALTHCARE_ConsentStoreIAMBinding.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_FHIRSTORE, HEALTHCARE_FhirStore.GetTypes()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMPOLICY,
      HEALTHCARE_Hl7StoreIamPolicy.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMBinding,
      HEALTHCARE_FhirStoreIAMBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMMember,
      HEALTHCARE_DicomStoreIAMMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMMember,
      HEALTHCARE_DatasetIAMMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMBinding,
      HEALTHCARE_DicomStoreIAMBinding.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DICOMSTOREIAMPOLICY,
      HEALTHCARE_DicomStoreIamPolicy.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMMember,
      HEALTHCARE_ConsentStoreIAMMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_DATASETIAMPOLICY,
      HEALTHCARE_DatasetIamPolicy.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMMember,
      HEALTHCARE_FhirStoreIAMMember.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_DATASET, HEALTHCARE_Dataset.GetTypes()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMMember,
      HEALTHCARE_Hl7StoreIAMMember.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_FHIRSTOREIAMPOLICY,
      HEALTHCARE_FhirStoreIamPolicy.GetTypes(),
    ],
    [
      ResourceType.HEALTHCARE_CONSENTSTOREIAMPOLICY,
      HEALTHCARE_ConsentStoreIamPolicy.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_HL7STORE, HEALTHCARE_Hl7Store.GetTypes()],
    [
      ResourceType.HEALTHCARE_HL7STOREIAMBinding,
      HEALTHCARE_Hl7StoreIAMBinding.GetTypes(),
    ],
    [ResourceType.HEALTHCARE_CONSENTSTORE, HEALTHCARE_ConsentStore.GetTypes()],
    [ResourceType.HEALTHCARE_DICOMSTORE, HEALTHCARE_DicomStore.GetTypes()],
    [ResourceType.MIGRATIONCENTER_GROUP, MIGRATIONCENTER_Group.GetTypes()],
    [
      ResourceType.MIGRATIONCENTER_PREFERENCESET,
      MIGRATIONCENTER_PreferenceSet.GetTypes(),
    ],
    [ResourceType.BIGLAKE_TABLE, BIGLAKE_Table.GetTypes()],
    [ResourceType.BIGLAKE_DATABASE, BIGLAKE_Database.GetTypes()],
    [ResourceType.BIGLAKE_CATALOG, BIGLAKE_Catalog.GetTypes()],
    [ResourceType.CLOUDASSET_PROJECTFEED, CLOUDASSET_ProjectFeed.GetTypes()],
    [
      ResourceType.CLOUDASSET_ORGANIZATIONFEED,
      CLOUDASSET_OrganizationFeed.GetTypes(),
    ],
    [ResourceType.CLOUDASSET_FOLDERFEED, CLOUDASSET_FolderFeed.GetTypes()],
    [
      ResourceType.DATASTREAM_PRIVATECONNECTION,
      DATASTREAM_PrivateConnection.GetTypes(),
    ],
    [
      ResourceType.DATASTREAM_CONNECTIONPROFILE,
      DATASTREAM_ConnectionProfile.GetTypes(),
    ],
    [ResourceType.DATASTREAM_STREAM, DATASTREAM_Stream.GetTypes()],
    [ResourceType.COMPUTE_TARGETGRPCPROXY, COMPUTE_TargetGrpcProxy.GetTypes()],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMPOLICY,
      COMPUTE_MachineImageIamPolicy.GetTypes(),
    ],
    [ResourceType.COMPUTE_ROUTERINTERFACE, COMPUTE_RouterInterface.GetTypes()],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMPOLICY,
      COMPUTE_BackendBucketIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SHAREDVPCSERVICEPROJECT,
      COMPUTE_SharedVPCServiceProject.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MANGEDSSLCERTIFICATE,
      COMPUTE_MangedSslCertificate.GetTypes(),
    ],
    [ResourceType.COMPUTE_PACKETMIRRORING, COMPUTE_PacketMirroring.GetTypes()],
    [ResourceType.COMPUTE_ROUTERNAT, COMPUTE_RouterNat.GetTypes()],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMMember,
      COMPUTE_BackendBucketIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_DISKASYNCREPLICATION,
      COMPUTE_DiskAsyncReplication.GetTypes(),
    ],
    [ResourceType.COMPUTE_NODEGROUP, COMPUTE_NodeGroup.GetTypes()],
    [ResourceType.COMPUTE_REGIONURLMAP, COMPUTE_RegionUrlMap.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICE,
      COMPUTE_RegionBackendService.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_DISKRESOURCEPOLICYATTACHMENT,
      COMPUTE_DiskResourcePolicyAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETTCPPROXY,
      COMPUTE_RegionTargetTcpProxy.GetTypes(),
    ],
    [ResourceType.COMPUTE_BACKENDSERVICE, COMPUTE_BackendService.GetTypes()],
    [ResourceType.COMPUTE_RESERVATION, COMPUTE_Reservation.GetTypes()],
    [
      ResourceType.COMPUTE_PROJECTDEFAULTNETWORKTIER,
      COMPUTE_ProjectDefaultNetworkTier.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONHEALTHCHECK,
      COMPUTE_RegionHealthCheck.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPPROXY,
      COMPUTE_RegionTargetHttpProxy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICY,
      COMPUTE_RegionSecurityPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMBinding,
      COMPUTE_RegionDiskIAMBinding.GetTypes(),
    ],
    [ResourceType.COMPUTE_FORWARDINGRULE, COMPUTE_ForwardingRule.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONINSTANCETEMPLATE,
      COMPUTE_RegionInstanceTemplate.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCEGROUPNAMEDPORT,
      COMPUTE_InstanceGroupNamedPort.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTLIST,
      COMPUTE_NetworkEndpointList.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMMember,
      COMPUTE_BackendServiceIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCESETTINGS,
      COMPUTE_InstanceSettings.GetTypes(),
    ],
    [ResourceType.COMPUTE_RESOURCEPOLICY, COMPUTE_ResourcePolicy.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMPOLICY,
      COMPUTE_RegionBackendServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_PUBLICDELEGATEDPREFIX,
      COMPUTE_PublicDelegatedPrefix.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKENDPOINTGROUP,
      COMPUTE_NetworkEndpointGroup.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINT,
      COMPUTE_GlobalNetworkEndpoint.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_PROJECTMETADATAITEM,
      COMPUTE_ProjectMetadataItem.GetTypes(),
    ],
    [ResourceType.COMPUTE_ATTACHEDDISK, COMPUTE_AttachedDisk.GetTypes()],
    [ResourceType.COMPUTE_TARGETPOOL, COMPUTE_TargetPool.GetTypes()],
    [
      ResourceType.COMPUTE_NETWORKATTACHMENT,
      COMPUTE_NetworkAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONTARGETHTTPSPROXY,
      COMPUTE_RegionTargetHttpsProxy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_EXTERNALVPNGATEWAY,
      COMPUTE_ExternalVpnGateway.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMPOLICY,
      COMPUTE_RegionDiskIamPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_GLOBALNETWORKENDPOINTGROUP,
      COMPUTE_GlobalNetworkEndpointGroup.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SECURITYSCANCONFIG,
      COMPUTE_SecurityScanConfig.GetTypes(),
    ],
    [ResourceType.COMPUTE_AUTOSCALER, COMPUTE_Autoscaler.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYASSOCIATION,
      COMPUTE_RegionNetworkFirewallPolicyAssociation.GetTypes(),
    ],
    [ResourceType.COMPUTE_URLMAP, COMPUTE_URLMap.GetTypes()],
    [
      ResourceType.COMPUTE_BACKENDSERVICESIGNEDURLKEY,
      COMPUTE_BackendServiceSignedUrlKey.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYRULE,
      COMPUTE_FirewallPolicyRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MANAGEDSSLCERTIFICATE,
      COMPUTE_ManagedSslCertificate.GetTypes(),
    ],
    [ResourceType.COMPUTE_TARGETTCPPROXY, COMPUTE_TargetTCPProxy.GetTypes()],
    [
      ResourceType.COMPUTE_INTERCONNECTATTACHMENT,
      COMPUTE_InterconnectAttachment.GetTypes(),
    ],
    [ResourceType.COMPUTE_NETWORKENDPOINT, COMPUTE_NetworkEndpoint.GetTypes()],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMEMBERSHIP,
      COMPUTE_InstanceGroupMembership.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICY,
      COMPUTE_NetworkFirewallPolicy.GetTypes(),
    ],
    [ResourceType.COMPUTE_FIREWALLPOLICY, COMPUTE_FirewallPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMBinding,
      COMPUTE_MachineImageIAMBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONCOMMITMENT,
      COMPUTE_RegionCommitment.GetTypes(),
    ],
    [ResourceType.COMPUTE_DISKIAMBinding, COMPUTE_DiskIAMBinding.GetTypes()],
    [ResourceType.COMPUTE_HEALTHCHECK, COMPUTE_HealthCheck.GetTypes()],
    [
      ResourceType.COMPUTE_CAEXTERNALACCOUNTKEY,
      COMPUTE_CaExternalAccountKey.GetTypes(),
    ],
    [ResourceType.COMPUTE_REGIONDISK, COMPUTE_RegionDisk.GetTypes()],
    [
      ResourceType.COMPUTE_INSTANCEFROMMACHINEIMAGE,
      COMPUTE_InstanceFromMachineImage.GetTypes(),
    ],
    [ResourceType.COMPUTE_REGIONSSLPOLICY, COMPUTE_RegionSslPolicy.GetTypes()],
    [ResourceType.COMPUTE_IMAGEIAMMember, COMPUTE_ImageIAMMember.GetTypes()],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYRULE,
      COMPUTE_NetworkFirewallPolicyRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_TARGETHTTPSPROXY,
      COMPUTE_TargetHttpsProxy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMMember,
      COMPUTE_RegionBackendServiceIAMMember.GetTypes(),
    ],
    [ResourceType.COMPUTE_BACKENDBUCKET, COMPUTE_BackendBucket.GetTypes()],
    [
      ResourceType.COMPUTE_PUBLICADVERTISEDPREFIX,
      COMPUTE_PublicAdvertisedPrefix.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKEDGESECURITYSERVICE,
      COMPUTE_NetworkEdgeSecurityService.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMMember,
      COMPUTE_SubnetworkIAMMember.GetTypes(),
    ],
    [ResourceType.COMPUTE_INSTANCEGROUP, COMPUTE_InstanceGroup.GetTypes()],
    [ResourceType.COMPUTE_FIREWALL, COMPUTE_Firewall.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONSSLCERTIFICATE,
      COMPUTE_RegionSslCertificate.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SERVICEATTACHMENT,
      COMPUTE_ServiceAttachment.GetTypes(),
    ],
    [ResourceType.COMPUTE_SSLCERTIFICATE, COMPUTE_SSLCertificate.GetTypes()],
    [ResourceType.COMPUTE_SSLPOLICY, COMPUTE_SSLPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINT,
      COMPUTE_RegionNetworkEndpoint.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_NETWORKFIREWALLPOLICYASSOCIATION,
      COMPUTE_NetworkFirewallPolicyAssociation.GetTypes(),
    ],
    [ResourceType.COMPUTE_INSTANCE, COMPUTE_Instance.GetTypes()],
    [ResourceType.COMPUTE_HAVPNGATEWAY, COMPUTE_HaVpnGateway.GetTypes()],
    [
      ResourceType.COMPUTE_INSTANCEGROUPMANAGER,
      COMPUTE_InstanceGroupManager.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKENDPOINTGROUP,
      COMPUTE_RegionNetworkEndpointGroup.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_INSTANCETEMPLATE,
      COMPUTE_InstanceTemplate.GetTypes(),
    ],
    [ResourceType.COMPUTE_NODETEMPLATE, COMPUTE_NodeTemplate.GetTypes()],
    [ResourceType.COMPUTE_NETWORKPEERING, COMPUTE_NetworkPeering.GetTypes()],
    [ResourceType.COMPUTE_SECURITYPOLICY, COMPUTE_SecurityPolicy.GetTypes()],
    [ResourceType.COMPUTE_ROUTE, COMPUTE_Route.GetTypes()],
    [ResourceType.COMPUTE_NETWORK, COMPUTE_Network.GetTypes()],
    [
      ResourceType.COMPUTE_SHAREDVPCHOSTPROJECT,
      COMPUTE_SharedVPCHostProject.GetTypes(),
    ],
    [ResourceType.COMPUTE_ADDRESS, COMPUTE_Address.GetTypes()],
    [ResourceType.COMPUTE_DISKIAMPOLICY, COMPUTE_DiskIamPolicy.GetTypes()],
    [ResourceType.COMPUTE_IMAGEIAMPOLICY, COMPUTE_ImageIamPolicy.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICY,
      COMPUTE_RegionNetworkFirewallPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONDISKIAMMember,
      COMPUTE_RegionDiskIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMBinding,
      COMPUTE_SnapshotIAMBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_PERINSTANCECONFIG,
      COMPUTE_PerInstanceConfig.GetTypes(),
    ],
    [ResourceType.COMPUTE_SUBNETWORK, COMPUTE_Subnetwork.GetTypes()],
    [ResourceType.COMPUTE_IMAGE, COMPUTE_Image.GetTypes()],
    [
      ResourceType.COMPUTE_InstanceIAMPOLICY,
      COMPUTE_InstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMMember,
      COMPUTE_SnapshotIAMMember.GetTypes(),
    ],
    [ResourceType.COMPUTE_TARGETSSLPROXY, COMPUTE_TargetSSLProxy.GetTypes()],
    [ResourceType.COMPUTE_VPNTUNNEL, COMPUTE_VPNTunnel.GetTypes()],
    [
      ResourceType.COMPUTE_FIREWALLPOLICYASSOCIATION,
      COMPUTE_FirewallPolicyAssociation.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONNETWORKFIREWALLPOLICYRULE,
      COMPUTE_RegionNetworkFirewallPolicyRule.GetTypes(),
    ],
    [ResourceType.COMPUTE_ROUTER, COMPUTE_Router.GetTypes()],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMPOLICY,
      COMPUTE_BackendServiceIamPolicy.GetTypes(),
    ],
    [ResourceType.COMPUTE_DISK, COMPUTE_Disk.GetTypes()],
    [ResourceType.COMPUTE_VPNGATEWAY, COMPUTE_VPNGateway.GetTypes()],
    [
      ResourceType.COMPUTE_INSTANCEFROMTEMPLATE,
      COMPUTE_InstanceFromTemplate.GetTypes(),
    ],
    [ResourceType.COMPUTE_IMAGEIAMBinding, COMPUTE_ImageIAMBinding.GetTypes()],
    [
      ResourceType.COMPUTE_SNAPSHOTIAMPOLICY,
      COMPUTE_SnapshotIamPolicy.GetTypes(),
    ],
    [ResourceType.COMPUTE_SNAPSHOT, COMPUTE_Snapshot.GetTypes()],
    [ResourceType.COMPUTE_DISKIAMMember, COMPUTE_DiskIAMMember.GetTypes()],
    [
      ResourceType.COMPUTE_NETWORKPEERINGROUTESCONFIG,
      COMPUTE_NetworkPeeringRoutesConfig.GetTypes(),
    ],
    [ResourceType.COMPUTE_TARGETHTTPPROXY, COMPUTE_TargetHttpProxy.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONINSTANCEGROUPMANAGER,
      COMPUTE_RegionInstanceGroupManager.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONSECURITYPOLICYRULE,
      COMPUTE_RegionSecurityPolicyRule.GetTypes(),
    ],
    [ResourceType.COMPUTE_GLOBALADDRESS, COMPUTE_GlobalAddress.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONDISKRESOURCEPOLICYATTACHMENT,
      COMPUTE_RegionDiskResourcePolicyAttachment.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDSERVICEIAMBinding,
      COMPUTE_BackendServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETIAMBinding,
      COMPUTE_BackendBucketIAMBinding.GetTypes(),
    ],
    [ResourceType.COMPUTE_PROJECTMETADATA, COMPUTE_ProjectMetadata.GetTypes()],
    [
      ResourceType.COMPUTE_REGIONPERINSTANCECONFIG,
      COMPUTE_RegionPerInstanceConfig.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_HTTPSHEALTHCHECK,
      COMPUTE_HttpsHealthCheck.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_MACHINEIMAGEIAMMember,
      COMPUTE_MachineImageIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONBACKENDSERVICEIAMBinding,
      COMPUTE_RegionBackendServiceIAMBinding.GetTypes(),
    ],
    [ResourceType.COMPUTE_MACHINEIMAGE, COMPUTE_MachineImage.GetTypes()],
    [ResourceType.COMPUTE_ROUTERPEER, COMPUTE_RouterPeer.GetTypes()],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYRULE,
      COMPUTE_OrganizationSecurityPolicyRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMPOLICY,
      COMPUTE_SubnetworkIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_BACKENDBUCKETSIGNEDURLKEY,
      COMPUTE_BackendBucketSignedUrlKey.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICYASSOCIATION,
      COMPUTE_OrganizationSecurityPolicyAssociation.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_REGIONAUTOSCALER,
      COMPUTE_RegionAutoscaler.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_GLOBALFORWARDINGRULE,
      COMPUTE_GlobalForwardingRule.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_SUBNETWORKIAMBinding,
      COMPUTE_SubnetworkIAMBinding.GetTypes(),
    ],
    [ResourceType.COMPUTE_TARGETINSTANCE, COMPUTE_TargetInstance.GetTypes()],
    [ResourceType.COMPUTE_HTTPHEALTHCHECK, COMPUTE_HttpHealthCheck.GetTypes()],
    [
      ResourceType.COMPUTE_InstanceIAMMember,
      COMPUTE_InstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_InstanceIAMBinding,
      COMPUTE_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.COMPUTE_ORGANIZATIONSECURITYPOLICY,
      COMPUTE_OrganizationSecurityPolicy.GetTypes(),
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
      ResourceType.NETWORKSECURITY_ADDRESSGROUP,
      NETWORKSECURITY_AddressGroup.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_SERVERTLSPOLICY,
      NETWORKSECURITY_ServerTlsPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMPOLICY,
      NETWORKSECURITY_AddressGroupIamPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_FIREWALLENDPOINT,
      NETWORKSECURITY_FirewallEndpoint.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILEGROUP,
      NETWORKSECURITY_SecurityProfileGroup.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_SECURITYPROFILE,
      NETWORKSECURITY_SecurityProfile.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMMember,
      NETWORKSECURITY_AddressGroupIAMMember.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICYRULE,
      NETWORKSECURITY_GatewaySecurityPolicyRule.GetTypes(),
    ],
    [ResourceType.NETWORKSECURITY_URLLIST, NETWORKSECURITY_UrlList.GetTypes()],
    [
      ResourceType.NETWORKSECURITY_ADDRESSGROUPIAMBinding,
      NETWORKSECURITY_AddressGroupIAMBinding.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_GATEWAYSECURITYPOLICY,
      NETWORKSECURITY_GatewaySecurityPolicy.GetTypes(),
    ],
    [
      ResourceType.NETWORKSECURITY_TLSINSPECTIONPOLICY,
      NETWORKSECURITY_TlsInspectionPolicy.GetTypes(),
    ],
    [ResourceType.LOOKER_INSTANCE, LOOKER_Instance.GetTypes()],
    [ResourceType.FOLDER_IAMPOLICY, FOLDER_IAMPolicy.GetTypes()],
    [ResourceType.FOLDER_IAMBinding, FOLDER_IAMBinding.GetTypes()],
    [
      ResourceType.FOLDER_ACCESSAPPROVALSETTINGS,
      FOLDER_AccessApprovalSettings.GetTypes(),
    ],
    [ResourceType.FOLDER_IAMMember, FOLDER_IAMMember.GetTypes()],
    [
      ResourceType.FOLDER_ORGANIZATIONPOLICY,
      FOLDER_OrganizationPolicy.GetTypes(),
    ],
    [ResourceType.FOLDER_IAMAuditCONFIG, FOLDER_IAMAuditConfig.GetTypes()],
    [ResourceType.DATAPLEX_ASSETIAMPOLICY, DATAPLEX_AssetIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_ASSETIAMMember, DATAPLEX_AssetIAMMember.GetTypes()],
    [ResourceType.DATAPLEX_ASSET, DATAPLEX_Asset.GetTypes()],
    [ResourceType.DATAPLEX_TASKIAMMember, DATAPLEX_TaskIAMMember.GetTypes()],
    [ResourceType.DATAPLEX_TASK, DATAPLEX_Task.GetTypes()],
    [ResourceType.DATAPLEX_DATASCAN, DATAPLEX_Datascan.GetTypes()],
    [
      ResourceType.DATAPLEX_ASSETIAMBinding,
      DATAPLEX_AssetIAMBinding.GetTypes(),
    ],
    [ResourceType.DATAPLEX_LAKEIAMMember, DATAPLEX_LakeIAMMember.GetTypes()],
    [
      ResourceType.DATAPLEX_DATASCANIAMPOLICY,
      DATAPLEX_DatascanIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAPLEX_DATASCANIAMBinding,
      DATAPLEX_DatascanIAMBinding.GetTypes(),
    ],
    [ResourceType.DATAPLEX_TASKIAMPOLICY, DATAPLEX_TaskIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_LAKEIAMBinding, DATAPLEX_LakeIAMBinding.GetTypes()],
    [ResourceType.DATAPLEX_TASKIAMBinding, DATAPLEX_TaskIAMBinding.GetTypes()],
    [ResourceType.DATAPLEX_ZONE, DATAPLEX_Zone.GetTypes()],
    [ResourceType.DATAPLEX_LAKEIAMPOLICY, DATAPLEX_LakeIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_LAKE, DATAPLEX_Lake.GetTypes()],
    [ResourceType.DATAPLEX_ZONEIAMPOLICY, DATAPLEX_ZoneIamPolicy.GetTypes()],
    [ResourceType.DATAPLEX_ZONEIAMBinding, DATAPLEX_ZoneIAMBinding.GetTypes()],
    [ResourceType.DATAPLEX_ZONEIAMMember, DATAPLEX_ZoneIAMMember.GetTypes()],
    [
      ResourceType.DATAPLEX_DATASCANIAMMember,
      DATAPLEX_DatascanIAMMember.GetTypes(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMBinding,
      SECRETMANAGER_SecretIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETIAMPOLICY,
      SECRETMANAGER_SecretIamPolicy.GetTypes(),
    ],
    [ResourceType.SECRETMANAGER_SECRET, SECRETMANAGER_Secret.GetTypes()],
    [
      ResourceType.SECRETMANAGER_SECRETIAMMember,
      SECRETMANAGER_SecretIAMMember.GetTypes(),
    ],
    [
      ResourceType.SECRETMANAGER_SECRETVERSION,
      SECRETMANAGER_SecretVersion.GetTypes(),
    ],
    [ResourceType.APPENGINE_FIREWALLRULE, APPENGINE_FirewallRule.GetTypes()],
    [
      ResourceType.APPENGINE_APPLICATIONURLDISPATCHRULES,
      APPENGINE_ApplicationUrlDispatchRules.GetTypes(),
    ],
    [ResourceType.APPENGINE_APPLICATION, APPENGINE_Application.GetTypes()],
    [
      ResourceType.APPENGINE_STANDARDAPPVERSION,
      APPENGINE_StandardAppVersion.GetTypes(),
    ],
    [
      ResourceType.APPENGINE_FLEXIBLEAPPVERSION,
      APPENGINE_FlexibleAppVersion.GetTypes(),
    ],
    [
      ResourceType.APPENGINE_SERVICENETWORKSETTINGS,
      APPENGINE_ServiceNetworkSettings.GetTypes(),
    ],
    [ResourceType.APPENGINE_DOMAINMAPPING, APPENGINE_DomainMapping.GetTypes()],
    [
      ResourceType.APPENGINE_ENGINESPLITTRAFFIC,
      APPENGINE_EngineSplitTraffic.GetTypes(),
    ],
    [ResourceType.DATAFLOW_PIPELINE, DATAFLOW_Pipeline.GetTypes()],
    [ResourceType.DATAFLOW_JOB, DATAFLOW_Job.GetTypes()],
    [
      ResourceType.DATAFLOW_FLEXTEMPLATEJOB,
      DATAFLOW_FlexTemplateJob.GetTypes(),
    ],
    [ResourceType.PROJECTS_IAMMember, PROJECTS_IAMMember.GetTypes()],
    [
      ResourceType.PROJECTS_ORGANIZATIONPOLICY,
      PROJECTS_OrganizationPolicy.GetTypes(),
    ],
    [
      ResourceType.PROJECTS_USAGEEXPORTBUCKET,
      PROJECTS_UsageExportBucket.GetTypes(),
    ],
    [ResourceType.PROJECTS_IAMPOLICY, PROJECTS_IAMPolicy.GetTypes()],
    [ResourceType.PROJECTS_IAMBinding, PROJECTS_IAMBinding.GetTypes()],
    [ResourceType.PROJECTS_APIKEY, PROJECTS_ApiKey.GetTypes()],
    [
      ResourceType.PROJECTS_SERVICEIDENTITY,
      PROJECTS_ServiceIdentity.GetTypes(),
    ],
    [
      ResourceType.PROJECTS_ACCESSAPPROVALSETTINGS,
      PROJECTS_AccessApprovalSettings.GetTypes(),
    ],
    [ResourceType.PROJECTS_IAMAuditCONFIG, PROJECTS_IAMAuditConfig.GetTypes()],
    [
      ResourceType.PROJECTS_DEFAULTSERVICEACCOUNTS,
      PROJECTS_DefaultServiceAccounts.GetTypes(),
    ],
    [ResourceType.PROJECTS_SERVICE, PROJECTS_Service.GetTypes()],
    [ResourceType.PROJECTS_IAMCUSTOMROLE, PROJECTS_IAMCustomRole.GetTypes()],
    [ResourceType.DATAFUSION_INSTANCE, DATAFUSION_Instance.GetTypes()],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMPOLICY,
      CLOUDFUNCTIONSV2_FunctionIamPolicy.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMBinding,
      CLOUDFUNCTIONSV2_FunctionIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTIONIAMMember,
      CLOUDFUNCTIONSV2_FunctionIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONSV2_FUNCTION,
      CLOUDFUNCTIONSV2_Function.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMMember,
      ARTIFACTREGISTRY_RepositoryIAMMember.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_VPCSCCONFIG,
      ARTIFACTREGISTRY_VpcscConfig.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMPOLICY,
      ARTIFACTREGISTRY_RepositoryIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORYIAMBinding,
      ARTIFACTREGISTRY_RepositoryIAMBinding.GetTypes(),
    ],
    [
      ResourceType.ARTIFACTREGISTRY_REPOSITORY,
      ARTIFACTREGISTRY_Repository.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERS,
      ACCESSCONTEXTMANAGER_ServicePerimeters.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETERRESOURCE,
      ACCESSCONTEXTMANAGER_ServicePerimeterResource.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMMember,
      ACCESSCONTEXTMANAGER_AccessPolicyIAMMember.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICY,
      ACCESSCONTEXTMANAGER_AccessPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELCONDITION,
      ACCESSCONTEXTMANAGER_AccessLevelCondition.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_SERVICEPERIMETER,
      ACCESSCONTEXTMANAGER_ServicePerimeter.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_AUTHORIZEDORGSDESC,
      ACCESSCONTEXTMANAGER_AuthorizedOrgsDesc.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_GCPUSERACCESSBINDING,
      ACCESSCONTEXTMANAGER_GcpUserAccessBinding.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMPOLICY,
      ACCESSCONTEXTMANAGER_AccessPolicyIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSPOLICYIAMBinding,
      ACCESSCONTEXTMANAGER_AccessPolicyIAMBinding.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_INGRESSPOLICY,
      ACCESSCONTEXTMANAGER_IngressPolicy.GetTypes(),
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
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVEL,
      ACCESSCONTEXTMANAGER_AccessLevel.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_ACCESSLEVELS,
      ACCESSCONTEXTMANAGER_AccessLevels.GetTypes(),
    ],
    [
      ResourceType.ACCESSCONTEXTMANAGER_EGRESSPOLICY,
      ACCESSCONTEXTMANAGER_EgressPolicy.GetTypes(),
    ],
    [ResourceType.STORAGE_HMACKEY, STORAGE_HmacKey.GetTypes()],
    [ResourceType.STORAGE_BUCKETOBJECT, STORAGE_BucketObject.GetTypes()],
    [ResourceType.STORAGE_TRANSFERJOB, STORAGE_TransferJob.GetTypes()],
    [
      ResourceType.STORAGE_BUCKETIAMBinding,
      STORAGE_BucketIAMBinding.GetTypes(),
    ],
    [ResourceType.STORAGE_NOTIFICATION, STORAGE_Notification.GetTypes()],
    [
      ResourceType.STORAGE_INSIGHTSREPORTCONFIG,
      STORAGE_InsightsReportConfig.GetTypes(),
    ],
    [ResourceType.STORAGE_BUCKET, STORAGE_Bucket.GetTypes()],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACL,
      STORAGE_DefaultObjectACL.GetTypes(),
    ],
    [
      ResourceType.STORAGE_BUCKETACCESSCONTROL,
      STORAGE_BucketAccessControl.GetTypes(),
    ],
    [ResourceType.STORAGE_BUCKETIAMPOLICY, STORAGE_BucketIAMPolicy.GetTypes()],
    [ResourceType.STORAGE_BUCKETIAMMember, STORAGE_BucketIAMMember.GetTypes()],
    [ResourceType.STORAGE_OBJECTACL, STORAGE_ObjectACL.GetTypes()],
    [
      ResourceType.STORAGE_OBJECTACCESSCONTROL,
      STORAGE_ObjectAccessControl.GetTypes(),
    ],
    [
      ResourceType.STORAGE_TRANSFERAGENTPOOL,
      STORAGE_TransferAgentPool.GetTypes(),
    ],
    [
      ResourceType.STORAGE_DEFAULTOBJECTACCESSCONTROL,
      STORAGE_DefaultObjectAccessControl.GetTypes(),
    ],
    [ResourceType.STORAGE_BUCKETACL, STORAGE_BucketACL.GetTypes()],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_PRIVATECONNECTION,
      DATABASEMIGRATIONSERVICE_PrivateConnection.GetTypes(),
    ],
    [
      ResourceType.DATABASEMIGRATIONSERVICE_CONNECTIONPROFILE,
      DATABASEMIGRATIONSERVICE_ConnectionProfile.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_PROJECTCUSTOMMODULE,
      SECURITYCENTER_ProjectCustomModule.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_InstanceIAMMember,
      SECURITYCENTER_InstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_InstanceIAMBinding,
      SECURITYCENTER_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMPOLICY,
      SECURITYCENTER_SourceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_InstanceIAMPOLICY,
      SECURITYCENTER_InstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_EVENTTHREATDETECTIONCUSTOMMODULE,
      SECURITYCENTER_EventThreatDetectionCustomModule.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_NOTIFICATIONCONFIG,
      SECURITYCENTER_NotificationConfig.GetTypes(),
    ],
    [ResourceType.SECURITYCENTER_SOURCE, SECURITYCENTER_Source.GetTypes()],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMBinding,
      SECURITYCENTER_SourceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_FOLDERCUSTOMMODULE,
      SECURITYCENTER_FolderCustomModule.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_SOURCEIAMMember,
      SECURITYCENTER_SourceIAMMember.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_MUTECONFIG,
      SECURITYCENTER_MuteConfig.GetTypes(),
    ],
    [
      ResourceType.SECURITYCENTER_ORGANIZATIONCUSTOMMODULE,
      SECURITYCENTER_OrganizationCustomModule.GetTypes(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_POLICYBASEDROUTE,
      NETWORKCONNECTIVITY_PolicyBasedRoute.GetTypes(),
    ],
    [ResourceType.NETWORKCONNECTIVITY_HUB, NETWORKCONNECTIVITY_Hub.GetTypes()],
    [
      ResourceType.NETWORKCONNECTIVITY_SPOKE,
      NETWORKCONNECTIVITY_Spoke.GetTypes(),
    ],
    [
      ResourceType.NETWORKCONNECTIVITY_SERVICECONNECTIONPOLICY,
      NETWORKCONNECTIVITY_ServiceConnectionPolicy.GetTypes(),
    ],
    [ResourceType.EVENTARC_TRIGGER, EVENTARC_Trigger.GetTypes()],
    [ResourceType.EVENTARC_CHANNEL, EVENTARC_Channel.GetTypes()],
    [
      ResourceType.EVENTARC_GOOGLECHANNELCONFIG,
      EVENTARC_GoogleChannelConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKAPPATTESTCONFIG,
      FIREBASE_AppCheckAppAttestConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKPLAYINTEGRITYCONFIG,
      FIREBASE_AppCheckPlayIntegrityConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKSERVICECONFIG,
      FIREBASE_AppCheckServiceConfig.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_EXTENSIONSINSTANCE,
      FIREBASE_ExtensionsInstance.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKDEBUGTOKEN,
      FIREBASE_AppCheckDebugToken.GetTypes(),
    ],
    [ResourceType.FIREBASE_HOSTINGSITE, FIREBASE_HostingSite.GetTypes()],
    [ResourceType.FIREBASE_STORAGEBUCKET, FIREBASE_StorageBucket.GetTypes()],
    [ResourceType.FIREBASE_ANDROIDAPP, FIREBASE_AndroidApp.GetTypes()],
    [ResourceType.FIREBASE_PROJECT, FIREBASE_Project.GetTypes()],
    [
      ResourceType.FIREBASE_HOSTINGCUSTOMDOMAIN,
      FIREBASE_HostingCustomDomain.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_DATABASEINSTANCE,
      FIREBASE_DatabaseInstance.GetTypes(),
    ],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAV3CONFIG,
      FIREBASE_AppCheckRecaptchaV3Config.GetTypes(),
    ],
    [ResourceType.FIREBASE_HOSTINGRELEASE, FIREBASE_HostingRelease.GetTypes()],
    [ResourceType.FIREBASE_APPLEAPP, FIREBASE_AppleApp.GetTypes()],
    [ResourceType.FIREBASE_HOSTINGVERSION, FIREBASE_HostingVersion.GetTypes()],
    [
      ResourceType.FIREBASE_APPCHECKRECAPTCHAENTERPRISECONFIG,
      FIREBASE_AppCheckRecaptchaEnterpriseConfig.GetTypes(),
    ],
    [ResourceType.FIREBASE_WEBAPP, FIREBASE_WebApp.GetTypes()],
    [ResourceType.FIREBASE_HOSTINGCHANNEL, FIREBASE_HostingChannel.GetTypes()],
    [ResourceType.RESOURCEMANAGER_LIEN, RESOURCEMANAGER_Lien.GetTypes()],
    [
      ResourceType.DATALOSS_PREVENTIONINSPECTTEMPLATE,
      DATALOSS_PreventionInspectTemplate.GetTypes(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONDEIDENTIFYTEMPLATE,
      DATALOSS_PreventionDeidentifyTemplate.GetTypes(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONJOBTRIGGER,
      DATALOSS_PreventionJobTrigger.GetTypes(),
    ],
    [
      ResourceType.DATALOSS_PREVENTIONSTOREDINFOTYPE,
      DATALOSS_PreventionStoredInfoType.GetTypes(),
    ],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMPOLICY,
      CLOUDRUNV2_ServiceIamPolicy.GetTypes(),
    ],
    [ResourceType.CLOUDRUNV2_JOBIAMMember, CLOUDRUNV2_JobIAMMember.GetTypes()],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMBinding,
      CLOUDRUNV2_ServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.CLOUDRUNV2_JOBIAMBinding,
      CLOUDRUNV2_JobIAMBinding.GetTypes(),
    ],
    [ResourceType.CLOUDRUNV2_SERVICE, CLOUDRUNV2_Service.GetTypes()],
    [ResourceType.CLOUDRUNV2_JOBIAMPOLICY, CLOUDRUNV2_JobIamPolicy.GetTypes()],
    [
      ResourceType.CLOUDRUNV2_SERVICEIAMMember,
      CLOUDRUNV2_ServiceIAMMember.GetTypes(),
    ],
    [ResourceType.CLOUDRUNV2_JOB, CLOUDRUNV2_Job.GetTypes()],
    [ResourceType.EDGENETWORK_SUBNET, EDGENETWORK_Subnet.GetTypes()],
    [ResourceType.EDGENETWORK_NETWORK, EDGENETWORK_Network.GetTypes()],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMMember,
      SOURCEREPO_RepositoryIAMMember.GetTypes(),
    ],
    [ResourceType.SOURCEREPO_REPOSITORY, SOURCEREPO_Repository.GetTypes()],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMBinding,
      SOURCEREPO_RepositoryIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SOURCEREPO_REPOSITORYIAMPOLICY,
      SOURCEREPO_RepositoryIamPolicy.GetTypes(),
    ],
    [ResourceType.IAP_TUNNELIAMBinding, IAP_TunnelIAMBinding.GetTypes()],
    [ResourceType.IAP_TUNNELIAMPOLICY, IAP_TunnelIamPolicy.GetTypes()],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMPOLICY,
      IAP_WebBackendServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMMember,
      IAP_WebTypeComputeIAMMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMBinding,
      IAP_WebTypeComputeIAMBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPECOMPUTEIAMPOLICY,
      IAP_WebTypeComputeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMMember,
      IAP_WebRegionBackendServiceIAMMember.GetTypes(),
    ],
    [ResourceType.IAP_WEBIAMBinding, IAP_WebIAMBinding.GetTypes()],
    [ResourceType.IAP_TUNNELIAMMember, IAP_TunnelIAMMember.GetTypes()],
    [
      ResourceType.IAP_TUNNELInstanceIAMPOLICY,
      IAP_TunnelInstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMMember,
      IAP_AppEngineVersionIAMMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMBinding,
      IAP_WebBackendServiceIAMBinding.GetTypes(),
    ],
    [ResourceType.IAP_BRAND, IAP_Brand.GetTypes()],
    [ResourceType.IAP_WEBIAMMember, IAP_WebIAMMember.GetTypes()],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMPOLICY,
      IAP_AppEngineVersionIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBBACKENDSERVICEIAMMember,
      IAP_WebBackendServiceIAMMember.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINEVERSIONIAMBinding,
      IAP_AppEngineVersionIAMBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMMember,
      IAP_AppEngineServiceIAMMember.GetTypes(),
    ],
    [ResourceType.IAP_WEBIAMPOLICY, IAP_WebIamPolicy.GetTypes()],
    [
      ResourceType.IAP_APPENGINESERVICEIAMPOLICY,
      IAP_AppEngineServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_APPENGINESERVICEIAMBinding,
      IAP_AppEngineServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMMember,
      IAP_WebTypeAppEngingIAMMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMPOLICY,
      IAP_WebRegionBackendServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMPOLICY,
      IAP_WebTypeAppEngingIamPolicy.GetTypes(),
    ],
    [
      ResourceType.IAP_TUNNELInstanceIAMMember,
      IAP_TunnelInstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.IAP_WEBREGIONBACKENDSERVICEIAMBinding,
      IAP_WebRegionBackendServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.IAP_TUNNELInstanceIAMBinding,
      IAP_TunnelInstanceIAMBinding.GetTypes(),
    ],
    [ResourceType.IAP_CLIENT, IAP_Client.GetTypes()],
    [
      ResourceType.IAP_WEBTYPEAPPENGINGIAMBinding,
      IAP_WebTypeAppEngingIAMBinding.GetTypes(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONBUCKETCONFIG,
      LOGGING_OrganizationBucketConfig.GetTypes(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTBUCKETCONFIG,
      LOGGING_BillingAccountBucketConfig.GetTypes(),
    ],
    [ResourceType.LOGGING_METRIC, LOGGING_Metric.GetTypes()],
    [
      ResourceType.LOGGING_ORGANIZATIONEXCLUSION,
      LOGGING_OrganizationExclusion.GetTypes(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSETTINGS,
      LOGGING_OrganizationSettings.GetTypes(),
    ],
    [ResourceType.LOGGING_PROJECTSINK, LOGGING_ProjectSink.GetTypes()],
    [ResourceType.LOGGING_LINKEDDATASET, LOGGING_LinkedDataset.GetTypes()],
    [
      ResourceType.LOGGING_BILLINGACCOUNTEXCLUSION,
      LOGGING_BillingAccountExclusion.GetTypes(),
    ],
    [
      ResourceType.LOGGING_PROJECTEXCLUSION,
      LOGGING_ProjectExclusion.GetTypes(),
    ],
    [
      ResourceType.LOGGING_ORGANIZATIONSINK,
      LOGGING_OrganizationSink.GetTypes(),
    ],
    [
      ResourceType.LOGGING_FOLDERBUCKETCONFIG,
      LOGGING_FolderBucketConfig.GetTypes(),
    ],
    [ResourceType.LOGGING_FOLDERSINK, LOGGING_FolderSink.GetTypes()],
    [ResourceType.LOGGING_FOLDERSETTINGS, LOGGING_FolderSettings.GetTypes()],
    [
      ResourceType.LOGGING_PROJECTBUCKETCONFIG,
      LOGGING_ProjectBucketConfig.GetTypes(),
    ],
    [
      ResourceType.LOGGING_BILLINGACCOUNTSINK,
      LOGGING_BillingAccountSink.GetTypes(),
    ],
    [ResourceType.LOGGING_LOGVIEW, LOGGING_LogView.GetTypes()],
    [ResourceType.LOGGING_FOLDEREXCLUSION, LOGGING_FolderExclusion.GetTypes()],
    [
      ResourceType.OSCONFIG_OSPOLICYASSIGNMENT,
      OSCONFIG_OsPolicyAssignment.GetTypes(),
    ],
    [
      ResourceType.OSCONFIG_PATCHDEPLOYMENT,
      OSCONFIG_PatchDeployment.GetTypes(),
    ],
    [ResourceType.OSCONFIG_GUESTPOLICIES, OSCONFIG_GuestPolicies.GetTypes()],
    [
      ResourceType.SECURESOURCEMANAGER_InstanceIAMBinding,
      SECURESOURCEMANAGER_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_INSTANCE,
      SECURESOURCEMANAGER_Instance.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_InstanceIAMPOLICY,
      SECURESOURCEMANAGER_InstanceIAMPolicy.GetTypes(),
    ],
    [
      ResourceType.SECURESOURCEMANAGER_InstanceIAMMember,
      SECURESOURCEMANAGER_InstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEUSAGE_CONSUMERQUOTAOVERRIDE,
      SERVICEUSAGE_ConsumerQuotaOverride.GetTypes(),
    ],
    [
      ResourceType.CLOUDDOMAINS_REGISTRATION,
      CLOUDDOMAINS_Registration.GetTypes(),
    ],
    [ResourceType.FIREBASERULES_RULESET, FIREBASERULES_Ruleset.GetTypes()],
    [ResourceType.FIREBASERULES_RELEASE, FIREBASERULES_Release.GetTypes()],
    [ResourceType.GKEHUB_NAMESPACE, GKEHUB_Namespace.GetTypes()],
    [ResourceType.GKEHUB_SCOPEIAMMember, GKEHUB_ScopeIAMMember.GetTypes()],
    [
      ResourceType.GKEHUB_MEMBERSHIPRBACROLEBINDING,
      GKEHUB_MembershipRbacRoleBinding.GetTypes(),
    ],
    [ResourceType.GKEHUB_FEATURE, GKEHUB_Feature.GetTypes()],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMMember,
      GKEHUB_MembershipIAMMember.GetTypes(),
    ],
    [ResourceType.GKEHUB_MEMBERSHIP, GKEHUB_Membership.GetTypes()],
    [
      ResourceType.GKEHUB_FEATUREIAMBinding,
      GKEHUB_FeatureIAMBinding.GetTypes(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMPOLICY,
      GKEHUB_MembershipIamPolicy.GetTypes(),
    ],
    [
      ResourceType.GKEHUB_MEMBERSHIPIAMBinding,
      GKEHUB_MembershipIAMBinding.GetTypes(),
    ],
    [ResourceType.GKEHUB_SCOPEIAMPOLICY, GKEHUB_ScopeIamPolicy.GetTypes()],
    [
      ResourceType.GKEHUB_SCOPERBACROLEBINDING,
      GKEHUB_ScopeRbacRoleBinding.GetTypes(),
    ],
    [ResourceType.GKEHUB_SCOPE, GKEHUB_Scope.GetTypes()],
    [
      ResourceType.GKEHUB_MEMBERSHIPBINDING,
      GKEHUB_MembershipBinding.GetTypes(),
    ],
    [ResourceType.GKEHUB_FEATUREIAMPOLICY, GKEHUB_FeatureIamPolicy.GetTypes()],
    [ResourceType.GKEHUB_SCOPEIAMBinding, GKEHUB_ScopeIAMBinding.GetTypes()],
    [ResourceType.GKEHUB_FEATUREIAMMember, GKEHUB_FeatureIAMMember.GetTypes()],
    [
      ResourceType.GKEHUB_FEATUREMEMBERSHIP,
      GKEHUB_FeatureMembership.GetTypes(),
    ],
    [ResourceType.GKEHUB_FLEET, GKEHUB_Fleet.GetTypes()],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMPOLICY,
      NOTEBOOKS_RuntimeIamPolicy.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMBinding,
      NOTEBOOKS_RuntimeIAMBinding.GetTypes(),
    ],
    [ResourceType.NOTEBOOKS_ENVIRONMENT, NOTEBOOKS_Environment.GetTypes()],
    [
      ResourceType.NOTEBOOKS_InstanceIAMBinding,
      NOTEBOOKS_InstanceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_RUNTIMEIAMMember,
      NOTEBOOKS_RuntimeIAMMember.GetTypes(),
    ],
    [
      ResourceType.NOTEBOOKS_InstanceIAMPOLICY,
      NOTEBOOKS_InstanceIAMPolicy.GetTypes(),
    ],
    [ResourceType.NOTEBOOKS_RUNTIME, NOTEBOOKS_Runtime.GetTypes()],
    [ResourceType.NOTEBOOKS_LOCATION, NOTEBOOKS_Location.GetTypes()],
    [ResourceType.NOTEBOOKS_INSTANCE, NOTEBOOKS_Instance.GetTypes()],
    [
      ResourceType.NOTEBOOKS_InstanceIAMMember,
      NOTEBOOKS_InstanceIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMMember,
      CLOUDFUNCTIONS_FunctionIAMMember.GetTypes(),
    ],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMBinding,
      CLOUDFUNCTIONS_FunctionIAMBinding.GetTypes(),
    ],
    [ResourceType.CLOUDFUNCTIONS_FUNCTION, CLOUDFUNCTIONS_Function.GetTypes()],
    [
      ResourceType.CLOUDFUNCTIONS_FUNCTIONIAMPOLICY,
      CLOUDFUNCTIONS_FunctionIamPolicy.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATION,
      WORKSTATIONS_Workstation.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMPOLICY,
      WORKSTATIONS_WorkstationIamPolicy.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMPOLICY,
      WORKSTATIONS_WorkstationConfigIamPolicy.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIG,
      WORKSTATIONS_WorkstationConfig.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMBinding,
      WORKSTATIONS_WorkstationConfigIAMBinding.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMMember,
      WORKSTATIONS_WorkstationIAMMember.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCLUSTER,
      WORKSTATIONS_WorkstationCluster.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONIAMBinding,
      WORKSTATIONS_WorkstationIAMBinding.GetTypes(),
    ],
    [
      ResourceType.WORKSTATIONS_WORKSTATIONCONFIGIAMMember,
      WORKSTATIONS_WorkstationConfigIAMMember.GetTypes(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALCLUSTER,
      GKEONPREM_BareMetalCluster.GetTypes(),
    ],
    [
      ResourceType.GKEONPREM_VMWARENODEPOOL,
      GKEONPREM_VMwareNodePool.GetTypes(),
    ],
    [
      ResourceType.GKEONPREM_BAREMETALADMINCLUSTER,
      GKEONPREM_BareMetalAdminCluster.GetTypes(),
    ],
    [ResourceType.GKEONPREM_VMWARECLUSTER, GKEONPREM_VMwareCluster.GetTypes()],
    [
      ResourceType.GKEONPREM_BAREMETALNODEPOOL,
      GKEONPREM_BareMetalNodePool.GetTypes(),
    ],
    [
      ResourceType.ORGANIZATIONS_IAMCUSTOMROLE,
      ORGANIZATIONS_IAMCustomRole.GetTypes(),
    ],
    [ResourceType.ORGANIZATIONS_FOLDER, ORGANIZATIONS_Folder.GetTypes()],
    [
      ResourceType.ORGANIZATIONS_ACCESSAPPROVALSETTINGS,
      ORGANIZATIONS_AccessApprovalSettings.GetTypes(),
    ],
    [ResourceType.ORGANIZATIONS_POLICY, ORGANIZATIONS_Policy.GetTypes()],
    [
      ResourceType.ORGANIZATIONS_IAMAuditCONFIG,
      ORGANIZATIONS_IAMAuditConfig.GetTypes(),
    ],
    [ResourceType.ORGANIZATIONS_IAMPOLICY, ORGANIZATIONS_IAMPolicy.GetTypes()],
    [
      ResourceType.ORGANIZATIONS_IAMBinding,
      ORGANIZATIONS_IAMBinding.GetTypes(),
    ],
    [ResourceType.ORGANIZATIONS_IAMMember, ORGANIZATIONS_IAMMember.GetTypes()],
    [ResourceType.ORGANIZATIONS_PROJECT, ORGANIZATIONS_Project.GetTypes()],
    [
      ResourceType.DISCOVERYENGINE_CHATENGINE,
      DISCOVERYENGINE_ChatEngine.GetTypes(),
    ],
    [
      ResourceType.DISCOVERYENGINE_SEARCHENGINE,
      DISCOVERYENGINE_SearchEngine.GetTypes(),
    ],
    [
      ResourceType.DISCOVERYENGINE_DATASTORE,
      DISCOVERYENGINE_DataStore.GetTypes(),
    ],
    [ResourceType.TAGS_TAGVALUEIAMMember, TAGS_TagValueIAMMember.GetTypes()],
    [ResourceType.TAGS_TAGBINDING, TAGS_TagBinding.GetTypes()],
    [ResourceType.TAGS_LOCATIONTAGBINDING, TAGS_LocationTagBinding.GetTypes()],
    [ResourceType.TAGS_TAGKEYIAMBinding, TAGS_TagKeyIAMBinding.GetTypes()],
    [ResourceType.TAGS_TAGKEY, TAGS_TagKey.GetTypes()],
    [ResourceType.TAGS_TAGVALUEIAMPOLICY, TAGS_TagValueIamPolicy.GetTypes()],
    [ResourceType.TAGS_TAGKEYIAMMember, TAGS_TagKeyIAMMember.GetTypes()],
    [ResourceType.TAGS_TAGKEYIAMPOLICY, TAGS_TagKeyIamPolicy.GetTypes()],
    [ResourceType.TAGS_TAGVALUE, TAGS_TagValue.GetTypes()],
    [ResourceType.TAGS_TAGVALUEIAMBinding, TAGS_TagValueIAMBinding.GetTypes()],
    [
      ResourceType.ASSUREDWORKLOADS_WORKLOAD,
      ASSUREDWORKLOADS_Workload.GetTypes(),
    ],
    [ResourceType.OSLOGIN_SSHPUBLICKEY, OSLOGIN_SshPublicKey.GetTypes()],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMPOLICY,
      SERVICEDIRECTORY_NamespaceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICE,
      SERVICEDIRECTORY_Service.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMMember,
      SERVICEDIRECTORY_ServiceIAMMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMBinding,
      SERVICEDIRECTORY_ServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACE,
      SERVICEDIRECTORY_Namespace.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_ENDPOINT,
      SERVICEDIRECTORY_Endpoint.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMBinding,
      SERVICEDIRECTORY_NamespaceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_NAMESPACEIAMMember,
      SERVICEDIRECTORY_NamespaceIAMMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEDIRECTORY_SERVICEIAMPOLICY,
      SERVICEDIRECTORY_ServiceIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BEYONDCORP_APPCONNECTION,
      BEYONDCORP_AppConnection.GetTypes(),
    ],
    [ResourceType.BEYONDCORP_APPCONNECTOR, BEYONDCORP_AppConnector.GetTypes()],
    [ResourceType.BEYONDCORP_APPGATEWAY, BEYONDCORP_AppGateway.GetTypes()],
    [
      ResourceType.SERVICEACCOUNT_IAMBinding,
      SERVICEACCOUNT_IAMBinding.GetTypes(),
    ],
    [ResourceType.SERVICEACCOUNT_ACCOUNT, SERVICEACCOUNT_Account.GetTypes()],
    [
      ResourceType.SERVICEACCOUNT_IAMMember,
      SERVICEACCOUNT_IAMMember.GetTypes(),
    ],
    [
      ResourceType.SERVICEACCOUNT_IAMPOLICY,
      SERVICEACCOUNT_IAMPolicy.GetTypes(),
    ],
    [ResourceType.SERVICEACCOUNT_KEY, SERVICEACCOUNT_Key.GetTypes()],
    [ResourceType.PUBSUB_LITETOPIC, PUBSUB_LiteTopic.GetTypes()],
    [ResourceType.PUBSUB_TOPIC, PUBSUB_Topic.GetTypes()],
    [ResourceType.PUBSUB_SCHEMAIAMMember, PUBSUB_SchemaIAMMember.GetTypes()],
    [ResourceType.PUBSUB_SCHEMA, PUBSUB_Schema.GetTypes()],
    [ResourceType.PUBSUB_TOPICIAMBinding, PUBSUB_TopicIAMBinding.GetTypes()],
    [ResourceType.PUBSUB_LITERESERVATION, PUBSUB_LiteReservation.GetTypes()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMPOLICY,
      PUBSUB_SubscriptionIAMPolicy.GetTypes(),
    ],
    [ResourceType.PUBSUB_SCHEMAIAMPOLICY, PUBSUB_SchemaIamPolicy.GetTypes()],
    [ResourceType.PUBSUB_TOPICIAMPOLICY, PUBSUB_TopicIAMPolicy.GetTypes()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMBinding,
      PUBSUB_SubscriptionIAMBinding.GetTypes(),
    ],
    [ResourceType.PUBSUB_LITESUBSCRIPTION, PUBSUB_LiteSubscription.GetTypes()],
    [ResourceType.PUBSUB_SUBSCRIPTION, PUBSUB_Subscription.GetTypes()],
    [ResourceType.PUBSUB_TOPICIAMMember, PUBSUB_TopicIAMMember.GetTypes()],
    [
      ResourceType.PUBSUB_SUBSCRIPTIONIAMMember,
      PUBSUB_SubscriptionIAMMember.GetTypes(),
    ],
    [ResourceType.PUBSUB_SCHEMAIAMBinding, PUBSUB_SchemaIAMBinding.GetTypes()],
    [ResourceType.IAM_WORKFORCEPOOL, IAM_WorkforcePool.GetTypes()],
    [ResourceType.IAM_DENYPOLICY, IAM_DenyPolicy.GetTypes()],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOLPROVIDER,
      IAM_WorkloadIdentityPoolProvider.GetTypes(),
    ],
    [
      ResourceType.IAM_ACCESSBOUNDARYPOLICY,
      IAM_AccessBoundaryPolicy.GetTypes(),
    ],
    [
      ResourceType.IAM_WORKLOADIDENTITYPOOL,
      IAM_WorkloadIdentityPool.GetTypes(),
    ],
    [
      ResourceType.IAM_WORKFORCEPOOLPROVIDER,
      IAM_WorkforcePoolProvider.GetTypes(),
    ],
    [ResourceType.ACTIVEDIRECTORY_DOMAIN, ACTIVEDIRECTORY_Domain.GetTypes()],
    [ResourceType.ACTIVEDIRECTORY_PEERING, ACTIVEDIRECTORY_Peering.GetTypes()],
    [
      ResourceType.ACTIVEDIRECTORY_DOMAINTRUST,
      ACTIVEDIRECTORY_DomainTrust.GetTypes(),
    ],
    [ResourceType.BIGQUERY_JOB, BIGQUERY_Job.GetTypes()],
    [
      ResourceType.BIGQUERY_DATASETIAMPOLICY,
      BIGQUERY_DatasetIamPolicy.GetTypes(),
    ],
    [ResourceType.BIGQUERY_DATASETACCESS, BIGQUERY_DatasetAccess.GetTypes()],
    [ResourceType.BIGQUERY_RESERVATION, BIGQUERY_Reservation.GetTypes()],
    [ResourceType.BIGQUERY_IAMMember, BIGQUERY_IAMMember.GetTypes()],
    [
      ResourceType.BIGQUERY_DATASETIAMBinding,
      BIGQUERY_DatasetIAMBinding.GetTypes(),
    ],
    [ResourceType.BIGQUERY_IAMPOLICY, BIGQUERY_IamPolicy.GetTypes()],
    [
      ResourceType.BIGQUERY_RESERVATIONASSIGNMENT,
      BIGQUERY_ReservationAssignment.GetTypes(),
    ],
    [ResourceType.BIGQUERY_TABLE, BIGQUERY_Table.GetTypes()],
    [ResourceType.BIGQUERY_APPPROFILE, BIGQUERY_AppProfile.GetTypes()],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMPOLICY,
      BIGQUERY_ConnectionIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMBinding,
      BIGQUERY_ConnectionIAMBinding.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_CAPACITYCOMMITMENT,
      BIGQUERY_CapacityCommitment.GetTypes(),
    ],
    [ResourceType.BIGQUERY_CONNECTION, BIGQUERY_Connection.GetTypes()],
    [ResourceType.BIGQUERY_IAMBinding, BIGQUERY_IAMBinding.GetTypes()],
    [
      ResourceType.BIGQUERY_DATASETIAMMember,
      BIGQUERY_DatasetIAMMember.GetTypes(),
    ],
    [
      ResourceType.BIGQUERY_DATATRANSFERCONFIG,
      BIGQUERY_DataTransferConfig.GetTypes(),
    ],
    [ResourceType.BIGQUERY_ROUTINE, BIGQUERY_Routine.GetTypes()],
    [ResourceType.BIGQUERY_DATASET, BIGQUERY_Dataset.GetTypes()],
    [ResourceType.BIGQUERY_BIRESERVATION, BIGQUERY_BiReservation.GetTypes()],
    [
      ResourceType.BIGQUERY_CONNECTIONIAMMember,
      BIGQUERY_ConnectionIAMMember.GetTypes(),
    ],
    [ResourceType.KMS_CRYPTOKEY, KMS_CryptoKey.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYIAMBinding, KMS_CryptoKeyIAMBinding.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYVERSION, KMS_CryptoKeyVersion.GetTypes()],
    [ResourceType.KMS_KEYRINGIMPORTJOB, KMS_KeyRingImportJob.GetTypes()],
    [ResourceType.KMS_KEYRINGIAMPOLICY, KMS_KeyRingIAMPolicy.GetTypes()],
    [ResourceType.KMS_KEYRINGIAMMember, KMS_KeyRingIAMMember.GetTypes()],
    [ResourceType.KMS_KEYRING, KMS_KeyRing.GetTypes()],
    [ResourceType.KMS_SECRETCIPHERTEXT, KMS_SecretCiphertext.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYIAMPOLICY, KMS_CryptoKeyIAMPolicy.GetTypes()],
    [ResourceType.KMS_KEYRINGIAMBinding, KMS_KeyRingIAMBinding.GetTypes()],
    [ResourceType.KMS_CRYPTOKEYIAMMember, KMS_CryptoKeyIAMMember.GetTypes()],
    [
      ResourceType.IDENTITYPLATFORM_TENANTOAUTHIDPCONFIG,
      IDENTITYPLATFORM_TenantOauthIdpConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTINBOUNDSAMLCONFIG,
      IDENTITYPLATFORM_TenantInboundSamlConfig.GetTypes(),
    ],
    [ResourceType.IDENTITYPLATFORM_TENANT, IDENTITYPLATFORM_Tenant.GetTypes()],
    [
      ResourceType.IDENTITYPLATFORM_DEFAULTSUPPORTEDIDPCONFIG,
      IDENTITYPLATFORM_DefaultSupportedIdpConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_OAUTHIDPCONFIG,
      IDENTITYPLATFORM_OauthIdpConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_INBOUNDSAMLCONFIG,
      IDENTITYPLATFORM_InboundSamlConfig.GetTypes(),
    ],
    [
      ResourceType.IDENTITYPLATFORM_TENANTDEFAULTSUPPORTEDIDPCONFIG,
      IDENTITYPLATFORM_TenantDefaultSupportedIdpConfig.GetTypes(),
    ],
    [ResourceType.IDENTITYPLATFORM_CONFIG, IDENTITYPLATFORM_Config.GetTypes()],
    [
      ResourceType.IDENTITYPLATFORM_PROJECTDEFAULTCONFIG,
      IDENTITYPLATFORM_ProjectDefaultConfig.GetTypes(),
    ],
    [ResourceType.SECURITYPOSTURE_POSTURE, SECURITYPOSTURE_Posture.GetTypes()],
    [
      ResourceType.SECURITYPOSTURE_POSTUREDEPLOYMENT,
      SECURITYPOSTURE_PostureDeployment.GetTypes(),
    ],
    [
      ResourceType.NETWORKMANAGEMENT_CONNECTIVITYTEST,
      NETWORKMANAGEMENT_ConnectivityTest.GetTypes(),
    ],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMBinding,
      CLOUDBUILDV2_ConnectionIAMBinding.GetTypes(),
    ],
    [ResourceType.CLOUDBUILDV2_REPOSITORY, CLOUDBUILDV2_Repository.GetTypes()],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMPOLICY,
      CLOUDBUILDV2_ConnectionIAMPolicy.GetTypes(),
    ],
    [ResourceType.CLOUDBUILDV2_CONNECTION, CLOUDBUILDV2_Connection.GetTypes()],
    [
      ResourceType.CLOUDBUILDV2_CONNECTIONIAMMember,
      CLOUDBUILDV2_ConnectionIAMMember.GetTypes(),
    ],
    [ResourceType.REDIS_INSTANCE, REDIS_Instance.GetTypes()],
    [ResourceType.REDIS_CLUSTER, REDIS_Cluster.GetTypes()],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMPOLICY,
      ENDPOINTS_ConsumersIamPolicy.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMMember,
      ENDPOINTS_ServiceIAMMember.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMBinding,
      ENDPOINTS_ConsumersIAMBinding.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_CONSUMERSIAMMember,
      ENDPOINTS_ConsumersIAMMember.GetTypes(),
    ],
    [ResourceType.ENDPOINTS_SERVICE, ENDPOINTS_Service.GetTypes()],
    [
      ResourceType.ENDPOINTS_SERVICEIAMBinding,
      ENDPOINTS_ServiceIAMBinding.GetTypes(),
    ],
    [
      ResourceType.ENDPOINTS_SERVICEIAMPOLICY,
      ENDPOINTS_ServiceIamPolicy.GetTypes(),
    ],
    [ResourceType.NETAPP_STORAGEPOOL, NETAPP_StoragePool.GetTypes()],
    [
      ResourceType.NETAPP_VOLUMEREPLICATION,
      NETAPP_VolumeReplication.GetTypes(),
    ],
    [ResourceType.NETAPP_BACKUPPOLICY, NETAPP_BackupPolicy.GetTypes()],
    [ResourceType.NETAPP_VOLUMESNAPSHOT, NETAPP_VolumeSnapshot.GetTypes()],
    [ResourceType.NETAPP_BACKUPVAULT, NETAPP_BackupVault.GetTypes()],
    [ResourceType.NETAPP_VOLUME, NETAPP_Volume.GetTypes()],
    [ResourceType.NETAPP_ACTIVEDIRECTORY, NETAPP_ActiveDirectory.GetTypes()],
    [ResourceType.NETAPP_KMSCONFIG, NETAPP_Kmsconfig.GetTypes()],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMMember,
      BINARYAUTHORIZATION_AttestorIAMMember.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_POLICY,
      BINARYAUTHORIZATION_Policy.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMPOLICY,
      BINARYAUTHORIZATION_AttestorIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTOR,
      BINARYAUTHORIZATION_Attestor.GetTypes(),
    ],
    [
      ResourceType.BINARYAUTHORIZATION_ATTESTORIAMBinding,
      BINARYAUTHORIZATION_AttestorIAMBinding.GetTypes(),
    ],
    [ResourceType.COMPOSER_ENVIRONMENT, COMPOSER_Environment.GetTypes()],
    [
      ResourceType.BILLING_ACCOUNTIAMPOLICY,
      BILLING_AccountIamPolicy.GetTypes(),
    ],
    [
      ResourceType.BILLING_ACCOUNTIAMBinding,
      BILLING_AccountIAMBinding.GetTypes(),
    ],
    [ResourceType.BILLING_BUDGET, BILLING_Budget.GetTypes()],
    [
      ResourceType.BILLING_ACCOUNTIAMMember,
      BILLING_AccountIAMMember.GetTypes(),
    ],
    [ResourceType.BILLING_PROJECTINFO, BILLING_ProjectInfo.GetTypes()],
    [ResourceType.BILLING_SUBACCOUNT, BILLING_SubAccount.GetTypes()],
    [ResourceType.BIGTABLE_INSTANCE, BIGTABLE_Instance.GetTypes()],
    [
      ResourceType.BIGTABLE_TABLEIAMBinding,
      BIGTABLE_TableIAMBinding.GetTypes(),
    ],
    [ResourceType.BIGTABLE_GCPOLICY, BIGTABLE_GCPolicy.GetTypes()],
    [
      ResourceType.BIGTABLE_InstanceIAMMember,
      BIGTABLE_InstanceIAMMember.GetTypes(),
    ],
    [ResourceType.BIGTABLE_TABLE, BIGTABLE_Table.GetTypes()],
    [
      ResourceType.BIGTABLE_InstanceIAMPOLICY,
      BIGTABLE_InstanceIAMPolicy.GetTypes(),
    ],
    [ResourceType.BIGTABLE_TABLEIAMPOLICY, BIGTABLE_TableIamPolicy.GetTypes()],
    [ResourceType.BIGTABLE_TABLEIAMMember, BIGTABLE_TableIAMMember.GetTypes()],
    [
      ResourceType.BIGTABLE_InstanceIAMBinding,
      BIGTABLE_InstanceIAMBinding.GetTypes(),
    ],
    [ResourceType.DNS_RESPONSEPOLICY, DNS_ResponsePolicy.GetTypes()],
    [ResourceType.DNS_RESPONSEPOLICYRULE, DNS_ResponsePolicyRule.GetTypes()],
    [ResourceType.DNS_MANAGEDZONE, DNS_ManagedZone.GetTypes()],
    [ResourceType.DNS_POLICY, DNS_Policy.GetTypes()],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMBinding,
      DNS_DnsManagedZoneIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMPOLICY,
      DNS_DnsManagedZoneIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DNS_DNSMANAGEDZONEIAMMember,
      DNS_DnsManagedZoneIAMMember.GetTypes(),
    ],
    [ResourceType.DNS_RECORDSET, DNS_RecordSet.GetTypes()],
    [ResourceType.CLOUDIDS_ENDPOINT, CLOUDIDS_Endpoint.GetTypes()],
    [ResourceType.RECAPTCHA_ENTERPRISEKEY, RECAPTCHA_EnterpriseKey.GetTypes()],
    [
      ResourceType.DATAFORM_REPOSITORYWORKFLOWCONFIG,
      DATAFORM_RepositoryWorkflowConfig.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMPOLICY,
      DATAFORM_RepositoryIamPolicy.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMBinding,
      DATAFORM_RepositoryIAMBinding.GetTypes(),
    ],
    [
      ResourceType.DATAFORM_REPOSITORYIAMMember,
      DATAFORM_RepositoryIAMMember.GetTypes(),
    ],
    [ResourceType.DATAFORM_REPOSITORY, DATAFORM_Repository.GetTypes()],
    [
      ResourceType.DATAFORM_REPOSITORYRELEASECONFIG,
      DATAFORM_RepositoryReleaseConfig.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVIRONMENT, APIGEE_Environment.GetTypes()],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMMember,
      APIGEE_EnvironmentIAMMember.GetTypes(),
    ],
    [ResourceType.APIGEE_ADDONSCONFIG, APIGEE_AddonsConfig.GetTypes()],
    [
      ResourceType.APIGEE_KEYSTORESALIASESPKCS12,
      APIGEE_KeystoresAliasesPkcs12.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVKEYSTORE, APIGEE_EnvKeystore.GetTypes()],
    [
      ResourceType.APIGEE_ENDPOINTATTACHMENT,
      APIGEE_EndpointAttachment.GetTypes(),
    ],
    [ResourceType.APIGEE_TARGETSERVER, APIGEE_TargetServer.GetTypes()],
    [
      ResourceType.APIGEE_ENVGROUPATTACHMENT,
      APIGEE_EnvGroupAttachment.GetTypes(),
    ],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMPOLICY,
      APIGEE_EnvironmentIamPolicy.GetTypes(),
    ],
    [ResourceType.APIGEE_ORGANIZATION, APIGEE_Organization.GetTypes()],
    [
      ResourceType.APIGEE_KEYSTORESALIASESKEYCERTFILE,
      APIGEE_KeystoresAliasesKeyCertFile.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVREFERENCES, APIGEE_EnvReferences.GetTypes()],
    [
      ResourceType.APIGEE_INSTANCEATTACHMENT,
      APIGEE_InstanceAttachment.GetTypes(),
    ],
    [ResourceType.APIGEE_ENVGROUP, APIGEE_EnvGroup.GetTypes()],
    [ResourceType.APIGEE_FLOWHOOK, APIGEE_Flowhook.GetTypes()],
    [
      ResourceType.APIGEE_SHAREDFLOWDEPLOYMENT,
      APIGEE_SharedflowDeployment.GetTypes(),
    ],
    [ResourceType.APIGEE_INSTANCE, APIGEE_Instance.GetTypes()],
    [
      ResourceType.APIGEE_KEYSTORESALIASESSELFSIGNEDCERT,
      APIGEE_KeystoresAliasesSelfSignedCert.GetTypes(),
    ],
    [ResourceType.APIGEE_NATADDRESS, APIGEE_NatAddress.GetTypes()],
    [
      ResourceType.APIGEE_ENVIRONMENTIAMBinding,
      APIGEE_EnvironmentIAMBinding.GetTypes(),
    ],
    [ResourceType.APIGEE_SHAREDFLOW, APIGEE_Sharedflow.GetTypes()],
    [
      ResourceType.APIGEE_SYNCAUTHORIZATION,
      APIGEE_SyncAuthorization.GetTypes(),
    ],
    [ResourceType.TPU_V2VM, TPU_V2Vm.GetTypes()],
    [ResourceType.TPU_NODE, TPU_Node.GetTypes()],
    [ResourceType.RUNTIMECONFIG_CONFIG, RUNTIMECONFIG_Config.GetTypes()],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMMember,
      RUNTIMECONFIG_ConfigIAMMember.GetTypes(),
    ],
    [ResourceType.RUNTIMECONFIG_VARIABLE, RUNTIMECONFIG_Variable.GetTypes()],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMBinding,
      RUNTIMECONFIG_ConfigIAMBinding.GetTypes(),
    ],
    [
      ResourceType.RUNTIMECONFIG_CONFIGIAMPOLICY,
      RUNTIMECONFIG_ConfigIamPolicy.GetTypes(),
    ],
    [ResourceType.SQL_DATABASE, SQL_Database.GetTypes()],
    [ResourceType.SQL_SSLCERT, SQL_SslCert.GetTypes()],
    [ResourceType.SQL_DATABASEINSTANCE, SQL_DatabaseInstance.GetTypes()],
    [
      ResourceType.SQL_SOURCEREPRESENTATIONINSTANCE,
      SQL_SourceRepresentationInstance.GetTypes(),
    ],
    [ResourceType.SQL_USER, SQL_User.GetTypes()],
    [ResourceType.CLOUDBUILD_TRIGGER, CLOUDBUILD_Trigger.GetTypes()],
    [
      ResourceType.CLOUDBUILD_BITBUCKETSERVERCONFIG,
      CLOUDBUILD_BitbucketServerConfig.GetTypes(),
    ],
    [ResourceType.CLOUDBUILD_WORKERPOOL, CLOUDBUILD_WorkerPool.GetTypes()],
  ]);
}
