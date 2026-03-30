import biomeLogo from "../../assets/biome.svg";

const Biome = () => {
	return (
		<>
			<a href="https://biome.dev" target="_blank" rel="noopener">
				<img src={biomeLogo} className="logo biome" alt="Biome logo" />
			</a>
		</>
	);
};

export default Biome;
