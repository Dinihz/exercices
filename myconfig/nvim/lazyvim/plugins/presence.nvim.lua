return {
  {
    "andweeb/presence.nvim",
    event = "VeryLazy",
    config = function()
      require("presence"):setup({

        auto_update = true,
        neovim_image_text = "Neovim IDE",
        main_image = "file",
      })
    end,
  },
}
