function unwrapData<T extends {data: any}>(response: T): T extends { data: infer U } ? U : never {
  return response?.data;
}


const user = unwrapData({
  data: { id: "1", username: "Alice" },
  test: "test"
});


console.log(user);


type FunctionType<T> = T extends (...arg: any[]) => infer R ? R : never;

type Example = (x: number, y: string) => boolean;

type ReturnFunctionType = FunctionType<Example>;

function exampleFunction<T>(x: T extends infer U ? U : never, y: T extends infer Y ? Y : never): ReturnFunctionType { if (typeof x === "number" && typeof y === "string") { return true; } return false; }

console.log(exampleFunction(1, "test"));
console.log(exampleFunction("test", 1));