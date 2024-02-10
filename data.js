
//----- SUBJECTS -----//

//#region SEMESTER 1
/*
// Energetsko strojništvo
const EMEPS = {
    name: 'Eksperimentalno modeliranje v EPS',
    abbreviation: 'EMEPS',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-67A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-67A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-67A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-67A'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'SI-67A'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-67A'
        }
    },
    bgColor: '#6aff00'
};
const NPZ = {
    name: 'Napredni procesi zgorevanja',
    abbreviation: 'NPZ',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'DS-P1'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SK-15'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SK-15'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'SK-15'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SK-15'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SK-15'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SK-15'
        }
    },
    bgColor: '#00ffd0'
};
const ES = {
    name: 'Energetski sistemi',
    abbreviation: 'ES',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'IV/3B'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-60A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-60A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-60A'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-60A'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-60A'
        }
    },
    bgColor: '#00ffd0'
};
// Procesno strojništvo
const TP = {
    name: 'Transportni pojavi',
    abbreviation: 'TP',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/2'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-1A-I'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-1A-I'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-1A-I'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'K-1A-I'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'K-1A-I'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-1A-I'
        }
    },
    bgColor: '#06f'
};
const TZ = {
    name: 'Termodinamika zmesi',
    abbreviation: 'TZ',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-9A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-9A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-9A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-9A'
        }
    },
    bgColor: 'rgb(255,0,255)'
};
const ST = {
    name: 'Solarne tehnologije',
    abbreviation: 'ST',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'III/4'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'DS-N3'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'DS-N3'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'DS-N3'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'DS-N3'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'DS-N3'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'DS-N3'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'DS-N3'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'friday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'DS-N3'
        },
    },
    bgColor: '#fe0'
};
// Konstruiranje
const KT = {
    name: 'Konstrukcijske tehnike',
    abbreviation: 'KT',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/6'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/6'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/6'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/6'
        }
    },
    bgColor: '#00ffd0'
};
const IPK = {
    name: 'Inženiring površin in kontaktov',
    abbreviation: 'IPK',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TiNT 1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TiNT 1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'TiNT 1'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TiNT 1'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'TiNT 1'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'TiNT 1'
        }
    },
    bgColor: '#00ffd0'
};
const KNS = {
    name: 'Konstruiranje naprednih sistemov',
    abbreviation: 'KNS',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'II/5'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'II/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'IV/6'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'IV/6'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'IV/6'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'IV/6'
        }
    },
    bgColor: '#fe0'
};
// Mehanika
const VT = {
    name: 'Višja trdnost',
    abbreviation: 'VT',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'II/5'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/2'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'I/7'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'I/7'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'I/7'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/7'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'I/7'
        }
    },
    bgColor: '#00b2ff'
};
const VD = {
    name: 'Višja dinamika',
    abbreviation: 'VD',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'IV/3A'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'P-17C'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'P-17C'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'P-17C'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'P-17C'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'P-17C'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'P-17C'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'P-17C'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'P-17C'
        },
        S9: {
            canShow: true,
            type: 'VL',
            group: 'S9',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'P-17C'
        }
    },
    bgColor: '#00ffd0'
};
const MKE = {
    name: 'Mehanika konstrukcijskih elementov',
    abbreviation: 'MKE',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/4'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'I/4'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/4'
        }
    },
    bgColor: '#00ffd0'
};
// Proizvodno strojništvo
const MT = {
    name: 'Mikroizdelovalne tehnologije',
    abbreviation: 'MT',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/3A'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-39'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-39'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-39'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-39'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-39'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-39'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-39'
        },
    },
    bgColor: '#00b2ff'
};
const NOP = {
    name: 'Napredni odrezovalni procesi',
    abbreviation: 'NOP',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'II/5'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-DL-1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-DL-1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-DL-1'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-DL-1'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-DL-1'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-DL-1'
        }
    },
    bgColor: '#00ffd0'
};
const TO = {
    name: 'Toplotna obdelava',
    abbreviation: 'TO',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SII-88'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-88'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-88'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-88'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-88'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SII-88'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SII-88'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'SII-88'
        }
    },
    bgColor: '#00ffd0'
};
// Mehatronika in laserska tehnika
const MK = {
    name: 'Mikroprocesorska krmilja',
    abbreviation: 'MK',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-46A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-46A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-46A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-46A'
        }
    },
    bgColor: '#d0ff00'
};
const RS = {
    name: 'Robotski sistemi',
    abbreviation: 'RS',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-45A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-45A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-45A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-45A'
        }
    },
    bgColor: '#ff9d00'
};
const PAP = {
    name: 'Programski algoritmi in protokoli',
    abbreviation: 'PAP',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-82'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-82'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-82'
        }
    },
    bgColor: '#6aff00'
};
*/
//#endregion

