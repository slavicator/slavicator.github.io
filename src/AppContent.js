import React from 'react';
import AppPlan from './AppPlan';
import AppCurrency from './AppCurrency';
import AppWeather from './AppWeather';

function AppContent () {
    return (
        <div className="w3-row">
            <AppCurrency />
            <AppPlan />
            <AppWeather />            
        </div>
    )
}

export default AppContent;