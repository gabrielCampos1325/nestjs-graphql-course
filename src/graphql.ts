
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CoffeeType {
    TYPE_1 = "TYPE_1",
    TYPE_2 = "TYPE_2"
}

export class CreateCoffeeInput {
    name: string;
    brand: string;
    flavors: string[];
    type: CoffeeType;
}

export class UpdateCoffeeInput {
    name?: Nullable<string>;
    brand?: Nullable<string>;
    flavors?: Nullable<string[]>;
    type?: Nullable<CoffeeType>;
}

export interface Drink {
    name: string;
}

export class Tea implements Drink {
    name: string;
}

export class Coffee implements Drink {
    id: number;
    name: string;
    brand: string;
    flavors?: Nullable<Flavor[]>;
    createdAt?: Nullable<Date>;
    type?: Nullable<CoffeeType>;
}

export abstract class IQuery {
    coffees: Coffee[];
    coffee?: Nullable<Coffee>;
    drinks: DrinkResult[];
}

export abstract class IMutation {
    createCoffee?: Nullable<Coffee>;
    updateCoffee?: Nullable<Coffee>;
    deleteCoffee?: Nullable<Coffee>;
}

export abstract class ISubscription {
    addedCoffee: Coffee;
}

export class Flavor {
    id: number;
    name?: Nullable<string>;
}

export type DrinkResult = Tea | Coffee;
type Nullable<T> = T | null;
