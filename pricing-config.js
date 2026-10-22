/**
 * Altavoxel Month of Mud 2026 - Official Keepsake & Display Frame Pricing Configuration
 * 
 * You can easily edit product prices, slot options, and bundle rules in this file.
 * Any changes made here are automatically reflected across the order intake form,
 * interactive configurator, and dynamic totals on event.html.
 */

window.ALTAVOXEL_PRICING = {
    // -------------------------------------------------------------------------
    // 1. Interconnectable Modular Token Holders
    // -------------------------------------------------------------------------
    tokenHolder: {
        singlePrice: 5,              // $5.00 each
        allSeriesBundlePrice: 20,    // $20.00 for full 5-pack series set (Save $5)
        engravingPricePerUnit: 2,    // $2.00 per holder for custom font engraving
        shippingRatePA: 5            // $5.00 flat rate shipping within Pennsylvania
    },

    // -------------------------------------------------------------------------
    // 2. Modular 3D Topographic Event Display Frame & GPX Route Insert System
    // (Prices are easily editable placeholders below)
    // -------------------------------------------------------------------------
    gpxDisplayTray: {
        isPriceTBD: false,           // Set to true if you wish to display "Price TBD" instead of numeric estimates
        shippingRatePA: 5,           // $5.00 flat rate shipping within Pennsylvania
        customEngravingIncluded: true, // All custom engraving included at $0.00 for all slot counts
        
        // Slot formats & configurable prices
        slots: {
            1: {
                slotCount: 1,
                name: '1-Slot Single Feature Frame',
                formatBadge: 'Single Race Display',
                price: 45,           // <-- EDIT 1-SLOT PRICE HERE
                description: 'Compact single-module frame showcasing 1 premier race route and elevation tile.',
                defaultImage: 'images/mom_keepsake/gpx_tray/tray_1_inserted.JPG'
            },
            2: {
                slotCount: 2,
                name: '2-Slot Dual Stage Frame',
                formatBadge: 'Dual Stage Horizontal',
                price: 65,           // <-- EDIT 2-SLOT PRICE HERE
                description: 'Horizontal dual-frame display for your top two favorite race venues.',
                defaultImage: 'images/mom_keepsake/gpx_tray/tray_2.JPG'
            },
            3: {
                slotCount: 3,
                name: '3-Slot Horizontal Gallery',
                formatBadge: 'Horizontal 3-Module',
                price: 85,           // <-- EDIT 3-SLOT PRICE HERE
                description: 'Wide panoramic horizontal frame with sliding modules and reveal bed data plates.',
                defaultImage: 'images/mom_keepsake/gpx_tray/trey_3_inserted.jpeg'
            },
            4: {
                slotCount: 4,
                name: '4-Slot Tiered Display',
                formatBadge: 'Tiered Multi-Stage',
                price: 105,          // <-- EDIT 4-SLOT PRICE HERE
                description: 'Two-tier staggered display frame for athletes contesting 4 series races.',
                defaultImage: 'images/mom_keepsake/gpx_tray/tray_5_inserted.jpeg'
            },
            5: {
                slotCount: 5,
                name: '5-Slot Tiered Series Gallery',
                formatBadge: 'Full Series Tiered',
                price: 125,          // <-- EDIT 5-SLOT PRICE HERE
                description: 'The premier full series centerpiece housing all 5 Month of Mud race venues.',
                defaultImage: 'images/mom_keepsake/gpx_tray/tray_5_inserted.jpeg'
            }
        },

        // Color & Finish Options
        colors: [
            { id: 'wood', name: 'Wood Finish', hex: '#78350f', border: '#d97706' },
            { id: 'bronze', name: 'Bronze Finish', hex: '#92400e', border: '#b45309' },
            { id: 'black', name: 'Matte Black', hex: '#0f172a', border: '#64748b' },
            { id: 'gold', name: 'Gold Accent', hex: '#d97706', border: '#fbbf24' },
            { id: 'silver', name: 'Silver / Slate', hex: '#94a3b8', border: '#cbd5e1' },
            { id: 'custom', name: 'Custom Color (On Request)', hex: '#0284c7', border: '#38bdf8', isCustom: true }
        ],

        // Official Month of Mud Race Venues
        venues: [
            "R1: Brady's Run Park",
            "R2: Moraine State Park",
            "R3: Alameda Park",
            "R4: North Park",
            "R5: Ohiopyle / Series Finale"
        ]
    }
};
