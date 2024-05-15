export function geRandomColor() {
        // Generate random values for red, green, and blue components
        var r = Math.floor(Math.random() * 256); // Random integer between 0 and 255
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
    
        // Convert decimal to hexadecimal
        var rHex = r.toString(16).padStart(2, '0'); // Convert to hexadecimal and pad with zero if necessary
        var gHex = g.toString(16).padStart(2, '0');
        var bHex = b.toString(16).padStart(2, '0');
    
        // Construct the CSS color string in hexadecimal format
        var color = "#" + rHex + gHex + bHex;
    
        return color;
    }