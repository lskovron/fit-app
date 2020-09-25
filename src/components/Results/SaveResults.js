import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import { postsUrl } from 'Config';

const SaveResults = ({history}) => {

    function toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }
    useEffect(() => {
        window.location = `${postsUrl}/results?${toQueryString(args)}`
    }, [])

    let args = {
        't-overall-score' : 5,
        't-cognitive-score' : 5,
        't-emotional-score' : 6,
        't-physical-score' : 7,
        't-financial-score' : 8,
        't-spiritual-score' : 9,
    
        'c-learning-strategies' : 10,
        'c-intellectual-engagement' : 11,
        'c-effort-control' : 12,
        'c-attention' : 13,
        'c-autonomy' : 14,
        'c-social-cognition' : 15,
    
        'e-current-emotional-health' : 16,
        'e-self-compassion' : 17,
        'e-emotional-self-awareness' : 18,
        'e-stress-resilience' : 19,
        'e-gratitude-positivity' : 20,
        'e-social-support' : 1,
    
        'p-bmi' : 2,
        'p-nutritional-implementation' : 3,
        'p-nutritional-knowledge' : 4,
        'p-activity-level' : 5,
        'p-self-image' : 6,
        'p-sleep-habits' : 7,
        'p-social-activity' : 8,
    
        'f-long-term' : 9,
        'f-short-term' : 10,
        'f-sadness' : 11,
        'f-happiness' : 12,
    
        's-spiritual-1' : 9,
        's-spiritual-2' : 10,
        's-spiritual-3' : 11,
        's-spiritual-4' : 12,
    }

    console.log(toQueryString(args));

    // var data = {
    //     action: 'submit_results',
    //     args: args,
    //     submit_results_nonce: SubmitResultsAjax.submit_results_nonce
    // };
    
    // // $loader.show();
    // var jqxhr = jQuery.post(SubmitResultsAjax.ajaxurl, data);
    // jqxhr.done(function(response) {
    //     if( response ) {
    //         console.log(response);
    //     }
    //     else {
    //         // showErrorBlock();
    //     }
    //     }).fail(function() {
    //         // showErrorBlock();
    //     }).always(function() {
    //         // $loader.hide();
    //     });
    // }

    return (
        <button>SUBMIT</button>
    )
}

export default withRouter(SaveResults);