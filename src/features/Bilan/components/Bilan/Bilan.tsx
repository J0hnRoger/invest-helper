import * as React from 'react';

class Bilan extends React.Component {
  render() {
   return (
    <div className="bilan">
        <div className="bilan__content">
            <div className="bilan__column">
                <div className="bilan__title">
                    Incomes
                </div>

                <div className="bilan__column-content">
                    <div className="bilan__row">
                        <div className="bilan__name">Salaire</div>
                        <div className="bilan__value">1100</div>
                    </div>
                    <div className="bilan__row">
                        <div className="bilan__name">Loyer T2</div>
                        <div className="bilan__value">400</div>
                    </div>
                    <div className="bilan__row">
                        <div className="bilan__name">Actions Danone</div>
                        <div className="bilan__value">10</div>
                    </div>
                </div>
                <div className="bilan__total">
                    <b>1510</b>€
                </div>
            </div>
            <div className="bilan__separator" />
            <div className="bilan__column">
                <div className="bilan__title">
                    Expenses
                </div>
                <div className="bilan__column-content">
                    <div className="bilan__row">
                        <div className="bilan__name">Frais de vie</div>
                        <div className="bilan__value">500</div>
                    </div>
                    <div className="bilan__row">
                        <div className="bilan__name">Prêt Immo</div>
                        <div className="bilan__value">500</div>
                    </div>
                    <div className="bilan__row">
                        <div className="bilan__name">Prêt T2</div>
                        <div className="bilan__value">300</div>
                    </div>
                </div>
                <div className="bilan__total">
                    <b>1300</b>€
                </div>
            </div>
        </div>
    </div>
   );
 }
}

export default Bilan;