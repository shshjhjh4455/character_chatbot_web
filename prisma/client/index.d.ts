
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatBot
 * 
 */
export type ChatBot = $Result.DefaultSelection<Prisma.$ChatBotPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.chatBot`: Exposes CRUD operations for the **ChatBot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatBots
    * const chatBots = await prisma.chatBot.findMany()
    * ```
    */
  get chatBot(): Prisma.ChatBotDelegate<ExtArgs>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0-dev.21
   * Query Engine version: dcdb692a8946281c0c85b4a6f7081984eec92b92
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ChatBot: 'ChatBot',
    ChatRoom: 'ChatRoom',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'chatBot' | 'chatRoom' | 'message'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatBot: {
        payload: Prisma.$ChatBotPayload<ExtArgs>
        fields: Prisma.ChatBotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatBotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatBotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          findFirst: {
            args: Prisma.ChatBotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatBotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          findMany: {
            args: Prisma.ChatBotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>[]
          }
          create: {
            args: Prisma.ChatBotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          createMany: {
            args: Prisma.ChatBotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatBotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          update: {
            args: Prisma.ChatBotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          deleteMany: {
            args: Prisma.ChatBotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatBotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatBotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          aggregate: {
            args: Prisma.ChatBotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatBot>
          }
          groupBy: {
            args: Prisma.ChatBotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatBotGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatBotFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatBotAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ChatBotCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatBotCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatRoomFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatRoomAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatrooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatrooms?: boolean | UserCountOutputTypeCountChatroomsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }



  /**
   * Count Type ChatBotCountOutputType
   */

  export type ChatBotCountOutputType = {
    chatrooms: number
  }

  export type ChatBotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatrooms?: boolean | ChatBotCountOutputTypeCountChatroomsArgs
  }

  // Custom InputTypes

  /**
   * ChatBotCountOutputType without action
   */
  export type ChatBotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBotCountOutputType
     */
    select?: ChatBotCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatBotCountOutputType without action
   */
  export type ChatBotCountOutputTypeCountChatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }



  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    messages: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatRoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    provider: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    provider: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    provider: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    provider: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    chatrooms?: boolean | User$chatroomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatrooms?: boolean | User$chatroomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatrooms: Prisma.$ChatRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      provider: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chatrooms<T extends User$chatroomsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.chatrooms
   */
  export type User$chatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ChatBot
   */

  export type AggregateChatBot = {
    _count: ChatBotCountAggregateOutputType | null
    _min: ChatBotMinAggregateOutputType | null
    _max: ChatBotMaxAggregateOutputType | null
  }

  export type ChatBotMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type ChatBotMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type ChatBotCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    _all: number
  }


  export type ChatBotMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
  }

  export type ChatBotMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
  }

  export type ChatBotCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    _all?: true
  }

  export type ChatBotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatBot to aggregate.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatBots
    **/
    _count?: true | ChatBotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatBotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatBotMaxAggregateInputType
  }

  export type GetChatBotAggregateType<T extends ChatBotAggregateArgs> = {
        [P in keyof T & keyof AggregateChatBot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatBot[P]>
      : GetScalarType<T[P], AggregateChatBot[P]>
  }




  export type ChatBotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatBotWhereInput
    orderBy?: ChatBotOrderByWithAggregationInput | ChatBotOrderByWithAggregationInput[]
    by: ChatBotScalarFieldEnum[] | ChatBotScalarFieldEnum
    having?: ChatBotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatBotCountAggregateInputType | true
    _min?: ChatBotMinAggregateInputType
    _max?: ChatBotMaxAggregateInputType
  }

  export type ChatBotGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string
    _count: ChatBotCountAggregateOutputType | null
    _min: ChatBotMinAggregateOutputType | null
    _max: ChatBotMaxAggregateOutputType | null
  }

  type GetChatBotGroupByPayload<T extends ChatBotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatBotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatBotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatBotGroupByOutputType[P]>
            : GetScalarType<T[P], ChatBotGroupByOutputType[P]>
        }
      >
    >


  export type ChatBotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    chatrooms?: boolean | ChatBot$chatroomsArgs<ExtArgs>
    _count?: boolean | ChatBotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatBot"]>

  export type ChatBotSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }

  export type ChatBotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatrooms?: boolean | ChatBot$chatroomsArgs<ExtArgs>
    _count?: boolean | ChatBotCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatBotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatBot"
    objects: {
      chatrooms: Prisma.$ChatRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string
    }, ExtArgs["result"]["chatBot"]>
    composites: {}
  }


  type ChatBotGetPayload<S extends boolean | null | undefined | ChatBotDefaultArgs> = $Result.GetResult<Prisma.$ChatBotPayload, S>

  type ChatBotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatBotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatBotCountAggregateInputType | true
    }

  export interface ChatBotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatBot'], meta: { name: 'ChatBot' } }
    /**
     * Find zero or one ChatBot that matches the filter.
     * @param {ChatBotFindUniqueArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatBotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatBotFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatBot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatBotFindUniqueOrThrowArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatBotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatBotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatBot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotFindFirstArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatBotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatBotFindFirstArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatBot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotFindFirstOrThrowArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatBotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatBotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatBots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatBots
     * const chatBots = await prisma.chatBot.findMany()
     * 
     * // Get first 10 ChatBots
     * const chatBots = await prisma.chatBot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatBotWithIdOnly = await prisma.chatBot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatBotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatBotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatBot.
     * @param {ChatBotCreateArgs} args - Arguments to create a ChatBot.
     * @example
     * // Create one ChatBot
     * const ChatBot = await prisma.chatBot.create({
     *   data: {
     *     // ... data to create a ChatBot
     *   }
     * })
     * 
    **/
    create<T extends ChatBotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatBotCreateArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatBots.
     *     @param {ChatBotCreateManyArgs} args - Arguments to create many ChatBots.
     *     @example
     *     // Create many ChatBots
     *     const chatBot = await prisma.chatBot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatBotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatBotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatBot.
     * @param {ChatBotDeleteArgs} args - Arguments to delete one ChatBot.
     * @example
     * // Delete one ChatBot
     * const ChatBot = await prisma.chatBot.delete({
     *   where: {
     *     // ... filter to delete one ChatBot
     *   }
     * })
     * 
    **/
    delete<T extends ChatBotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatBotDeleteArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatBot.
     * @param {ChatBotUpdateArgs} args - Arguments to update one ChatBot.
     * @example
     * // Update one ChatBot
     * const chatBot = await prisma.chatBot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatBotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatBotUpdateArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatBots.
     * @param {ChatBotDeleteManyArgs} args - Arguments to filter ChatBots to delete.
     * @example
     * // Delete a few ChatBots
     * const { count } = await prisma.chatBot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatBotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatBotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatBots
     * const chatBot = await prisma.chatBot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatBotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatBotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatBot.
     * @param {ChatBotUpsertArgs} args - Arguments to update or create a ChatBot.
     * @example
     * // Update or create a ChatBot
     * const chatBot = await prisma.chatBot.upsert({
     *   create: {
     *     // ... data to create a ChatBot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatBot we want to update
     *   }
     * })
    **/
    upsert<T extends ChatBotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatBotUpsertArgs<ExtArgs>>
    ): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ChatBots that matches the filter.
     * @param {ChatBotFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatBot = await prisma.chatBot.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatBotFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatBot.
     * @param {ChatBotAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatBot = await prisma.chatBot.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatBotAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ChatBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotCountArgs} args - Arguments to filter ChatBots to count.
     * @example
     * // Count the number of ChatBots
     * const count = await prisma.chatBot.count({
     *   where: {
     *     // ... the filter for the ChatBots we want to count
     *   }
     * })
    **/
    count<T extends ChatBotCountArgs>(
      args?: Subset<T, ChatBotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatBotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatBotAggregateArgs>(args: Subset<T, ChatBotAggregateArgs>): Prisma.PrismaPromise<GetChatBotAggregateType<T>>

    /**
     * Group by ChatBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatBotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatBotGroupByArgs['orderBy'] }
        : { orderBy?: ChatBotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatBotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatBot model
   */
  readonly fields: ChatBotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatBot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatBotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chatrooms<T extends ChatBot$chatroomsArgs<ExtArgs> = {}>(args?: Subset<T, ChatBot$chatroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatBot model
   */ 
  interface ChatBotFieldRefs {
    readonly id: FieldRef<"ChatBot", 'String'>
    readonly name: FieldRef<"ChatBot", 'String'>
    readonly description: FieldRef<"ChatBot", 'String'>
    readonly image: FieldRef<"ChatBot", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ChatBot findUnique
   */
  export type ChatBotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where: ChatBotWhereUniqueInput
  }


  /**
   * ChatBot findUniqueOrThrow
   */
  export type ChatBotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where: ChatBotWhereUniqueInput
  }


  /**
   * ChatBot findFirst
   */
  export type ChatBotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatBots.
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatBots.
     */
    distinct?: ChatBotScalarFieldEnum | ChatBotScalarFieldEnum[]
  }


  /**
   * ChatBot findFirstOrThrow
   */
  export type ChatBotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatBots.
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatBots.
     */
    distinct?: ChatBotScalarFieldEnum | ChatBotScalarFieldEnum[]
  }


  /**
   * ChatBot findMany
   */
  export type ChatBotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBots to fetch.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatBots.
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    distinct?: ChatBotScalarFieldEnum | ChatBotScalarFieldEnum[]
  }


  /**
   * ChatBot create
   */
  export type ChatBotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatBot.
     */
    data: XOR<ChatBotCreateInput, ChatBotUncheckedCreateInput>
  }


  /**
   * ChatBot createMany
   */
  export type ChatBotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatBots.
     */
    data: ChatBotCreateManyInput | ChatBotCreateManyInput[]
  }


  /**
   * ChatBot update
   */
  export type ChatBotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatBot.
     */
    data: XOR<ChatBotUpdateInput, ChatBotUncheckedUpdateInput>
    /**
     * Choose, which ChatBot to update.
     */
    where: ChatBotWhereUniqueInput
  }


  /**
   * ChatBot updateMany
   */
  export type ChatBotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatBots.
     */
    data: XOR<ChatBotUpdateManyMutationInput, ChatBotUncheckedUpdateManyInput>
    /**
     * Filter which ChatBots to update
     */
    where?: ChatBotWhereInput
  }


  /**
   * ChatBot upsert
   */
  export type ChatBotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatBot to update in case it exists.
     */
    where: ChatBotWhereUniqueInput
    /**
     * In case the ChatBot found by the `where` argument doesn't exist, create a new ChatBot with this data.
     */
    create: XOR<ChatBotCreateInput, ChatBotUncheckedCreateInput>
    /**
     * In case the ChatBot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatBotUpdateInput, ChatBotUncheckedUpdateInput>
  }


  /**
   * ChatBot delete
   */
  export type ChatBotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter which ChatBot to delete.
     */
    where: ChatBotWhereUniqueInput
  }


  /**
   * ChatBot deleteMany
   */
  export type ChatBotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatBots to delete
     */
    where?: ChatBotWhereInput
  }


  /**
   * ChatBot findRaw
   */
  export type ChatBotFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatBot aggregateRaw
   */
  export type ChatBotAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatBot.chatrooms
   */
  export type ChatBot$chatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatBot without action
   */
  export type ChatBotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
  }



  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    chatbotId: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    chatbotId: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    chatbotId: number
    userId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type ChatRoomMinAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    chatbotId: string | null
    userId: string | null
    createAt: Date
    updatedAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatbotId?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    user?: boolean | ChatRoom$userArgs<ExtArgs>
    chatbot?: boolean | ChatRoom$chatbotArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    chatbotId?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    user?: boolean | ChatRoom$userArgs<ExtArgs>
    chatbot?: boolean | ChatRoom$chatbotArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      chatbot: Prisma.$ChatBotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatbotId: string | null
      userId: string | null
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }


  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatRoomFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatRoomFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatRoomFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
    **/
    create<T extends ChatRoomCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatRooms.
     *     @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     *     @example
     *     // Create many ChatRooms
     *     const chatRoom = await prisma.chatRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatRoomCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
    **/
    delete<T extends ChatRoomDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatRoomUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatRoomDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatRoomUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
    **/
    upsert<T extends ChatRoomUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * @param {ChatRoomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatRoom = await prisma.chatRoom.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatRoomFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatRoom.
     * @param {ChatRoomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatRoom = await prisma.chatRoom.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatRoomAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    messages<T extends ChatRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends ChatRoom$userArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    chatbot<T extends ChatRoom$chatbotArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$chatbotArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatRoom model
   */ 
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly chatbotId: FieldRef<"ChatRoom", 'String'>
    readonly userId: FieldRef<"ChatRoom", 'String'>
    readonly createAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }


  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
  }


  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
  }


  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }


  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
  }


  /**
   * ChatRoom findRaw
   */
  export type ChatRoomFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatRoom aggregateRaw
   */
  export type ChatRoomAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatRoom.messages
   */
  export type ChatRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * ChatRoom.user
   */
  export type ChatRoom$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ChatRoom.chatbot
   */
  export type ChatRoom$chatbotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatBotInclude<ExtArgs> | null
    where?: ChatBotWhereInput
  }


  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    role: string | null
    createAt: Date | null
    updatedAt: Date | null
    msg: string | null
    chatroomId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    role: string | null
    createAt: Date | null
    updatedAt: Date | null
    msg: string | null
    chatroomId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    role: number
    createAt: number
    updatedAt: number
    msg: number
    chatroomId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    role?: true
    createAt?: true
    updatedAt?: true
    msg?: true
    chatroomId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    role?: true
    createAt?: true
    updatedAt?: true
    msg?: true
    chatroomId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    role?: true
    createAt?: true
    updatedAt?: true
    msg?: true
    chatroomId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    role: string
    createAt: Date
    updatedAt: Date
    msg: string
    chatroomId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createAt?: boolean
    updatedAt?: boolean
    msg?: boolean
    chatroomId?: boolean
    chatroom?: boolean | Message$chatroomArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    role?: boolean
    createAt?: boolean
    updatedAt?: boolean
    msg?: boolean
    chatroomId?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | Message$chatroomArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chatroom: Prisma.$ChatRoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      createAt: Date
      updatedAt: Date
      msg: string
      chatroomId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MessageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MessageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chatroom<T extends Message$chatroomArgs<ExtArgs> = {}>(args?: Subset<T, Message$chatroomArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'String'>
    readonly createAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly msg: FieldRef<"Message", 'String'>
    readonly chatroomId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Message.chatroom
   */
  export type Message$chatroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    provider: 'provider'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatBotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type ChatBotScalarFieldEnum = (typeof ChatBotScalarFieldEnum)[keyof typeof ChatBotScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    chatbotId: 'chatbotId',
    userId: 'userId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    role: 'role',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    msg: 'msg',
    chatroomId: 'chatroomId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    chatrooms?: ChatRoomListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    chatrooms?: ChatRoomOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_provider?: UserEmailProviderCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    chatrooms?: ChatRoomListRelationFilter
  }, "id" | "email_provider">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringWithAggregatesFilter<"User"> | string
  }

  export type ChatBotWhereInput = {
    AND?: ChatBotWhereInput | ChatBotWhereInput[]
    OR?: ChatBotWhereInput[]
    NOT?: ChatBotWhereInput | ChatBotWhereInput[]
    id?: StringFilter<"ChatBot"> | string
    name?: StringFilter<"ChatBot"> | string
    description?: StringFilter<"ChatBot"> | string
    image?: StringFilter<"ChatBot"> | string
    chatrooms?: ChatRoomListRelationFilter
  }

  export type ChatBotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    chatrooms?: ChatRoomOrderByRelationAggregateInput
  }

  export type ChatBotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatBotWhereInput | ChatBotWhereInput[]
    OR?: ChatBotWhereInput[]
    NOT?: ChatBotWhereInput | ChatBotWhereInput[]
    name?: StringFilter<"ChatBot"> | string
    description?: StringFilter<"ChatBot"> | string
    image?: StringFilter<"ChatBot"> | string
    chatrooms?: ChatRoomListRelationFilter
  }, "id">

  export type ChatBotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    _count?: ChatBotCountOrderByAggregateInput
    _max?: ChatBotMaxOrderByAggregateInput
    _min?: ChatBotMinOrderByAggregateInput
  }

  export type ChatBotScalarWhereWithAggregatesInput = {
    AND?: ChatBotScalarWhereWithAggregatesInput | ChatBotScalarWhereWithAggregatesInput[]
    OR?: ChatBotScalarWhereWithAggregatesInput[]
    NOT?: ChatBotScalarWhereWithAggregatesInput | ChatBotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatBot"> | string
    name?: StringWithAggregatesFilter<"ChatBot"> | string
    description?: StringWithAggregatesFilter<"ChatBot"> | string
    image?: StringWithAggregatesFilter<"ChatBot"> | string
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    chatbotId?: StringNullableFilter<"ChatRoom"> | string | null
    userId?: StringNullableFilter<"ChatRoom"> | string | null
    createAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    messages?: MessageListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    chatbot?: XOR<ChatBotNullableRelationFilter, ChatBotWhereInput> | null
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    chatbot?: ChatBotOrderByWithRelationInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    chatbotId?: StringNullableFilter<"ChatRoom"> | string | null
    userId?: StringNullableFilter<"ChatRoom"> | string | null
    createAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    messages?: MessageListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    chatbot?: XOR<ChatBotNullableRelationFilter, ChatBotWhereInput> | null
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    chatbotId?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    userId?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    createAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    msg?: StringFilter<"Message"> | string
    chatroomId?: StringNullableFilter<"Message"> | string | null
    chatroom?: XOR<ChatRoomNullableRelationFilter, ChatRoomWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    msg?: SortOrder
    chatroomId?: SortOrder
    chatroom?: ChatRoomOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    role?: StringFilter<"Message"> | string
    createAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    msg?: StringFilter<"Message"> | string
    chatroomId?: StringNullableFilter<"Message"> | string | null
    chatroom?: XOR<ChatRoomNullableRelationFilter, ChatRoomWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    msg?: SortOrder
    chatroomId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    role?: StringWithAggregatesFilter<"Message"> | string
    createAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    msg?: StringWithAggregatesFilter<"Message"> | string
    chatroomId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider: string
    chatrooms?: ChatRoomCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider: string
    chatrooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatRoomUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type ChatBotCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    chatrooms?: ChatRoomCreateNestedManyWithoutChatbotInput
  }

  export type ChatBotUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    chatrooms?: ChatRoomUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatBotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatRoomUpdateManyWithoutChatbotNestedInput
  }

  export type ChatBotUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatRoomUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatBotCreateManyInput = {
    id?: string
    name: string
    description: string
    image: string
  }

  export type ChatBotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ChatBotUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRoomCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatroomInput
    user?: UserCreateNestedOneWithoutChatroomsInput
    chatbot?: ChatBotCreateNestedOneWithoutChatroomsInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: string
    chatbotId?: string | null
    userId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatRoomUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatroomNestedInput
    user?: UserUpdateOneWithoutChatroomsNestedInput
    chatbot?: ChatBotUpdateOneWithoutChatroomsNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    chatbotId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: string
    chatbotId?: string | null
    userId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    chatbotId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    role: string
    createAt?: Date | string
    updatedAt?: Date | string
    msg: string
    chatroom?: ChatRoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    role: string
    createAt?: Date | string
    updatedAt?: Date | string
    msg: string
    chatroomId?: string | null
  }

  export type MessageUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatRoomUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
    chatroomId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    role: string
    createAt?: Date | string
    updatedAt?: Date | string
    msg: string
    chatroomId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
    chatroomId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEmailProviderCompoundUniqueInput = {
    email: string
    provider: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ChatBotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type ChatBotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type ChatBotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChatBotNullableRelationFilter = {
    is?: ChatBotWhereInput | null
    isNot?: ChatBotWhereInput | null
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatRoomNullableRelationFilter = {
    is?: ChatRoomWhereInput | null
    isNot?: ChatRoomWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    msg?: SortOrder
    chatroomId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    msg?: SortOrder
    chatroomId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    msg?: SortOrder
    chatroomId?: SortOrder
  }

  export type ChatRoomCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ChatRoomUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomCreateNestedManyWithoutChatbotInput = {
    create?: XOR<ChatRoomCreateWithoutChatbotInput, ChatRoomUncheckedCreateWithoutChatbotInput> | ChatRoomCreateWithoutChatbotInput[] | ChatRoomUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatbotInput | ChatRoomCreateOrConnectWithoutChatbotInput[]
    createMany?: ChatRoomCreateManyChatbotInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutChatbotInput = {
    create?: XOR<ChatRoomCreateWithoutChatbotInput, ChatRoomUncheckedCreateWithoutChatbotInput> | ChatRoomCreateWithoutChatbotInput[] | ChatRoomUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatbotInput | ChatRoomCreateOrConnectWithoutChatbotInput[]
    createMany?: ChatRoomCreateManyChatbotInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<ChatRoomCreateWithoutChatbotInput, ChatRoomUncheckedCreateWithoutChatbotInput> | ChatRoomCreateWithoutChatbotInput[] | ChatRoomUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatbotInput | ChatRoomCreateOrConnectWithoutChatbotInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutChatbotInput | ChatRoomUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: ChatRoomCreateManyChatbotInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutChatbotInput | ChatRoomUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutChatbotInput | ChatRoomUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<ChatRoomCreateWithoutChatbotInput, ChatRoomUncheckedCreateWithoutChatbotInput> | ChatRoomCreateWithoutChatbotInput[] | ChatRoomUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatbotInput | ChatRoomCreateOrConnectWithoutChatbotInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutChatbotInput | ChatRoomUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: ChatRoomCreateManyChatbotInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutChatbotInput | ChatRoomUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutChatbotInput | ChatRoomUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutChatroomInput = {
    create?: XOR<MessageCreateWithoutChatroomInput, MessageUncheckedCreateWithoutChatroomInput> | MessageCreateWithoutChatroomInput[] | MessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatroomInput | MessageCreateOrConnectWithoutChatroomInput[]
    createMany?: MessageCreateManyChatroomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutChatroomsInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatBotCreateNestedOneWithoutChatroomsInput = {
    create?: XOR<ChatBotCreateWithoutChatroomsInput, ChatBotUncheckedCreateWithoutChatroomsInput>
    connectOrCreate?: ChatBotCreateOrConnectWithoutChatroomsInput
    connect?: ChatBotWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutChatroomInput = {
    create?: XOR<MessageCreateWithoutChatroomInput, MessageUncheckedCreateWithoutChatroomInput> | MessageCreateWithoutChatroomInput[] | MessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatroomInput | MessageCreateOrConnectWithoutChatroomInput[]
    createMany?: MessageCreateManyChatroomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<MessageCreateWithoutChatroomInput, MessageUncheckedCreateWithoutChatroomInput> | MessageCreateWithoutChatroomInput[] | MessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatroomInput | MessageCreateOrConnectWithoutChatroomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatroomInput | MessageUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: MessageCreateManyChatroomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatroomInput | MessageUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatroomInput | MessageUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateOneWithoutChatroomsNestedInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput
    upsert?: UserUpsertWithoutChatroomsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatroomsInput, UserUpdateWithoutChatroomsInput>, UserUncheckedUpdateWithoutChatroomsInput>
  }

  export type ChatBotUpdateOneWithoutChatroomsNestedInput = {
    create?: XOR<ChatBotCreateWithoutChatroomsInput, ChatBotUncheckedCreateWithoutChatroomsInput>
    connectOrCreate?: ChatBotCreateOrConnectWithoutChatroomsInput
    upsert?: ChatBotUpsertWithoutChatroomsInput
    disconnect?: boolean
    delete?: ChatBotWhereInput | boolean
    connect?: ChatBotWhereUniqueInput
    update?: XOR<XOR<ChatBotUpdateToOneWithWhereWithoutChatroomsInput, ChatBotUpdateWithoutChatroomsInput>, ChatBotUncheckedUpdateWithoutChatroomsInput>
  }

  export type MessageUncheckedUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<MessageCreateWithoutChatroomInput, MessageUncheckedCreateWithoutChatroomInput> | MessageCreateWithoutChatroomInput[] | MessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatroomInput | MessageCreateOrConnectWithoutChatroomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatroomInput | MessageUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: MessageCreateManyChatroomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatroomInput | MessageUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatroomInput | MessageUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type ChatRoomUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    upsert?: ChatRoomUpsertWithoutMessagesInput
    disconnect?: boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessagesInput, ChatRoomUpdateWithoutMessagesInput>, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatRoomCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatroomInput
    chatbot?: ChatBotCreateNestedOneWithoutChatroomsInput
  }

  export type ChatRoomUncheckedCreateWithoutUserInput = {
    id?: string
    chatbotId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatRoomCreateOrConnectWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomCreateManyUserInputEnvelope = {
    data: ChatRoomCreateManyUserInput | ChatRoomCreateManyUserInput[]
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    chatbotId?: StringNullableFilter<"ChatRoom"> | string | null
    userId?: StringNullableFilter<"ChatRoom"> | string | null
    createAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
  }

  export type ChatRoomCreateWithoutChatbotInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatroomInput
    user?: UserCreateNestedOneWithoutChatroomsInput
  }

  export type ChatRoomUncheckedCreateWithoutChatbotInput = {
    id?: string
    userId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatRoomCreateOrConnectWithoutChatbotInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutChatbotInput, ChatRoomUncheckedCreateWithoutChatbotInput>
  }

  export type ChatRoomCreateManyChatbotInputEnvelope = {
    data: ChatRoomCreateManyChatbotInput | ChatRoomCreateManyChatbotInput[]
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutChatbotInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutChatbotInput, ChatRoomUncheckedUpdateWithoutChatbotInput>
    create: XOR<ChatRoomCreateWithoutChatbotInput, ChatRoomUncheckedCreateWithoutChatbotInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutChatbotInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutChatbotInput, ChatRoomUncheckedUpdateWithoutChatbotInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutChatbotInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutChatbotInput>
  }

  export type MessageCreateWithoutChatroomInput = {
    id?: string
    role: string
    createAt?: Date | string
    updatedAt?: Date | string
    msg: string
  }

  export type MessageUncheckedCreateWithoutChatroomInput = {
    id?: string
    role: string
    createAt?: Date | string
    updatedAt?: Date | string
    msg: string
  }

  export type MessageCreateOrConnectWithoutChatroomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatroomInput, MessageUncheckedCreateWithoutChatroomInput>
  }

  export type MessageCreateManyChatroomInputEnvelope = {
    data: MessageCreateManyChatroomInput | MessageCreateManyChatroomInput[]
  }

  export type UserCreateWithoutChatroomsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider: string
  }

  export type UserUncheckedCreateWithoutChatroomsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider: string
  }

  export type UserCreateOrConnectWithoutChatroomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
  }

  export type ChatBotCreateWithoutChatroomsInput = {
    id?: string
    name: string
    description: string
    image: string
  }

  export type ChatBotUncheckedCreateWithoutChatroomsInput = {
    id?: string
    name: string
    description: string
    image: string
  }

  export type ChatBotCreateOrConnectWithoutChatroomsInput = {
    where: ChatBotWhereUniqueInput
    create: XOR<ChatBotCreateWithoutChatroomsInput, ChatBotUncheckedCreateWithoutChatroomsInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatroomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatroomInput, MessageUncheckedUpdateWithoutChatroomInput>
    create: XOR<MessageCreateWithoutChatroomInput, MessageUncheckedCreateWithoutChatroomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatroomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatroomInput, MessageUncheckedUpdateWithoutChatroomInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatroomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatroomInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    createAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    msg?: StringFilter<"Message"> | string
    chatroomId?: StringNullableFilter<"Message"> | string | null
  }

  export type UserUpsertWithoutChatroomsInput = {
    update: XOR<UserUpdateWithoutChatroomsInput, UserUncheckedUpdateWithoutChatroomsInput>
    create: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatroomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatroomsInput, UserUncheckedUpdateWithoutChatroomsInput>
  }

  export type UserUpdateWithoutChatroomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutChatroomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type ChatBotUpsertWithoutChatroomsInput = {
    update: XOR<ChatBotUpdateWithoutChatroomsInput, ChatBotUncheckedUpdateWithoutChatroomsInput>
    create: XOR<ChatBotCreateWithoutChatroomsInput, ChatBotUncheckedCreateWithoutChatroomsInput>
    where?: ChatBotWhereInput
  }

  export type ChatBotUpdateToOneWithWhereWithoutChatroomsInput = {
    where?: ChatBotWhereInput
    data: XOR<ChatBotUpdateWithoutChatroomsInput, ChatBotUncheckedUpdateWithoutChatroomsInput>
  }

  export type ChatBotUpdateWithoutChatroomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ChatBotUncheckedUpdateWithoutChatroomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRoomCreateWithoutMessagesInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutChatroomsInput
    chatbot?: ChatBotCreateNestedOneWithoutChatroomsInput
  }

  export type ChatRoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    chatbotId?: string | null
    userId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomCreateOrConnectWithoutMessagesInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
  }

  export type ChatRoomUpsertWithoutMessagesInput = {
    update: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateWithoutMessagesInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutChatroomsNestedInput
    chatbot?: ChatBotUpdateOneWithoutChatroomsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessagesInput = {
    chatbotId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateManyUserInput = {
    id?: string
    chatbotId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomUpdateWithoutUserInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatroomNestedInput
    chatbot?: ChatBotUpdateOneWithoutChatroomsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUserInput = {
    chatbotId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserInput = {
    chatbotId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateManyChatbotInput = {
    id?: string
    userId?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomUpdateWithoutChatbotInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatroomNestedInput
    user?: UserUpdateOneWithoutChatroomsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutChatbotInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutChatbotInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatroomInput = {
    id?: string
    role: string
    createAt?: Date | string
    updatedAt?: Date | string
    msg: string
  }

  export type MessageUpdateWithoutChatroomInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateWithoutChatroomInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutChatroomInput = {
    role?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatBotCountOutputTypeDefaultArgs instead
     */
    export type ChatBotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatBotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomCountOutputTypeDefaultArgs instead
     */
    export type ChatRoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatBotDefaultArgs instead
     */
    export type ChatBotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatBotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomDefaultArgs instead
     */
    export type ChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}