//#region SEMESTER 2

// Energetsko strojništvo
const KNEM = {
    name: 'Kemični nosilci energije',
    abbreviation: 'KNEM',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'IV/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-60A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-60A'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-60A'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-60A'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-60A'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-60A'
        },
        
    },
    bgColor: '#fe0'
};
const PTMM = {
    name: 'Procesi v toplotnih motorjih',
    abbreviation: 'PTMM',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'II/3A'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SK-15'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SK-15'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SK-15'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SK-15'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SK-15'
        },
        
    },
    bgColor: '#fe0'
};
const TRSM = {
    name: 'Turbinski stroji',
    abbreviation: 'TRSM',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'IV/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-67'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-67'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-67'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-67'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-67'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-67'
        },
        
    },
    bgColor: '#fe0'
};
// Procesno strojništvo
const HTTM = {
    name: 'Hladilna tehnika in toplotne črpalke',
    abbreviation: 'HTTM',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/2'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/4'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-1A-I'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-1A-I'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-1A-I'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-1A-I'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-1A-I'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-1A-I'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'K-1A-I'
        },
        
    },
    bgColor: '#fe0'
};
const KOOM = {
    name: 'Klimatizacija, ogrevanje, ohlajevanje, prezračevanje',
    abbreviation: 'KOOM',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/2'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'IV/2'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'IV/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-9'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-9'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-9'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'K-9'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-9'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-9'
        },
        
    },
    bgColor: '#fe0'
};
const RDTM = {
    name: 'Računalniška dinamika tekočin',
    abbreviation: 'RDTM',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'III/1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/1'
        },
        
    },
    bgColor: '#fe0'
};
// Konstruiranje
const OBTM = {
    name: 'Obratovalna trdnost',
    abbreviation: 'OBTM',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'IV/6'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'IV/6'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'IV/6'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'IV/6'
        },
        
    },
    bgColor: '#fe0'
};
const NNTM = {
    name: 'Nanotehnologije',
    abbreviation: 'NNTM',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TINT 1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'TINT 1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'TINT 1'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TINT 1'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'TINT 1'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TINT 1'
        },
        
    },
    bgColor: '#fe0'
};
const GSPM = {
    name: 'Geometrijske specifikacije',
    abbreviation: 'GSPM',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'V/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/5'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/5'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/5'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/5'
        },
        
    },
    bgColor: '#fe0'
};
// Mehanika
const DSKM = {
    name: 'Dinamika strojev in konstrukcij',
    abbreviation: 'DSKM',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/2'
    },
    exercises: {
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'II/1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'II/1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/4'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'I/4'
        },
        
    },
    bgColor: '#fe0'
};
const AKMM = {
    name: 'Analiza konstrukcij z MKE',
    abbreviation: 'AKMM',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'II/1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'II/1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'II/1'
        },
        
    },
    bgColor: '#fe0'
};
const PRSM = {
    name: 'Procesiranje signalov',
    abbreviation: 'PRSM',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/2'
    },
    exercises: {
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'II/1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'II/1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'II/1'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'II/1'
        },
        
    },
    bgColor: '#fe0'
};
// Proizvodno strojništvo
const NPPM = {
    name: 'Napredni preoblikovalni procesi',
    abbreviation: 'NPPM',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-70'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-70'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-70'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-70'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-70'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-70'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-70'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'friday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-70'
        },
        
    },
    bgColor: '#fe0'
};
const POPM = {
    name: 'Planiranje in organizacija proizvodnje',
    abbreviation: 'POPM',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-82'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-82'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-82'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-82'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SII-82'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '7:30',
            timeEnd: '9:30',
            classroom: 'SII-82'
        },
        
    },
    bgColor: '#fe0'
};
const MSSM = {
    name: 'Montažni in strežni sistemi',
    abbreviation: 'MSSM',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'II/5'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/4'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'V/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SII-78'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-78'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-78'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-78'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-78'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SII-78'
        },
        
    },
    bgColor: '#fe0'
};
// Mehatronika in laserska tehnika
const LSSM = {
    name: 'Laserski sistemi',
    abbreviation: 'LSSM',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'K-15A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-15A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-15A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'K-15A'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-15A'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-15A'
        },
        
    },
    bgColor: '#fe0'
};
const FLIM = {
    name: 'Fotonika in laserski izvori',
    abbreviation: 'FLIM',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'VP-19'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'VP-19'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'VP-19'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'VP-19'
        },
        
    },
    bgColor: '#fe0'
};
const DKSM = {
    name: 'Diskretni krmilni sistemi',
    abbreviation: 'DKSM',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-45A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-45A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-45A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-45A'
        },
        
    },
    bgColor: '#fe0'
};


//#endregion


