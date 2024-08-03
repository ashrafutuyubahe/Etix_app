const cars = [

    {
      id: 1,
      start: 'Kigali',
      end: 'Rwamagana',
      time: '2024-7-20 16:30',
      cost: 5000,
      sitting:'20/24',
    },
    {
      id: 2,
      start: 'Kigali',
      end: 'Musanze',
      time: '2024-7-20 16:30',
      cost: 3000,
      sitting:'17/24',
    },
    {
      id: 3,
      start: 'Rwamagana',
      end: 'Gakenke',
      time: '2024-7-20 16:30',
      cost: 4000,
      sitting:'14/24',
    },
    {
      id: 4,
      start: 'Musanze',
      end: 'Ruhengeri',
      time: '2024-7-20 16:30',
      cost: 2500,
      sitting:'11/24',
    },
    {
      id: 5,
      start: 'Gakenke',
      end: 'Gatagara',
      time: '2024-7-20 16:30',
      cost: 3500,
      sitting:'8/24',
    },
    {
      id: 6,
      start: 'Ruhengeri',
      end: 'Kibuye',
      time: '2024-7-20 16:30',
      cost: 4500,
      sitting:'5/24',
    },
 
    {
      id: 8,
      start: 'Huye',
      end: 'Nyagatare',
      time: '2024-7-20 16:30',
      cost: 6500,
      sitting:'2/24',
    },
    {
      id: 9,
      start: 'Nyagatare',
      end: 'Gatsineza',
      time: '2024-7-20 16:30',
      cost: 7500,
    },
    {
      id:10,
      start:'Kigali',
      end:'Kampla',
      time:'2024-7-20 16:30',
      cost:9000,
      sitting:'20/24',
    },
    {
      id:11,
      start:'Kigali',
      end:'Kanyaru',
      time:'2024-7-20 16:30',
      cost:3460,
      sitting:'15/24',
    },
    {
      id:12,
      start:'Kigali',
      end:'Nyamagabe',
      time:'2024-7-20 16:30',
      cost:4442,
      sitting:'10/24',
    },
    {
      id:13,
      start:'Kigali',
      end:'Nyanza',
      time:'2024-7-20 16:30',
      cost:2705,
      sitting:'20/24',

    },
    {
      id:14,
      start:'Kigali',
      end:'Ruhango',
      time:'2024-7-20 16:30',
      cost:2178,
    },
    {
      id:15,
      start:'Kigali',
      end:'Muhanga',
      time:'2024-7-20 16:30',
      cost:1506,
    },
    {
      id:16,
      start:'Kigali',
      end:'Kabare',
      time:'2024-7-20 16:30',
      cost:1500
    },
    {
      id:17,
      start:'Kigali',
      end:'Mbarara',
      time:'2024-7-20 16:30',
      cost:3000
    },
    {
      id:18,
      start:'Kigali',
      end:'Kanyaru',
      time:'2024-7-20 16:30',
      cost:4000
    },
    //Southen province
    {
      id:19,
      start:'Muhanga',
      end:'Kigali',
      time:'2024-7-20 16:30',
      cost:1506,
    },
    {
      id:20,
      start:'Muhanga',
      end:'Ruhango',
      time:'2024-7-20 16:30',
      cost:804
    },
    {
      id:21,
      start:'Muhanga',
      end:'Nyanza',
      time:'2024-7-20 16:30',
      cost:1199
    },
    {
      id:22,
      start:'Muhanga',
      end:'Huye',
      time:'2024-7-20 16:30',
      cost:2281
    },
    {
      id:23,
      start:'Muhanga',
      end:'Nyamagabe',
      time:'2024-7-20 16:30',
      cost:2400
    },
    {
      id:24,
      start:'Ruhango',
      end:'Kigali',
      time:'2024-7-20 16:30',
      cost:2178,
    },
    {
      id:25,
      start:'Ruhango',
      end:'Muhanga',
      time:'2024-7-20 16:30',
      cost:804
    },
    {
      id:26,
      start:'Ruhango',
      end:'Nyanza',
      time:'2024-7-20 16:30',
      cost:506
    },
    {
      id:27,
      start:'Ruhango',
      end:'Huye',
      time:'2024-7-20 16:30',
      cost:1564
    },
    {
      id:28,
      start:'Ruhango',
      end:'Nyamagabe',
      time:'2024-7-20 16:30',
      cost:2400
    },
    {
      id:29,
      start:'Nyanza',
      end:'Kigali',
      time:'2024-7-20 16:30',
      cost:2000,
    },
    {
      id:30,
      start:'Nyanza',
      end:'Muhanga',
      time:'2024-7-20 16:30',
      cost:1000
    },
    {
      id:31,
      start:'Nyanza',
      end:'Ruhango',
      time:'2024-7-20 16:30',
      cost:1500
    },
    {
      id:32,
      start:'Nyanza',
      end:'Huye',
      time:'2024-7-20 16:30',
      cost:2000
    },
    {
      id:33,
      start:'Nyanza',
      end:'Nyamagabe',
      time:'2024-7-20 16:30',
      cost:2400
    },
    {
      id:34,
      start:'Huye',
      end:'Kigali',
      time:'2024-7-20 16:30',
      cost:2000,
    },
    {
      id:35,
      start:'Huye',
      end:'Muhanga',
      time:'2024-7-20 16:30',
      cost:1000
    },
    {
      id:36,
      start:'Huye',
      end:'Nyanza',
      time:'2024-7-20 16:30',
      cost:1500
    },
    {
      id:37,
      start:'Huye',
      end:'Ruhango',
      time:'2024-7-20 16:30',
      cost:2000
    },
    {
      id:38,
      start:'Huye',
      end:'Nyamagabe',
      time:'2024-7-20 16:30',
      cost:2400
    },
    {
      id:39,
      start:'Nyamagabe',
      end:'Kigali',
      time:'2024-7-20 16:30',
      cost:2000,
    },
    {
      id:40,
      start:'Nyamagabe',
      end:'Muhanga',
      time:'2024-7-20 16:30',
      cost:1000
    },
    {
      id:41,
      start:'Nyamagabe',
      end:'Nyanza',
      time:'2024-7-20 16:30',
      cost:1500
    },
    {
      id:42,
      start:'Nyamagabe',
      end:'Huye',
      time:'2024-7-20 16:30',
      cost:2000
    },
    {
      id:43,
      start:'Nyamagabe',
      end:'Ruhango',
      time:'2024-7-20 16:30',
      cost:2400
    },
    {
      id:44,
      start:'Huye',
      end:'Kanyaru',
      time:'2024-7-20 16:30',
      cost:4000
    }

  ];
  
  
