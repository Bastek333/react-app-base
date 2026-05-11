function unwrapData<T extends { data: any }>(
	response: T,
): T extends { data: infer U } ? U : never {
	return response?.data;
}

const user = unwrapData({
	data: { id: "1", username: "Alice" },
	test: "test",
});

console.log(user);

type FunctionType<T> = T extends (...arg: any[]) => infer R ? R : never;

type Example = (x: number, y: string) => boolean;

type ReturnFunctionType = FunctionType<Example>;

function exampleFunction<T>(
	x: T extends infer U ? U : never,
	y: T extends infer Y ? Y : never,
): ReturnFunctionType {
	if (typeof x === "number" && typeof y === "string") {
		return true;
	}
	return false;
}

console.log(exampleFunction(1, "test"));
console.log(exampleFunction("test", 1));

interface Test {
	id: number;
	name: string;
}

type PickType = Pick<Test, "id">;
type OmitType = Omit<Test, "name">;

type A = string;
type B = number;

interface IA {
	a: string;
}
interface IB {
	b: number;
}

type IntersectionType = IA & IB;
type UnionType = A | B;

interface IC extends IA {
	c: boolean;
}

const intersection: IntersectionType = { a: "test", b: 123 };
const union: UnionType = "test";
const intersectionInterface: IC = { a: "test", c: true };
