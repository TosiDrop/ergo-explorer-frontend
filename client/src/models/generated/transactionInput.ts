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
 */import { AddressId } from './addressId';
import { TransactionBoxId } from './transactionBoxId';
import { TransactionId } from './transactionId';
import { TransactionInputSpendingProof } from './transactionInputSpendingProof';


export interface TransactionInput { 
    id: TransactionBoxId;
    address: AddressId;
    /**
     * Number of coins captured in input
     */
    value: number;
    transactionId: TransactionId;
    outputTransactionId: TransactionId;
    spendingProof: TransactionInputSpendingProof;
}