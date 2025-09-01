const verses = [
    { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    { verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9" },
    { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
    { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    { verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
    { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
    { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
    { verse: "When I am afraid, I put my trust in you.", reference: "Psalm 56:3" },
    { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    { verse: "The joy of the Lord is your strength.", reference: "Nehemiah 8:10" },
    { verse: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.", reference: "Matthew 5:16" },
    { verse: "Seek first his kingdom and his righteousness, and all these things will be given to you as well.", reference: "Matthew 6:33" },
    { verse: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
    { verse: "Greater is He that is in you than he that is in the world.", reference: "1 John 4:4" },
    { verse: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.", reference: "John 16:33" },
    { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    { verse: "My grace is sufficient for you, for my power is made perfect in weakness.", reference: "2 Corinthians 12:9" },
    { verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", reference: "Philippians 4:6" },
    { verse: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.", reference: "2 Timothy 1:7" },
    { verse: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", reference: "Psalm 34:17" },
    { verse: "He gives strength to the weary and increases the power of the weak.", reference: "Isaiah 40:29" },
    { verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", reference: "Isaiah 40:31" },
    { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
    { verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", reference: "John 14:27" },
    { verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", reference: "2 Corinthians 5:17" },
    { verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28" },
    { verse: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
    { verse: "Delight yourself in the Lord, and he will give you the desires of your heart.", reference: "Psalm 37:4" },
    { verse: "Commit to the Lord whatever you do, and he will establish your plans.", reference: "Proverbs 16:3" },
    { verse: "For with God nothing shall be impossible.", reference: "Luke 1:37" }
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const selectedVerse = verses[randomIndex];
    document.getElementById('verse-display').innerHTML = `<p>"${selectedVerse.verse}"</p><p><em>${selectedVerse.reference}</em></p>`;
});
