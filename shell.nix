with import <nixpkgs> {};
pkgs.mkShell {
    buildInputs = [
        bashInteractive
        nodejs-16_x
        yarn
    ];
}