JScriptCodeDom.CodeParseException: Unexcepted Token : QuoteEnd , Requires Colon , Line 910, Char 8 ---> System.Exception: Unexcepted Token : QuoteEnd , Requires Colon
   at JScriptCodeDom.CodeParser.ReadAndCheckToken(CodeTokenType equalto) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 166
   at JScriptCodeDom.CodeParser.ParseBlockObjectExpression() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 843
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 627
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 522
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 699
   at JScriptCodeDom.CodeParser.ParseCommaSplitedCollection() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 741
   at JScriptCodeDom.CodeParser.ParseBracketArrayExpression() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 807
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 638
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 522
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 699
   at JScriptCodeDom.CodeParser.ParseBlockObjectExpression() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 847
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 627
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 522
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 699
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 495
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 345
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 703
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 495
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 345
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 703
   at JScriptCodeDom.CodeParser.InternalParseStatementCore() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 308
   at JScriptCodeDom.CodeParser.InternalParseStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 175
   at JScriptCodeDom.CodeParser.ParseStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 73
   at JScriptCodeDom.CodeParser.ParseBlock() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 63
   at JScriptCodeDom.CodeParser.ParseFunctionExpression() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 796
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 559
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 522
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 699
   at JScriptCodeDom.CodeParser.ParseQuoteExpression() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 873
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 649
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 522
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 699
   at JScriptCodeDom.CodeParser.InternalParseStatementCore() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 304
   at JScriptCodeDom.CodeParser.InternalParseStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 175
   at JScriptCodeDom.CodeParser.ParseStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 73
   at JScriptCodeDom.CodeParser.ParseBlock() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 63
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 24
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 36
   at JScriptCodeDom.CodeParser.Parse(String code) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 13
   at ProtectorV1.Protect(String[] codes) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\ProtectorV1.cs:line 85
   at ProtectorV1.Protect(String code) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\ProtectorV1.cs:line 74
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e) in c:\inetpub\wwwroot\javascriptobfuscator.com\Javascript-Obfuscator.aspx:line 74