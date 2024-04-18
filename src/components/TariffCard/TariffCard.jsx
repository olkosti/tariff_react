

export default function TariffCard(props) {
    const {title, price, speed} = props; 
    
    return ( 
        <div className="tariff__card">
            <div className="tariff__title">Безлимитный {title}</div>
            <div className="tariff__price">{price} руб/мес</div>
            <div className="tariff__speed">до {speed} Мбит/сек</div>
            <div className="tariff__explanation">Объем включенного трафика не ограничен</div>
        </div>
    )
}