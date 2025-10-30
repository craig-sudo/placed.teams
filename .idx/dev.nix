{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.pnpm
    pkgs.dos2unix
  ];
  idx = {
    extensions = [ "google.gemini-cli-vscode-ide-companion" ];
    workspace = {
      onCreate = {
        npm-install = "npm install";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "start" "--" "--port" "$PORT"];
          manager = "web";
        };
      };
    };
  };
}
