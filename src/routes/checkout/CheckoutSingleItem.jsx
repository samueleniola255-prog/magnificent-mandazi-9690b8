import { useEffect, useState } from "react";
import { getPriceForCurrency } from "../../helpers/CurrencyHelper.js";

export const CheckoutSingleItem = ({ singleProduct, selectedCurrency }) => {
    const [priceAmount, setPriceAmount] = useState("");
    useEffect(() => {
        const targetCurrency = getPriceForCurrency(singleProduct.prices, selectedCurrency);
        setPriceAmount(targetCurrency?.amount ? targetCurrency.amount.toFixed(2) : "0.00");
    }, [selectedCurrency, singleProduct.prices]);

    return (
        <li key={singleProduct.id}>{singleProduct.name} - {selectedCurrency}{priceAmount}, {singleProduct.quantity}</li>
    )
}