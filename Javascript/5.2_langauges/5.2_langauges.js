function lang(language){
    switch (language) {
        case 'Mandarin':
        case 'mandarin':    
            console.log('MOST number of native speakers!');
            break;
        case 'Spanish':
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'English':
        case 'english':
            console.log('3rd place');
            break;
        case 'Hindi':
        case 'hindi':
            console.log('Number 4');
            break;
        case 'Arabic':
        case 'arabic':
            console.log('5th most spoken language');
            break;
        default:
            console.log('Not in the top 5');
    }
}
lang('Arabic'); // Output => 5th most spoken language
lang('Spanish'); // Output => 2nd place in number of native speakers
lang('Mexico'); // Output => Not in the top 5