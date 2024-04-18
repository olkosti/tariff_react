import TariffCard from "../TariffCard/TariffCard";
import TariffContainerStyles from "../TariffContainer/TariffContainer.module.css";

export default function TariffContainer() {
    return (
        <div className={TariffContainerStyles.container}>
            <TariffCard
                title="300"
                price="300"
                speed="10" 
            />
            <TariffCard
                title="450"
                price="450"
                speed="50" 
            />
            <TariffCard
                title="550"
                price="550"
                speed="100" 
            />
            <TariffCard
                title="1000"
                price="1000"
                speed="200" 
            />
        </div>
    )
}