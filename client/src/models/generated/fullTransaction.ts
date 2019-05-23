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
 */import { IOSummary } from './iOSummary';
import { TransactionInput } from './transactionInput';
import { TransactionOutput } from './transactionOutput';
import { TransactionSummary } from './transactionSummary';


export interface FullTransaction { 
    summary: TransactionSummary;
    ioSummary: IOSummary;
    /**
     * Many transaction inputs
     */
    inputs: Array<TransactionInput>;
    /**
     * Many transaction outputs
     */
    outputs: Array<TransactionOutput>;
}