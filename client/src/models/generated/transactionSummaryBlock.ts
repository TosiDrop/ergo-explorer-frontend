/**
 * Ergo blockchain explorer
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { ModifierId } from './modifierId';
import { Timestamp } from './timestamp';


export interface TransactionSummaryBlock {
    timestamp: Timestamp;
    headerId: ModifierId;
    /**
     * Block height
     */
    height: number;
}
